const superHeroRepository = require('../repositories/superHeroRepository');

class SuperHeroService {
  async registerSuperHero(superHero) {
    const existingHero = await superHeroRepository.getSuperheroWithId(superHero.id);
    if (existingHero) {
      throw new Error('Super Hero already exists.');
    }
    return await superHeroRepository.createSuperhero(superHero);
  }

  async updateSuperHero(superHero) {
    const existingHero = await superHeroRepository.getSuperheroWithId(superHero.id);
    if (!existingHero) {
      throw new Error('Super Hero data not available in the database');
    }
    return await superHeroRepository.updateSuperHero(superHero.id,superHero);
  }

  async getSuperHeroByIdWithPowers(id) {
    return await superHeroRepository.getSuperheroByIdWithPowers(id);
  }

  async getAllHeroes() {
    return await superHeroRepository.findAll();
  }
}

module.exports = new SuperHeroService();
