import './Tab.css'
import React,{Component} from 'react';

const aleatorio=(lista,qtd) =>{

    let i=0;
    while(i<qtd){
        var x=parseInt((Math.floor(Math.random() * 60+1)));
        if(lista.includes(x)){}
        else{
            lista[i]=x;
            i++;
        }
    }
    return;
}

export default class MegaSena extends Component{
    state={
        qtd: this.props.Qtd || 6,
        lista: Array(this.state.qtd).fill(0),
    };

    render(){
      return(
        <div className='MegaSena'>      
            <input 
                id='passoInput'
                type='number'
                value={this.state.qtd}
                onChange={
                    e =>{
                        this.setState({
                            qtd: +e.target.value,
                        });
                    }
                }/>
            <button onClick={_ =>{
                this.setState({
                    lista: aleatorio(this.state.lista,this.state.qtd) ,
                });
            }}>+</button>
            
            <table className='tg'>
                <tbody>
                    <tr>
                        {this.state.lista.map((num)=>(
                            <td className="tg-0lax" key={this.state.lista.indexOf(num)}>
                                <NumAnimat numero={num}/>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>          
        </div>
      ); 
    }
}