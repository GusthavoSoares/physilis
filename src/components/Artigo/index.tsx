import Link from 'next/link'
import Texto from '../Texto'
import Titulo from '../Titulo'
import estilos from './Artigo.module.scss'



export default function Artigo({ tituloArtigo, textoArtigo, rota}) {
    return (
        <section className={estilos.artigo}>
            <article className={estilos.artigo_box}>
                <section className={estilos.artigo_textos}>
                    <Titulo conteudo={tituloArtigo} />
                    <Texto texto={textoArtigo} />
                    <Link href={`artigos/${rota}`}className={estilos.artigo_botao}>Acesse aqui</Link>
                </section>
                
              
            </article>
        </section>
    )
}