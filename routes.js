const express = require("express");

const router = express.Router();

// routes go here




//Update - EB
router.put('/films/:id', async (req, res) => {
    try {
        const film = await Films.findByIdAndUpdate({ _id }, req.params.id);
        film.name = req.body.name
        film.price = req.body.price
        film.save();
        res.send(film);

    } catch {
        res.status(404);
        res.send({ error: "Database error Film did not updated." })
    }
})

//Patch Update Many - EB
router.patch('/films/:id', async (req, res) => {
    try {
        const film = await Films.findById(req.params.id);
        film.name = req.body.name || film.name
        film.price = req.body.rpice || film.price



        film.save();
        res.send(film);
    } catch {
        res.status(404);
        res.send({ error: "Database error Film did not updated. (Film not found)" })
    }
})


// Delete - EB
router.delete('/films/:id', async (req, res) => {
    try {
        const film = await Films.findByIdAndRemove(req.params.id);
        res.send(film);
    } catch {
        res.status(404);
        res.send({ error: "Film doesn't exist" })
    }
})


module.exports = router;