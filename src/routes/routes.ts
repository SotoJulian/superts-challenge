// routes.ts
import express, { Router } from 'express';
import {UserController}  from './../controllers/user.controller';

const router: Router = express.Router();
const userController = new UserController();

router.get('/users', userController.getUsers);
router.post('/signup', userController.signUp);

export default router;
