import TodoTemplate from "./TodoTemplate"
import { ITodoData } from "./typing"

class TodoDom extends TodoTemplate {
    private todoWrapper: HTMLElement
    constructor(todoWrapper: HTMLElement) {
        super()
        this.todoWrapper = todoWrapper
    }

    protected addItem(todo: ITodoData) {
        const oItem: HTMLElement = document.createElement('div')
        oItem.className = 'todo-item'
        oItem.innerHTML = this.todoView(todo)
        this.todoWrapper.appendChild(oItem)
    }
}

export default TodoDom