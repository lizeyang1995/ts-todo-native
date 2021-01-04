import $ from 'jquery'
import { ITodoData } from './typing'

//这个是TodoEvent里的装饰器制定的函数
//第一个参数：装饰器所在的对象
//第二个参数：装饰器所在的函数的名称
//第三个参数：描述器，其中的value就是装饰器所在的函数本身
export function getTodoList(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
): void {
    const _origin = descriptor.value//先保存原先的init函数
    //重写init函数，是为了先发请求，给todoData赋上res的json对象，然后再把todoData传给原来的init函数
    descriptor.value = function (todoData: ITodoData[]) {
        $.get('http://localhost:8080/todolist').then((res: string) => {
            if (!res) {
                return
            }
            todoData = JSON.parse(res)
        }).then(() => {
            _origin.call(this, todoData)
        })
    }
}

export function removeTodo(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
): void {
    const _origin = descriptor.value
    descriptor.value = function (target: HTMLElement, id: number) {
        $.post('http://localhost:8080/remove', { id }).then(res => {
            _origin.call(this, target, id)
        })
    }
}

export function toggleComplete(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
): void {
    const _origin = descriptor.value
    descriptor.value = function (target: HTMLElement, id: number) {
        $.post('http://localhost:8080/toggle', { id }).then(res => {
            _origin.call(this, target, id)
        })
    }
}