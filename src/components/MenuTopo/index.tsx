import Icone from '../Icone'
import Titulo from '../Titulo'
import estilos from './MenuTopo.module.scss'
import {faComments} from '@fortawesome/free-regular-svg-icons'

export default function MenuTopo() {
    return (
        <header className={estilos.menu_topo}>
            <nav className={estilos.menu_topo_container}>
                <Titulo conteudo="Physilis" />
                <Icone icone={faComments} />
            </nav>
        </header>
    )
}