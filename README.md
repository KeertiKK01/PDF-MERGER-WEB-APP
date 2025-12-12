# 📄 PDF MERGER WEB APP

A simple web application that lets users upload multiple PDFs and merge them into a single file in just a few clicks.

This project uses **Node.js, Express.js, Multer, and client-side HTML/CSS/JS** to handle file uploads and merging. :contentReference[oaicite:1]{index=1}

---

## 🚀 Features

✔ Upload multiple PDF files  
✔ Merge into one combined PDF  
✔ Clean web interface  
✔ Fast and lightweight

---

## 💻 Technologies Used

- **Node.js**
- **Express.js**
- **Multer** (for file uploads)
- **HTML/CSS/JavaScript**
- PDF merging logic in **merge.js / server.js** :contentReference[oaicite:2]{index=2}

---

## 📂 Project Structure
📦 PDF-MERGER-WEB-APP
├── node_modules/
├── public/
├── templates/
├── uploads/
├── merge.js
├── package.json
├── package-lock.json
├── server.js
└── README.md

## 📦 Dependencies

These are required to run the PDF Merger Web App:

### **Main Dependencies**
| Package | Purpose |
|--------|---------|
| **express** | Backend server + routing |
| **multer** | Handle PDF file uploads |
| **pdf-lib** | Merge PDF pages |
| **fs / path** | File handling (built-in Node modules) |

### **Dev Dependencies**
| Package | Purpose |
|--------|---------|
| **nodemon** | Auto-restart server during development |

### Example `package.json`
```json
{
  "name": "pdf-merger-web-app",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.19.2",
    "multer": "^1.4.5",
    "pdf-lib": "^1.17.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```
📦 How It Works
- Choose multiple PDF files from your computer
- Upload them using the web interface
- Server merges the PDFs
- Download the merged PDF

  Deploy on Render
  - Create new Web Service
  - Select your GitHub repository
  - Set:
     -> Build Command: npm install
     -> Start Command: npm start
  - Deploy 🎉

❤️ Author
Developed by Keerti Kushwaha 
LIVE DEMO -  https://pdf-merger-web-app.onrender.com
