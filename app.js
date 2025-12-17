const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
const countEl = document.getElementById("count");
const statusPill = document.getElementById("statusPill");
const filterEl = document.getElementById("filter");
const searchEl = document.getElementById("search");

const KEY = "bugzoo_captured_v1";

// Lista base: cada PR “de contenido” puede agregar 1 bug aquí.
const BUGS = [
    { id: "panda", emoji: "🐼", name: "NullPointer Panda", danger: "alta", habitat: "tutoriales de madrugada" },
    { id: "alpaca", emoji: "🦙", name: "Async Alpaca", danger: "media", habitat: "promesas sin resolver" },
    { id: "iguana", emoji: "🦎", name: "Indentation Iguana", danger: "baja", habitat: "python sin spaces" },
    { id: "shark", emoji: "🦈", name: "Merge Shark", danger: "alta", habitat: "branches sin pull" },
    { id: "owl", emoji: "🦉", name: "Scope Owl", danger: "media", habitat: "variables fuera de lugar" },
    { id: "rana", emoji: "🐸", name: "Semicolon Frog", name: "Scope Owl", danger: "media", habitat: "variables fuera de lugar" },
];

let captured = load();

function save() {
    localStorage.setItem(KEY, JSON.stringify(captured));
}

function load() {
    try {
        const raw = localStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function setStatus(msg) {
    statusPill.textContent = "Estado: " + msg;
    statusPill.style.borderColor = "rgba(110,231,255,.45)";
    setTimeout(() => statusPill.style.borderColor = "", 350);
}

function dangerTag(d) {
    return `<span class="tag ${d}">Peligrosidad: <b>${d}</b></span>`;
}

function render() {
    const f = filterEl.value;
    const q = (searchEl.value || "").trim().toLowerCase();

    let list = [...captured];

    if (f === "fav") list = list.filter(b => b.fav);
    else if (f !== "all") list = list.filter(b => b.danger === f);

    if (q) list = list.filter(b => b.name.toLowerCase().includes(q));

    countEl.textContent = String(captured.length);
    empty.style.display = captured.length === 0 ? "block" : "none";

    grid.innerHTML = list.map((b) => `
    <article class="card">
      <div class="titleRow">
        <h3>${b.emoji} ${b.name}</h3>
        <button class="ghost star" data-fav="${b.id}" title="Favorito">
          ${b.fav ? "⭐" : "☆"}
        </button>
      </div>

      <div class="meta">
        ${dangerTag(b.danger)}
        <span class="tag">Hábitat: ${b.habitat}</span>
      </div>

      <div class="actions">
        <button class="danger ghost" data-remove="${b.id}">Eliminar</button>
      </div>
    </article>
  `).join("");
}

function captureRandom() {
    const pick = BUGS[Math.floor(Math.random() * BUGS.length)];
    const uniqueId = pick.id + "-" + crypto.randomUUID().slice(0, 6);
    captured.unshift({ ...pick, id: uniqueId, fav: false });
    save();
    setStatus("capturaste: " + pick.name);
    render();
}

document.getElementById("btnCapture").addEventListener("click", captureRandom);

document.getElementById("btnTheme").addEventListener("click", () => {
    document.body.classList.toggle("light");
    setStatus(document.body.classList.contains("light") ? "modo día" : "modo noche");
});

document.getElementById("btnClear").addEventListener("click", () => {
    const ok = confirm("¿Liberar todos los bugs del zoológico? 🧹");
    if (!ok) return;
    captured = [];
    save();
    setStatus("zoológico vacío");
    render();
});

filterEl.addEventListener("change", render);
searchEl.addEventListener("input", render);

grid.addEventListener("click", (e) => {
    const favBtn = e.target.closest("button[data-fav]");
    if (favBtn) {
        const id = favBtn.dataset.fav;
        const idx = captured.findIndex(b => b.id === id);
        if (idx >= 0) {
            captured[idx].fav = !captured[idx].fav;
            save();
            setStatus(captured[idx].fav ? "marcado favorito" : "quitado favorito");
            render();
        }
        return;
    }

    const delBtn = e.target.closest("button[data-remove]");
    if (delBtn) {
        const id = delBtn.dataset.remove;
        captured = captured.filter(b => b.id !== id);
        save();
        setStatus("bug eliminado");
        render();
    }
});

render();
