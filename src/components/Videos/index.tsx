import estilos from './Videos.module.scss'
import { videos } from '../../../api/db/videos'

export default function Videos() {
    return (
        <section className={estilos.video}>

            {
                videos.map((video) => {
                    return (
                        <video key={video.id} className={estilos.video_item} controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4"></source>
                        </video>
                    )

                })
            }
        </section>
    )
}