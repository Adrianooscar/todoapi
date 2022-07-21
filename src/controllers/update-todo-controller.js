import { UpdateToDoUseCase } from "../usecases/update-todo-usecase"

export class UpdateToDo {
    async handle(req, res) {

        // pega o id no parametro da requisição
        const { id } = req.params

        // pega status no corpo da requisição
        const { status } = req.body

        // se nao tiver id retorna status 400 e menssagem de erro
        if (!id) {
            return res.status(400).json({ error: "id not found" })
        }

        // se nao tiver status retorna status 400 e menssagem de erro
        if (!status) {
            return res.status(400).json({ error: "status not found" })
        }

        // se tiver id e status executa o caso de uso para atualizar o status da tarefa
        const updateToDoUseCase = new UpdateToDoUseCase()
        const updatedTodo = await updateToDoUseCase.execute(id, status)

        // retorna a tarefa com o status atualizado
        return res.status(200).json(updatedTodo)
    }
}