import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useState } from "react"

export default function Home() {
  const [visivel, setVisivel] = useState<'tabela' | 'from'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)

  const clientes = [
    new Cliente('Ana', 15, '1'),
    new Cliente('Carlos', 14, '3'),
    new Cliente('Paulo', 16, '2')
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('from')
  }

  function clienteExcluido(cliente: Cliente){

  }

  function novoCliente(){
    setCliente(Cliente.vazio)
    setVisivel('from')
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao 
                className="mb-4" 
                cor='green'
                onClick={novoCliente}
                >
                Novo Cliente
              </Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ):(
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
            />
        )}
  </Layout>
      
    </div>
  )
}
