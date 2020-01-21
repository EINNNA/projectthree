const axios = require("axios");
const router = require("express").Router();

router.get("/frontpage", (req, res) => {
  axios
    .get("https://www.romexchange.com/api?sort=change&sort_dir=desc&sort_server=global", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

import axios from "axios";

export default {
  // Gets all books
  getItem: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getItem: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    return axios.delete("/api/books/" + id);
  },
 
  saveItem: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};


module.exports = router;
