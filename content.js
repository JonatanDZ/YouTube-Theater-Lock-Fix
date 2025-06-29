function forceTheaterCookieAndReload() {
    const domain = ".youtube.com";
    const path = "/";
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    const cookieString = `wide=1; domain=${domain}; path=${path}; expires=${expires.toUTCString()}; SameSite=Lax`;
    document.cookie = cookieString;

    console.log("🍪 Set cookie:", cookieString);

    // Check if we've already reloaded once to avoid infinite loops
    const alreadyReloaded = sessionStorage.getItem("yt_theater_cookie_reloaded");
    if (!alreadyReloaded) {
        console.log("🔄 Reloading page to apply cookie...");
        sessionStorage.setItem("yt_theater_cookie_reloaded", "true");
        location.reload();
    } else {
        console.log("✅ Page already reloaded once — not reloading again");
    }
}

// Run only on video pages
window.addEventListener("load", () => {
    if (location.hostname.includes("youtube.com") && location.pathname.startsWith("/watch")) {
        console.log("🚀 Extension loaded: Forcing wide mode via cookie");
        forceTheaterCookieAndReload();
    }
});
