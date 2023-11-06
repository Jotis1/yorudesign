# YORU DESIGN V.0.1
Este es el paquete de diseño de interfaz gráfica oficial de Yoru. Aquí comprenderemos procesos como la instalación, componentes, clases, funciones y documentación de los mismos. Este proyecto está pensado para su implementación con NextJS
### Instalación

```powershell
npm i yorudesign --save
```
### Uso
```tsx
layout.tsx

import { ThemeProvider } from "yorudesign";
import theme from "@/styles/your-theme-file";

...

export default function RootLayout({children} : { children : React.ReactNode }){
    return(
        <ThemeProvider theme={theme}>
            <html>
                <body>
                {children}
                </body>
            </html>
        </ThemeProvider>
    )
}

```
```tsx
page.tsx

import { Button } from "yorudesign";


export default function Page(){
    return(
        <main>
            <Button primary>Botón de ejemplo</Button>
        </main>
    )
}

```
