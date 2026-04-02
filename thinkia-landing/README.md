# Thinkia Landing Page

Esta es la landing page oficial de Thinkia, construida con React (Vite) y CSS Brutalista/Minimalista.
Diseñada para ser seria, humana y exigente. Sin animaciones innecesarias, enfocada en la conversión y el manifiesto.

## Estructura del Proyecto

```
thinkia-landing/
├── src/
│   ├── assets/
│   │   └── logo.jpg          # Logo Thinkia
│   ├── components/
│   │   ├── Header.jsx        # Navegación y Logo
│   │   ├── Hero.jsx          # Manifiesto principal (Above the fold)
│   │   ├── Section1.jsx      # "Usar IA no es construir"
│   │   ├── Section2.jsx      # "Formamos AI Builders"
│   │   ├── Section3.jsx      # "Aquí se viene a construir"
│   │   ├── Section4.jsx      # "No es para todos" (Filtro)
│   │   ├── Section5.jsx      # "El programa" (Detalles)
│   │   ├── Section6.jsx      # "La decisión" (Cierre)
│   │   └── Footer.jsx        # Legal y Redes
│   ├── App.jsx               # Layout principal
│   ├── index.css             # Estilos globales, variables y tipografía
│   └── main.jsx              # Punto de entrada
├── public/                   # Archivos estáticos
├── index.html                # HTML base
├── package.json              # Dependencias
└── vite.config.js            # Configuración de Vite
```

## Tecnologías

- **React 18**: Librería de UI.
- **Vite**: Build tool rápido.
- **Vanilla CSS**: Estilos puros, variables CSS, Flexbox/Grid.
- **Inter Font**: Tipografía principal (vía Google Fonts).

## Instrucciones de Instalación

1.  Dependencias:
    ```bash
    npm install
    ```

2.  Desarrollo local:
    ```bash
    npm run dev
    ```

## Instrucciones de Deploy

El proyecto está listo para producción.

### Opción 1: Netlify / Vercel (Recomendado)

1.  Sube este repositorio a GitHub/GitLab.
2.  Conecta tu cuenta de Netlify o Vercel.
3.  Selecciona el repositorio.
4.  La configuración se detectará automáticamente:
    - **Build Command**: `npm run build`
    - **Publish Directory**: `dist`
5.  Haz clic en **Deploy**.

### Opción 2: Web Server Tradicional

1.  Genera los archivos de producción:
    ```bash
    npm run build
    ```
2.  Sube el contenido de la carpeta `dist/` a tu servidor (Apache, Nginx, FTP, etc.).

## Notas de Diseño

- **Alto Contraste**: Uso estricto de blanco y negro.
- **Tipografía**: Inter para legibilidad y seriedad.
- **Responsive**: Mobile-first. El menú se adapta a móvil automáticamente.
- **Placeholder Links**: Los botones de pago y redes sociales apuntan a `#` o enlaces genéricos. Deben actualizarse con las URLs reales antes del lanzamiento.
