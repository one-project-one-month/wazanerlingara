# CMS Learning Project - Medium-like Content Management System

A full-stack learning project implementing a Medium-like Content Management System.

## Project Structure

```
learning/
├── backend/          # NestJS Backend API
└── frontend/         # Angular 20 Frontend Application
```

## Backend (NestJS)

Feature-driven architecture with the following modules:

- **Auth** - Authentication and authorization
- **Users** - User management
- **Articles** - Article/Post management
- **Comments** - Comment system
- **Tags** - Tag management
- **Categories** - Category management
- **Media** - Media upload and management
- **Followers** - Follow/unfollow functionality

## Frontend (Angular 20)

Feature-driven architecture with the following modules:

- **Auth** - Login and registration
- **Dashboard** - Main dashboard
- **Articles** - Article listing, creation, editing, and viewing
- **Profile** - User profile management

## Getting Started

### Backend

```bash
cd backend
yarn install
yarn start:dev
```

Backend runs on `http://localhost:3000`

### Frontend

```bash
cd frontend
yarn install
yarn start
```

Frontend runs on `http://localhost:4200`

## Architecture

Both projects follow feature-driven architecture principles:

- Each feature is self-contained with its own module, components/services, models, and routes
- Shared and core modules for common functionality
- Standard folder structure following framework best practices
