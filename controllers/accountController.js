const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Account
            .find({})
            .populate("note")
            .populate("item")
            .then(dbAccount => res.json(dbAccount))
            .catch(err => res.status(422).json(err));
    },
    findByNoteId: function (req, res) {
        db.Account
            .findOne({ _id: req.params.id })
            .populate("note")
            .then(dbAccount => res.json(dbAccount))
            .catch(err => res.status(422).json(err));
    },
    findByItemId: function (req, res) {
        db.Account
            .findOne({ _id: req.params.id })
            .populate("item")
            .then(dbAccount => res.json(dbAccount))
            .catch(err => res.status(422).json(err));
    },
    createItem: function (req, res) {
        db.Item
            .create(req.body)
            .then(function (dbItem) {
                return db.Account.findOneAndUpdate(
                    { _id: req.params.id },
                    { item: dbItem._id }
                ).then(dbAccount => res.json(dbAccount))
                    .catch(err => res.status(422).json(err));
            })
    },
    createNote: function (req, res) {
        db.Note
            .create(req.body)
            .then(function (dbNote) {
                return db.Account.findOneAndUpdate(
                    { _id: req.params.id },
                    { note: dbNote._id }
                ).then(dbAccount => res.json(dbAccount))
                    .catch(err => res.status(422).json(err));
            })
    },
    removeItem: function (req, res) {
        db.Item
            .findById({ _id: req.params.id })
            .then(dbAccount => dbAccount.remove())
            .then(dbAccount => res.json(dbAccount))
            .catch(err => res.status(422).json(err));
    },
    removeNote: function (req, res) {
        db.Note
            .findById({ _id: req.params.id })
            .then(dbAccount => dbAccount.remove())
            .then(dbAccount => res.json(dbAccount))
            .catch(err => res.status(422).json(err));
    }
};








//DELETING NOTES
app.delete("/notes/:id", function (req, res) {
    db.Note.remove({ _id: req.params.id })
        .then(function (err) {
            throw err;
        }).catch(function (dbAccount) {
            res.json(dbAccount);
        });
});

//DELETING ITEMS
app.delete("/items/:id", function (req, res) {
    db.Item.remove({ _id: req.params.id })
        .then(function (err) {
            throw err;
        }).catch(function (dbAccount) {
            res.json(dbAccount);
        });
});


