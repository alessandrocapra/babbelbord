/**
 * Created by ale on 08/12/2017.
 */

const {Player} = require('../models')

// TODO: set unique key, so the user cannot be created twice.
// TODO: However, it has to be either name or lastname and potentially not the Id :(

module.exports = {
  async register(req, res) {
    try {
      const player = await Player.create(req.body)
      res.send(player.toJSON())
    } catch(err) {
      res.status(400).send({
        error: 'Name already in use!'
      })
      // user already existing?
    }
  },
  async update(req, res) {
    try {
      await Player.update({
        skipTopics: req.body.skipTopics,
        skipQuestions: req.body.skipQuestions
      }, {
        where: {id: req.body.id}
      }).then(result => res.send(result))
    } catch(err) {
      res.status(400).send({
        error: err.message
      })
      // user already existing?
    }
  },
  async getAllPlayers(req,res) {
    try {
      const players = await Player.findAll({
        order: [
          ['name', 'ASC'],
          ['lastname', 'ASC'],
        ],})
      res.send(players)
    } catch(err) {
      res.status(400).send({
        error: 'Couldn\'t get the players!'
      })
    }
  },
  async getPlayer(req,res) {
    try {
      const player = await Player.findOne({ where: {id: req.params.id} })
      res.send(player)
    } catch(err) {
      res.status(400).send({
        error: 'Couldn\'t get the player details!'
      })
    }
  }
}