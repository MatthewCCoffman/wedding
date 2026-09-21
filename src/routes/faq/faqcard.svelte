<script>
  export let question;
  export let answer;
  let open = false;
</script>

<button type="button" class="faq-card" on:click={() => (open = !open)} aria-expanded={open}>
  <div class="faq-question">
    <h3>{question}</h3>
    <span>{open ? "−" : "+"}</span>
  </div>
  {#if open}
    <div class="faq-answer">
      <p>{answer}</p>
    </div>
  {/if}
</button>

<style>
  .faq-card {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: inherit;
    transition: box-shadow 0.2s;
    background: white;
  }

  .faq-card:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  .faq-answer {
    margin-top: 0.75rem;
    color: #555;
  }
</style>