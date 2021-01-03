import TodoTemplate from "./TodoTemplate"
import { ITodoData } from "./typing"

class TodoDom extends TodoTemplate {
    private todoWrapper: HTMLElement
    constructor(todoWrapper: HTMLElement) {
        super()
        this.todoWrapper = todoWrapper
    }

    protected addItem(todo: ITodoData) {

    }
}

export default TodoDom