const scenes = {

  start: {
    chapter: "PRÓLOGO",
    title: "El eco del acantilado",
    text: "La niebla cubre el acantilado. La puerta respira como si estuviera viva.",
    choices: [
      { text: "Abrir la puerta", next: "door" },
      { text: "Escuchar primero", next: "listen" }
    ]
  },

  door: {
    chapter: "CAPÍTULO I",
    title: "La puerta despierta",
    text: "La puerta se abre sola. Algo te reconoce.",
    choices: [
      { text: "Entrar", next: "inside" },
      { text: "Retroceder", next: "start" }
    ]
  },

  listen: {
    chapter: "CAPÍTULO I",
    title: "Susurros",
    text: "Bajo la madera hay voces antiguas.",
    choices: [
      { text: "Abrir la puerta", next: "door" },
      { text: "Huir", next: "end_bad" }
    ]
  },

  inside: {
    chapter: "CAPÍTULO II",
    title: "Lo que habita dentro",
    text: "La oscuridad te observa. Y sonríe.",
    choices: [
      { text: "Aceptar el destino", next: "end_good" }
    ]
  },

  end_good: {
    chapter: "FINAL",
    title: "Herencia oscura",
    text: "No escapaste. Te convertiste en la historia.",
    choices: [
      { text: "Reiniciar", next: "start" }
    ]
  },

  end_bad: {
    chapter: "FINAL",
    title: "Silencio",
    text: "La niebla te borra lentamente.",
    choices: [
      { text: "Reintentar", next: "start" }
    ]
  }
};

function loadScene(key) {
  const scene = scenes[key];

  document.getElementById("chapter").textContent = scene.chapter;
  document.getElementById("title").textContent = scene.title;
  document.getElementById("text").textContent = scene.text;

  const choicesEl = document.getElementById("choices");
  choicesEl.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => loadScene(choice.next);
    choicesEl.appendChild(btn);
  });
}

// iniciar juego
loadScene("start");