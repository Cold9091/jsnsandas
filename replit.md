# JSM SANDA - Pest Control Service Website

## Overview

This is a full-stack web application for JSM SANDA, a professional pest control company based in Luanda, Angola. The application serves as the company's primary digital presence, offering information about their services and allowing customers to request quotes online.

## System Architecture

### Full-Stack Structure
- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured for Neon Database)
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **Deployment**: Configured for Replit with autoscale deployment

### Monorepo Architecture
The project follows a monorepo structure with clear separation:
- `client/`: Frontend React application
- `server/`: Backend Express.js API
- `shared/`: Shared TypeScript schemas and types
- Root-level configuration files for build tools and deployment

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for lightweight client-side routing
- **State Management**: React Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom JSM SANDA brand colors
- **Animations**: Framer Motion for smooth animations and transitions
- **Theme Support**: Light/dark mode with system preference detection

### Backend Architecture
- **Express.js**: RESTful API server with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Data Storage**: Currently using in-memory storage with interface for database migration
- **API Routes**: Quote management endpoints (POST /api/quotes, GET /api/quotes)
- **Development**: Hot reload with Vite integration in development mode

### Database Schema
- **Quotes Table**: Stores customer quote requests with fields:
  - id (serial primary key)
  - name (customer name)
  - phone (contact number)
  - email (customer email)
  - service (requested service type)
  - location (service location)
  - message (optional message)
  - createdAt (timestamp)

## Data Flow

1. **Quote Submission**: Customer fills out quote form → Frontend validates with Zod → API endpoint processes → Database storage
2. **Quote Retrieval**: Admin requests quotes → API fetches from database → Returns formatted data
3. **Form Validation**: Client-side validation using react-hook-form with Zod schemas
4. **Error Handling**: Comprehensive error handling with user-friendly messages

## External Dependencies

### Core Technologies
- **Database**: Neon Database (PostgreSQL-compatible serverless database)
- **Animations**: Framer Motion for smooth user interactions
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling
- **Build Tools**: Vite for fast development and optimized builds
- **CSS Framework**: Tailwind CSS with custom design system

### SEO and Performance
- **Meta Tags**: Comprehensive SEO optimization for Angolan market
- **Performance**: Lazy loading, image optimization, and code splitting
- **Analytics Ready**: Structured data markup for search engines
- **Mobile Optimized**: Responsive design with mobile-first approach

## Deployment Strategy

### Replit Configuration
- **Runtime**: Node.js 20 with PostgreSQL 16 module
- **Development**: `npm run dev` starts both frontend and backend
- **Production Build**: Vite builds frontend, esbuild bundles backend
- **Port Configuration**: Server runs on port 5000, mapped to external port 80
- **Auto-scaling**: Configured for autoscale deployment target

### Environment Setup
- **Database**: Requires DATABASE_URL environment variable
- **Development**: Hot reload with Vite middleware integration
- **Production**: Static file serving with Express.js

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 14, 2025. Initial setup