import Router from 'express';

import PostController from './PostController.js';

const router = new Router();

router.post('/createPost', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/post/:id', PostController.getOne);
router.put('/updatePost', PostController.update);
router.delete('/post/:id', PostController.delete);

export { router };
