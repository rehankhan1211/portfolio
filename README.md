# Flutter Developer Portfolio

A modern, animated portfolio website built with React, Tailwind CSS, and Framer Motion. Showcasing Flutter development projects and technical skills with smooth animations and responsive design.

## 🎨 Features

- **Modern Design**: Clean, technology-inspired UI with gradient accents
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Component-Based Architecture**: Well-organized, reusable React components
- **Dark Theme**: Professional dark theme optimized for developer portfolios
- **Intersection Observer**: Lazy animations that trigger on scroll
- **Mobile Navigation**: Responsive hamburger menu for mobile devices
- **Contact Form**: Functional contact form for inquiries
- **Social Links**: Easy access to social media profiles

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with theme toggle
│   │   ├── Hero.jsx            # Hero section with CTA buttons
│   │   ├── Projects.jsx        # Featured projects showcase
│   │   ├── Skills.jsx          # Technical skills with progress bars
│   │   ├── Experience.jsx      # Timeline of experience
│   │   ├── Contact.jsx         # Contact form and information
│   │   ├── Footer.jsx          # Footer with links
│   │   └── ScrollToTop.jsx     # Scroll to top button
│   ├── App.jsx                 # Main app component
│   ├── index.jsx               # React entry point
│   └── index.css               # Global styles with Tailwind
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🛠️ Technologies Used

- **React 18**: UI library for building components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library for beautiful SVG icons
- **React Intersection Observer**: For scroll-triggered animations

## 📦 Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Runs the test suite
- `npm eject`: Ejects from Create React App (irreversible)

## 🎯 Sections

### Hero Section
- Eye-catching introduction with animated background
- Call-to-action buttons
- Social media links
- Scroll indicator

### Projects Section
- Showcase of 3+ Flutter projects
- Project descriptions and features
- Technology stack display
- Links to GitHub and live demos

### Skills Section
- Technical skills organized by category
- Animated progress bars
- 6 skill categories covering:
  - Mobile Development
  - State Management & Architecture
  - Backend & APIs
  - Tools & Platforms
  - Web Development
  - Core Competencies

### Experience Section
- Timeline of professional journey
- Key achievements and milestones
- Learning path and future goals
- Visual timeline design

### Contact Section
- Contact information cards
- Functional contact form
- Social media links
- Email and phone details

## 🎨 Customization

### Update Personal Information

Edit the following files to personalize the portfolio:

1. **Header Logo**: `src/components/Header.jsx` - Change "FD" to your initials
2. **Hero Section**: `src/components/Hero.jsx` - Update introduction text
3. **Projects**: `src/components/Projects.jsx` - Add your projects
4. **Skills**: `src/components/Skills.jsx` - Update your skills
5. **Experience**: `src/components/Experience.jsx` - Add your experience
6. **Contact**: `src/components/Contact.jsx` - Update contact information

### Color Scheme

Modify colors in `tailwind.config.js`:
- Primary color: Cyan (#0ea5e9)
- Accent color: Purple (#8b5cf6)
- Background: Slate (#0f172a)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔗 Social Links

Update social media links in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`

## 📧 Contact Form

The contact form is set up with basic validation. To make it functional:

1. Connect to a backend service (Firebase, EmailJS, etc.)
2. Update the `handleSubmit` function in `src/components/Contact.jsx`

## 🚀 Deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to Netlify

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips

- Keep project descriptions concise and impactful
- Update the contact information with real details
- Add screenshots or GIFs of your projects
- Regularly update the skills section as you learn new technologies
- Test the portfolio on different devices and browsers

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For questions or issues, please open an issue in the repository.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
