# Alcance del Proyecto: Plataforma Web para Diplomados

## Objetivo del Proyecto
Desarrollar una plataforma web centralizada para organizar, gestionar y distribuir la información y los recursos de un diplomado. La plataforma servirá como un punto de acceso único para estudiantes, profesores y administradores, facilitando el acceso estructurado a los módulos, subtemas, clases y materiales asociados (presentaciones y grabaciones).

## Roles de Usuario
La plataforma contará con tres tipos principales de usuarios:
1. **Estudiante**: Usuario que consume el contenido del diplomado.
2. **Profesor**: Usuario encargado de impartir las clases y compartir su material.
3. **Administrador**: Usuario responsable de la gestión general de la plataforma, los usuarios y la estructura del diplomado.

## Funciones de cada Rol

### Estudiante
- Iniciar sesión en la plataforma.
- Navegar por la estructura del diplomado (Módulos y Subtemas).
- Acceder a los detalles de cada clase.
- Visualizar y descargar el material de apoyo (presentaciones).
- Reproducir las grabaciones de las clases impartidas.
- Consultar información sobre los profesores que imparten las clases.

### Profesor
- Iniciar sesión en la plataforma.
- Visualizar el listado de las clases que tiene asignadas.
- Subir y gestionar el material didáctico de sus clases (presentaciones).
- Compartir los enlaces o subir las grabaciones de sus clases impartidas.

### Administrador
- Iniciar sesión en la plataforma.
- Gestión de Usuarios: Crear, editar y desactivar cuentas de Estudiantes y Profesores.
- Gestión de la Estructura: Crear y organizar módulos y subtemas del diplomado.
- Gestión de Clases: Programar clases y ubicarlas dentro de los subtemas correspondientes.
- Asignación: Vincular profesores específicos a las clases programadas.
- Moderación: Capacidad para gestionar (subir, editar, eliminar) cualquier presentación o grabación si es necesario.

## Organización de la Información
La información dentro de la plataforma se estructurará de forma jerárquica:
- **Diplomado**
  - **Módulos**
    - **Subtemas**
      - **Clases**
        - **Profesores** (Asignados a la clase)
        - **Presentaciones** (Material de apoyo)
        - **Grabaciones** (Video de la sesión)

## Páginas Necesarias
1. **Página de Inicio / Login**: Pantalla de autenticación para todos los usuarios.
2. **Dashboard / Tablero Principal**: Vista general tras el inicio de sesión, con información relevante según el rol.
3. **Temario del Diplomado**: Vista de navegación por módulos y subtemas.
4. **Detalle de Módulo/Subtema**: Listado de las clases que pertenecen a esa sección.
5. **Página de la Clase**: Espacio individual de cada clase donde se muestra el profesor, el botón para descargar la presentación y el reproductor/enlace de la grabación.
6. **Panel de Administración**:
   - Vista de gestión de usuarios.
   - Vista de gestión de estructura (Módulos/Subtemas/Clases/Asignaciones).
7. **Panel del Profesor**: Espacio dedicado para que los docentes suban sus recursos a las clases que les corresponden.

## Funciones para una Segunda Versión
- Evaluaciones y cuestionarios en línea.
- Foro de discusión o sección de comentarios por clase.
- Sistema de notificaciones (alertas de nuevo material, recordatorios de clases).
- Barra de seguimiento de progreso para el estudiante (porcentaje completado).
- Generación automática de constancias o certificados al concluir.
- Integración con APIs de videoconferencia (Zoom, Meet) para la generación de enlaces automáticos.
