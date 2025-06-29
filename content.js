function enableTheaterMode() {
    const theaterButton = document.querySelector(".ytp-size-button");

    // If the button exists and it's not already in theater mode
    if (theaterButton && !document.documentElement.classList.contains("ytp-large-mode")) {
        theaterButton.click();
    }
}

// Observe URL changes and DOM mutations (YouTube uses dynamic routing)
let lastUrl = location.href;

new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl && currentUrl.includes("/watch")) {
        lastUrl = currentUrl;
        // Wait a bit for the player to render before triggering theater mode
        setTimeout(enableTheaterMode, 1000);
    }
}).observe(document, { subtree: true, childList: true });

// Run once on initial load
window.addEventListener("load", () => {
    if (location.href.includes("/watch")) {
        setTimeout(enableTheaterMode, 1000);
    }
});
