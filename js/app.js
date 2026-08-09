function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function createMetaPills(post) {
  const pills = [
    `<span class="meta-pill">${formatDate(post.date)}</span>`,
    `<span class="meta-pill">${post.location}</span>`
  ];

  if (post.type === "trip") {
    pills.push(`<span class="meta-pill">${post.details.distance}</span>`);
    pills.push(`<span class="meta-pill">${post.details.duration}</span>`);
  }

  if (post.type === "project") {
    pills.push(`<span class="meta-pill">${post.details.stack}</span>`);
    pills.push(`<span class="meta-pill">${post.details.status}</span>`);
  }

  return pills.join("");
}

function renderPostCard(post) {
  const tags = post.tags.map(tag => `<span class="tag-chip">${tag}</span>`).join("");
  const coverAlt = post.coverAlt || post.title;

  return `
    <div class="col-md-6 col-xl-4">
      <article class="post-card">
        <div class="media-frame">
          <img src="${post.cover}" alt="${coverAlt}" loading="lazy">
        </div>
        <div class="post-card-body">
          <div class="post-card-meta mb-3">
            <span>${formatDate(post.date)}</span>
            <span>•</span>
            <span>${post.location}</span>
          </div>
          <h3 class="h4 fw-bold">${post.title}</h3>
          <p class="text-light-emphasis">${post.summary}</p>

          <div class="d-flex flex-wrap gap-2 mb-4">
            ${tags}
          </div>

          <button
            class="btn btn-primary"
            data-post-id="${post.id}"
            data-post-type="${post.type}"
            aria-label="Read more about ${post.title}">
            Read More
          </button>
        </div>
      </article>
    </div>
  `;
}

function renderGrid(posts, targetId, featuredOnly = false) {
  const container = document.getElementById(targetId);
  if (!container) return;

  const filtered = featuredOnly ? posts.filter(p => p.featured) : posts;
  container.innerHTML = filtered.map(renderPostCard).join("");
}

function renderHomeStats() {
  const tripCount = document.getElementById("tripCount");
  const projectCount = document.getElementById("projectCount");

  if (tripCount) tripCount.textContent = tripPosts.length;
  if (projectCount) projectCount.textContent = techPosts.length;
}

function findPost(type, id) {
  const source = type === "trip" ? tripPosts : techPosts;
  return source.find(post => post.id === id);
}

function renderModalMedia(media = []) {
  if (!media.length) return "";

  return `
    <div class="modal-media-grid">
      ${media.map(item => {
        if (item.type === "video") {
          return `
            <div class="media-frame">
              <video controls ${item.poster ? `poster="${item.poster}"` : ""}>
                <source src="${item.src}" type="video/mp4">
                ${item.captions ? `<track kind="captions" src="${item.captions}" srclang="en" label="English" default>` : ""}
                Your browser does not support the video tag.
              </video>
            </div>
          `;
        }

        return `
          <div class="media-frame">
            <img src="${item.src}" alt="${item.alt || ""}" loading="lazy">
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderModalContent(post) {
  const sections = post.sections.map(section => `
    <section class="content-section">
      <h4>${section.heading}</h4>
      <p>${section.text}</p>
    </section>
  `).join("");

  return sections;
}

function openPostModal(type, id) {
  const post = findPost(type, id);
  if (!post) return;

  const modalTitle = document.getElementById("modalTitle");
  const modalType = document.getElementById("modalType");
  const modalMeta = document.getElementById("modalMeta");
  const modalMedia = document.getElementById("modalMedia");
  const modalContent = document.getElementById("modalContent");

  modalTitle.textContent = post.title;
  modalType.textContent = post.type === "trip" ? "Motorcycle Trip" : "Home Tech Project";
  modalMeta.innerHTML = createMetaPills(post);
  modalMedia.innerHTML = renderModalMedia(post.media);
  modalContent.innerHTML = renderModalContent(post);

  const modalElement = document.getElementById("postModal");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
  modalInstance.show();
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "home") {
    renderGrid(tripPosts, "featuredTrips", true);
    renderGrid(techPosts, "featuredProjects", true);
    renderHomeStats();
  }

  if (page === "trips") {
    renderGrid(tripPosts, "tripList", false);
  }

  if (page === "projects") {
    renderGrid(techPosts, "projectList", false);
  }

  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-post-id]");
    if (!button) return;

    const postId = button.dataset.postId;
    const postType = button.dataset.postType;
    openPostModal(postType, postId);
  });
});
