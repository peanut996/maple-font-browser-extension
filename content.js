
// Function to inject the stylesheet link
function injectStylesheet() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://chinese-fonts-cdn.deno.dev/packages/maple-mono-cn/dist/MapleMono-CN-Regular/result.css";
    document.head.appendChild(link);

    // Add CSS to override monospace fonts
    const style = document.createElement("style");
    style.textContent = `
    code, pre, kbd, samp {
      font-family: 'Maple Mono CN', monospace !important;
    }
  `;
    document.head.appendChild(style);
}

// Inject the stylesheet when the DOM is loaded
document.addEventListener('DOMContentLoaded', injectStylesheet);