import { postService } from './PostService.js';

class PostController {
  async create(req, res) {
    try {
      const post = await postService.create(req.body);
      res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await postService.getAll();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getOne(req, res) {
    try {
      const findedPost = await postService.getOne(req.params.id);
      return res.json(findedPost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await postService.update(req.body);
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    try {
      const deletedPost = await postService.delete(req.params.id);
      return res.json(deletedPost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

const postController = new PostController;

export { postController };
