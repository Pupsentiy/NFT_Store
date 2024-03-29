const jwt = require('jsonwebtoken')
const { fn } = require('sequelize/types')

module.exports = function(role){
  return function(req,res,next){
    if(req.mothod === 'OPTIONS'){
      next()
    }
    try {
      const token = req.headers.authorization.split(' ')[1]
      if(!token){
        return res.status(401).json({message:"Не авторизован"})
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY)
      if(decoded.role !== role){
        return res.status(403).json({message:"Нет доступа"})
      }
      req.user = decoded
      next()
    } catch (e) {
      res.status(401).json({message:"Не авторизован"})
    }
  }
}

fn('ADMIN')




// проверка роли в этом приложении пока под вопросом





