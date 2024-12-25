const express = require('express');
const superHeroController = require('../controllers/superHeroController');

const router = express.Router();

router.post('/superhero', superHeroController.createSuperHero);
router.put('/superhero', superHeroController.updateSuperHero);
router.get('/:id', superHeroController.getSuperHero);

module.exports = router;
