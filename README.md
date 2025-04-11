# 🌐 Personal Portfolio Website (View in Code Mode)

A clean, responsive, and developer-friendly personal portfolio template built using **HTML5**, **CSS3**, **Bootstrap 4.6**, and **vanilla JavaScript**. Perfect for showcasing your projects, skills, certifications, and personal branding.

---

## ✨ Features

- ✅ Fully responsive design
- 🌙 Dark/light mode toggle
- 🧠 Separate skills page (`tech-skills.html`)
- 🖼️ Animated project showcases using GIFs
- 📝 Certificate gallery
- 📧 Netlify Forms integration for contact
- 💡 Easy to customize and extend

---

## 📊 Visitor Tracking Feature

This project includes a lightweight visitor tracking system built with **Node.js**, **Express**, and **MongoDB Atlas**. It logs basic visitor metadata to gain insights into how the site is accessed and from what devices or browsers.

### 🔍 What It Does

- Tracks each visit to the website via a `POST` request from the frontend.
- Logs the following details:
  - 🌐 **IP Address**
  - 💻 **Device Info**
  - 🖥️ **Operating System**
  - 🧭 **Browser Name & Version**
  - 🕒 **Timestamp**
- Stores all the collected data in a MongoDB Atlas collection.

### 🛠️ Tech Stack

- **Backend:** Node.js, Express, Render
- **Database:** MongoDB Atlas
- **Tools:** `useragent`, `dotenv`, `cors`
- **Hosting:** Render

### 🔐 Security

Sensitive environment variables like `MONGO_URI` are managed using a `.env` file and excluded from version control via `.gitignore`.

### 🧪 Example Console Log Output




## 📁 Project Structure

personal-website/
├── index.html # Homepage 
├── tech-skills.html # Tech skills section (split for modularity) 
├── css/ │ 
          ├── style.css │ 
          └── dark-mode.css 
├── js/ │ 
        └── script.js │ 
        └── dark-mode-switch.min.js 
├── img/ # Project GIFs, profile image, certificates, etc. 
├── icons/ # Logos for tools, tech, and badges 
├── data.json # Optional: For structured data (certificates, etc.) 
└── README.md # This file
🔧 Currently improving mobile responsiveness and accessibility.
