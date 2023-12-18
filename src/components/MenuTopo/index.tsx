import Link from 'next/link'
import Icone from '../Icone'
import Titulo from '../Titulo'
import estilos from './MenuTopo.module.scss'
import { faComments } from '@fortawesome/free-regular-svg-icons'

export default function MenuTopo() {
    return (
        <header className={estilos.menu_topo}>
            <section className={estilos.menu_topo_esquerda}>
                <Link href="/" className={estilos.menu_topo_esquerda_link}>
                    <Titulo conteudo="Physilis" />
                </Link>
            </section>
            <section className={estilos.menu_topo_direita}>
                <Icone icone={faComments} />
            </section>
        </header>
    )
}