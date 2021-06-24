import React from 'react';

import FamiliaMembro from './MembroFamilia'

export default props => {

    return(
        <div>
            <FamiliaMembro nome="Oseias Junior" sobrenome="Ferreira" />
            <FamiliaMembro nome="Adriana" sobrenome="Soares" />
            <FamiliaMembro nome="Yasmin" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Yanni" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Oséias" sobrenome={props.sobrenome} />
        </div>
    )
}