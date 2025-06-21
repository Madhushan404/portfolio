# Portfolio Website

A responsive business portfolio website built with React and Material UI.

## Features

- Responsive design for all devices
- Dark/Light mode toggle
- Theme color customization with 6 color options
- Modern animations and transitions
- Typewriter effect for skill titles
- Navigation component for quick access to sections

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── background.png
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── ProfileImage.tsx
│   │   └── common/
│   │       ├── ColorSelector.tsx
│   │       ├── Logo.tsx
│   │       ├── Navigation.tsx
│   │       └── ThemeToggle.tsx
│   ├── styles/
│   ├── theme/
│   │   ├── ThemeProvider.tsx
│   │   └── constants.ts
│   ├── App.tsx
│   └── index.tsx
└── package.json
```

## Getting Started

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:

   ```
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Important: Setting up your images

### Profile Image

You need to add your profile image to make the hero section complete:

1. Create a folder called `images` in the `public` directory if it doesn't exist already
2. Add your profile photo with dimensions approximately 500px × 800px
3. Add the following in the HeroSection.tsx file:

```jsx
// In the HeroSection.tsx file where the ProfileImage component is used:
<ProfileImage imageSrc="/images/your-profile-photo.jpg" />
```

### Background Image

For the background effect:

1. Add a dark-themed background image to the `public/images/` directory named `background.png`
2. The background should be subtle, as it will be overlaid with a dark gradient

## Customization

### Theme Colors

You can modify the theme colors in the `src/theme/constants.ts` file if needed. Current colors:

- Lime: #9CF626 (default)
- Red: #DB0C02
- Orange: #F64D04
- Dark Blue: #04048A
- Purple: #7467FF
- Gray: #676767

### Content

Update the content in the various components to reflect your information and portfolio.

## Building for Production

```
npm run build
```

This will create an optimized build in the `build` folder ready for deployment.

## Technologies Used

- React.js
- TypeScript
- Material UI (MUI)
- Emotion (Styled Components)
- Typewriter Effect
