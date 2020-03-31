const Map = require('../models/map');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne,
}

function index(req, res) {
    Map.find({})
        .then((maps) => {
            res.status(200).json(maps);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}

function create(req, res) {
    Map.create(req.body)
        .then((map) => {
            res.status(201).json(map);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}

function show(req, res) {
    Map.findById(req.params.id)
        .then((map) => {
            res.status(200).json(map)
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}

function update(req, res) {
    Map.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((map) => {
            res.status(200).json(map);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}

function deleteOne(req, res) {
    Map.findByIdAndRemove(req.params.id)
        .then((map) => {
            res.status(200).json(map);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
}