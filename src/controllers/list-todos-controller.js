import { ListToDosUseCase } from "../usecases/list-to-to-usecase"

export class ListToDos {
    async handle(req, res) {

        //executa o caso de uso para listar todas as tarefas
        const listToDosUseCase = new ListToDosUseCase()
        const todos = await listToDosUseCase.execute()

        //retorna a lista de tarefas
        return res.status(200).json(todos)
    }
}