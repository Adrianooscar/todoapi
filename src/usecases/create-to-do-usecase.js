import { Todo } from '../models/to-do'

export class AddToDoUseCase {
    async execute(title, description) {

        // pega os parametros recebidos pelo controller e insere uma nova tarefa no banco de dados
        const addToDo = await Todo.create({
            title,
            description,
            status: 'ready'
        })
        return addToDo
    }
}