import TodoTemplate from "./TodoTemplate"
import { ITodoData } from "./typing"
import { findParentNode } from "./utils"

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

    protected removeItem(target: HTMLElement) {
        const oParentNode = findParentNode(target, 'todo-item')
        oParentNode.remove();
    }
}

export default TodoDom