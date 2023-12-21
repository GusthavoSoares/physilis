import Artigo from '../src/components/Artigo'
import Titulo from '../src/components/Titulo'
import Videos from '../src/components/Videos'
import estilos from './paginaPrincipal.module.scss'


export default function paginaPrincipal() {
    return (
        <>
        <section className={estilos.container_pagina_principal}>
            <article className={estilos.container_alinhamento_central}>
                <Titulo conteudo="Vídeos recentes" />
            </article>
            <section className={estilos.container_alinhamento_central}>
                <Videos/>
            </section>
        <section className={estilos.container_alinhamento_central}>
            <Titulo conteudo="Trilhas recomendadas"/>
            <Artigo textoArtigo={"Os melhores tipos de medicamentos para emagrecer"} tituloArtigo={"Emagrecimento"}/>
        </section>
        </section>
        </>
    )
}