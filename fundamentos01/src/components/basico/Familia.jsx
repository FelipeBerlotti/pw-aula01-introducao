import React from 'react';

import FamiliaMembro from './MembroFamilia'

export default props => {

    return(
        <div>
            <FamiliaMembro nome="Felipe" sobrenome="Berlotti" />
            <FamiliaMembro nome="Adele" sobrenome="Berlotti" />
            <FamiliaMembro nome="Fernanda" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Luis Carlos" sobrenome={props.sobrenome} />
        </div>
    )
}