import TodoDom from "./TodoDom"
import { getTodoList, removeTodo } from "./TodoService"
import { ITodoData } from "./typing"

//操作数据
class TodoEvent extends TodoDom  {
    private todoData: ITodoData[]
    constructor(todoData: ITodoData[], todoWrapper: HTMLElement) {
        super(todoWrapper)
        this.todoData = todoData
        this.init(this.todoData)
    }

    @getTodoList //添加一个装饰器，先去请求数据，拿到的数据todoData传给init，然后init再去执行下面的程序，这样子this.todoData就有后端回来的数据了
    private init(todoData: ITodoData[]) {
        this.todoData = todoData
        this.initList(this.todoData)
    }

    public addTodo(todo: ITodoData): undefined | number {
        const _todo: null | ITodoData = this.todoData.find((item: ITodoData) => item.content === todo.content)

        if (!_todo) {
            this.todoData.push(todo)
            this.addItem(todo)
            return
        }

        return 404
    }
    @removeTodo
    public removeTodo(target: HTMLElement, id: number): void {
        this.todoData = this.todoData.filter((todo: ITodoData) => todo.id !== id)
        this.removeItem(target)
    }

    public toggleComplete(target: HTMLElement, id: number): void {
        this.todoData = this.todoData.map((todo: ITodoData) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                this.changeCompleted(target, todo.completed)
            }
            return todo
        })
    }
}

export default TodoEvent