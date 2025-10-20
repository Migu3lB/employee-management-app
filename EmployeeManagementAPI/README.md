# Employee Management API

RESTful API for managing employee records with simple token-based authentication.

## Features

- Full CRUD operations
- In-Memory database using Entity Framework Core
- Simple token-based authentication
- Swagger/OpenAPI documentation

**Token:** `miguels-demo-token`

### Example Request
```bash
curl -X GET "https://localhost:7xxx/employee" \
  -H "Authorization: Bearer miguels-demo-token"
```

## Endpoints

### Get All Employees
```
GET /employee
```

### Get Employee by ID
```
GET /employee/{id}
```

### Create Employee
```
POST /employee
Content-Type: application/json

{
  "firstName": "Maria",
  "lastName": "Marinez",
  "email": "maria.marin@example.com",
  "position": "Software Engineer"
}
```

### Update Employee
```
PUT /employee/{id}
Content-Type: application/json

{
  "firstName": "Maria",
  "lastName": "Marinez",
  "email": "maria.marin@example.com",
  "position": "Software Engineer"
}
```

### Delete Employee
```
DELETE /employee/{id}
```

## Validation Rules

- **FirstName**: Required, max 100 characters
- **LastName**: Required, max 100 characters
- **Email**: Required, valid email format, max 200 characters
- **Position**: Required, max 100 characters

## Running the API

1. Restore dependencies:
```bash
dotnet restore
```

2. Run the application:
```bash
dotnet run
```

3. Access Swagger UI:
```
https://localhost:7xxx/swagger
```

## CORS Configuration

The API allows requests from:
- `http://localhost:3000` (React/Next.js frontend)

## Sample Data

The API starts with 3 sample employees:
1. Miguel Bermeo - Full Stack Developer
2. Ana García - Backend Developer
3. Carlos López - Frontend Developer
