// global variables
let filters = new Set([]);
let jobs = [];

// DOM elements
const $jobsContainer = document.getElementById('jobs-container');
const $filters = document.getElementById('filters');
const $filtersCleanBtn = document.getElementById('filters-clean-btn');

// functions
async function getData() {
  const response = await fetch('./data.json');
  const data = await response.json();
  jobs = data.map((job) => ({
    ...job,
    tags: [job.role, job.level, ...job.languages, ...job.tools],
  }));
  loadJobs();
}

function loadJobs() {
  const filteredJobs =
    filters.size > 0
      ? jobs.filter(
          (job) =>
            !Array.from(filters)
              .map((filter) => job.tags.includes(filter))
              .includes(false),
        )
      : jobs;
  if (filters.size === 0) {
    $filters.classList.remove('filters--shown');
  } else {
    $filters.classList.add('filters--shown');
  }
  const $filtersButtons = $filters.querySelector('.filters__buttons');
  $filtersButtons.innerHTML = '';
  filters.forEach((filter) => {
    $filtersButtons.innerHTML += $filter(filter);
  });
  $jobsContainer.innerHTML = filteredJobs.map((job) => $article(job)).join('');
  setClickEvents();
}

function $article(data) {
  return `
    <article class="job ${data.featured ? 'job--featured' : ''}" id="${data.id}">
      <img class="job__logo" src="${data.logo}" alt="${data.company}" />
      <p class="job__company">
        ${data.company}
        ${data.new ? '<span class="job__new">New!</span>' : ''}
        ${data.featured ? '<span class="job__featured">Featured</span>' : ''}
      </p>
      <p class="job__position">${data.position}</p>
      <p class="job__details">
        <span class="job__postedAt">${data.postedAt}</span> ·
        <span class="job__contract">${data.contract}</span> ·
        <span class="job__location">${data.location}</span>
      </p>
      <hr />
      <p class="job__tags">
        ${data.tags.map((tag) => `<span class="job__tag">${tag}</span>`).join('')}
      </p>
    </article>
  `;
}

function $filter(data) {
  return `
    <div class="filter">
      <div class="filter__wrapper">
        <span class="filter__label">${data}</span>
        <button class="filter__btn" data-label="${data}">×</button>
      </div>
    </div>
  `;
}

function addFilter(filter) {
  filters.add(filter);
  loadJobs();
}

function deleteFilter(filter) {
  filters.delete(filter);
  loadJobs();
}

function clearFilters() {
  filters = new Set([]);
  loadJobs();
}

function setClickEvents() {
  // tags buttons
  const $tagsButtons = document.querySelectorAll('.job__tag');
  $tagsButtons.forEach(($tagBtn) => {
    $tagBtn.addEventListener('click', (e) => {
      addFilter(e.target.innerText);
    });
  });
  // filter buttons
  const $filtersButtons = document.querySelectorAll('.filter__btn');
  $filtersButtons.forEach(($filterBtn) => {
    $filterBtn.addEventListener('click', (e) => {
      deleteFilter(e.target.dataset.label);
    });
  });
}

// Events
window.onload = getData;
$filtersCleanBtn.onclick = clearFilters;
