import './Contador.css'
import React,{Component} from 'react';

export default class Contador extends Component{
    state={
        numero: this.props.Inicial || 0,
        passo: this.props.Passo || 5,
    };

    render(){
      return(
        <div className='Contador'>      
            <h2>{this.state.numero}</h2>
            <p>{this.state.numero%2 ? 'impar' || '':'par'}</p>
            <label htmlFor='passoInput'>Passo: </label>
            <input 
                id='passoInput'
                type='number'
                value={this.state.passo}
                onChange={
                    e =>{
                        this.setState({
                            passo: +e.target.value,
                        });
                    }
                }/>
            <button onClick={_ =>{
                this.setState({
                    numero: this.state.numero + this.state.passo,
                });
            }}>+</button>
            <button onClick={_ =>{
                this.setState({
                    numero: this.state.numero - this.state.passo,
                });
            }}>-</button>            
        </div>
      ); 
    }
}