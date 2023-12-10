import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import estilos from './Icone.module.scss'

export default function Icone({icone}){
    return(
        <FontAwesomeIcon className={estilos.icone}icon={icone}/>
    )
}