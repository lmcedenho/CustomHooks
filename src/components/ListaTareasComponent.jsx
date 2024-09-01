import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../hooks/useForm"

export const ListaTareasComponent = () => {

    const tareas = useSelector(state => state)
    const dispatch = useDispatch()

    const { tarea, onInputChange, setFormState } = useForm({ tarea: '' })

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
                {tareas.map(tarea => {
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
