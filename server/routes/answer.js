const router = require('express').Router()
const answerController = require('../controllers/answer')
const { authentication } = require('../middlewares/authentication')

router.get('/:questionId', answerController.findAll)
router.use(authentication)
router.post('/:questionId', answerController.create)
router.patch('/:id', answerController.update)
router.delete('/:id', answerController.delete)
router.post('/:id/upvote', answerController.upvote)
router.post('/:id/downvote', answerController.downvote)

module.exports = router
