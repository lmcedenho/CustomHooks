import { CounterApp } from "./components/CounterApp"
import { FetchApp } from "./components/FetchApp"
import { FormsApp } from "./components/FormsApp"


export const HooksApp = () => {
    return (
        <>
            <h1>App de Hooks</h1>
            <hr />
            <FetchApp />
            <hr />
            <CounterApp/>
            <hr />
            <FormsApp/>
        </>
    )
}
