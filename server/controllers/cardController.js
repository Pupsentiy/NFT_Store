const uuid = require("uuid");
const path = require("path");
const { Card } = require("../models/models");
const ApiError = require("../error/ApiError");

class CardController {
  async create(req, res, next) {
    try {
      let { name, price, author, categoryId, img, avatar } = req.body;
      // const { img } = req.files;
      // const { avatar } = req.files;
      // let fileName = uuid.v4() + ".jpg";
      // img.mv(path.resolve(__dirname, "..", "static", fileName));
      // avatar.mv(path.resolve(__dirname, "..", "static", fileName));

      const card = await Card.create({
        name,
        price,
        author,
        categoryId,
        img,
        avatar,
      });
      return res.json(card);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { categoryId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let card;

    if (!categoryId) { //findAll
      card = await Card.findAndCountAll({  limit, offset });
    }
    if (categoryId) {
      card = await Card.findAndCountAll({ where: { categoryId }, limit, offset });
    }
    return res.json(card);
  }
  async getOne(req, res) {
    const {id} = req.params
    const card = await Card.findOne(
      {
        where:{id},

      }
    )
    return res.json(card)
  }
}

module.exports = new CardController();
