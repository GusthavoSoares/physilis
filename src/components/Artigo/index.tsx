import Link from 'next/link'
import Texto from '../Texto'
import Titulo from '../Titulo'
import estilos from './Artigo.module.scss'
import Botao from '../Botao'



export default function Artigo({ tituloArtigo, textoArtigo, tipoConteudo}) {
    return (
        <section className={estilos.artigo}>
            <article className={estilos.artigo_box}>
                <section className={estilos.artigo_textos}>
                    <Titulo conteudo={tituloArtigo} />
                    <Texto texto={textoArtigo} />
                    <Botao rota={`artigos/conteudo/${tipoConteudo}`} navegacao={true} textoBotao={"Acesse aqui"}/>
                </section>
                
              
            </article>
        </section>
    )
}