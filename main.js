// global variables
const ICONS = {
  html: 'fab fa-html5',
  css: 'fab fa-css3-alt',
  js: 'fab fa-js',
};

let challenges = [];

// DOM elements
const $container = document.getElementById('container');

// functions
async function getData() {
  const response = await fetch('./data.json');
  const data = await response.json();
  challenges = data;
  show();
}

function show() {
  $container.innerHTML = challenges.map($challenge).join('');
}

function $challenge(data) {
  return `
    <section class="challenge">
      <img src="./semana_${data.id}/design/${data.img}" alt="${data.title}" />
      <div class="challenge__description">
        <h2>Semana ${data.id}</h2>
        <p>${data.title}</p>
      </div>
      <div class="challenge__technologies">${$icons(data.technologies)}</div>
      <div class="challenge__links">
        <a href="./semana_${data.id}/">Página</a>
        <a href="https://github.com/cristianiniguez/platziwebchallenge/tree/master/semana_${
          data.id
        }"
          >Repositorio</a
        >
      </div>
    </section>
  `;
}

function $icons(names) {
  return names.map((name) => `<i class="${ICONS[name]}"></i>`).join('');
}

// Events
window.onload = getData;
