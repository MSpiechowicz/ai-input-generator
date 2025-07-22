# AI Input Generator

A **brutalist-styled** Svelte 5 application that transforms basic user requests into professional, comprehensive AI prompts. Select your project type, input your request, and get an enhanced prompt ready to use with any AI tool.

![Brutalist Design](https://img.shields.io/badge/Design-Brutalist-black?style=for-the-badge)
![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?style=for-the-badge&logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Features

- **10 Project Types**: Svelte, React, Vue, Angular, Node.js, Python, UX Design, UI Design, Database, DevOps
- **Professional Prompts**: Each project type has expertly crafted prompt templates
- **Brutalist UX**: Bold, stark, and functional design aesthetic
- **Copy to Clipboard**: One-click copying of generated prompts
- **Real-time Generation**: Prompts update as you type
- **Responsive Design**: Works on all devices
- **TypeScript**: Full type safety throughout

## 🎯 How It Works

1. **SELECT** a project type that matches your domain
2. **INPUT** your request, question, or task
3. **COPY** the enhanced, professional prompt
4. **PASTE** into your favorite AI tool (ChatGPT, Claude, etc.)

## 🛠 Tech Stack

- **Svelte 5** - Modern reactive framework with runes
- **SvelteKit** - Full-stack web framework
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Vite** - Lightning-fast build tool

## 🏃‍♂️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── ProjectSelector.svelte    # Project type selection
│   │   ├── InputArea.svelte         # User input textarea
│   │   └── OutputArea.svelte        # Generated prompt display
│   └── prompts.ts                   # Prompt templates and logic
├── routes/
│   └── +page.svelte                 # Main application page
├── app.css                          # Global brutalist styles
└── app.html                         # HTML template
```

## 🎨 Design Philosophy

This app embraces **brutalist design** principles:

- **Raw functionality over decoration**
- **Bold typography and stark contrasts** 
- **Monospace fonts** (JetBrains Mono)
- **Sharp borders and geometric shapes**
- **Black and white color scheme**
- **Direct, unambiguous UI elements**

## 🔧 Customization

### Adding New Project Types

1. Add new project type to `src/lib/prompts.ts`:

```typescript
{
  id: 'newtype',
  name: 'New Type',
  description: 'Description here',
  emoji: '🔥'
}
```

2. Add corresponding prompt template:

```typescript
newtype: `Your expert prompt template here...`
```

### Modifying Styles

The brutalist design system is defined in `src/app.css` with CSS custom properties:

```css
:root {
  --brutalist-black: #000000;
  --brutalist-white: #ffffff;
  --brutalist-shadow: 4px 4px 0px #000000;
  --brutalist-border: 4px solid #ffffff;
}
```

## 📱 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

[License Type] - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

**Built with ❤️ and aggressive typography**
