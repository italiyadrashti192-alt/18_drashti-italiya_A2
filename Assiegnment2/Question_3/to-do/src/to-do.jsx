import { useReducer, useState } from "react";

let initialState = [{ id: 1, name: "Task 1", completed: false },
{ id: 2, name: "Task 2", completed: false },
{ id: 3, name: "Task 3", completed: false }
]
function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, { id: Date.now(), name: action.value ,completed : false }];
            break;
        case "delete":
            return state.filter((e) => (e.id !== action.id))
            break;

        case "toggle":
            return state.map(e => e.id === action.id ? { ...e, completed: !e.completed } : e);
            break;
    }
}
export default function ToDo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [task, setTask] = useState("");
    const addTask = () => {
        dispatch({
            type: "add",
            value: task
        });
        setTask("");


    };
    return (
        <div className="todo">
            <div>
                <input type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={addTask}>Add</button>
            </div>

            <div>
                {state.map((e) => (
                    <div key={e.id}>
                        <input type="checkbox" checked={e.completed} onChange={() => dispatch({
                            type: "toggle",
                            id: e.id
                        })} />
                        <span style={{ textDecoration: e.completed ? "line-through" : "none" }}>{e.name}</span>
                        <button onClick={() => {
                            dispatch({
                                type: "delete",
                                id: e.id
                            })
                        }}>Delete</button>
                    </div>
                ))}
            </div>
        </div>






    );
};