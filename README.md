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

export default function RootLayout({ children } : { children : React.ReactNode }){
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

# Diseño de Yoru (o NewYoru)
> YoruDesign no sólo tiene como objetivo crear páginas web con un buen diseño, también nos hemos propuesto seguir con los estándares de accesibilidad, uso y buenas prácticas del diseño y desarrollo web. Crear componentes reutilizables, optimizados, user friendly, adaptables y customizables son sólo algunas de nuestras metas.
# ¿Qué necesita Yoru?
> Yoru no es sólo un gacha en el que coleccionar tus personajes favoritos, es también una base de datos en línea en la que podrás encontrar juegos, animes, mangas, recomendaciones, noticias, usuarios con los que compartir reseñas y mucho más (en un futuro). Y, como es tantas cosas, necesitamos una organización de datos, seguridad, escalabilidad, servidores y código (nada de código spaguetti) a la altura del proyecto.
> Es por eso que Yoru tiene un sistema de organización optimizado y estudiado.
## Organización
### Web App
Empezando con el apartado de Front-End, como sabrás, Yoru tiene muuuuuchos componentes, todos ellos con un estilo distino, fuentes de letra distintas, márgenes distintos... NO, XD. Todos los componentes comparten un estilo, y un tema, esto facilita la adaptabilidad del usuario a la aplicación. Evidentemente, podrás modificar los componentes a placer, modificar valores, colores, bordes... Pero te recomendamos que uses siempre, o casi siempre, los mismos valores para los mismos objetos, de forma que el diseño sea limpio. También te recomendamos buscar cuáles son las buenas prácticas en el desarrollo y diseño web para poder implementarlo todo dentro de tu app.
Una vez entendemos que los componentes deben compartir un estilo, en el caso de querer modificarlo, o querer que el usuario haga cambios a placer (o sólo los cambios que tu quieras), necesitamos un proovedor de contexto, en este caso llamado `ThemeContext`.
<br>
Ahora vamos al apartado de diseño. Yoru está empezando, y como tal no necesita muchas páginas, ni almacenar mucho contenido, sin embargo, vamos a querer que en un futuro sí lo haga, poder tener más servicios, juegos y datos es algo que nos obliga a hacerla escalable.
Actualmente Yoru cuenta con:
- Página principal: `/` En ella se verá tu perfil de usuario del gacha. Con el apartado de estadísticas, 