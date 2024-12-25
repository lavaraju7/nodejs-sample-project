const SuperheroDTO = require('../dtos/superHeroDto');
const superHeroService = require('../services/superHeroService');

class SuperHeroController {
  async createSuperHero(req, res) {
    try {
      const superHeroData = new SuperheroDTO(req.body)
      const user = await superHeroService.registerSuperHero(superHeroData);
      res.status(201).json({ success: true, data: user });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }

  async getSuperHero(req, res) {
    try {
      const user = await superHeroService.getSuperHeroByIdWithPowers(req.params.id);
      if (!user) {
        return res.status(404).json({ success: false, message: 'Super Hero not found in database' });
      }
      res.status(200).json({ success: true, data: user });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateSuperHero(req, res) {
    try {
      const superHeroData = new SuperheroDTO(req.body)
      await superHeroService.updateSuperHero(superHeroData);
      res.status(201).json({ success: true, message:"Super Hero Updated" });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
}

module.exports = new SuperHeroController();
