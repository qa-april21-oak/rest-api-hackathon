const express = require("express");

const router = express.Router();

const Film = require("./models/film")

// routes go here




//Update - EB
router.put('/films/:id', async (req, res) => {
    try {
        const film = await Films.findById(req.params.id);
        film.title = req.body.title
        film.description = req.body.description
        film.dateRelease = req.body.dateRelease
        film.filmTime = req.body.filmTime
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
        film.title = req.body.title || film.title
        film.description = req.body.description || film.description
        film.dateRelease = req.body.dateRelease || film.dateRelease
        film.filmTime = req.body.filmTime || film.filmTime
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


router.post("/film", async (req, res) => {
	const film = new Film({
		// TODO
		title: req.body.title,
		description: req.body.description,
		dateRelease: req.body.dateRelease,
		filmTime: req.body.filmTime
	});

	await film.save();

	res.send(film);
})

router.get("/film/:id", async(req, res) => {
	
	try {
		const film = await Film.findById(req.params.id);
		res.send(prod);

	} catch {
		res.status(404).send("No film found");
	}

})


module.exports = router;