# VueJS Demo App

A modern Vue.js application with TypeScript, Pinia, and PrimeVue.

## Project Structure

```
src/
├── assets/          # Static assets
├── common/          # Common components
├── components/      # Feature-specific components
├── constants/       # Application constants
├── layouts/         # Layout components
├── pages/          # Page components
├── router/         # Vue Router configuration
├── services/       # API services
├── stores/         # Pinia stores
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Features

- Vue 3 with Composition API
- TypeScript support
- Pinia for state management
- Vue Router for navigation
- PrimeVue for UI components
- Tailwind CSS for styling
- ESLint and Prettier for code formatting
- Axios for API calls

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd vuejs-demo-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Environment Configuration (When integrate API):

   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the values in `.env` with your configuration:

     ```
     # Application
     VITE_APP_TITLE=VueJS Demo App
     VITE_APP_ENV=development

     # API Configuration
     VITE_API_BASE_URL=http://localhost:3000

     # Add other environment variables as needed
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

The application uses the following environment variables:

| Variable          | Description                          | Default               |
| ----------------- | ------------------------------------ | --------------------- |
| VITE_APP_TITLE    | Application title                    | VueJS Demo App        |
| VITE_APP_ENV      | Environment (development/production) | development           |
| VITE_API_BASE_URL | API base URL                         | http://localhost:3000 |

Additional environment variables can be added as needed. See `.env.example` for more details.

## Development Guidelines

1. **Component Structure**

   - Use the Composition API with `<script setup>`
   - Keep components small and focused
   - Use TypeScript for props and emits

2. **State Management**

   - Use Pinia stores for global state
   - Keep component state local when possible
   - Use TypeScript interfaces for store state

3. **Styling**

   - Use Tailwind CSS for styling
   - Follow BEM naming convention for custom CSS
   - Use PrimeVue components when possible

4. **Code Quality**

   - Follow ESLint rules
   - Use Prettier for code formatting
   - Write meaningful commit messages

5. **Environment Configuration**
   - Never commit `.env` file to version control
   - Use `.env.example` as a template for required environment variables
   - Keep sensitive information in `.env` file only

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT
