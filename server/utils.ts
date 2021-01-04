import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { ITodoData } from '../src/js/typing'

export function readFile(path: string): string {
    return readFileSync(resolve(__dirname, path), 'utf8')
}

export function writeFile<T>(path: string, data: T): void {
    writeFileSync(resolve(__dirname, path), JSON.stringify(data))
}

export function fileOperation(path: string, fn?: any): string | void {
    let todoList: ITodoData[] = JSON.parse(readFile('todo.json') || '[]')//如果todo.json里面没有东西，则给他空数组
    //如果fn不存在，则说明是读取文件
    if (!fn) {
        return JSON.stringify(todoList)
    }
    //否则是读取加写入
    todoList = fn(todoList)
    writeFile<ITodoData[]>(path, todoList)
}