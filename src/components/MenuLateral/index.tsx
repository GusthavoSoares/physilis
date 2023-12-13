import Link from 'next/link'
import Icone from '../Icone'
import estilos from './Menu.module.scss'
import paginas from './paginas'

export default function MenuLateral() {
    return(<section>
        <nav className={estilos.menuLateral}>
                {paginas.map((pagina) => <Link href={pagina.referencia} key={pagina.id}><Icone icone={pagina.icone} /></Link>)}
        </nav>
    </section>
    )
}