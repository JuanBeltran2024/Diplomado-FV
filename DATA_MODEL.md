# Modelo de Datos - Plataforma del Diplomado

Este documento detalla el modelo de datos para la plataforma educativa del diplomado, describiendo las entidades principales, sus campos y relaciones.

## Entidades y Atributos

### User
Representa a los usuarios del sistema, independientemente de su rol.
* **id**: Identificador único del usuario (PK)
* **name**: Nombre completo
* **email**: Correo electrónico (único)
* **role**: Rol en la plataforma (`student` / `teacher` / `admin`)

### TeacherProfile
Almacena la información pública y profesional específica de los profesores.
* **id**: Identificador único del perfil (PK)
* **user_id**: Referencia al usuario correspondiente (FK -> User.id)
* **name**: Nombre a mostrar (puede ser igual al del User)
* **bio**: Biografía o resumen profesional
* **area**: Área de especialización o materia que imparte
* **photo**: URL de la fotografía de perfil
* **linkedin**: URL del perfil de LinkedIn

### DiplomaProgram
Representa el programa académico principal (el diplomado).
* **id**: Identificador único del diplomado (PK)
* **title**: Título del diplomado
* **description**: Descripción general del programa
* **start_date**: Fecha de inicio
* **end_date**: Fecha de finalización

### Module
Unidad principal de estructuración dentro del diplomado.
* **id**: Identificador único del módulo (PK)
* **diploma_id**: Referencia al diplomado al que pertenece (FK -> DiplomaProgram.id)
* **title**: Título del módulo
* **description**: Breve descripción o alcance del módulo
* **order**: Posición o secuencia del módulo (ej. 1, 2, 3...)

### Subtopic
Subdivisiones temáticas dentro de un módulo.
* **id**: Identificador único del subtema (PK)
* **module_id**: Referencia al módulo padre (FK -> Module.id)
* **title**: Título del subtema
* **description**: Descripción de los contenidos a tratar
* **order**: Posición o secuencia del subtema dentro del módulo

### ClassSession
Representa una clase o sesión específica, ya sea en vivo o grabada.
* **id**: Identificador único de la clase (PK)
* **subtopic_id**: Referencia al subtema correspondiente (FK -> Subtopic.id)
* **teacher_id**: Referencia al profesor que imparte la clase (FK -> TeacherProfile.id)
* **title**: Título o tema específico de la sesión
* **description**: Resumen de los puntos tratados
* **date**: Fecha y hora programada o en la que se impartió
* **video_url**: Enlace a la grabación de la sesión
* **duration**: Duración de la clase (en minutos)
* **order**: Posición o secuencia de la clase dentro del subtema

### Resource
Materiales de apoyo asociados a una clase específica (presentaciones, lecturas, etc.).
* **id**: Identificador único del recurso (PK)
* **class_id**: Referencia a la clase asociada (FK -> ClassSession.id)
* **title**: Nombre del archivo o recurso
* **type**: Tipo de recurso (`presentation` / `pdf` / `link` / `file`)
* **url**: Enlace de descarga o acceso al recurso

---

## Relaciones (Resumen)

1. **User - TeacherProfile (1:1)**: Un usuario con rol `teacher` tiene un único perfil de profesor asociado.
2. **DiplomaProgram - Module (1:N)**: Un diplomado está compuesto por varios módulos.
3. **Module - Subtopic (1:N)**: Cada módulo se divide en múltiples subtemas.
4. **Subtopic - ClassSession (1:N)**: Cada subtema se desarrolla a través de una o más clases.
5. **TeacherProfile - ClassSession (1:N)**: Un profesor puede impartir múltiples clases a lo largo del diplomado.
6. **ClassSession - Resource (1:N)**: Cada clase puede tener adjuntos múltiples recursos de estudio (diapositivas, lecturas, etc.).
