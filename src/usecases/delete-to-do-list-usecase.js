import { Todo } from '../models/to-do'

export class DeleteToDoUseCase {
    async execute(id) {

        // verifica se existe uma todo com o id recebido
        const todo = await Todo.findByPk(id)

        // excluir o contato
        await todo.destroy()
    }
}