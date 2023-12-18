import Titulo from '../src/components/Titulo'
import estilos from './paginaPrincipal.module.scss'


export default function paginaPrincipal() {
    return (
        <>
        <section className={estilos.container_pagina_principal}>
            <Titulo conteudo="Seja bem-vindo!" />
        </section>
        </>
    )
}