<div align="center">
    <h1>✅  To-do API</h1>  
    <hr />    
</div>

# Sobre

Esta é uma API de lista de tarefas ( To-do list ), nossa API conta com recursos para criar uma tarefa, listar tarefas, atualizar o status de uma tarefa e por fim, deletar uma tarefa após sua conclusão.

# Techs

- [Node.js](https://nodejs.org/en/)
- [express](https://expressjs.com/pt-br/)
- [SQLite3](https://www.sqlite.org/index.html)

# Requeridos para rodar o projeto

- [Node](https://node.js.org/) instalado
- [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) instalado

# Como rodar o projeto

##### Para instalar as dependências

- Execute `npm install` ou `yarn install`.

##### Para iniciar o projeto

- Execute `npm run dev` ou `yarn dev`

# Documentação

### Base url

`http://localhost:3333`
<br>
<br>

<hr />

### Adicionar uma nova to-do

###### url: `http://localhost:3333/add`

###### Método: `POST`

###### Body:

```json
{
  "title": "second to-do",
  "description": "My second to-do"
}
```

###### Response:

```json
{
  "id": 01,
  "title": "First to-do",
  "description": "My first to-do",
  "status": "ready",
  "updatedAt": "2022-07-19T21:11:40.742Z",
  "createdAt": "2022-07-19T21:11:40.742Z"
}
```

###### OBS: Na criação de uma nova tarefa o status é definido automaticamente como `ready`

<br>
<br>
<hr />

### Listar todas as to-dos existentes no banco de dados

###### url: `http://localhost:3333/list`

###### Método: `GET`

###### Response:

```json
[
  {
    "id": 1,
    "title": "First To-do",
    "description": "My first To-do",
    "status": "ready",
    "createdAt": "2022-07-19T17:53:45.157Z",
    "updatedAt": "2022-07-19T20:39:55.611Z"
  },
  {
    "id": 2,
    "title": "Second to-do",
    "description": "My second to-do",
    "status": "ready",
    "createdAt": "2022-07-19T21:11:35.632Z",
    "updatedAt": "2022-07-19T21:57:02.635Z"
  }
]
```

<br>
<br>
<hr />

### Atualizar o status de uma to-do

###### url: `http://localhost:3333/update/[ id da tarefa que queremos atualizar ]`

###### Método: `PUT`

###### Body:

```json
{
  "status": "in progress"
}
```

###### Response:

```json
{
  "id": 01,
  "title": "First to-do",
  "description": "My first to-do",
  "status": "in progress",
  "updatedAt": "2022-07-19T21:11:40.742Z",
  "createdAt": "2022-07-19T21:11:40.742Z"
}
```

###### OBS: o retorno é a tarefa com seu status atualizado.

<br>
<br>
<hr />

### Deletar uma to-do

###### url: `http://localhost:3333/delete/[ id da tarefa que queremos deletar ]`

###### Método: `DELETE`

###### Response:

OBS: responde apenas com um status http 204

<br>
<br>
<br>
<br>

<div align="center">
  <h1>Open Source</h1>
  <sub>Copyright © 2022-present, Adriano.</sub>
  <p>To-do API <a href="https://choosealicense.com/licenses/mit/">is MIT licensed 💖</a></p>
</div>
