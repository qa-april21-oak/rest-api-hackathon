const express = require("express");

const router = express.Router();

const Film = require("./film")
// routes go here

router.post("/film", async (req, res) => {
	const film = new Film({
		// TODO
	})

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