function setTheaterMode(force = true) {
    const player = document.querySelector('ytd-watch-flexy');

    if (player && typeof player.theaterModeChanged === 'function') {
        const isInTheaterMode = player.getAttribute('theater') !== null;

        if (force && !isInTheaterMode) {
            console.log("🎬 Setting YouTube to theater mode (API)");
            player.theaterModeChanged(true);
        }
    } else {
        console.log("⏳ Waiting for YouTube player element...");
        setTimeout(() => setTheaterMode(force), 500);
    }
}

// Watch for SPA navigation
let lastUrl = location.href;

new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl && currentUrl.includes("/watch")) {
        lastUrl = currentUrl;
        console.log("🔄 New video detected:", currentUrl);
        setTimeout(() => setTheaterMode(true), 1000);
    }
}).observe(document, { subtree: true, childList: true });

// First load
window.addEventListener("load", () => {
    if (location.href.includes("/watch")) {
        console.log("🚀 YouTube Theater Extension active (API version)");
        setTimeout(() => setTheaterMode(true), 1000);
    }
});
