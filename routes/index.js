const router = require('koa-router')()
const ArticleController = require('../controllers/article')
//const ArticleModel = require('../modules/article')
router.get('/', async (ctx, next) => {
  //let data = await ArticleModel.getArticleDetail('1');
  await ctx.render('index',{
    title:'hhaha'
  });
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

/**
 * 文章接口
 */
// 创建文章接口（路由）
router.post('/article', ArticleController.create);
router.get('/getAll', ArticleController.getAll);
// 获取文章详情接口（路由）
router.get('/article/:id', ArticleController.detail);

module.exports = router
