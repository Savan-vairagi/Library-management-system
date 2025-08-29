# Library Management System - Frontend

This is the Angular frontend for the Library Management System that connects to your Spring Boot backend.

## Features

- **Authentication**: Login system with demo credentials
- **Book Management**: Add, edit, delete, and view books
- **Member Management**: Add, edit, delete, and view library members
- **Loan Management**: Borrow and return books, view loan history
- **Responsive UI**: Modern Bootstrap-based interface with Font Awesome icons

## Prerequisites

- Node.js (version 14 or higher)
- Angular CLI (version 15)
- Your Spring Boot backend running on `http://localhost:8080`

## Installation

1. Navigate to the frontend directory:
```bash
cd library-frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Make sure your Spring Boot backend is running on port 8080

2. Start the Angular development server:
```bash
npm start
# or
ng serve
```

3. Open your browser and go to `http://localhost:4200`

## Demo Credentials

- **Username**: admin
- **Password**: admin

## API Endpoints Used

The frontend connects to these backend endpoints:

- `POST /api/login` - Authentication
- `GET/POST/PUT/DELETE /api/books` - Book management
- `GET/POST/PUT/DELETE /api/members` - Member management  
- `GET /api/loans` - Get all loans
- `POST /api/loans/borrow` - Borrow a book
- `POST /api/loans/return` - Return a book

## Project Structure

```
src/app/
├── components/           # Angular components
│   ├── book-form/       # Add/edit book form
│   ├── book-list/       # Books listing
│   ├── borrow-return/   # Loan management
│   ├── login/           # Login form
│   ├── member-form/     # Add/edit member form
│   └── member-list/     # Members listing
├── models/              # TypeScript interfaces
├── services/            # HTTP services
└── auth.guard.ts        # Route protection

```

## Development Notes

- The application uses Angular 15 with Bootstrap 5 for styling
- Font Awesome is included for icons
- All forms include validation and loading states
- Error handling is implemented throughout the application
- The app is fully responsive and works on mobile devices

## Troubleshooting

1. **CORS Issues**: Make sure your Spring Boot backend has CORS enabled for `http://localhost:4200`

2. **Login Issues**: Ensure the backend `/api/login` endpoint is working and returns 'success' for valid credentials

3. **Data Not Loading**: Check the browser console for errors and verify the backend is running on port 8080

4. **Routing Issues**: Make sure all components are properly declared in `app.module.ts`

## Building for Production

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.
