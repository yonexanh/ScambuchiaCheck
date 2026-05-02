# ScambuchiaCheck

ScambuchiaCheck is a Chrome/Edge browser extension that helps users review Facebook Page Transparency information before interacting with a page.

The extension checks visible Facebook Page Transparency content in the browser and displays a local warning when it detects page manager location signals related to Cambodia. It can also show a safer status when Vietnam-related management information is detected.

## Features

- Automatically checks Facebook pages while browsing.
- Supports normal Facebook page URLs and `profile.php?id=...` page URLs.
- Reads visible Page Transparency content directly in the browser.
- Attempts to fetch the related transparency page as a fallback when viewing a page homepage.
- Displays a clear risk warning when Cambodia-related page manager information is detected.
- Cleans up warnings automatically when navigating to another Facebook page.
- Runs locally and does not send user data to any external server.

## Privacy

This extension does not collect, store, sell, transmit, or share personal data.

All detection happens locally in the user's browser. The extension only reads visible Facebook page content and related transparency content to display local warnings.

## Installation For Testing

1. Open Chrome or Edge.
2. Go to `chrome://extensions/`.
3. Enable `Developer mode`.
4. Click `Load unpacked`.
5. Select the `fb-cambodia-scam-detector` folder.

## Chrome Web Store Notes

The extension requests access to `facebook.com` because it needs to read visible Facebook Page Transparency content and display warnings directly in the browser.

Suggested permission justification:

```text
Required to read visible Facebook Page Transparency content on facebook.com and display local browser warnings. No user data is collected or transmitted.
```

## Disclaimer

This extension provides informational risk warnings only. It does not make legal conclusions and does not definitively label any page as fraudulent. Users should also review other trust signals such as page history, reviews, contact information, payment methods, and community feedback before interacting with or transacting with a page.
