function enableTheaterMode() {
    const button = document.querySelector(".ytp-size-button");
    const alreadyTheater = document.documentElement.classList.contains("ytp-large-mode");

    if (button && !alreadyTheater) {
        console.log("Enabling theater mode...");
        button.click();
    }
}

// Detect page navigation (SPA-style) and apply logic
let lastUrl = location.href;

new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl && currentUrl.includes("/watch")) {
        lastUrl = currentUrl;
        console.log("New video detected:", currentUrl);
        setTimeout(enableTheaterMode, 1000);
    }
}).observe(document, { subtree: true, childList: true });

// Initial run
window.addEventListener("load", () => {
    if (location.href.includes("/watch")) {
        console.log("YouTube Theater Extension loaded on:", location.href);
        setTimeout(enableTheaterMode, 1000);
    }
});  