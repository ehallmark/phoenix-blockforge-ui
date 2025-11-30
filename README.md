# Phoenix Blockmine LLC Website

Professional website for Phoenix Blockmine LLC - a Bitcoin mining investment company focused on strategic capital accumulation and mining infrastructure acquisition.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the site locally.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment to Netlify

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod
```

### Option 2: Deploy via Git

1. Push this repository to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

### Option 3: Manual Deploy

1. Run `npm run build` to create the `dist` folder
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first styling
- **Lucide React** - Icon library

## 🎨 Features

- ✨ Modern, professional design
- 📱 Fully responsive layout
- ⚡ Lightning-fast performance with Vite
- 🎯 Optimized for SEO
- 🌙 Dark theme optimized for crypto/tech audience
- 🔧 Easy to customize and extend

## 📝 Customization

### Update Content

Edit `/src/App.jsx` to modify:
- Company description
- Strategy details
- Contact information
- Section content

### Update Styling

- Global styles: `/src/index.css`
- Tailwind config: `/tailwind.config.js`
- Color scheme: Update the `bitcoin` color in `tailwind.config.js`

### Update Metadata

Edit `/index.html` to update:
- Page title
- Meta description
- Favicon

## 📧 Contact

For questions about the website, reach out to evan@phoenixblockforge.com

---

© 2025 Phoenix Blockmine LLC. All rights reserved.
