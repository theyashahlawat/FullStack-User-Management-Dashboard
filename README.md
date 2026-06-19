
 MODERN FULL-STACK USER MANAGEMENT DASHBOARD
 ===================================================================

A sleek, production-ready Full-Stack CRUD application featuring a highly responsive, modern dark-themed UI. This project demonstrates end-to-end data flow between a React (Vite) frontend and a Java Spring Boot REST API backend connected to a relational database.

--------------------------------------------------------------------
🛠️ TECH STACK & ARCHITECTURE
--------------------------------------------------------------------

Frontend:
- Framework: React.js (Powered by Vite for blazing-fast builds)
- API Client: Axios (Handles asynchronous HTTP requests & automatic JSON parsing)
- Styling: Modern Dark UI / Glassmorphic CSS design patterns

Backend:
- Framework: Java Spring Boot
- Data Access: Spring Data JPA
- Database: MySQL / H2 Database
- Architecture: Controller-Service-Repository Pattern with DTO Mapping

--------------------------------------------------------------------
⚡ KEY FEATURES
--------------------------------------------------------------------

- Full 100% CRUD Lifecycle: Seamless implementation of Create, Read, Update, and Delete operations.
- Dynamic UI State Management: Real-time UI updates upon database mutations without forcing a hard browser reload.
- Cross-Origin Resource Sharing (CORS): Properly configured security filters to allow secure client-server communication (@CrossOrigin).
- Robust Exception Handling: Integrated API request loaders and dynamic error feedback messages.

--------------------------------------------------------------------
🔄 API ENDPOINTS DOCUMENTED
--------------------------------------------------------------------

HTTP Method | Endpoint | Description | Payload (JSON)
--------------------------------------------------------------------
GET         | /api/user       | Fetches all registered users from DB | None
POST        | /api/user       | Deploys a new user instance into DB  | { "firstName": "...", "lastName": "...", "email": "..." }
PUT         | /api/user/{id}  | Updates details of an existing user  | { "firstName": "...", "lastName": "...", "email": "..." }
DELETE      | /api/user/{id}  | Purges a user record by unique ID    | None

--------------------------------------------------------------------
🚀 GETTING STARTED
--------------------------------------------------------------------

1. Backend Setup (Spring Boot)
- Navigate to the backend directory.
- Configure your database settings in src/main/resources/application.properties.
- Run the Spring Boot application via your IDE or terminal:
  mvn spring-boot:run
- The server will spin up at http://localhost:8080.

2. Frontend Setup (React + Vite)
- Navigate to the frontend directory (my-react-app).
- Install the necessary NPM dependencies tracked in package.json:
  npm install
- Boot up the local Vite development server:
  npm run dev
- Open your browser and navigate to http://localhost:5173.

--------------------------------------------------------------------
📝 KEY TAKEAWAYS (WHAT I MASTERED)
--------------------------------------------------------------------
- Developed a deep understanding of the client-server request-response lifecycle.
- Handled advanced backend-to-frontend object structural mappings using custom UserDto templates.
- Overcame browser Same-Origin Policy hurdles by configuring backend CORS protocols.
- Mastered declarative UI rendering based on continuous asynchronous REST responses.
