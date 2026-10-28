function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function formatDate(value) {
  return new Date(value + "T00:00:00").toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric"
  });
}

function postUrl(post) {
  return `post.html?type=${encodeURIComponent(post.type)}&id=${encodeURIComponent(post.id)}`;
}

function renderTags(post) {
  return post.tags.map(tag => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join("");
}

function renderPostCard(post, headingLevel) {
  const cover = post.media.find(item => item.type === "image" && item.src === post.cover);
  return `<div class="col-md-6 col-xl-4">
    <article class="post-card">
      ${cover ? `<div class="media-frame"><img src="${escapeHtml(post.cover)}" alt="${escapeHtml(cover.alt)}" loading="lazy"></div>` : ""}
      <div class="post-card-body">
        <div class="post-card-meta mb-3">
          <time datetime="${escapeHtml(post.date)}">${formatDate(post.date)}</time>
          <span aria-hidden="true">•</span><span>${escapeHtml(post.location)}</span>
        </div>
        <h${headingLevel} class="h4 fw-bold">${escapeHtml(post.title)}</h${headingLevel}>
        <p class="text-light-emphasis">${escapeHtml(post.summary)}</p>
        <div class="d-flex flex-wrap gap-2 mb-4">${renderTags(post)}</div>
        <a class="btn btn-primary" href="${escapeHtml(postUrl(post))}" aria-label="Read more about ${escapeHtml(post.title)}">Read More</a>
      </div>
    </article>
  </div>`;
}

function renderGrid(posts, targetId, featuredOnly = false) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const filtered = featuredOnly ? posts.filter(post => post.featured) : posts;
  target.innerHTML = filtered.map(post => renderPostCard(post, featuredOnly ? 3 : 2)).join("") ||
    '<p>No posts published yet. Check back for the next story.</p>';
}

function renderMedia(media) {
  return media.map(item => {
    if (item.type === "image") {
      return `<img class="post-image" src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy">`;
    }
    if (item.type === "video") {
      return `<video class="post-image" controls preload="metadata" aria-label="${escapeHtml(item.alt || 'Post video')}" ${item.poster ? `poster="${escapeHtml(item.poster)}"` : ""}>
        <source src="${escapeHtml(item.src)}" type="video/mp4">
        ${item.captions ? `<track kind="captions" src="${escapeHtml(item.captions)}" srclang="en" label="English" default>` : ""}
        Your browser does not support video playback.
      </video>`;
    }
    return "";
  }).join("");
}

function renderPost() {
  const target = document.getElementById("postReader");
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const source = type === "trip" ? tripPosts : type === "project" ? techPosts : [];
  const post = source.find(item => item.id === params.get("id"));
  if (!post) {
    document.title = "Post not found | Daniel Gonzalez";
    target.innerHTML = '<h1>Post not found</h1><p>This story may have moved or the link may be incomplete.</p><a href="trips.html">Browse motorcycle trips</a> · <a href="projects.html">Browse tech projects</a>';
    return;
  }
  document.title = `${post.title} | Daniel Gonzalez`;
  const backUrl = type === "trip" ? "trips.html" : "projects.html";
  const label = type === "trip" ? "Motorcycle Trips" : "Home Tech Projects";
  document.querySelector(`.nav-link[href="${backUrl}"]`)?.classList.add("active");
  const details = Object.entries(post.details).filter(([, value]) => value && !/^(Your Motorcycle Model|Add total mileage)$/.test(value));
  target.innerHTML = `<article>
    <a href="${backUrl}">Back to ${label}</a>
    <header class="py-4">
      <p class="section-kicker">${label}</p>
      <h1 class="display-6 fw-bold">${escapeHtml(post.title)}</h1>
      <p class="post-meta"><time datetime="${escapeHtml(post.date)}">${formatDate(post.date)}</time><span>${escapeHtml(post.location)}</span></p>
      <p class="lead">${escapeHtml(post.summary)}</p>
      <div class="d-flex flex-wrap gap-2">${renderTags(post)}</div>
    </header>
    <dl class="post-details">${details.map(([key, value]) => `<div><dt>${escapeHtml(key.charAt(0).toUpperCase() + key.slice(1))}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>
    <div class="post-media mb-4">${renderMedia(post.media)}</div>
    ${post.sections.map(section => `<section class="content-section"><h2 class="h3">${escapeHtml(section.heading)}</h2>${section.text.split(/\n\s*\n/).map(text => `<p>${escapeHtml(text)}</p>`).join("")}</section>`).join("")}
  </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "home") {
    renderGrid(tripPosts, "featuredTrips", true);
    renderGrid(techPosts, "featuredProjects", true);
    document.getElementById("tripCount").textContent = tripPosts.length;
    document.getElementById("projectCount").textContent = techPosts.length;
  }
  if (page === "trips") renderGrid(tripPosts, "tripList");
  if (page === "projects") renderGrid(techPosts, "projectList");
  if (page === "post") renderPost();
});
