import { Todo } from '../models/to-do'

export class ListToDosUseCase {
    async execute() {

        // lista todas as tarefas existentes no banco de dados
        const addToDo = await Todo.findAll()
        return addToDo
    }
}