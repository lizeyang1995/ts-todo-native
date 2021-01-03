import { ITodoData } from "./typing"

//操作数据
class TodoEvent {
    private todoData: ITodoData[]
    constructor(todoData: ITodoData[]) {
        this.todoData = todoData
    }

    public addTodo(todo: ITodoData): undefined | number {
        const _todo: null | ITodoData = this.todoData.find((item: ITodoData) => item.content === todo.content)

        if (!_todo) {
            this.todoData.push(todo)
            return
        }

        return 404
    }

    public removeTodo() {

    }

    public toggleComplete() {

    }
}

export default TodoEvent