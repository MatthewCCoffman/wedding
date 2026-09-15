<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  function removeZolaInjectedNodes() {
    // remove any anchors or placeholders
    document.querySelectorAll('.zola-registry-embed, [data-registry-key]').forEach(n => n.remove());
    // remove the widget loader script if present
    const script = document.getElementById('zola-wjs');
    if (script && script.parentNode) script.parentNode.removeChild(script);
    // remove any iframes or nodes that reference zola
    document.querySelectorAll('iframe').forEach((f: HTMLIFrameElement) => {
      try {
        if (f.src && f.src.includes('zola.com')) f.remove();
      } catch (e) {
        // ignore cross-origin access
      }
    });
    document.querySelectorAll('[id*="zola"], [class*="zola"]').forEach(n => n.remove());
  }

  onMount(() => {
    // ensure the zola script is loaded client-side
    if (!document.getElementById('zola-wjs')) {
      const s = document.createElement('script');
      s.src = 'https://widget.zola.com/js/widget.js';
      s.async = true;
      s.id = 'zola-wjs';
      document.head.appendChild(s);
    }
  });

  onDestroy(() => {
    // cleanup any DOM the widget injected so it doesn't persist after navigation
    removeZolaInjectedNodes();
  });
</script>

<a
  class="zola-registry-embed"
  href="https://www.zola.com/registry/evelinandmatt2025"
  data-registry-key="evelinandmatt2025"
  on:click|preventDefault={() => window.open('https://www.zola.com/registry/evelinandmatt2025', '_blank', 'noopener,noreferrer')}
  rel="noopener noreferrer"
>
  Our Zola Wedding Registry
</a>