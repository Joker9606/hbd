# 🎂 Happiest Birthday - Interactive Aesthetic Web Experience

A custom-crafted, frame-by-frame interactive Happy Birthday celebration website built with React 19, Vite, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- 🧸 **Cover Scene**: Gingham backdrop, custom hand-painted cloud typography, birthday cake card, and cute teddy bear.
- 💌 **Vintage Envelope & Letter**: Smooth liquid wave transition, animated countdown, wax seal breaking animation, and heartfelt letter for Vaishuu.
- 📸 **Vintage 2000s Digital Camera**: Canon PowerShot aesthetic with functional directional controls, LCD viewfinder screen, flash effect, and 9 memorable photos.
- 🎂 **Y2K Wavy Celebration Finale**: Interactive candle-blowing with flame extinguishment and confetti bursts (`canvas-confetti`).
- 🎈 **Festive Floating Balloons**: Multi-colored SVG balloons emitting from bottom to top with realistic string wobble physics.
- 🌸 **Falling Flower Shower**: Petals and blossoms raining down from top to bottom on each section change.
- 🎆 **Sky Fireworks**: Celebratory overhead fireworks bursts on section entry.
- 💖 **Cursor & Touch Trail**: Glowing hearts and sparkles follow the user's cursor on desktop and finger on mobile touchscreens.
- 📱 **Fully Responsive**: Optimized for phones, tablets, and desktop displays with hardware-accelerated 60-120 FPS transitions.

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel

The project is fully pre-configured for Vercel with `vercel.json`, proper SPA route rewrites, and static asset cache headers.

### Option 1: Deploy via GitHub (Recommended)

1. Create a new repository on GitHub (e.g. `vaishuu-birthday`).
2. Push this project to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: Happiest Birthday for Vaishuu"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. Go to [Vercel Dashboard](https://vercel.com/new).
4. Click **Import** next to your repository.
5. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your website will be live in ~30 seconds!

### Option 2: Deploy directly via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy directly from terminal
vercel
```
Follow the quick terminal prompts to deploy. For production deployment, run:
```bash
vercel --prod
```
