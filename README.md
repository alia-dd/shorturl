# URL Shortener Frontend

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/UI-MUI-007FFF?logo=mui&logoColor=white)
![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify&logoColor=white)
![License](https://img.shields.io/badge/License-Apache--2.0-blue)

A modern, responsive frontend for a URL shortening web app built with Next.js and Tailwind CSS. This app lets users paste long URLs and receive short, easy-to-share links that connect to the backend API at https://github.com/alia-dd/url-shortner-backend.

## Features

* User-friendly interface for shortening URLs
* Responsive design supported on desktop and mobile
* Connects with the backend API via a Next.js Server Action to generate short links
* Displays results and provides shareable short URLs

## Built With

* Next.js — React framework for production apps
* Tailwind CSS — utility-first CSS framework
* MUI — UI components
* React Hooks — for managing state and logic

## Prerequisites

Make sure you have Node.js and npm or yarn installed.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/alia-dd/shorturl.git
   cd shorturl
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Create `.env.local` in the project root with the backend URL, no trailing slash:

   ```
   BASE_URL=http://localhost:8000
   ```

   Or point it at the hosted backend:

   ```
   BASE_URL=https://url-shortner-backend-36xa.onrender.com
   ```

   `BASE_URL` is read server-side inside a Server Action, so it does not need a `NEXT_PUBLIC_` prefix. If deploying to Netlify, this variable must also be set in the site's environment variables, since `.env.local` is not committed to the repository.

## Run Locally

Run the development server:

```
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to see the app.

## Usage

1. Enter a long URL into the input field
2. Click the Generate button
3. View the generated short link
4. Copy and share the short link anywhere

## Contributing

Contributions are welcome. To improve the project:

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push and open a pull request

## License

This project is licensed under the Apache License 2.0.