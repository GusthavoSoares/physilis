import Link from 'next/link'
import Icone from '../Icone'
import estilos from './Menu.module.scss'
import paginas from '../../../api/db/paginas'

export default function MenuLateral() {
    return (
        <nav className={estilos.menuLateral}>
            <div className={estilos.menuLateral_wrapper}>
                {paginas.map((pagina) => <Link href={pagina.referencia} key={pagina.id}><Icone icone={pagina.icone} /></Link>)}
            </div>
        </nav>
    )
}