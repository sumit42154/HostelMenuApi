# Hostel Menu API

A simple Express + MongoDB API for managing mess menus for Hostel 3 and Hostel 8.

Api link

```bash
https://hostelmenuapi.onrender.com
```

## Features

- Add a daily meal plan for hostel mess menus
- Update an existing day's meal plan
- Retrieve meal details for a specific day
- Retrieve the full week menu for each hostel
- Basic user registration and login endpoints

## Tech Stack

- Node.js
- Express
- MongoDB via Mongoose
- dotenv for environment configuration

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sumit42154/HostelMenuApi.git
cd "Mess Menu Api"
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with the following values:

```env
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
```

4. Start the server:

```bash
npm start
```

## API Base URL

`http://localhost:<PORT>/api`

If `PORT` is not set, the app will fail to start, so ensure it is defined in `.env`.

## Routes

### Hostel 3

Base path: `/api/hostel3`

- `POST /add`
  - Adds a new day's menu for Hostel 3.
  - Request body:
    ```json
    {
      "day": "Monday",
      "breakfast": "Poha",
      "lunch": "Rice and dal",
      "eveningTea": "Samosa",
      "dinner": "Chapati and sabzi"
    }
    ```

- `POST /update`
  - Updates an existing day's menu for Hostel 3.
  - Request body:
    ```json
    {
      "day": "Monday",
      "breakfast": "Upma",
      "lunch": "Rice and chana",
      "eveningTea": "Bread pakora",
      "dinner": "Chapati and paneer"
    }
    ```

- `POST /showmeal/day`
  - Retrieves the menu for a specific day.
  - Request body:
    ```json
    {
      "day": "Monday"
    }
    ```

- `GET /showmeal/week`
  - Retrieves all stored daily menus for Hostel 3.

### Hostel 8

Base path: `/api/hostel8`

- `POST /add`
  - Adds a new day's menu for Hostel 8.
  - Request body:
    ```json
    {
      "day": "Monday",
      "breakfast": "Poha",
      "lunch": "Rice and dal",
      "eveningTea": "Samosa",
      "dinner": "Chapati and sabzi"
    }
    ```

- `POST /update`
  - Updates an existing day's menu for Hostel 8.
  - Request body:
    ```json
    {
      "day": "Monday",
      "breakfast": "Upma",
      "lunch": "Rice and chana",
      "eveningTea": "Bread pakora",
      "dinner": "Chapati and paneer"
    }
    ```

- `POST /showmeal/day`
  - Retrieves the menu for a specific day.
  - Request body:
    ```json
    {
      "day": "Monday"
    }
    ```

- `GET /showmeal/week`
  - Retrieves all stored daily menus for Hostel 8.

### Authentication

Base path: `/api/hostel`

- `POST /register`
  - Registers a new user.
  - Request body:
    ```json
    {
      "username": "student1",
      "password": "password123"
    }
    ```

- `POST /login`
  - Logs in a user.
  - Request body:
    ```json
    {
      "username": "student1",
      "password": "password123"
    }
    ```

> Note: This implementation stores passwords in plaintext, so do not use it in production.

## Models

### Hostel3 and Hostel8

Each hostel menu uses the same schema:

- `day` - String
- `breakfast` - String
- `lunch` - String
- `eveningTea` - String
- `dinner` - String

### Login

- `username` - String
- `password` - String

## Notes

- The API currently does not implement authentication tokens or password hashing.
- `showmeal/day` endpoints expect the `day` value in the JSON request body.
- Duplicate day entries are rejected on `add`.

## License

This project is released under the ISC License.
