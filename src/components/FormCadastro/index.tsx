import Icone from "../Icone";
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Titulo from "../Titulo";
import estilos from './FormCadastro.module.scss'

export default function FormCadastro() {
    return (
        <section className={estilos.box}>
            <form className={estilos.formulario}>
                <Titulo conteudo="Faça seu login"/>
                <div className={estilos.formulario_login}>
                    <Icone icone={faUser}></Icone>
                    <input type="text"></input>
                </div>
                <div className={estilos.formulario_senha}>
                    <Icone icone={faLock}></Icone>
                    <input type="password"></input>
                </div>
                <input type="submit" value="Logar" className={estilos.formulario_botao}></input>
            </form>
        </section>
    )
}