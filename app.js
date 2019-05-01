const express = require('express')
const app = express()

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from root")
})

app.get("/users", (req, res) => {

  //var user1 = {firstName: "Ralph", lastName: "Ferguson"}
  //var user2 = {firstName: "Steph", lastName: "Curry"}
  var user1 = [
  {
    "id": "586678522fe37e66355fcbd0",
    "title": "Article title 1",
    "content": "Lorem ipsum"
  },
  {
    "id": "586678522fe37e66355fcbd2",
    "title": "Article title 2",
    "content": "Ipsum lorem"
  }
]
  var user2 = [
  {
    "id": "586678522fe37e66355fcbd0",
    "title": "Article title 1",
    "content": "Lorem ipsum"
  },
  {
    "id": "586678522fe37e66355fcbd2",
    "title": "Article title 2",
    "content": "Ipsum lorem"
  }
]

  res.json([user1, user2])

  //res.send("Nodemon is working")
})

app.listen(3003, () => {
  console.log("Server is up, listening to 3003.");
 })
