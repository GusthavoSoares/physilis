import Titulo from '../Titulo'
import estilos from './Videos.module.scss'
import {videos} from './videos'

export default function Videos(){
    return(
        <section className={estilos.video}>
           
            {
            videos.map((video) => <video  key={video.id} className={estilos.video_item}>
            <source type="video/mp4"></source></video>  )
            }
        </section>
    )
}