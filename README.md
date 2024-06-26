# Tab Title Fetcher

Tab Title Fetcher is a Chrome extension that fetches and displays the title of the current tab when a button is clicked.

## Features

- Fetches the title of the current tab.
- Displays the tab title in a popup.

## Installation

1. Clone or download this repository.
2. Go to `chrome://extensions/` in Chrome.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the folder where this repository is located.

## Usage

1. Click the Tab Title Fetcher icon in the Chrome toolbar.
2. Click the "Fetch Tab Title" button in the popup.
3. The title of the current tab will be displayed in the popup.

## Files

- `manifest.json`: The configuration file for the Chrome extension.
- `popup.html`: The HTML file that defines the content of the popup.
- `popup.js`: The JavaScript file that contains the logic for fetching and displaying the tab title.
- `popup.css` (optional): The CSS file for styling the popup.
- `icons/`: A directory containing icons for the extension.

## Code Explanation

### manifest.json

```json
{
  "manifest_version": 3,
  "name": "Tab Title Fetcher",
  "version": "1.0",
  "description": "Fetches the title of the current tab and displays it in the popup.",
  "permissions": [
    "tabs"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
