function forceTheaterMode(retries = 5) {
    const button = document.querySelector(".ytp-size-button");
    const isTheater = document.documentElement.classList.contains("ytp-large-mode");

    if (button && !isTheater) {
        console.log("🎬 Attempting to enable theater mode...");
        button.click();
    }

    // Retry if not in theater mode yet
    if (retries > 0 && !document.documentElement.classList.contains("ytp-large-mode")) {
        setTimeout(() => forceTheaterMode(retries - 1), 500);
    }
}

// Track URL changes to handle SPA navigation
let lastUrl = location.href;

new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl && currentUrl.includes("/watch")) {
        lastUrl = currentUrl;
        console.log("🔄 New video detected:", currentUrl);
        setTimeout(() => forceTheaterMode(), 1000);
    }
}).observe(document, { subtree: true, childList: true });

// Initial run
window.addEventListener("load", () => {
    if (location.href.includes("/watch")) {
        console.log("✅ YouTube Theater Extension loaded on:", location.href);
        setTimeout(() => forceTheaterMode(), 1000);
    }
});
