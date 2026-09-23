<script>
  import { onMount } from 'svelte';

  export let language = 'en';

  let timeRemaining = {};
  let interval;

  const targetDate = new Date('2026-11-07T00:00:00');
  const labels = {
    en: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds'
    },
    es: {
      days: 'Días',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos'
    }
  };

  $: translatedLabels = labels[language] || labels.en;

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
		font-family: var(--font-heading);
		color: var(--text-color);
		background: transparent;
		padding: 1.5rem 1rem;
		border: 1px solid var(--border-color);
		border-radius: 0;
		display: flex;
		gap: 2.5rem;
		justify-content: center;
		align-items: center;
		box-shadow: none;
		flex-wrap: wrap;
		max-width: 700px;
		margin: 2rem auto;
		transition: var(--transition-smooth);
	}

	.countdown:hover {
		box-shadow: 0 20px 50px rgba(184, 153, 104, 0.3);
		transform: none;
	}

	.unit {
		text-align: center;
		transition: var(--transition-smooth);
	}

	.circle {
	font-family: var(--font-heading);
	font-size: 2.5rem;
	font-weight: 300;
	color: var(--heading-color);
	}

	.label {
	font-family: var(--font-heading);
	font-size: 1rem;
	font-weight: 400;
	letter-spacing: 0.15em;
	color: var(--heading-color);
	}

	.separator {
	font-family: var(--font-heading);
	font-weight: 300;
	color: var(--heading-color);
	}

	@media (max-width: 600px) {
		.countdown {
			flex-direction: row;
			flex-wrap: nowrap;
			gap: 0.8rem;
			padding: 1.5rem 1rem;
			justify-content: space-between;
		}

		.unit {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: auto;
		}

		.circle {
			width: 60px;
			height: 60px;
			font-size: 1.4rem;
			margin-bottom: 0.5rem;
		}

		.label {
			font-size: 0.7rem;
			letter-spacing: 0.1em;
		}

		.separator {
			font-size: 1.4rem;
			padding: 0 0.1rem;
		}
	}
</style>

<div class="countdown">
  <div class="unit">
    <div class="circle">{timeRemaining.days}</div>
    <div class="label">{translatedLabels.days}</div>
  </div>
  <div class="separator">:</div>
  <div class="unit">
    <div class="circle">{timeRemaining.hours}</div>
    <div class="label">{translatedLabels.hours}</div>
  </div>
  <div class="separator">:</div>
  <div class="unit">
    <div class="circle">{timeRemaining.minutes}</div>
    <div class="label">{translatedLabels.minutes}</div>
  </div>
  <div class="separator">:</div>
  <div class="unit">
    <div class="circle">{timeRemaining.seconds}</div>
    <div class="label">{translatedLabels.seconds}</div>
  </div>
</div>