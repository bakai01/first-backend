import Router from 'express';

import { postController } from './PostController.js';

const router = new Router();

router.post('/createPost', postController.create);
router.get('/posts', postController.getAll);
router.get('/post/:id', postController.getOne);
router.put('/updatePost', postController.update);
router.delete('/post/:id', postController.delete);

export { router };
