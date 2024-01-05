import Link from "next/link";
import estilos from './Botao.module.scss'
export default function Botao({rota, textoBotao, navegacao}) {
    return (
        <>
            {navegacao ? <Link href={rota} className={estilos.botao}>{textoBotao}</Link> : <input type="submit" value={textoBotao} className={estilos.botao} />}
        </>
    )
}