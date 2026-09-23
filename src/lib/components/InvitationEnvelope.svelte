<script>
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let guestAllowed = true;
  export let guestName = '';

  let container;
  let lifted = false;
  let opening = false;
  let opened = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        lifted = entry.isIntersecting;
      },
      {
        threshold: 0.45
      }
    );

    if (container) observer.observe(container);

    return () => observer.disconnect();
  });

  function openInvitation() {
    if (opening || opened) return;

    opening = true;

    window.setTimeout(() => {
      opened = true;
      sessionStorage.setItem('wedding-invitation-opened', 'true');
      dispatch('opened');
    }, 1250);
  }
</script>

<section
  class="invitation-section"
  class:lifted
  class:opening
  class:opened
  bind:this={container}
>

  <button
    class="envelope-button"
    type="button"
    aria-label="Open Evelin and Matthew's wedding invitation"
    aria-expanded={opened}
    on:click={openInvitation}
  >
    <div class="envelope-shadow"></div>

    <div class="envelope">
      <div class="envelope-back"></div>

      <div class="invitation-card">
        {#if guestName}
          <span class="guest-name">{guestName}</span>
        {/if}

        {#if guestAllowed}
          <span class="small-text">The Wedding of</span>

          <strong>
            Evelin
            <i>&amp;</i>
            Matthew
          </strong>

          <span class="date">November 7, 2026</span>
          <span class="location">Hidalgo, Mexico</span>
        {:else}
          <strong class="uninvited-title">Not on the list</strong>
        {/if}
      </div>

      <div class="flap"></div>
      <div class="front-pocket"></div>

      <div class="seal">
        <span>E</span>
        <i>&amp;</i>
        <span>M</span>
      </div>
    </div>
  </button>

  <button
    type="button"
    class="open-label"
    on:click={openInvitation}
    disabled={opening || opened}
  >
  </button>
</section>

<style>
  .invitation-section {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 720px;
    padding: 1rem 1rem 5rem;
    overflow: hidden;
    text-align: center;
    background: var(--background-color);
    border-top: 1px solid rgba(40, 53, 45, 0.12);
  }

  .intro {
    margin-bottom: 3.5rem;
  }

  .intro p {
    margin: 0 0 0.8rem;
    font-family: var(--font-accent);
    font-size: 0.67rem;
    font-weight: 500;
    color: var(--accent-color);
    letter-spacing: 0.28em;
    text-transform: uppercase;
  }

  .intro h2 {
    margin: 0;
    font-family: "Bodoni Moda", "Cormorant Garamond", serif;
    font-size: clamp(3.5rem, 8vw, 6rem);
    font-weight: 400;
    line-height: 1;
    color: var(--heading-color);
  }

  .envelope-button {
    position: relative;
    display: block;
    padding: 0;
    background: none;
    border: 0;
    cursor: pointer;
    perspective: 1200px;
    transform: translateY(18px);
    transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .lifted .envelope-button {
    transform: translateY(-8px);
  }

  .envelope {
    --envelope-width: min(82vw, 430px);

    position: relative;
    width: var(--envelope-width);
    aspect-ratio: 1.55;
    transform-style: preserve-3d;
  }

  .envelope-shadow {
    position: absolute;
    right: 8%;
    bottom: -100px;
    left: 8%;
    height: 25px;
    background: rgba(40, 53, 45, 0.12);
    border-radius: 50%;
    filter: blur(16px);
    transform: scaleX(0.78);
    transition:
      opacity 800ms ease,
      transform 800ms ease;
  }

  .lifted .envelope-shadow {
    opacity: 0.8;
    transform: scaleX(1);
  }

  .envelope-back {
    position: absolute;
    inset: 0;
    background: #d9cbb7;
    border: 1px solid rgba(83, 74, 61, 0.2);
  }

  .invitation-card {
    position: absolute;
    top: 10%;
    right: 7%;
    bottom: 25%;
    left: 7%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--heading-color);
    background: #f8f4ec;
    border: 1px solid rgba(165, 108, 82, 0.28);
    box-shadow: 0 8px 30px rgba(40, 53, 45, 0.08);
    transform: translateY(14%);
  }

  .small-text,
  .date,
  .location {
    font-family: var(--font-accent);
    font-size: 0.54rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .small-text {
    margin-bottom: 0.8rem;
  }

  .invitation-card strong {
    margin-bottom: 0.8rem;
    font-family: "Bodoni Moda", "Cormorant Garamond", serif;
    font-size: clamp(1.6rem, 5vw, 2.6rem);
    font-weight: 400;
    line-height: 1;
  }

  .invitation-card strong i {
    padding: 0 0.25rem;
    color: var(--accent-color);
  }

  .guest-name {
    margin-bottom: 0.65rem;
    font-family: var(--font-accent);
    font-size: 0.52rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .uninvited-title {
    font-size: clamp(1rem, 3vw, 1.35rem) !important;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .location {
    margin-top: 0.35rem;
    color: var(--accent-color);
  }

  .flap {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 5;
    height: 57%;
    background: #e3d7c5;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    transform-origin: top center;
    backface-visibility: hidden;
  }

  .front-pocket {
    position: absolute;
    inset: 0;
    z-index: 4;
    background: #ded1bd;
    clip-path: polygon(
      0 34%,
      50% 72%,
      100% 34%,
      100% 100%,
      0 100%
    );
    border: 1px solid rgba(83, 74, 61, 0.16);
  }

  .seal {
    position: absolute;
    top: 48%;
    left: 50%;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.12rem;
    width: 56px;
    height: 56px;
    font-family: "Bodoni Moda", "Cormorant Garamond", serif;
    font-size: 0.92rem;
    color: #f8f4ec;
    background: #9b5c49;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(60, 42, 35, 0.25);
    transform: translate(-50%, -50%);
  }

  .seal i {
    font-size: 0.65rem;
  }

  .opening .flap {
    animation: open-flap 600ms ease-in-out forwards;
  }

  .opening .seal {
    animation: break-seal 350ms ease forwards;
  }

  .opening .invitation-card {
    animation: lift-invitation 900ms 430ms
      cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .opened .flap {
    z-index: 1;
    transform: rotateX(180deg);
  }

  .opened .seal {
    opacity: 0;
  }

  .opened .invitation-card {
    z-index: 7;
    transform: translateY(-58%);
  }

  .open-label {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 3.75rem;
    padding: 0 0 0.55rem;
    font-family: var(--font-accent);
    font-size: 0.68rem;
    font-weight: 500;
    color: var(--heading-color);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    background: none;
    border: 0;
    border-bottom: 1px solid rgba(40, 53, 45, 0.5);
    cursor: pointer;
  }

  .open-label span {
    transition: transform 250ms ease;
  }

  .open-label:hover span {
    transform: translateY(4px);
  }

  .open-label:disabled {
    cursor: default;
    opacity: 0.6;
  }

  @keyframes open-flap {
    0% {
      z-index: 5;
      transform: rotateX(0);
    }

    49% {
      z-index: 5;
    }

    50%,
    100% {
      z-index: 1;
      transform: rotateX(180deg);
    }
  }

  @keyframes break-seal {
    to {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.75);
    }
  }

  @keyframes lift-invitation {
    0% {
      z-index: 2;
      transform: translateY(14%);
    }

    45% {
      z-index: 7;
      transform: translateY(-72%);
    }

    100% {
      z-index: 7;
      transform: translateY(-58%);
    }
  }

  @media (max-width: 600px) {
    .invitation-section {
      min-height: 620px;
      padding: 4rem 1rem 6rem;
    }

    .intro {
      margin-bottom: 3rem;
    }

    .envelope {
      --envelope-width: min(88vw, 370px);
    }

    .seal {
      width: 48px;
      height: 48px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .envelope-button,
    .envelope-shadow,
    .flap,
    .seal,
    .invitation-card,
    .open-label span {
      animation: none;
      transition: none;
    }

    .lifted .envelope-button {
      transform: none;
    }

    .opening .flap,
    .opened .flap {
      z-index: 1;
      transform: rotateX(180deg);
    }

    .opening .seal,
    .opened .seal {
      opacity: 0;
    }

    .opening .invitation-card,
    .opened .invitation-card {
      z-index: 7;
      transform: translateY(-58%);
    }
  }
</style> 