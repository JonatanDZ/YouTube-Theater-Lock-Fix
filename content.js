// Set 'wide=1' cookie to enforce theater mode
function forceTheaterCookie() {
    const domain = ".youtube.com";
    const path = "/";
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // 1 year from now

    const cookieString = `wide=1; domain=${domain}; path=${path}; expires=${expires.toUTCString()}; SameSite=Lax`;
    document.cookie = cookieString;

    console.log("🍪 Set cookie:", cookieString);
}

// Listen on page load
window.addEventListener("load", () => {
    if (location.hostname.includes("youtube.com")) {
        console.log("🚀 Extension loaded: Forcing wide mode via cookie");
        forceTheaterCookie();
    }
});
