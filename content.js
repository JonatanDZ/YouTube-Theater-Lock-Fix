function waitForButtonAndClick(retries = 10) {
    const button = document.querySelector(".ytp-size-button");

    if (!button) {
        console.log("🔁 Waiting for theater button...");
        if (retries > 0) {
            setTimeout(() => waitForButtonAndClick(retries - 1), 500);
        }
        return;
    }

    const alreadyTheater = document.documentElement.classList.contains("ytp-large-mode");

    if (!alreadyTheater) {
        console.log("🎬 Clicking to enable theater mode");
        button.click();

        // Check again after 1s to make sure it "stuck"
        setTimeout(() => {
            const isNowTheater = document.documentElement.classList.contains("ytp-large-mode");
            if (!isNowTheater && retries > 0) {
                console.log("↩️ Reapplying theater mode");
                waitForButtonAndClick(retries - 1);
            }
        }, 1000);
    }
}

// SPA navigation support
let lastUrl = location.href;

new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl && currentUrl.includes("/watch")) {
        lastUrl = currentUrl;
        console.log("🔄 Detected new video:", currentUrl);
        setTimeout(() => waitForButtonAndClick(), 1000);
    }
}).observe(document, { subtree: true, childList: true });

// First load
window.addEventListener("load", () => {
    if (location.href.includes("/watch")) {
        console.log("🚀 YouTube Theater Extension active");
        setTimeout(() => waitForButtonAndClick(), 1000);
    }
});
