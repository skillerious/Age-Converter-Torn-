
# 🚀 Age Converter for Torn.com

[![](https://i.postimg.cc/q7zpn8pg/Screenshot-2024-09-05-104355.png)](https://i.postimg.cc/q7zpn8pg/Screenshot-2024-09-05-104355.png)

## 📜 Overview
The **Age Converter** is a lightweight userscript designed for Torn.com players. It converts the in-game account age (displayed in days) into a more user-friendly format of years, months, and days. The converted age is displayed elegantly beneath the existing age box, giving you a clearer picture of how long your Torn account has been active. 

This script requires a **Public Access API key** from Torn to fetch your profile details and calculate the account age.

## 🧩 Features

- 🎯 **Easy-to-read format**: Automatically converts your account age from days into years, months, and days.
- 🎨 **Enhanced UI**: Styled with modern fonts and shadow effects for a cleaner, visually appealing look.
- 🔐 **API Integration**: Utilizes Torn's **Public Access API** to fetch real-time account age data.
- 🚀 **Minimal & Efficient**: Runs automatically when you load the Torn website, requiring no extra steps beyond providing your API key.

## ⚙️ How It Works
When you first install and load the script, it will prompt you to enter your Torn **Public API key**. This key allows the script to fetch your account’s age directly from the Torn API and display it in a more readable format beneath the in-game age counter.

1. **Age Calculation**: Converts your account age from days to years, months, and days using simple arithmetic.
2. **Display**: Shows the converted age in a sleek, blue-colored font with a shadow effect for enhanced readability.

### Example
Instead of seeing `Age: 394 days`, you'll see something like:

**394 days** ➡️ **1 Year, 1 Month, 29 Days**

## 📋 Requirements

- **Torn Public API Key**: The script requires a Torn API key with **Public Access**. You can find or generate your API key by navigating to **Torn > Settings > API Key**.
  
  **Note**: Make sure you choose the **Public API** level, as it's sufficient for fetching profile information such as your account age.

## 🚀 Installation

1. Install a userscript manager (if you don't have one already):
    - [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
    - [Violentmonkey](https://violentmonkey.github.io/)
    - [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

2. After installing your preferred userscript manager, click [here](https://update.greasyfork.org/scripts/506922/Age%20Converter.user.js) to install the **Age Converter** script.

3. When prompted for your Torn **Public API key**, enter it into the popup window. Your API key will be securely stored in your browser’s local storage for future use.

## 🛠️ Usage

1. Once installed, the script will automatically run whenever you visit Torn.com.
2. If it's your first time using the script, you’ll be prompted to enter your Torn **Public API Key**. The script will save this key in your browser’s local storage, so you don’t have to re-enter it.
3. The converted age (in years, months, and days) will appear beneath the age display box on your profile.

### Updating Your API Key
If you ever need to change your API key, simply clear the stored key by following these steps:
1. Open your browser’s developer tools (`F12` or `Ctrl+Shift+I`).
2. Navigate to the **Application** tab.
3. Find **Local Storage** > `https://www.torn.com`.
4. Delete the `tornApiKey` entry.
5. Reload Torn.com, and the script will prompt you to enter a new API key.

## 🤝 Contributing

Contributions are welcome! If you would like to suggest improvements, feel free to fork the repository and create a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m 'Add some feature'`)
4. Push the branch (`git push origin feature-branch`)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as long as proper credit is given.
