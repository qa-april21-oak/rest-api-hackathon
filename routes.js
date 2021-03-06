const express = require("express");

const router = express.Router();

const Film = require("./models/film")

// routes go here

//Update - EB
router.put('/films/:id', async (req, res) => {
    try {
        const film = await Film.findById(req.params.id);
        film.title = req.body.title
        film.description = req.body.description
        film.dateRelease = req.body.dateRelease
		film.actors = req.body.actors;
		film.reviews = req.body.reviews;
        film.save();
        res.send(film);

    } catch {
        res.status(404);
        res.send({ error: "Database error Film did not updated." });
    }
})

//Patch Update Many - EB
router.patch('/films/:id', async (req, res) => {
    try {
        const film = await Film.findById(req.params.id);

        film.title = req.body.title || film.title;
        film.description = req.body.description || film.description;
        film.dateRelease = req.body.dateRelease || film.dateRelease;
		film.actors = req.body.actors || film.actors;
		film.reviews = req.body.reviews || film.reviews;
        film.save();
        res.send(film);
    } catch (e) {
		console.log(e);
        res.status(404);
        res.send({ error: "Database error Film did not updated. (Film not found)" })
    }
})


// Delete - EB
router.delete('/films/:id', async (req, res) => {
    try {
        const film = await Film.findByIdAndRemove(req.params.id);
        res.send(film);
    } catch {
        res.status(404);
        res.send({ error: "Film doesn't exist" })
    }
});


router.post("/film", async (req, res) => {

	try {
	const film = new Film({
		title: req.body.title,
		description: req.body.description,
		dateRelease: req.body.dateRelease,
	});

	await film.save();

	res.send(film);
	} catch (e) {
		res.status(404).send(e.name + ': ' + e.message);
	}
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