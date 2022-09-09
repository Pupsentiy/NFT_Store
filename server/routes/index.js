const Router = require('express')
const router = new Router()
const cardRouter = require('./cardRouter')
const categoryRouter = require('./categoryRouter')
const userRouter = require('./userRouter')





router.use('/user',userRouter)
router.use('/card',cardRouter)
router.use('/category',categoryRouter)

module.exports = router