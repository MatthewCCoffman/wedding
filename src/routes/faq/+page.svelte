<script>
  let faqs = [
    {
      question: "Where do I book the flight?",
      answer: ""
    },
    {
      question: "Where are we staying?",
      answer: ""
    },
    {
      question: "How are we getting to the venue?",
      answer: ""
    },
    {
      question: "What is there to do at the venue?",
      answer: ""
    },
    {
      question: "How do I reserve a room?",
      answer: ""
    },
  ];

  let openIndexes = new Set();

  function toggle(index) {
    if (openIndexes.has(index)) {
      openIndexes.delete(index);
    } else {
      openIndexes.add(index);
    }
    openIndexes = new Set(openIndexes); // Force reactivity
  }
</script>

<section class="faq-section">
  {#each faqs as faq, index}
    <div class="faq-card" on:click={() => toggle(index)}>
      <div class="faq-question">
        <h3>{faq.question}</h3>
        <span>{openIndexes.has(index) ? "−" : " +"}</span>
      </div>
      {#if openIndexes.has(index)}
        <div class="faq-answer">
          <p>{faq.answer}</p>
        </div>
      {/if}
    </div>
  {/each}
</section>

<style>
  .faq-section {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .faq-section h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .faq-card {
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    background: white;
    transition: box-shadow 0.2s;
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
