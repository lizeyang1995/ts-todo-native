import TodoEvent from "./js/TodoEvent";
import { ITodoData } from "./js/typing"

    ; ((doc) => {
        const oInput: HTMLInputElement = document.querySelector('input')
        const oAddBtn: HTMLElement = document.querySelector('button')
        const oTodoList: HTMLElement = document.querySelector('.todo-list')

        const todoData: ITodoData[] = [
            {
                id: 1,
                content: '123',
                completed: false
            },
            {
                id: 2,
                content: '456',
                completed: true
            },
            {
                id: 3,
                content: '789',
                completed: false
            },
        ]

        const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList)

        const init = (): void => {
            bindEvent()
        }

        function bindEvent(): void {
            oAddBtn.addEventListener('click', handleAddBtnClick, false)
            oTodoList.addEventListener('click', handleListClick, false)
        }

        function handleAddBtnClick(): void {
            const val: string = oInput.value.trim()
            if (val.length) {
                const ret = todoEvent.addTodo(<ITodoData>{
                    id: todoEvent.todoData[todoEvent.todoData.length - 1].id + 1,
                    content: val,
                    completed: false
                })
                if (ret && ret === 404) {
                    alert('列表项已经存在')
                    return
                }
                oInput.value = ''
            }
        }

        function handleListClick(e: MouseEvent): void {
            const tar = e.target as HTMLElement
            const tagName = tar.tagName.toLocaleLowerCase()

            if (tagName === 'input' || tagName === 'button') {
                const id = parseInt(tar.dataset.id)
                switch (tagName) {
                    case 'input':
                        todoEvent.toggleComplete(tar, id)
                        break;
                    case 'button':
                        todoEvent.removeTodo(tar, id)
                        break;
                    default:
                        break;
                }
            }
        }

        init()

    })(document)