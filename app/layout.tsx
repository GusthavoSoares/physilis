import ContainerConteudo from '../src/components/ContainerConteudo'
import MenuLateral from '../src/components/MenuLateral'
import MenuTopo from '../src/components/MenuTopo'
import Titulo from '../src/components/Titulo'
import estilos from '../src/global/geral.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={estilos.corpo}>
        <MenuTopo/>
        <ContainerConteudo>
          <MenuLateral/>
          {children}
        </ContainerConteudo>
        
        </body>
    </html>
  )
}
