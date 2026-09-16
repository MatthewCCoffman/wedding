<script>
  let name = "";
  let email = "";
  let attending = "Yes";
  let guests = 1;
  let message = "";

  let submitted = false;
  let error = "";
  let loading = false;

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfzvqKoq3ALSXlx3xfnOQ-NOefwrKyiXSOdHr28_SKJDvZQXQ/formResponse";

  const guestList = [
    { first: "Matthew", last: "Coffman" },
    { first: "Evelin", last: "Fierro" },
    { first: "Veronica", last: "Herrera" },
    { first: "Isai", last: "Herrera" }
  ];

  function normalize(str) {
    return str.toLowerCase().trim();
  }

  // function isOnGuestList(fullName) {
  //   const parts = fullName.trim().split(/\s+/); // split by spaces
  //   if (parts.length < 2) return false;

  //   const [first, ...rest] = parts;
  //   const last = rest.join(" "); // support compound last names

  //   return guestList.some(
  //     guest =>
  //       normalize(guest.first) === normalize(first) &&
  //       normalize(guest.last) === normalize(last)
  //   );
  // }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      error = "Please fill in all required fields.";
      return;
    }

    // if (!isOnGuestList(name)) {
    //   error = "We couldn’t find your name on the guest list. Please check the spelling or contact us.";
    //   return;
    // }

    error = "";
    loading = true;

    const formData = new FormData();
    formData.append("entry.1219094019", name);
    formData.append("entry.53090044", email);
    formData.append("entry.420785019", attending);
    // @ts-ignore
    formData.append("entry.1616096004", guests);
    formData.append("entry.1236361144", message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      submitted = true;

      // Reset form fields
      name = "";
      email = "";
      attending = "Yes";
      guests = 1;
      message = "";
    } catch (err) {
      console.error(err);
      error = "There was an error submitting your RSVP. Please try again.";
    } finally {
      loading = false;
    }
  }
</script>

