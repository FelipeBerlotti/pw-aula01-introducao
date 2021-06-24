import React, { useState } from 'react';

export default props => {

    const [nome, setNome] = useState('Yasmin Soares Ferreira')

    return(
        <div>
            <button onClick={() => {
                props.quandoClicar(nome)
            } }  >
                Fornecer informações do Aluno 
            </button>
        </div> 

    )
}