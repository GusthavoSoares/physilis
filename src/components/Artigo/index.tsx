import Texto from '../Texto'
import Titulo from '../Titulo'
import estilos from './Artigo.module.scss'



export default function Artigo({ tituloArtigo, textoArtigo }) {
    return (
        <section className={estilos.artigo_background}>
            <article className={estilos.artigo_box}>
                <section className={estilos.artigos_conteudo}>
                    <Titulo conteudo={tituloArtigo}/>
                    <Texto texto={textoArtigo} />
                </section>
            </article>
        </section>
    )
}