import React, {Component} from 'react';
import './App.css'

import IndiretaPai from './components/basico/IndiretaPai'
import Estado from './components/basico/Estado'
import FamiliaClone from './components/basico/FamiliaClone'
import FamiliaMembroClone from './components/basico/MembroFamiliaClone'
import Familia from './components/basico/Familia'
import Card from './components/layout/Card'
import Propriedades from './components/basico/Propriedades'
import OlaMundo from './components/basico/OlaMundo'

class App extends Component{
  render() {
    return(
      <div className="App" >
        <h1>Exemplos react </h1>

        <div className="Cards" >

          <Card titulo="Comunicação Indireta (de filho para pai)" cor="#f7673b">
            <IndiretaPai />
          </Card>

          <Card titulo="Estado" cor="ffb400">
            <Estado />
          </Card>

        <Card titulo="Componentes alinhados (CloneElement)" cor="#82212e">
          <FamiliaClone sobrenome="Soares Ferreira">
            <FamiliaMembroClone nome="Oseias Junior" />
            <FamiliaMembroClone nome="Adriana" />
            <FamiliaMembroClone nome="Yasmin" />
            <FamiliaMembroClone nome="Yanni" />
            <FamiliaMembroClone nome="Oséias" />
          </FamiliaClone>

        </Card> 

        <Card titulo="Componentes alinhados" cor="#d1495b">
          <Familia sobrenome="Soares Ferreira" />
        </Card>

        <Card titulo="Propriedades" cor="#91cb3e">
          <Propriedades nome="Yasmin" sobrenome="Soares" idade={16}/>
        </Card>
        
        <Card titulo="Olá Mundo!" cor="#226ce0">
        <OlaMundo />
        </Card>

        </div> 
      </div>  

    )
  }
}

export default App;