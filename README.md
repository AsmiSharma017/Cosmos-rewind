
# Cosmic Calendar

**Cosmic Calendar** is a space-themed web application that displays NASA's Astronomy Picture of the Day (APOD) based on a selected date. Users can explore random space events, listen to themed music, save thoughts in a personal time capsule, and mark favorite cosmic discoveries.

**Live Website (just click and test) :** https://cosmos-rewind.onrender.com/

---

## Features

- Browse NASA's APOD by selecting a specific date
- Random date explorer for cosmic discovery
- Themed background music based on event content
- Personal time capsule saved in local storage
- Space scrapbook to mark favorite APODs

---

## Technologies Used

- Node.js with Express
- NASA APOD API
- HTML, CSS, JavaScript
- `dotenv` for environment variables
- Browser `localStorage` for user data

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cosmic-calendar.git
cd cosmic-calendar
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Your Environment Variable

Create a `.env` file in the root directory and add the following:

```env
NASA_API_KEY=your_actual_api_key_here
```

> You can also use `DEMO_KEY` temporarily, but it has a limited number of requests per hour.

---

## Run the App Locally

```bash
node server.js
```

Then open your browser and go to:

```
http://localhost:3000
```

---

## Folder Structure

```
cosmic-calendar/
│
├── public/
│   ├── style.css
│   ├── script.js
│   ├── index.html
│   ├── app.html
│   ├── capsule.html
│   └── sounds/
│       ├── main.mp3
│       ├── moon.mp3
│       ├── mars.mp3
│       ├── saturn.mp3
│       ├── galaxy.mp3
│       ├── default1.mp3
│       └── default2.mp3
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## Deployment Notes

* Do **not** upload your `.env` file or API key to GitHub.
* Use services like **Render**, **Railway**, or **Glitch** to deploy Node.js apps easily with environment variables support.
* When deploying, make sure to add `NASA_API_KEY` as a secret in the environment config panel of your host.

---

## License

This project is for educational purposes and uses public NASA data via the [APOD API](https://api.nasa.gov/).

```

---
