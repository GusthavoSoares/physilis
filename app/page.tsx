
import ContainerConteudo from '../src/components/ContainerConteudo'
import MenuLateral from '../src/components/MenuLateral'
import Menu from '../src/components/MenuLateral'
import Titulo from '../src/components/Titulo'
import estilos from './paginaPrincipal.module.scss'


export default function paginaPrincipal(){
    return (
        
        <>
        <ContainerConteudo>
            <MenuLateral/>
            <Titulo conteudo="Seja bem-vindo!"/>
        </ContainerConteudo>
        </>
        )
}