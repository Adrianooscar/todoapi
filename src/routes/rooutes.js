import Router from 'express'
import { AddToDo } from '../controllers/add-todo-controller';
import { DeleteToDo } from '../controllers/delete-todo-controller';
import { ListToDos } from '../controllers/list-todos-controller';
import { UpdateToDo } from '../controllers/update-todo-controller';

const todoRoutes = Router()

// Rota para listar tarefas,  Metodo HTTP GET
const listToDos = new ListToDos()
todoRoutes.get('/list', listToDos.handle)


// Rota para adicionar uma tarefa,  Metodo HTTP POST
const addToDo = new AddToDo()
todoRoutes.post('/add', addToDo.handle)


// Rota para atualizar um tarefa,  Metodo HTTP PUT
const updateToDo = new UpdateToDo()
todoRoutes.put('/update/:id', updateToDo.handle)


// Rota para deletar um tarefa,  Metodo HTTP DELETE
const deleteToDo = new DeleteToDo()
todoRoutes.delete('/delete/:id', deleteToDo.handle)

export { todoRoutes }