{#if submitted}
	<div class="rsvp-body">
		<div class="success-message">
			🎉 Thank you for your RSVP!
		</div>
	</div>
{:else}
	<div class="rsvp-body">
		<div class="page-title">
			<div class="page-title-text">RSVP</div>
		</div>
		<form on:submit={handleSubmit} class="rsvp-box rsvp-form" novalidate>
			{#if error}
				<div class="error">{error}</div>
			{/if}

			<label>
				First and Last Name *
				<input type="text" bind:value={name} required />
			</label>

			<label>
				Email *
				<input type="email" bind:value={email} required />
			</label>

			<label>
				Will you attend?
				<select bind:value={attending}>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</label>

			<label>
				Number of Guests
				<input type="number" min="1" bind:value={guests} />
			</label>

			<label>
				Message
				<textarea bind:value={message}></textarea>
			</label>

			<button type="submit" disabled={loading}>
				{#if loading}
					Submitting...
				{:else}
					Submit RSVP
				{/if}
			</button>
		</form>
	</div>
{/if}

<style>
	.rsvp-body {
		background: var(--background-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: var(--font-body);
		padding: 2rem 1rem;
	}

	.page-title {
		text-align: center;
		margin-bottom: 2rem;
	}

	.page-title-text {
		font-family: var(--font-heading);
		font-size: 3rem;
		font-weight: 300;
		color: var(--heading-color);
		letter-spacing: 0.15em;
		text-transform: uppercase;
		position: relative;
		display: inline-block;
	}

	.page-title-text::after {
		content: '';
		position: absolute;
		bottom: -15px;
		left: 50%;
		transform: translateX(-50%);
		width: 100px;
		height: 2px;
		background: linear-gradient(90deg, 
			transparent, 
			var(--accent-color), 
			transparent);
	}

	/* Form itself */
	.rsvp-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: 100%;
	}

	/* Box styling */
	.rsvp-box {
		background: linear-gradient(135deg, 
			rgba(255, 255, 255, 0.98), 
			rgba(232, 223, 213, 0.3));
		padding: 3rem;
		border: 1px solid var(--border-color);
		box-shadow: 0 15px 40px rgba(139, 115, 85, 0.15);
		border-radius: 1rem;
		text-align: left;
		max-width: 600px;
		width: 100%;
		transition: var(--transition-smooth);
	}

	.rsvp-box:hover {
		box-shadow: 0 20px 50px rgba(139, 115, 85, 0.2);
	}

	/* Inputs */
	.rsvp-form label {
		display: flex;
		flex-direction: column;
		font-family: var(--font-accent);
		font-weight: 500;
		font-size: 0.95rem;
		color: var(--text-color);
		letter-spacing: 0.05em;
		gap: 0.5rem;
	}

	.rsvp-form input,
	.rsvp-form select,
	.rsvp-form textarea {
		padding: 0.85rem 1rem;
		font-size: 1rem;
		font-family: 'Crimson Text', 'Georgia', serif;
		border: 1px solid var(--border-color);
		border-radius: 0.5rem;
		background: rgba(255, 255, 255, 0.8);
		color: var(--text-color);
		transition: var(--transition-smooth);
	}

	.rsvp-form input:focus,
	.rsvp-form select:focus,
	.rsvp-form textarea:focus {
		outline: none;
		border-color: var(--accent-green);
		box-shadow: 0 0 0 3px rgba(139, 155, 126, 0.15);
		background: rgba(255, 255, 255, 1);
	}

	.rsvp-form textarea {
		min-height: 120px;
		resize: vertical;
	}

	.rsvp-form button {
		padding: 1rem 2rem;
		background: linear-gradient(135deg, var(--accent-green), var(--accent-green-dark));
		color: white;
		font-family: var(--font-accent);
		font-weight: 600;
		font-size: 1.1rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		border: 2px solid var(--accent-green);
		cursor: pointer;
		border-radius: 0.5rem;
		transition: var(--transition-smooth);
		box-shadow: 0 8px 20px rgba(139, 155, 126, 0.25);
		position: relative;
		overflow: hidden;
	}

	.rsvp-form button::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, 
			transparent, 
			rgba(255, 255, 255, 0.3), 
			transparent);
		transition: left 0.5s ease;
	}

	.rsvp-form button:hover::before {
		left: 100%;
	}

	.rsvp-form button:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 12px 30px rgba(139, 155, 126, 0.35);
	}

	.rsvp-form button:disabled {
		background: linear-gradient(135deg, #c4c4c4, #a0a0a0);
		border-color: #c4c4c4;
		cursor: not-allowed;
		opacity: 0.6;
		transform: none;
	}

	/* Messages */
	.success-message {
		background: linear-gradient(135deg, 
			rgba(232, 255, 232, 0.95), 
			rgba(200, 255, 200, 0.4));
		padding: 2.5rem;
		border: 2px solid #90ee90;
		border-radius: 1rem;
		font-family: var(--font-heading);
		font-weight: 400;
		font-size: 2rem;
		text-align: center;
		color: var(--heading-color);
		box-shadow: 0 15px 40px rgba(139, 115, 85, 0.15);
		max-width: 600px;
		letter-spacing: 0.05em;
	}

	.error {
		color: #d32f2f;
		font-weight: 600;
		padding: 1rem;
		background: rgba(255, 235, 238, 0.9);
		border-radius: 0.5rem;
		border: 1px solid rgba(211, 47, 47, 0.3);
		font-size: 0.95rem;
	}

	/* Desktop-specific adjustments */
	@media (min-width: 800px) {
		.rsvp-box {
			margin: 0 auto;
		}
	}

	/* Mobile-specific adjustments */
	@media (max-width: 799px) {
		.rsvp-box {
			padding: 2rem 1.5rem;
		}

		.page-title-text {
			font-size: 2.2rem;
		}

		.rsvp-form {
			gap: 1.2rem;
		}

		.success-message {
			font-size: 1.6rem;
			padding: 2rem;
		}
	}
</style>
