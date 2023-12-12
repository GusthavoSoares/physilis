import Link from 'next/link'
import Icone from '../Icone'
import estilos from './Menu.module.scss'
import paginas from './paginas'

export default function MenuLateral() {
    return(<section>
        <nav className={estilos.menu}>
                {paginas.map((pagina) => <Link href={pagina.referencia} key={pagina.id} className={estilos.menu_link}><Icone icone={pagina.icone} /></Link>)}
        </nav>
    </section>
    )
}