/*
    Håll reda på vad användaren skriver i textrutan (spara som ett "state")    
    
    State "input"
    GUI uppdateras automatiskt när användaren skriver nåt i input
*/
import { useState } from 'react'
import './Email.css'

function Email() {

    const [input, setInput] = useState("")
    const [inputAgain, setInputAgain] = useState("")
    const [showMessage, setShowMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const inputAgainChange = (event) => {
        setInputAgain(event.target.value)
    }

    const sendForm = () => {

        setShowMessage(true)

        if (input === ""){
            setErrorMessage("Empty email address")
            return;
        }

        if(!isValidEmailAddress(input)) {
            setErrorMessage("Invalid email address")
            return;
        }

        if (input !== inputAgain) {
            setErrorMessage("Not the same")
            return 
        }

        setErrorMessage("")
    }

    return (
        <article className="email">

            <div className="group">
                <label>Email</label>
                <input className="inputEmail" type="email" value={input} onChange={inputChange} />
            </div>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmailAgain" type="email" value={inputAgain} onChange={inputAgainChange} />
            </div>

            <button onClick={sendForm}>Ok</button>

            {showMessage && errorMessage !="" &&

            <section className="result sad">
                {errorMessage}
            </section>
            }

            {showMessage && errorMessage =="" &&

            <section className="result happy">
                Jippi!
            </section>
            }
        </article>

    )
}

function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};



export default Email