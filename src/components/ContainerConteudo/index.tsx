import estilos from './ContainerConteudo.module.scss'


export default function ContainerConteudo({children}){
    return (
        <section className={estilos.container}>
            {children}
        </section>
    )
}