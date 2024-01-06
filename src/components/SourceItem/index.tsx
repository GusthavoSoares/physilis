import Texto from "../Texto";
import Titulo from "../Titulo";
import estilos from "./SourceItem.module.scss"

export default function SourceItem({videoUrl}) {
    return (
        <section className={estilos.source}>
            <video className={estilos.source_video} controls>
                <source src={videoUrl} ></source>
            </video>
            <section className={estilos.source_textos}>
                <Titulo conteudo={"Título qualquer"} />
                <Texto texto={"Descrição qualquer"} />
            </section>
        </section>
    )
}