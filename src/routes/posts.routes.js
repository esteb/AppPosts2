const { Router } = require("express");
const { getTodosPosts, getPost, creaPost, eliminaPost, actualizaPost } = require('../controllers/posts.controller');


const router = Router();

router.get('/posts', getTodosPosts);

router.get('/posts/:id', getPost);

router.post('/posts', creaPost);

router.delete('/posts/:id', eliminaPost);

router.put('/posts/:id', actualizaPost);

module.exports =router;