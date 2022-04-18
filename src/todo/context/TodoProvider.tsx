import { useReducer } from 'react';

import { TodoContext } from './TodoContext';
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from './todoReducer';

const INITIAL_STATE:TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Collect infinite stones',
            completed: false
        },
        {
            id: '2',
            desc: 'Do something else',
            completed: false
        },
    ],
    completed: 2,
    pending: 0
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children} : props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
    const toggleTodo = (id:string) => {
        dispatch({type: 'toggleTodo', payload: {id} });
    }
    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}