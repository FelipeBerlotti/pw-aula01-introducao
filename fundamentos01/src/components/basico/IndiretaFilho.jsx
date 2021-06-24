import React, { useState } from 'react';

export default props => {

    const [nome, setNome] = useState('Felipe da Cruz Berlotti')

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