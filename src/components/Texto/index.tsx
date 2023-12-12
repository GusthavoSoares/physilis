import estilos from './Texto.module.scss'


export default function Texto({texto}){
    return(
        <>
            <p className={estilos.texto}>{texto}</p>
        </>
    )
}