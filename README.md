# YouTube Theater mode Lock Fix

This Chrome extension forces YouTube to always use **theater mode** (wide layout) on video pages by setting the `wide=1` cookie.

---

## Features

- Automatically sets the `wide=1` cookie for `youtube.com`
- Reloads the page once to ensure YouTube applies the setting
- Persists across sessions (cookie lasts for 1 year)
- Lightweight and runs only on `/watch` video pages

---

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top-right)
4. Click **"Load unpacked"**
5. Select the folder containing the extension files

---

## How It Works

- On any YouTube video (`/watch`), the extension sets the cookie: wide=1; domain=.youtube.com; path=/; expires=+1 year
- If not already reloaded, it triggers a one-time page reload
- YouTube sees the `wide` cookie and loads the page in **theater mode**

---

## Limitations

- Requires a page reload to take effect
- If you're signed into YouTube, it’s possible your layout preference could still be overridden by your Google account settings
- Does not override YouTube’s built-in behavior if they change cookie usage in the future

---

## License

MIT — free to use, modify, and distribute.
