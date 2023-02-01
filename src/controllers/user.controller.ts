// user.controller.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/users';

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async signUp(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      // Validar nombre y contraseña
      if (!username || !password) {
        res.status(400).send('Nombre y contraseña son requeridos');
        return;
      }

      // Encriptar contraseña
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = new User({ username, password: hashedPassword, creation: new Date() });

      await user.save();
      res.send('Usuario creado correctamente');
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}








