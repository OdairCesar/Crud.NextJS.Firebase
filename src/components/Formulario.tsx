import { useState } from 'react'
import Cliente from '../core/Cliente'
import Entrada from './Entrada'
import Botao from './Botao'

interface FormularioProps{
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                <Entrada 
                    className='mb-5'
                    somenteLeitura 
                    texto='Código' 
                    valor={id}
                />
            ) : false}
            
            <Entrada 
                className='mb-5'
                texto='Nome' 
                tipo='text' 
                valor={nome}
                valorMudou={setNome}
            />
            <Entrada 
                texto='Idade' 
                tipo='number' 
                valor={idade}
                valorMudou={setIdade}
            />
            <div className='flex justify-end mt-7'>
                <Botao 
                    cor='blue' 
                    className='mr-2'>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}