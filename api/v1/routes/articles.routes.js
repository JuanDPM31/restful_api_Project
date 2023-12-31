const {Router} = require('express')
const articleController = require ('../../../controllers/articleController')
const router  = Router()
router.get('/', articleController.getAllArticles);
router.get('/:ArticleId', articleController.getArticle);
router.post ('/', articleController.createArticle);
router.put ('/:ArticleId',articleController.updateArticle);
router.delete ('/:ArticleId',articleController.deleteArticle);
module.exports = router;