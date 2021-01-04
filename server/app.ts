import express, { Application } from 'express';
import bodyParse from 'body-parser'
import { fileOperation, readFile, writeFile } from './utils';
import { ITodoData } from '../src/js/typing';

const app: Application = express();

app.use(bodyParse.urlencoded({ extended: true }))//对post进行解析
app.use(bodyParse.json())//对json进行解析

//设置跨域
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')//所有请求头都允许跨域
    res.header('Access-Control-Allow-methods', 'POST,GET,PUT,DELETE,OPTIONS')
    next()
})

app.get('/todolist', function (req, res) {
    //读取todo.json响应给前端
    const todoList: string = fileOperation('todo.json') as string
    res.send(todoList)
})

app.post('/toggle', function (req, res) {
    const id: number = parseInt(req.body.id)
    fileOperation('todo.json', function(todoList: ITodoData[]) {
        return todoList.map((todo: ITodoData) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
    })
    res.send({
        msg: 'ok',
        statusCode: '200'
    })
})

app.post('/remove', function (req, res) {
    const id: number = parseInt(req.body.id)
    fileOperation('todo.json', function(todoList: ITodoData[]) {
        return todoList.filter((todo: ITodoData) => todo.id !== id)
    })
    res.send({
        msg: 'ok',
        statusCode: '200'
    })
})

app.post('/add', function (req, res) {

})

app.listen(8080, function () {
    console.log('listening on port 8080');

})