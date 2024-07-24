 - npm create vite@latest nome-repo --template react
 - cd nome-repo
 - npm i
 - npm install -D tailwindcss postcss autoprefixer
 - npx tailwindcss init -p
 - ### tailwind.config.js
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 - ### index.css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

 - npm run dev