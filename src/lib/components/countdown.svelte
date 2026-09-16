<script>
  import { onMount } from 'svelte';

  let timeRemaining = {};
  let interval;

  const targetDate = new Date('2026-11-07T00:00:00');

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
		font-family: var(--font-accent);
		color: var(--text-color);
		background: linear-gradient(135deg, 
			rgba(255, 255, 255, 0.95), 
			rgba(232, 223, 213, 0.4));
		padding: 2.5rem 3rem;
		border: 1px solid var(--border-color);
		border-radius: 1rem;
		display: flex;
		gap: 2.5rem;
		justify-content: center;
		align-items: center;
		box-shadow: 0 15px 40px rgba(139, 115, 85, 0.12);
		flex-wrap: wrap;
		max-width: 700px;
		margin: 2rem auto;
		transition: var(--transition-smooth);
	}

	.countdown:hover {
		box-shadow: 0 20px 50px rgba(184, 153, 104, 0.3);
		transform: translateY(-3px);
	}

	.unit {
		text-align: center;
		transition: var(--transition-smooth);
	}

	.unit:hover .circle {
		transform: scale(1.08);
		border-color: var(--accent-color);
		box-shadow: 0 8px 25px rgba(184, 153, 104, 0.3);
	}

	.circle {
		background: linear-gradient(135deg, #ffffff, rgba(232, 223, 213, 0.3));
		border: 2px solid var(--accent-color);
		color: var(--accent-color);
		border-radius: 50%;
		width: 85px;
		height: 85px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		font-weight: 400;
		margin: 0 auto 0.75rem auto;
		box-shadow: 0 5px 20px rgba(139, 115, 85, 0.15);
		transition: var(--transition-smooth);
		position: relative;
	}

	.circle::before {
		content: '';
		position: absolute;
		inset: -5px;
		border-radius: 50%;
		padding: 2px;
		background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
		-webkit-mask: 
			linear-gradient(#fff 0 0) content-box, 
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		opacity: 0;
		transition: var(--transition-smooth);
	}

	.unit:hover .circle::before {
		opacity: 0.4;
	}

	.label {
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--text-light);
		font-weight: 500;
	}

	.separator {
		font-size: 2.2rem;
		color: var(--accent-color);
		font-weight: 300;
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