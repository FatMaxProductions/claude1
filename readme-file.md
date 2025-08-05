# 🔍 Project Loom - AI Simulation Platform

**A modular, web-based AI simulation platform that allows users to create and interact with customizable AI-powered personas in dynamic, shared environments.**

## ✨ Features

- **🧠 Persona Creator**: Build AI personas with distinct traits, knowledge, and functions
- **🌍 Environment Builder**: Create interactive environments for multi-agent conversations
- **💬 Real-time Simulation**: Run auto-loop, manual, or mixed-mode simulations
- **📊 Export Capabilities**: Export chat histories and simulation data
- **🎨 Modern UI**: Responsive design with Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Create a new React app:**
```bash
npx create-react-app project-loom
cd project-loom
```

2. **Install dependencies:**
```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Replace the default files with the Project Loom files:**
   - Copy all provided source files to their respective directories
   - Replace `src/App.js`, `src/index.css`, etc.

4. **Start the development server:**
```bash
npm start
```

## 📁 Project Structure

```
project-loom/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ProjectLoomApp.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Usage

1. **Create Personas**: Start by creating AI personas with different traits and roles
2. **Build Environments**: Set up simulation environments with your personas
3. **Run Simulations**: Choose from three interaction modes:
   - **Auto-loop**: Personas interact automatically
   - **Manual**: Control when each persona speaks
   - **Mixed**: Participate as a human moderator

## 🧱 Core Components

### Persona System
- **Trait Categories**: Personality, Cognitive, Communication, Emotional, Problem-Solving, Motivations
- **Intensity Levels**: Weak, Neutral, Strong for each trait
- **Knowledge Hub**: Custom backstories, file uploads, AI-generated content
- **LLM Selection**: Choose between ChatGPT, Gemini, or Claude

### Environment System
- **Multi-participant**: Support for multiple AI personas
- **Flexible Modes**: Auto-loop, manual, and mixed interaction modes
- **Customizable Settings**: Word limits, starting prompts, human moderation
- **Preview Functionality**: Review participants before starting simulations

### Simulation Engine
- **Real-time Chat**: Interactive chat interface with message history
- **Export Features**: Download simulation data as JSON
- **Visual Indicators**: Loading states, typing indicators, persona avatars
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Technology Stack

- **Frontend**: React 18 with functional components and hooks
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React for modern, consistent icons
- **State Management**: React built-in state management
- **File Handling**: Browser-based file upload simulation

## 🎨 Design Philosophy

Project Loom emphasizes:
- **Modularity**: Personas and environments are independent, reusable components
- **User Experience**: Intuitive interface with helpful guidance and tips
- **Flexibility**: Multiple interaction modes to suit different use cases
- **Visual Appeal**: Modern design with smooth animations and transitions

## 📋 Use Cases

- **Creative Storytelling**: Build characters and scenarios for interactive narratives
- **Business Training**: Simulate customer service, leadership, or conflict scenarios
- **Market Research**: Create focus group simulations for product testing
- **Education**: Build tutoring environments with different teaching personas
- **Entertainment**: Create gamified chatrooms with AI characters

## 🔧 Development

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

### Customization

The application is built with modularity in mind. You can:
- Add new trait categories in the persona creator
- Extend the simulation engine with new interaction modes
- Customize the UI theme in `tailwind.config.js`
- Add new export formats or data visualization features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions, issues, or feature requests, please open an issue on the GitHub repository.

---

**Built with ❤️ for the AI simulation community**