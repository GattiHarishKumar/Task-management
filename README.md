
# Task Management System

A full-stack Task Management application built with **Spring Boot** (Java) for the backend and **React** for the frontend.

## Features

- Create, read, update, and delete (CRUD) tasks
- RESTful API with Spring Boot
- React-based UI
- Cross-Origin Resource Sharing (CORS) configuration
- Modular code with clear separation of frontend and backend

## Technologies Used

### Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- H2 / MySQL (configurable)
- Maven

### Frontend
- React
- Axios (for API calls)
- HTML/CSS/JS

## Project Structure

```
Task-management-main/
│
├── backend/                 # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/taskmanager/
│   │   │   │   ├── controller/          # REST API controllers
│   │   │   │   ├── model/               # JPA entities
│   │   │   │   ├── repository/          # Spring Data repositories
│   │   │   │   └── config/              # CORS and other configurations
│   │   │   └── resources/
│   │   │       └── application.properties
│   ├── pom.xml              # Maven configuration
│
├── task-manager-frontend/   # React frontend
│   ├── src/
│   ├── package.json
│   └── README.md
````

## Getting Started

### Prerequisites

- Java 17+
- Node.js & npm
- Maven

---

## Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
````

2. Run the application:

```bash
./mvnw spring-boot:run
```

3. The backend will start at `http://localhost:8080`

---

## Frontend Setup

1. Navigate to the frontend directory:

```bash
cd task-manager-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. The frontend will start at `http://localhost:3000`

---

## API Endpoints

Example endpoints exposed by the backend:

| Method | Endpoint          | Description     |
| ------ | ----------------- | --------------- |
| GET    | `/api/tasks`      | Get all tasks   |
| POST   | `/api/tasks`      | Create new task |
| PUT    | `/api/tasks/{id}` | Update task     |
| DELETE | `/api/tasks/{id}` | Delete task     |

---


