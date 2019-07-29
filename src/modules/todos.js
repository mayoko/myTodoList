// Actions
const ADD = 'todolist/todos/add';
const REMOVE = 'todolist/todos/remove';
const COMPLETE = 'todolist/todos/complete';
const EDIT = 'todolist/todos/edit';

// Reducer
export default function reducer(state = initialState, action = {}) {
    console.log(state);
    console.log(initialState);
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.todo_id,
                        title: action.title,
                        project_id: action.project_id
                    }
                ]
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(el => el.id !== action.todo_id)
            };
        case COMPLETE:
            return {
                ...state,
                todos: state.todos.filter(el => el.id !== action.todo_id)
            }
        case EDIT:
            const nextState = {
                ...state,
                todos: [...state.todos]
            };
            for (let i = 0; i < nextState.todos.length; ++i) {
                const el = nextState.todos[i];
                if (el.id === action.todo_id) {
                    el.title = action.title;
                    el.project_id = action.project_id;
                    break;
                }
            }
            return nextState;
        default:
            return state;
    }
}

// Action Creators

// title: string
// todo_id: number
// project_id: number

export function addTodo(title, todo_id, project_id) {
    return {
        type: ADD,
        title: title,
        todo_id: todo_id,
        project_id: project_id
    };
};

export function removeTodo(todo_id) {
    return {
        type: REMOVE,
        todo_id: todo_id
    };
};

export function completeTodo(todo_id) {
    return {
        type: COMPLETE,
        todo_id: todo_id
    };
};

export function editTodo(todo_id, title, project_id) {
    return {
        type: EDIT,
        title: title,
        todo_id: todo_id,
        project_id: project_id
    };
};

// initial State
const initialState = {
    todos: [
        {
            id: 0,
            title: "todo0",
            project_id: -1
        },
        {
            id: 1,
            title: "todo1",
            project_id: -1
        },
        {
            id: 2,
            title: "todo2",
            project_id: -1
        }
    ]
};