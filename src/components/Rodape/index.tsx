import Texto from "../Texto";
import estilos from './Rodape.module.scss';

export default function Rodape() {
    return (
        <footer className={estilos.rodape}>
            <Texto texto="Todos os direitos reservados a Sygmas Softwares"></Texto>
        </footer>
    )
}