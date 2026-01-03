# Wimpy Kid-Inspired Personal Diary Website

A handwritten diary-style personal website that feels intimate, curious, and human—designed to help visitors understand you and start conversations.

## 🎨 Features

- **Hand-drawn aesthetic** with messy, notebook-like layouts
- **Paper texture background** with ruled lines
- **Playful interactions**: arrow wiggles, sketch animations, doodle movements
- **Diary overlay system** for seamless page navigation
- **Multiple content sections**:
  - Questions I Think About
  - Random Thoughts
  - Music Corner
  - About (anti-about)

## 🚀 Getting Started

1. Open `index.html` in your browser
2. Customize the content with your personal information
3. Replace placeholder contact links with your actual social media/email

## ✏️ Customization Guide

### Update Personal Information

**In `index.html`:**
- Line 32: Replace `[Your Name]` with your actual name
- Line 33: Update the bio text
- Lines 108-113: Update contact links (email, Twitter, etc.)

### Add Your Profile Image

Replace the placeholder gradient circle (lines 27-34 in `index.html`) with:

```html
<img src="your-photo.jpg" alt="Profile" style="
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid var(--ink-black);
  transform: rotate(-3deg);
">
```

### Customize Content

**Questions Section** (`script.js`, lines 31-60):
- Edit the questions and answers to reflect your own thoughts
- Add or remove questions as needed

**Thoughts Section** (`script.js`, lines 78-130):
- Replace with your actual diary-style thoughts
- Keep entries short (5-7 lines max)
- Use strikethrough for edits: `<span class="strikethrough">text</span>`

**Music Section** (`script.js`, lines 133-180):
- Update playlist names and descriptions
- Add links to your actual playlists (Spotify, Apple Music, etc.)

**About Section** (`script.js`, lines 183-230):
- Customize the three lists with your own items
- Keep the casual, honest tone

### Color Customization

Edit CSS variables in `style.css` (lines 7-14):

```css
--paper-bg: #f9f7f3;        /* Background color */
--ink-black: #1a1a1a;       /* Primary text */
--accent-blue: #4a7c9e;     /* Blue accent */
--accent-red: #c85a54;      /* Red accent */
--accent-yellow: #e8c547;   /* Yellow highlights */
```

### Font Customization

Current fonts (from Google Fonts):
- Primary: Indie Flower
- Secondary: Patrick Hand
- Accent: Shadows Into Light

To change fonts, update the `@import` in `style.css` (line 4) and the CSS variables (lines 16-18).

## 📁 File Structure

```
diary/
├── index.html          # Main page with diary index
├── style.css           # Design system and base styles
├── animations.css      # Playful animations
├── script.js           # Overlay navigation and content
└── README.md           # This file
```

## 🎯 Design Philosophy

This website intentionally avoids:
- Clean, corporate styling
- Perfect alignment
- Polished UI components
- Traditional portfolio layouts

Instead, it embraces:
- Messy, human aesthetics
- Imperfect alignment
- Hand-drawn elements
- Casual, honest tone
- Conversation over presentation

## 💡 Tips

1. **Keep it personal**: Use your actual thoughts, not what you think people want to hear
2. **Embrace imperfection**: The messy aesthetic is intentional
3. **Update regularly**: Add new thoughts, questions, or music as you go
4. **Be authentic**: This is about starting conversations, not impressing people

## 🌐 Browser Compatibility

Works best in modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 📝 License

Feel free to use this as a template for your own personal website. Make it yours!

---

Made with curiosity & coffee ☕
