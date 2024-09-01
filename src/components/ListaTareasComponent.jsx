import { useForm } from "../hooks/useForm"
import { useReducer } from "react"

export const ListaTareasComponent = () => {

    const initialState = [
        { id: 1, name: 'Explicar Reducers', finalizada: false }
    ]

    const tareaReducer = (state, action = {}) => {

        switch (action.type) {
            case '[TAREAS] Agregar Tarea':                
                return [...state, action.payload]

            case '[TAREAS] Finalizar Tarea':
                return state.map(tarea => {
                    if (tarea.id === action.payload) {
                        return {
                            ...tarea,
                            finalizada: !tarea.finalizada
                        }
                    } else return tarea
                })

            case '[TAREAS] Eliminar Tarea':
                return state.filter(tarea => tarea.id !== action.payload)

            case '[TAREAS] borrar Tareas':
                return []

            default:
                break;
        }

        return state
    }

    const { tarea, onInputChange, setFormState } = useForm({ tarea: '' })

    const [state, dispatch] = useReducer(tareaReducer, initialState)

    const addTask = (event) => {
        event.preventDefault()
        if (tarea == '') return
        dispatch({
            type: '[TAREAS] Agregar Tarea',
            payload: { id: new Date().getTime(), name: tarea, finalizada: true }
        })

        setFormState({
            ...tarea,
            'tarea': ''
        })
        
    }

    const endTask = (id) => {

        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }

        dispatch(action)
        console.log(state)
    }

    const deleteTask = (id) => {
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }

        dispatch(action)
    }

    const deleteAll = () => {
        const action = {
            type: '[TAREAS] borrar Tareas'
        }

        dispatch(action)
    }

    return (
        <>
            <form onSubmit={addTask}>
                <div className="mb-3">
                    <label htmlFor="tarea" className="form-label">Nueva Tarea</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tarea"
                        name="tarea"
                        value={tarea}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger m-2" onClick={deleteAll}>Delete All</button>
            </form>
            <hr />
            <ol className="list-group">
                {state.map(tarea => {
                    return <li
                        className="list-group-item d-flex justify-content-between"
                        key={tarea.id}
                    >
                        <div>
                            <input
                                type="checkbox"
                                value={tarea.finalizada}
                                onChange={() => endTask(tarea.id)}
                            />
                            <span className="m-2">{tarea.name}</span>
                        </div>

                        <div>
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteTask(tarea.id)}
                            > Eliminar </button>
                        </div>
                    </li>
                }
                )}
            </ol>
        </>
    )
}
