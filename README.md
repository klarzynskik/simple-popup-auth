# <img src="https://livechat.design/images/livechat/DIGITAL%20%28RGB%29/SVG/Mark_RGB_Orange.svg" widht="24px" height="24px" /> Simple Popup Authorization with AccountsSDK

> This project was bootstrapped using [LiveChat Developer Console CLI](https://github.com/livechat/dps-cli)

This app was created as the follow-up to the following blog post: [Stubbing OAuth Popup Authorization with Cypress](https://developers.livechat.com/).

## 🚀 Getting Started

Install dependecies

```sh
npm install
```

Start local development server:

```sh
npm run dev
```

Open the Cypress App:

```
npm run cy:open
```

If you would like to correctly authorize outside of the Cypress tests, you need to set up your own LiveChat OAuth Client. You can learn more about that here: [Setup a LiveChat OAuth Client](https://developers.livechat.com/docs/authorization/sign-in-with-livechat#setup). Then, you should replace the `lcClientId` inside of the `/lib/config.ts` with the correct ClientID.

## ⚙️ Available Scripts

### `dev`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

### `build`

Builds the app for production to the `.next` folder.

### `start`

Starts production ready Next.js web server.

### `cy:open`
Opens the Cypress App.

### `cy:open`
Runs the Cypress tests in the headless mode.
