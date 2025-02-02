// Import express to set up the server
import express from 'express';

// Create a server instance
const server = express();

// port to operate from
const PORT = 3000;

// serve static content
server.use(express.static('client'));

// start the server
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})