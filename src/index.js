import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
// {nome: "Joao", idade: 18}
const App = () => {
    const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}
    const textoDoRotulo = 'Nome:'
    const obterTextoDoBotao = () => 'Enviar'
    const testeClique = () =>  alert("Clicou...")
    return (
        <div 
            style={{width: 768, margin: 'auto', backgroundColor: '#EEE', padding: 12, borderRadius: 8 }}>
            <label
                className='rotulo' 
                htmlFor='nome' 
                style={{display: 'block', marginBottom: 4}}>
                    {textoDoRotulo}
            </label>
            <input 
                type='text' 
                id='nome' 
                style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}></input>

            <button 
                onClick={testeClique}
                id="enviar"
                style={estilosBotao}>{obterTextoDoBotao()}
            </button>


        </div>
    )
} //arrow function

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
