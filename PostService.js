import { post } from './Post.js';

class PostService {
  async create(newPost) {
    const createdPost = await post.create(newPost);
    return createdPost;
  }

  async getAll() {
    const posts = await post.find();
    return posts;
  }

  async getOne(id) {
    if (id) {
      const findedPost = await post.findById(id);
      return findedPost;
    } else if (!id) {
      throw new Error('ID is required');
    }
  }

  async update(newPost) {
    if (newPost._id) {
      const updatedPost = await post.findByIdAndUpdate(newPost._id, newPost, { new: true });
      return updatedPost;
    } else if (!newPost._id) {
      throw new Error('ID is required');
    }
  }

  async delete(id) {
    if (id) {
      const deletedPost = await post.findByIdAndDelete(id);
      return deletedPost;
    } else if (!id) {
      throw new Error('ID is required');
    }
  }
};

const postService = new PostService;

export { postService };
