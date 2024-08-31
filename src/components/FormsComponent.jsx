import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormsComponent = () => {  

    const initialForm = {
        username: '',
        email: '',
        password: ''
    }

    const { username, email, password, onInputChange} = useForm(initialForm)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ username, email, password})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">username</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    name="username"
                    value={username}
                    onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="Email1" 
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
