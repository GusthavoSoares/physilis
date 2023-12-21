import estilos from './Titulo.module.scss'


export default function Titulo({ conteudo }) {
    return (
        <>
            <h1 className={estilos.titulo}>{conteudo}</h1>
        </>
    )
}