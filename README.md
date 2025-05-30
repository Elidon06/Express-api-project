# Express API Project

This is a simple RESTful API built using Node.js and Express.js.

## Setup Instructions

1. Clone the repository or unzip the downloaded folder.
2. Navigate into the project directory:
   ```bash
   cd express-api-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000`.

## API Endpoints

- `GET /` - Returns "Hello, World!"
- `GET /items` - Returns all items
- `GET /items/:id` - Returns an item by ID
- `POST /items` - Creates a new item (`name` and `description` required)
- `PUT /items/:id` - Updates an item by ID
- `DELETE /items/:id` - Deletes an item by ID

## Example Item Format

```json
{
  "id": 1,
  "name": "Item 1",
  "description": "Description for item 1"
}
```

## Error Handling

- Returns `404` for invalid routes or missing items
- Returns `400` for invalid request data
