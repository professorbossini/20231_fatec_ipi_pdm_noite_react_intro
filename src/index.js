import React from 'react'
import ReactDOM from 'react-dom'
// {nome: "Joao", idade: 18}
const App = () => {
    return (
        <div 
            style={{width: 768, margin: 'auto', backgroundColor: '#EEE', padding: 12, borderRadius: 8 }}>
            <label 
                htmlFor='nome' 
                style={{display: 'block', marginBottom: 4}}>
                    Nome:
            </label>
            <input 
                type='text' 
                id='nome' 
                style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}></input>

            <button id="enviar" style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}}>Enviar</button>


        </div>
    )
} //arrow function

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)