import { useEffect, useState } from "react"

import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../firebase/db/ColecaoCliente"
import useTabOuForm from "./useTabOuForm"

export default function useClientes(){

    const repo: ClienteRepositorio = new ColecaoCliente()
    
    const {tabelaVisivel, exibirFormulario, exibirTabela} = useTabOuForm()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
    const [clientes, setClientes] = useState<Cliente[]>([])
  
    useEffect(obterTodos, [])
  
    function obterTodos(){
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function selecionarCliente(cliente: Cliente){
      setCliente(cliente)
      exibirFormulario()
    }
  
    async function excluirCliente(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio)
      exibirFormulario()
    }
  
    async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente)
      exibirTabela
      obterTodos()
    }
  
    return{
        cliente,
        clientes,
        tabelaVisivel,

        exibirTabela,
        obterTodos,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente
    }
}