import express, { Application } from 'express';
import bodyParse from 'body-parser'

const app: Application = express();

app.use(bodyParse.urlencoded({ extended: true }))//对post进行解析
app.use(bodyParse.json())//对json进行解析

//设置跨域
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')//所有请求头都允许跨域
    res.header('Access-Control-Allow-methods', 'POST,GET,PUT,DELETE,OPTIONS')
    next()
})

app.get('/todolist', function(req, res) {

})

app.post('/toggle', function(req, res) {
    
})

app.post('/remove', function(req, res) {
    
})

app.post('/add', function(req, res) {
    
})

app.listen(8080, function() {
    console.log('listening on port 8080');
    
})