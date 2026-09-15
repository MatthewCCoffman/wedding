<script>
  import { onMount } from 'svelte';

  let timeRemaining = {};
  let interval;

  const targetDate = new Date('2025-11-22T00:00:00');

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      timeRemaining = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      clearInterval(interval);
      return;
    }

    timeRemaining = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  }

  onMount(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  .countdown {
    font-family: 'Playfair Display', serif;
    color: #000000;
    background: #ffffff;
    padding: 1.5rem 2rem;
    /* border: 2px solid #e8dcd4; */
    border-radius: 1rem;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgb(255, 255, 255);
    flex-wrap: wrap;
    max-width: 650px;
    margin: 0 auto;
  }

  .unit {
    text-align: center;
  }

  .circle {
    background: #ffffff;
    border: 2px solid #8bc9a2;
    color: #8bc9a2;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0 auto 0.5rem auto;
    box-shadow: 0 0 6px rgb(255, 255, 255);
  }

  .label {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .separator {
    font-size: 2rem;
    color: #8bc9a2;
  }

@media (max-width: 500px) {
  .countdown {
    flex-direction: row;
    flex-wrap: nowrap; /* keep it all in one row */
    gap: 0.5rem;
    padding: 1rem;
    justify-content: space-between;
  }

  .unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
  }

  .circle {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }

  .label {
    font-size: 0.65rem;
  }

  .separator {
    font-size: 1.2rem;
    padding: 0 0.2rem;
  }
}
</style>

<div class="countdown">
  <div class="unit">
    <div class="circle">{timeRemaining.days}</div>
    <div class="label">Days</div>
  </div>
  <div class="separator">:</div>
  <div class="unit">
    <div class="circle">{timeRemaining.hours}</div>
    <div class="label">Hours</div>
  </div>
  <div class="separator">:</div>
  <div class="unit">
    <div class="circle">{timeRemaining.minutes}</div>
    <div class="label">Minutes</div>
  </div>
  <div class="separator">:</div>
  <div class="unit">
    <div class="circle">{timeRemaining.seconds}</div>
    <div class="label">Seconds</div>
  </div>
</div>