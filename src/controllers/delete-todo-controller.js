import { DeleteToDoUseCase } from "../usecases/delete-to-do-list-usecase"

export class DeleteToDo {
    async handle(req, res) {

        // pega o id no parametro da requisição
        const { id } = req.params

        // se nao tiver id retorna status 400 e menssagem de erro
        if (!id) {
            return res.status(400).json({ error: "id not found" })
        }

        // se tiver id  executa o caso de uso para deletar o status da tarefa
        const eleteToDoUseCase = new DeleteToDoUseCase()
        await eleteToDoUseCase.execute(id)

        // retorna um status 204, sem conteudo
        return res.status(204).send()
    }
}