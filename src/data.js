export const modules = [
  {
    id: 'm1',
    title: 'Módulo 1: Fundamentos y Contexto',
    description: 'Introducción a los conceptos clave y contexto histórico del diplomado. Establece las bases para los siguientes módulos.',
    progress: 100,
    classes: [
      { id: 'c1', title: 'Introducción al Diplomado', duration: '45 min', teacherId: 't1' },
      { id: 'c2', title: 'Conceptos Básicos y Terminología', duration: '60 min', teacherId: 't1' },
      { id: 'c3', title: 'Evolución Histórica', duration: '90 min', teacherId: 't2' }
    ]
  },
  {
    id: 'm2',
    title: 'Módulo 2: Aplicaciones Prácticas',
    description: 'Técnicas avanzadas y herramientas para aplicar los conocimientos teóricos en escenarios reales.',
    progress: 50,
    classes: [
      { id: 'c4', title: 'Taller de Herramientas I', duration: '120 min', teacherId: 't2' },
      { id: 'c5', title: 'Análisis de Casos de Estudio', duration: '60 min', teacherId: 't3' },
    ]
  },
  {
    id: 'm3',
    title: 'Módulo 3: Proyecto de Grado',
    description: 'Desarrollo, asesoramiento y presentación del proyecto final del diplomado.',
    progress: 0,
    classes: [
      { id: 'c6', title: 'Metodología de Investigación', duration: '45 min', teacherId: 't1' },
      { id: 'c7', title: 'Asesoría Individual', duration: '30 min', teacherId: 't3' },
    ]
  }
];

export const teachers = [
  { id: 't1', name: 'Dr. Roberto Sánchez', role: 'Director Académico', email: 'roberto@diplomado.edu', bio: 'Doctor en Ciencias de la Educación con más de 20 años de experiencia.', avatar: 'https://ui-avatars.com/api/?name=Roberto+Sanchez&background=1e3a8a&color=fff&size=150' },
  { id: 't2', name: 'Mtra. Elena Gómez', role: 'Instructora Principal', email: 'elena@diplomado.edu', bio: 'Especialista en aplicación de herramientas tecnológicas para el aprendizaje.', avatar: 'https://ui-avatars.com/api/?name=Elena+Gomez&background=3b82f6&color=fff&size=150' },
  { id: 't3', name: 'Ing. Carlos Díaz', role: 'Tutor de Proyecto', email: 'carlos@diplomado.edu', bio: 'Ingeniero consultor con amplia trayectoria en mentorías de proyectos de grado.', avatar: 'https://ui-avatars.com/api/?name=Carlos+Diaz&background=0f172a&color=fff&size=150' },
];

export const userProfile = {
  name: 'Juan Beltrán',
  role: 'Estudiante',
  email: 'juan@estudiante.edu',
  avatar: 'https://ui-avatars.com/api/?name=Juan+Beltran&background=e2e8f0&color=0f172a&size=150'
};
