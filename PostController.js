import { post } from './Post.js';
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
      const posts = await post.find();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        const findedPost = await post.findById(id);
        return res.json(findedPost);
      } else if (!id) {
        res.status(400).json({ message: 'ID is required' });
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const resPost = req.body;
      if (resPost._id) {
        const updatedPost = await post.findByIdAndUpdate(resPost._id, resPost, { new: true });
        return res.json(updatedPost);
      } else if (!resPost._id) {
        res.status(400).json({ message: 'ID is required' });
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        const deletedPost = await post.findByIdAndDelete(id);
        return res.json(deletedPost);
      } else if (!id) {
        res.status(400).json({ message: 'ID is required' });
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

const postController = new PostController;

export { postController };
