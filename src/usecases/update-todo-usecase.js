import { Todo } from '../models/to-do'

export class UpdateToDoUseCase {
    async execute(id, status) {

        // verifica se existe uma todo com o id recebido
        const updateTodo = await Todo.findByPk(id)

        // caso exista a todo, atualiza o status da mesma
        updateTodo.status = status

        // salva a todo
        const todo = await updateTodo.save()

        // retorna a todo com o status atualizado
        return todo
    }
}