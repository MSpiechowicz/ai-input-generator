# AI Input Generator

A **brutalist-styled** Svelte 5 application that transforms basic user requests into professional, comprehensive AI prompts. Select your project type, input your request, and get an enhanced prompt ready to use with any AI tool.

![Brutalist Design](https://img.shields.io/badge/Design-Brutalist-black?style=for-the-badge)
![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?style=for-the-badge&logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Features

- **Multiple Project Types**: Svelte, React, Vue, Angular, Node.js, Python, UX Design, UI Design, Database, DevOps, Tailwind
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

## 🚀 Deployment

This project is configured to deploy to GitHub Pages automatically via GitHub Actions.

### Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (requires gh-pages package)
npm run deploy
```

### GitHub Pages Configuration

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set "Source" to "GitHub Actions"
4. Ensure the workflow is enabled

The site will be available at: `https://[username].github.io/[repository-name]/`

## 📦 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── AppFooter.svelte            # Footer component
│   │   ├── AppHeader.svelte            # Header component
│   │   ├── AppInput.svelte             # Main input component
│   │   ├── AppNoProjectResult.svelte   # No project result component
│   │   ├── AppOutput.svelte            # Output display component
│   │   ├── AppProgressIndicator.svelte # Progress indicator component
│   │   ├── AppProjects.svelte          # Projects list component
│   │   ├── AppProjectsSelector.svelte  # Project selector component
│   │   ├── AppSearchInput.svelte       # Search input component
│   │   ├── AppSectionHeader.svelte     # Section header component
│   │   └── AppShowMoreProjects.svelte  # Show more projects component
│   ├── prompts/
│   │   ├── angular/                    # Angular prompt templates
│   │   ├── database/                   # Database prompt templates
│   │   ├── devops/                     # DevOps prompt templates
│   │   ├── nodejs/                     # Node.js prompt templates
│   │   ├── python/                     # Python prompt templates
│   │   ├── react/                      # React prompt templates
│   │   ├── svelte/                     # Svelte prompt templates
│   │   ├── tailwind/                   # Tailwind prompt templates
│   │   ├── ui/                         # UI design prompt templates
│   │   ├── ux/                         # UX design prompt templates
│   │   └── vue/                        # Vue prompt templates
│   ├── stores/
│   │   └── userStore.svelte.ts         # User state management
│   ├── types/
│   │   └── topicType.ts                # TypeScript type definitions
│   ├── index.ts                        # Library exports
│   └── prompts.svelte.ts               # Prompt templates and logic
├── routes/
│   ├── +layout.svelte                  # Root layout component
│   ├── +layout.ts                      # Root layout logic
│   └── +page.svelte                    # Main application page
├── app.css                             # Global brutalist styles
├── app.d.ts                            # App type declarations
└── app.html                            # HTML template
```

## 🎨 Design Philosophy

This app embraces **brutalist design** principles:

- **Raw functionality over decoration**
- **Bold typography and stark contrasts**
- **Sharp borders and geometric shapes**
- **Black and white color scheme**
- **Direct, unambiguous UI elements**

## 🔧 Customization

### Adding New Project Types

1. Add new project type to `src/lib/prompts` (create a new folder with the project type name) and add the following to the `config.json` file:

```typescript
{
  id: 'newtype',
  name: 'New Type',
  description: 'Description here',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  promptFiles: ['prompt1.md', 'prompt2.md']
}
```

2. Add prompt template to the `md` files in the new project type folder.

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

**Built with ❤️ and aggressive typography - Check out the [Live Demo](https://mspiechowicz.github.io/ai-input-generator/)**
