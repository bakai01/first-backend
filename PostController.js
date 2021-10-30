import Post from './Post.js';

class PostController {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (id) {
        const post = await Post.findById(id);
        return res.json(post);
      } else if (!id) {
        res.status(400).json({ message: 'ID is required' });
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      if (post._id) {
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
        return res.json(updatedPost);
      } else if (!post._id) {
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
        const deletedPost = await Post.findByIdAndDelete(id);
        return res.json(deletedPost);
      } else if (!id) {
        res.status(400).json({ message: 'ID is required' });
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

export default new PostController;
