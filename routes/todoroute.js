import express from 'express';
import {readTodos,createTodo, updateTodo, deleteTodo} from '../controller/todo.js';

const router = express.Router();
router.get('/',readTodos);
router.post('/',createTodo);
router.patch('/:id',updateTodo);
router.delete('/:id',deleteTodo);
export default router;