import React from 'react'
import alunos from '../../data/Alunos'

export default props =>{
    const alno_li = alunos.map((aluno) => {
        return(
            <li key={aluno.id}>
                {aluno.id} - {aluno.nome}
            </li>
        )
    })
    return(
        <ul style={{listStyle: "none"}}>
            {alno_li}
        </ul>
    )
}