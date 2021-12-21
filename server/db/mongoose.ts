import { Types, Schema, model, connect } from 'mongoose';

interface UserObj {
  username: string;
  password: string;
  blogCount: number;
}

interface BlogObj {
  blogTitle: string;
  blogContent: string;
  author: Types.ObjectId;
}

const userSchema = new Schema<UserObj>({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    min: [4, 'Username should be at least 4 characters!'],
    max: [27, 'Username should at most 27 characters!'],
  },
  password: {
    type: String,
    trim: true,
    required: true,
    min: [6, 'Username should be at least 6 characters!'],
    max: [31, 'Username should at most 31 characters!'],
  },
  blogCount: {
    type: Number,
    default: 0,
  },
});

const blogSchema = new Schema<BlogObj>({
  blogTitle: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    min: [10, 'Username should be at least 10 characters!'],
    max: [50, 'Username should at most 50 characters!'],
  },
  blogContent: {
    type: String,
    trim: true,
    required: true,
    min: [50, 'Username should be at least 50 characters!'],
    max: [500, 'Username should at most 500 characters!'],
  },
  author: {
    type: Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const User = model<UserObj>('User', userSchema);
const Blog = model<BlogObj>('Blog', blogSchema);

async function run(): Promise<void> {
  await connect('mongodb://localhost:27017/blogApp');
}

export { User, Blog, run as connectMongo };
