 # DummyAPI Data Fetch and Store Project

This project is a Node.js application that fetches data from the [DummyAPI](https://dummyapi.io/) and stores it in a MongoDB database.

## Functional Requirements

1. **Login and Create `app_id`**:
   - Before using the APIs, you need to register on the [DummyAPI](https://dummyapi.io/) website and create your `app_id`. Save this `app_id` for using it in the project.

2. **Fetch Users Data**:
   - Fetch users' data from the DummyAPI using the following endpoint:
     - API Endpoint: `https://dummyapi.io/data/v1/user`
     - Store this data in the `users` table in the database.

3. **Fetch Users' Posts Data**:
   - Fetch users' posts data from the DummyAPI for each user and store it in the database. Use the following endpoint for each user:
     - API Endpoint: `https://dummyapi.io/data/v1/user/{{user_id}}/post`
     - Replace `{{user_id}}` with the actual user ID.
     - Store the posts data in the database.

## Getting Started

Follow these steps to get the project up and running.

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/dummyapi-data-fetch.git
   cd dummyapi-data-fetch
```

Below is a README.md file for your project that includes functional requirements and code examples:

markdown
Copy code
# DummyAPI Data Fetch and Store Project

This project is a Node.js application that fetches data from the [DummyAPI](https://dummyapi.io/) and stores it in a MongoDB database.

## Functional Requirements

1. **Login and Create `app_id`**:
   - Before using the APIs, you need to register on the [DummyAPI](https://dummyapi.io/) website and create your `app_id`. Save this `app_id` for using it in the project.

2. **Fetch Users Data**:
   - Fetch users' data from the DummyAPI using the following endpoint:
     - API Endpoint: `https://dummyapi.io/data/v1/user`
     - Store this data in the `users` table in the database.

3. **Fetch Users' Posts Data**:
   - Fetch users' posts data from the DummyAPI for each user and store it in the database. Use the following endpoint for each user:
     - API Endpoint: `https://dummyapi.io/data/v1/user/{{user_id}}/post`
     - Replace `{{user_id}}` with the actual user ID.
     - Store the posts data in the database.

## Getting Started

Follow these steps to get the project up and running.

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/dummyapi-data-fetch.git
```
### Install project dependencies:

```bash
npm install
```

### Create a .env file in the project root and add your app_id and MongoDB connection string:

APP_ID=your_dummyapi_app_id
MONGODB_URI=your_mongodb_connection_string
Start the server:

```bash
node app.js
```

The server will start at http://localhost:3000.

### API Routes
- /api/users: Fetch users' data from the DummyAPI and store it in the database.
-/api/posts: Fetch users' posts data from the DummyAPI and store it in the database.

## Environment Variables
APP_ID: Your DummyAPI app_id.
MONGODB_URI: MongoDB connection string.

## Contributing
Contributions to this project are welcome. You can contribute by following these steps:
Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test them.
Commit your changes.
Push your changes to your fork.
Create a pull request to the main repository.