import { AddToDoUseCase } from "../usecases/create-to-do-usecase"

export class AddToDo {
    async handle(req, res) {
        // pega o objeto contido no body da requisição o titulo e descricao
        const { title, description } = req.body

        // se não tiver titulo ou descrição no body da requisição, responde com erro 400 e mensagem de erro.
        if (!title || !description) {
            return res.status(400).json({ error: "missing params" })
        }

        // se tiver titulo e descrição executa o caso de uso para adicionar a tarefa no banco de dados.
        const addToDoUseCase = new AddToDoUseCase()
        const todo = await addToDoUseCase.execute(title, description)

        // retorna a tarefa que foi criada com sucesso
        return res.status(200).json(todo)
    }
}