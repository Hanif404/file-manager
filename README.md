# File Manager

A simple file manager application built with Vue 3, TypeScript, and Vite.

## Features

- Browse folders and files in a tree structure
- View file details
- Navigate through directory hierarchy

## Tech Stack

- Vue 3 with Composition API
- TypeScript
- Vite
- Pinia for state management
- Tailwind CSS for styling
- Axios for API requests
- Bun as package manager

## Project Structure

The project follows a clean architecture approach:
- `components/`: Reusable UI components
- `config/`: Configuration files
- `domain/`: Domain models and entities
- `infrastructure/`: API and external services
- `store/`: Pinia stores for state management
- `usecases/`: Business logic
- `views/`: Page components

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) package manager

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start development server
bun run dev
```

### Build

```bash
# Build for production
bun run build
```

### Preview

```bash
# Preview production build
bun run preview
```