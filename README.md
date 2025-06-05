# Express.js REST API

## Setup Instructions

1. Clone the repo or download files
2. Run `npm install express`
3. Run `node index.js`

## API Endpoints

### GET `/items`
- Retrieves all items

### GET `/items/:id`
- Retrieves item by ID

### POST `/items`
- Adds a new item
- Body: `{ "name": "Example", "description": "Sample description" }`

### PUT `/items/:id`
- Updates an item
- Body: `{ "name": "Updated", "description": "Updated description" }`

### DELETE `/items/:id`
- Deletes an item

## Example Requests

Use Postman or curl to test endpoints.
