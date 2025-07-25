
# QR Attendance Web App

A full-stack QR code based attendance system built using HTML + JS (Frontend) and Node.js + SQLite (Backend).

## Features

- Scan QR codes using the browser (no app required)
- Store attendance in real-time via API
- Works on mobile and desktop

## Folder Structure

```
qr-attendance/
├── frontend/         # HTML + JS QR Scanner
└── backend/          # Node.js API with SQLite DB
```

## Deployment (Render.com)

1. Create a GitHub repo and push this code.
2. Go to [https://render.com](https://render.com) and click "New Web Service".
3. Connect your GitHub and select this repo.
4. Use the following settings:
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `node backend/server.js`
5. Set `web service` root directory as `/` or leave blank.

✅ Your app will be live and ready to use in minutes!

## To Test Locally:

```
cd backend
npm install
node server.js
```

Then open `/frontend/index.html` in your browser.
