
import Sequelize from 'sequelize'
import { database } from '../database/db'


// tabela de Tarefas 
export const Todo = database.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    status: Sequelize.STRING
})