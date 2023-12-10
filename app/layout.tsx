import { ReactNode } from "react"
import estilos from '../src/global/geral.module.scss'
export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
            <body className={estilos.corpo}>{children}</body>
        </html>
    )
}