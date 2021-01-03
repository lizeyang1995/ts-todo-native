import TodoEvent from "./js/TodoEvent";
import { ITodoData } from "./js/typing"

    ; ((doc) => {
        const oInput: HTMLElement = document.querySelector('input')
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

        const todoEvent: TodoEvent = new TodoEvent(todoData)

        const init = (): void => {
            bindEvent()
        }

        function bindEvent(): void {
            oAddBtn.addEventListener('click', handleAddBtnClick, false)
            oTodoList.addEventListener('click', handleListClick, false)
        }

        function handleAddBtnClick(): void {
            todoEvent.addTodo(<ITodoData>{
                id: 4,
                content: '999',
                completed: false
            })
            console.log(todoEvent);
        }

        function handleListClick(e: MouseEvent): void {
            const tar = e.target as HTMLElement
            const tagName = tar.tagName

            if (tagName === 'input' || tagName === 'button') {
                switch (tagName){
                    case 'input':
                        break;
                    case 'button':
                        break;
                    default:
                        break;
                }
            }
        }

        init()

    })(document)