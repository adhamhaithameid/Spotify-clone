# Spotify Clone
- This project is part of the Codveda internship as a Front End Engineer. [Internship Offer Letter](https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7324392120541151233)

## Project Overview
A modern web application clone of Spotify built with React and Tailwind CSS

## Featuring
- Responsive layout matching Spotify's web player
- Interactive audio player with playback controls
- Sidebar navigation and search functionality
- Global state management with Redux
- Custom SVG icons and accessible UI components

## Screenshots

### Screen Shot of the Project's Interface
![Dashboard Screenshot](<Screenshot 2025-05-26 at 4.49.39 PM.png>)

### the Task Requirements
![Task Requirements](<Front-End Task List-11_page-0001.jpg>)

## Technology Stack

### Frontend

- React 18 with functional components and hooks
- Tailwind CSS for utility-first styling
- React Router v6 for client-side routing
- Redux Toolkit for state management
- react-use for audio playback integration
- Headless UI for accessible components

### Backend

- Mock API using JSON server
- Spotify Web API integration (optional)

### Development Tools

- Vite as build tool
- ESLint + Prettier for code quality
- Husky for git hooks

## Project Structure

```
/src
  /assets - SVG icons and static files
  /components - Reusable UI components
  /features - Feature modules
  /hooks - Custom React hooks
  /pages - Route-level components
  /store - Redux store configuration
  /utils - Helper functions
```

## Project Overview

This tutorial series walks through building a Spotify clone from scratch, covering:

1. React fundamentals with functional components
2. Tailwind CSS utility-first styling
3. Modern React hooks and state management
4. Audio playback integration
5. Responsive design patterns

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/adhamhaithameid/Spotify-clone.git
```

2. Navigate to the project directory:

```bash
cd Spotify-clone
```

3. Install dependencies:

```bash
npm install
# or
# yarn install
```

### Running the Project

Start the development server with OpenSSL legacy provider (required for Node.js v17+):

```bash
node --openssl-legacy-provider node_modules/react-scripts/scripts/start.js
```

Or use the standard command if you're using Node.js v16 or earlier:

```bash
npm start
# or
# yarn start
```
