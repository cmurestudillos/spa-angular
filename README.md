# 🦸‍♂️ Heroes SPA - MEAN Stack Application

Una aplicación web moderna construida con **MEAN Stack** que permite explorar y buscar información sobre superhéroes de **Marvel** y **DC Comics**. La aplicación ofrece una experiencia de usuario fluida con diseño responsivo y funcionalidades de búsqueda en tiempo real.

## 🚀 Características

- **📱 Diseño Responsivo**: Perfectamente adaptado para dispositivos móviles, tablets y desktop
- **🔍 Búsqueda en Tiempo Real**: Sistema de búsqueda inteligente por nombre de superhéroe
- **🎨 UI/UX Moderna**: Interfaz limpia y atractiva con animaciones suaves
- **⚡ Carga Rápida**: Optimizado para rendimiento con lazy loading y caché inteligente
- **🎯 Navegación Intuitiva**: Estructura clara y fácil de usar
- **📊 API RESTful**: Backend robusto con endpoints bien estructurados

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 17** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Bootstrap** - Framework CSS para diseño responsivo
- **RxJS** - Programación reactiva para manejo de datos
- **CSS Grid & Flexbox** - Layout moderno

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB

### Herramientas de Desarrollo
- **Angular CLI 17** - Herramientas de desarrollo
- **pnpm 11.5.2** - Gestión de paquetes
- **Git** - Control de versiones
- **Vercel** - Deployment y hosting

## 📦 Instalación

### Prerrequisitos
- Node.js (v18 o superior)
- pnpm 11.5.2 (`npm install -g pnpm`)
- Angular CLI (`pnpm add -g @angular/cli`)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/cmurestudillos/spa-angular.git
   cd spa-angular
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Autorizar build scripts (requerido con pnpm 11)**
   ```bash
   pnpm approve-builds --all
   ```

4. **Ejecutar la aplicación**
   ```bash
   pnpm start
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── heroes/           # Componente principal de héroes
│   │   ├── heroe/            # Detalle de héroe individual
│   │   ├── heroe-tarjeta/    # Tarjeta reutilizable de héroe
│   │   ├── buscador/         # Sistema de búsqueda
│   │   └── shared/           # Componentes compartidos
│   │       ├── navbar/       # Barra de navegación
│   │       └── footer/       # Pie de página
│   ├── services/
│   │   └── heroes.service.ts # Servicio para API calls
│   ├── models/
│   │   └── heroe.ts          # Interfaces TypeScript
│   └── routes/
│       └── app-routing.module.ts # Configuración de rutas
└── assets/                   # Recursos estáticos
```

## 🔗 API Endpoints

La aplicación consume una API RESTful con los siguientes endpoints:

- `GET /api/superheroes` - Obtener todos los superhéroes
- `GET /api/superheroes/{id}` - Obtener un superhéroe específico

### Ejemplo de respuesta de la API:

```json
{
  "superheroes": [
    {
      "_id": "68adc0afb8b0efbde1543731",
      "nombre": "Wolverine",
      "bio": "En el universo ficticio de Marvel...",
      "img": "assets/img/wolverine.svg",
      "aparicion": "1974-11-01T00:00:00.000Z",
      "casa": "Marvel"
    }
  ]
}
```

## ✨ Funcionalidades Principales

### 🏠 Página Principal
- Grid responsivo con todas las tarjetas de superhéroes
- Carga optimizada con indicadores visuales
- Animaciones suaves de entrada

### 🔍 Sistema de Búsqueda
- Búsqueda en tiempo real por nombre
- Resultados filtrados dinámicamente
- Manejo elegante de estados vacíos

### 👤 Página de Detalle
- Información completa del superhéroe
- Imágenes optimizadas
- Navegación fluida entre héroes

### 📱 Diseño Responsivo
- Mobile-first approach
- Breakpoints optimizados para todos los dispositivos
- UX consistente en todas las pantallas

## 🚀 Deployment

La aplicación está desplegada en Vercel y se puede acceder en:

**🌐 [Demo en vivo](https://spa-angular-heroes.vercel.app)**

### Proceso de deployment:

1. **Build de producción**
   ```bash
   pnpm build
   ```

2. **Deploy a Vercel**
   ```bash
   vercel --prod
   ```

## 🧪 Testing

```bash
# Ejecutar tests unitarios
pnpm test

# Linting
pnpm lint

# Coverage report
pnpm test -- --code-coverage
```

## 📈 Optimizaciones

- **Lazy Loading** de imágenes
- **Caché inteligente** de datos de API
- **Tree shaking** para reducir bundle size
- **Minificación** de assets
- **Gzip compression** en servidor

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- **Marvel & DC Comics** por los increíbles superhéroes
- **Angular Team** por el excelente framework
- **Bootstrap** por el sistema de diseño
- **Vercel** por el hosting gratuito

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella en GitHub!

## 📊 Estadísticas del Proyecto

![GitHub stars](https://img.shields.io/github/stars/cmurestudillos/spa-angular)
![GitHub forks](https://img.shields.io/github/forks/cmurestudillos/spa-angular)
![GitHub issues](https://img.shields.io/github/issues/cmurestudillos/spa-angular)
![GitHub license](https://img.shields.io/github/license/cmurestudillos/spa-angular)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)