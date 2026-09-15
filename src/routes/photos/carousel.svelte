<script>
  export let photos = [];
  let currentIndex = 0;

  function next() {
    currentIndex = (currentIndex + 1) % photos.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  }

  let startX = 0;
  let endX = 0;

  function handleTouchStart(event) {
    startX = event.touches ? event.touches[0].clientX : event.clientX;
  }

  function handleTouchMove(event) {
    endX = event.touches ? event.touches[0].clientX : event.clientX;
  }

  function handleTouchEnd() {
    const deltaX = endX - startX;
    const threshold = 50; // minimum px swipe distance to trigger

    if (deltaX > threshold) {
      prev();
    } else if (deltaX < -threshold) {
      next();
    }

    startX = 0;
    endX = 0;
  }
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  max-width: 350px;
  height: 600px;
  margin: auto;
  overflow: hidden;
}

.image-container {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

.image {
  min-width: 100%;
  object-fit: cover;
  object-position: center top;
}

.button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  color: white;
  border: none;
  padding: 0.3em 0.6em;
  cursor: pointer;
  font-size: 0.9em;
  border-radius: 4px;
}

.prev {
  left: 8px;
}

.next {
  right: 8px;
}

.gallery {
  display: flex;
  justify-content: center;
  margin-top: 8px;
  gap: 4px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 4px;
}

.thumbnail {
  width: 50px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
  opacity: 0.6;
  border: 2px solid transparent;
  transition: opacity 0.3s, border-color 0.3s;
  flex-shrink: 0;
}

.thumbnail:hover {
  opacity: 1;
}

.thumbnail.active {
  border-color: #333;
  opacity: 1;
}

@media (max-width: 600px) {
  .button {
    display: none;
  }
}
</style>

<div class="carousel">
  <div
    class="image-container"
    style="transform: translateX(-{currentIndex * 100}%);"
    on:touchstart={handleTouchStart}
    on:touchmove={handleTouchMove}
    on:touchend={handleTouchEnd}
    on:mousedown={handleTouchStart}
    on:mousemove={handleTouchMove}
    on:mouseup={handleTouchEnd}
  >
    {#each photos as photo (photo)}
      <img class="image" src="{photo}" alt="Photo" />
    {/each}
  </div>

  <button class="button prev" on:click={prev}>&larr;</button>
  <button class="button next" on:click={next}>&rarr;</button>
</div>

<div class="gallery">
  {#each photos as photo, i (photo)}
    <img
      class="thumbnail {i === currentIndex ? 'active' : ''}"
      src="{photo}"
      alt="Thumbnail"
      on:click={() => currentIndex = i}
    />
  {/each}
</div>