# Employee Management Web App

Modern and responsive web application for managing employee records built with Next.js, TypeScript, and TailwindCSS.

## Features

- View list of all employees
- Add new employees with form validation
- Edit existing employee information
- Delete employees with confirmation dialog

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS 4** - Utility-first CSS
- **React Hook Form** - Form validation and management
- **Lucide React** - icon library

## Getting Started

### Prerequisites

- Node.js 20+
- Backend API running on `https://localhost:7219`

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
NEXT_PUBLIC_API_URL=https://localhost:7219
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── EmployeeList.tsx
│   └── EmployeeForm.tsx
├── services/        # API service layer
├── types/           # TypeScript type definitions
└── lib/             # Utility functions
```

## API Integration

The app connects to the Employee Management API with token-based authentication.

**Authentication Token:** `miguels-demo-token`

All API requests automatically include the authorization header.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Form Validation

Client-side validation rules:
- **First Name:** Required, max 100 characters
- **Last Name:** Required, max 100 characters
- **Email:** Required, valid email format, max 200 characters
- **Position:** Required, max 100 characters
