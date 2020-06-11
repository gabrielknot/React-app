import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basics/First'
import Aleatorio from './components/basics/Aleaoro'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Card from './components/layout/Cards'
import './App.css'
import Repetição from './components/repetição/Componenteli'
import Imput from './components/stateComponents/input'
import Contador from './components/contador/Contador'
import Teste from './components/mega/Test'
import Mega from './components/mega/MegaSena'
ReactDOM.render(
    <div className= 'App'>
        <Primeiro/>
        <div className='Cards'>
            
            <Card titulo='10# Mega Sena' color='#00BFFF'>
                <Mega/>
            </Card>
            <Card titulo='9# Animation' color='#4682B4'>
                <Teste numero={1917}/>
            </Card>
            <Card titulo='8# Contador' color='#4182B4'>
                <Contador/>
            </Card>
            <Card titulo='7# Input'>
                <Imput/>
            </Card>
            <Card titulo='6# Repetição'>
                <Repetição/>
            </Card>
            <Card titulo='5# Propriedades Ereditárias'>
                <Familia sobrenome='Ferrão'>
                    <FamiliaMembro nome='Gabriel'/>
                </Familia>
            </Card>
            <Card titulo='4# Aleatorio' color='#138333'>
                <Aleatorio primeiro={10}
                            segundo={31}/>
            </Card>
            <Card titulo='3# Aleatorio' color='#332322' >
                <Aleatorio primeiro={10}
                            segundo={31}/>
            </Card>
            <Card titulo='2# Aleatorio'>
                <Aleatorio primeiro={10}
                            segundo={31}/>
            </Card>
                <Card titulo='1# aaaaaaaaa'></Card>
        </div>
    </div>
,document.getElementById("root"))
