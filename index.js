const server = require("./server.js");

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});

/*

GET /listAllHubs
GET /hubs

GET /createHub?name=myname
POST /hubs {name=myname}

GET /updateHub?id=3&name=mynewname
PUT /hubs/3 {name=mynewname}

*/
