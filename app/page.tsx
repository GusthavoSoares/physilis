import Artigo from '../src/components/Artigo'
import Titulo from '../src/components/Titulo'
import Videos from '../src/components/Videos'
import estilos from './paginaPrincipal.module.scss'
import { artigos } from '../api/db/artigos'

export default function paginaPrincipal() {
    const logado = true;
    return (

        <>
            <section className={estilos.container_pagina_principal}>
                <article className={estilos.container_alinhamento_central}>
                    <Titulo conteudo={!logado ? "Últimos vídeos" : "Continue assistindo"} />
                </article>
                <section className={estilos.container_alinhamento_central}>
                    <Videos />
                </section>
                <section className={estilos.container_alinhamento_central}>
                    <Titulo conteudo={!logado ? "Artigos recentes" : "Continue lendo"} />
                    {artigos.map((artigo) => <Artigo tituloArtigo={artigo.tag} textoArtigo={artigo.textoArt} key={artigo.id} tipoConteudo={artigo.rota} />)}

                </section>



            </section>
        </>
    )
}