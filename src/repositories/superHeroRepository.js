const Superhero = require('../models/superHeroModel');

class SuperHeroRepository {
  async createSuperhero(heroData) {
    return await Superhero.query().insertGraph(heroData);
  }

  async getSuperheroWithId(superheroId) {
    return await Superhero.query()
      .findById(superheroId)
  }

  async getSuperheroByIdWithPowers(superheroId) {
    return await Superhero.query()
      .select()
      .findById(superheroId)
      .withGraphFetched('powers')
  }

  async findAll() {
    return await Superhero.query().select();
  }

  async updateSuperHero(id, updateData) {
    return await Superhero.query().update(updateData).where('id',id)
  }

  async deleteById(id) {
    return await Superhero.findByIdAndDelete(id);
  }
}

module.exports = new SuperHeroRepository();
