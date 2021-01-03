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

        const init = (): void => {
            bindEvent()
        }

        function bindEvent(): void {
            oAddBtn.addEventListener('click', handleAddBtnClick, false)
            oTodoList.addEventListener('click', handleListClick, false)
        }

        function handleAddBtnClick(): void {

        }

        function handleListClick(e: MouseEvent): void {

        }

        init()

    })(document)