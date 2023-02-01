import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface User extends Document {
  username: string;
  password: string;
  createdAt: Date;
}

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    validate: {
      validator: (v: string) => {
        return /^[a-zA-Z0-9_]+$/.test(v);
      },
      message: (props: any) => `${props.value} is not a valid username!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre<User>('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

export const User = mongoose.model<User>('User', UserSchema);
