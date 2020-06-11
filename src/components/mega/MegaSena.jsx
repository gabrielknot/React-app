import './Tab.css'
import React,{Component} from 'react';
import NumAnimat from './Test'

const aleatorio=(qtd) =>{
    var lista=[];

    let i=0;
    while(i<qtd){
        var x=parseInt((Math.floor(Math.random() * 60+1)));
        if(lista.includes(x)){}
        else{
            lista.push(x);
            i++;
        }
    }
    return lista;
}

export default class MegaSena extends Component{
    state={
        qtd: this.props.Qtd || 6,
        lista: aleatorio(this.props.Qtd || 6) ,
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
                            lista: aleatorio(0) ,
                        });
                        this.setState({
                            qtd:+e.target.value
                        });
                    }
                }/>
            <button onClick={e =>{
                this.setState({
                    lista: aleatorio(this.state.qtd) ,
                });
            }}>+</button>
            <button onClick={e =>{

                this.setState({
                    lista: [],
                });
            }}>refresh</button>
            <table className='tg'>
                <tbody>
                    <tr>
                        {this.state.lista.map((num)=>(
                            <td className="tg-0lax">
                                <NumAnimat numero={num || 1}/>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>          
        </div>
      ); 
    }
}