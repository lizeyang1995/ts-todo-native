import express, { Application } from 'express';
import bodyParse from 'body-parser'
import { readFile, writeFile } from './utils';
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
    const todoList: string = readFile('todo.json')
    res.send(todoList)
})

app.post('/toggle', function (req, res) {

})

app.post('/remove', function (req, res) {
    const id: number = parseInt(req.body.id)
    let todoList: ITodoData[] = JSON.parse(readFile('todo.json') || '[]')//如果todo.json里面没有东西，则给他空数组
    todoList = todoList.filter((todo: ITodoData) => todo.id !== id)
    writeFile('todo.json', todoList)
})

app.post('/add', function (req, res) {

})

app.listen(8080, function () {
    console.log('listening on port 8080');

})