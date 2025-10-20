# Employee Management App

Full-stack web application for managing employee records with secure RESTful API and modern React interface.

## Architecture

**Backend:** ASP.NET Core Web API with Entity Framework Core (In-Memory)  
**Frontend:** Next.js 15 + TypeScript + TailwindCSS

## Features

- CRUD operations for employee management
- Token-based authentication
- Form validation (client & server-side)
- Responsive UI with real-time updates
- In-memory database for demo purposes

## Quick Start

### Backend API
```bash
cd EmployeeManagementAPI
dotnet run
# API runs on https://localhost:7219
# Swagger: https://localhost:7219/swagger
```

### Frontend App
```bash
cd employee-web-app
npm install
npm run dev
# App runs on http://localhost:3000
```

## Authentication

**Token:** `miguels-demo-token`

Include in API requests:
```
Authorization: Bearer miguels-demo-token
```

## Project Structure

```
├── EmployeeManagementAPI/    # Backend (.NET Core)
│   ├── Controllers/          # API endpoints
│   ├── Models/              # Data models
│   ├── Repositories/        # Data access layer
│   └── Middleware/          # Auth middleware
│
└── employee-web-app/        # Frontend (Next.js)
    └── src/
        ├── components/      # React components
        ├── services/        # API service
        └── types/           # TypeScript types
```

## Tech Stack

### Backend
- ASP.NET Core 9.0
- Entity Framework Core (In-Memory)
- Swagger/OpenAPI

### Frontend
- Next.js 15
- TypeScript
- React Hook Form
- TailwindCSS 4
- Lucide React

## Documentation

- [Backend README](./EmployeeManagementAPI/README.md)
- [Frontend README](./employee-web-app/README.md)
