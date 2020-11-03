const $jobsContainer = document.getElementById('jobs-container');

async function getData() {
  const response = await fetch('./data.json');
  const data = await response.json();
  const jobs = data.map((job) => ({
    ...job,
    tags: [job.role, job.level, ...job.languages, ...job.tools],
  }));
  loadJobs(jobs);
}

function loadJobs(jobs, filters = null) {
  $jobsContainer.innerHTML = jobs.map((job) => article(job)).join('');
}

function article(data) {
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
        ${data.tags.map((tag) => `<span>${tag}</span>`).join('')}
      </p>
    </article>
  `;
}

window.onload = getData;
