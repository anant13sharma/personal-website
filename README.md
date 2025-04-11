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

This is a lightweight backend server that logs visitor information such as IP address, operating system, and browser type. It's built with Express and MongoDB and is designed to be triggered directly from the front end using a simple `fetch()` call—perfect for tracking visits to a portfolio, personal site, or landing page.

---

## 🚀 Features

- Captures visitor IP and device/browser info
- Saves data securely in MongoDB
- No personal info is collected
- Triggered by a simple `<script>` tag in HTML
- Hosted backend support (e.g., Render)

---

## 🛠 Live Usage Example

Include this in your site’s HTML to automatically track visits:

```html
<script>
  fetch('https://personal-website-backend-29to.onrender.com/track', { method: 'POST' });
</script>


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
