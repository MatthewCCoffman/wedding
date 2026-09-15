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
  <div class="success-message">
    🎉 Thank you for your RSVP!
  </div>
{:else}
  <form on:submit={handleSubmit} class="rsvp-box rsvp-form rsvp-body" novalidate>
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
{/if}

<style>
  .rsvp-body {
    background: #f9f7f3;
    display: flex;
    justify-content: center;
    font-family: "Georgia", serif;
    padding: 1rem;
  }

/* Form itself */
.rsvp-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

/* Box styling */
.rsvp-box {
  background: #fff;
  padding: 40px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  text-align: left;
  max-width: 500px;
  width: 100%;
}

/* Inputs */
.rsvp-form label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
}

.rsvp-form input,
.rsvp-form select,
.rsvp-form textarea {
  padding: 0.5rem;
  font-size: 1rem;
}

.rsvp-form button {
  padding: 0.75rem;
  background:#47805c !important;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.rsvp-form button:disabled {
  background: #9ccc9c;
  cursor: not-allowed;
}

/* Messages */
.success-message {
  background: #e6ffe6;
  padding: 1rem;
  border: 1px solid #b2ffb2;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.2rem;
}

.error {
  color: red;
  font-weight: 600;
}

/* Desktop-specific adjustments */
@media (min-width: 800px) {
    .rsvp-box {
      margin-left: 200px;
    }
}

/* Mobile-specific adjustments */
@media (max-width: 799px) {
  .rsvp-box {
    /* margin-left: auto; */
    padding: 8px;
  }
}
</style>
