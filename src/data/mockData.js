// Datos simulados completos para el panel de administrador

export const mockUsers = [
  { id: 'u1', name: 'Juan Beltrán', email: 'juan@estudiante.edu', role: 'student', status: 'active', joinDate: '2024-01-15' },
  { id: 'u2', name: 'María López', email: 'maria@estudiante.edu', role: 'student', status: 'active', joinDate: '2024-01-20' },
  { id: 'u3', name: 'Pedro Torres', email: 'pedro@estudiante.edu', role: 'student', status: 'inactive', joinDate: '2024-02-01' },
  { id: 'u4', name: 'Laura Ruiz', email: 'laura@estudiante.edu', role: 'student', status: 'active', joinDate: '2024-02-10' },
  { id: 'u5', name: 'Dr. Roberto Sánchez', email: 'roberto@diplomado.edu', role: 'teacher', status: 'active', joinDate: '2023-12-01' },
  { id: 'u6', name: 'Mtra. Elena Gómez', email: 'elena@diplomado.edu', role: 'teacher', status: 'active', joinDate: '2023-12-05' },
  { id: 'u7', name: 'Ing. Carlos Díaz', email: 'carlos@diplomado.edu', role: 'teacher', status: 'active', joinDate: '2023-12-10' },
  { id: 'u8', name: 'Admin Principal', email: 'admin@diplomado.com', role: 'admin', status: 'active', joinDate: '2023-11-01' },
];

export const mockTeachers = [
  { id: 't1', name: 'Dr. Roberto Sánchez', email: 'roberto@diplomado.edu', area: 'Fundamentos Fotovoltaicos', bio: 'Doctor en Ingeniería Eléctrica con 15 años de experiencia.', modules: 2, classes: 5, avatar: 'https://ui-avatars.com/api/?name=Roberto+Sanchez&background=1e3a8a&color=fff&size=80', linkedin: '#' },
  { id: 't2', name: 'Mtra. Elena Gómez', email: 'elena@diplomado.edu', area: 'Instalación y Diseño', bio: 'Maestra en Energías Renovables, consultora independiente.', modules: 1, classes: 3, avatar: 'https://ui-avatars.com/api/?name=Elena+Gomez&background=3b82f6&color=fff&size=80', linkedin: '#' },
  { id: 't3', name: 'Ing. Carlos Díaz', email: 'carlos@diplomado.edu', area: 'Normativas y Proyectos', bio: 'Ingeniero Civil con énfasis en proyectos sostenibles.', modules: 1, classes: 2, avatar: 'https://ui-avatars.com/api/?name=Carlos+Diaz&background=0f172a&color=fff&size=80', linkedin: '#' },
];

export const mockModules = [
  { id: 'm1', title: 'Módulo 1: Fundamentos y Contexto', description: 'Introducción a los conceptos clave y contexto histórico.', order: 1, subtopics: 3, classes: 3 },
  { id: 'm2', title: 'Módulo 2: Aplicaciones Prácticas', description: 'Técnicas avanzadas y herramientas para aplicación real.', order: 2, subtopics: 2, classes: 2 },
  { id: 'm3', title: 'Módulo 3: Proyecto de Grado', description: 'Desarrollo, asesoramiento y presentación del proyecto final.', order: 3, subtopics: 2, classes: 2 },
];

export const mockSubtopics = [
  { id: 'st1', module: 'Módulo 1', title: 'Historia de la Energía Solar', description: 'Evolución histórica de los sistemas fotovoltaicos.', order: 1 },
  { id: 'st2', module: 'Módulo 1', title: 'Principios Físicos', description: 'Efecto fotovoltaico y semiconductores.', order: 2 },
  { id: 'st3', module: 'Módulo 1', title: 'Tipos de Paneles', description: 'Comparativa monocristalino, policristalino y thin-film.', order: 3 },
  { id: 'st4', module: 'Módulo 2', title: 'Diseño de Sistemas', description: 'Metodología de diseño e ingeniería de sistemas FV.', order: 1 },
  { id: 'st5', module: 'Módulo 2', title: 'Inversores y Reguladores', description: 'Componentes de conversión y control.', order: 2 },
  { id: 'st6', module: 'Módulo 3', title: 'Metodología de Investigación', description: 'Marco metodológico para el proyecto final.', order: 1 },
  { id: 'st7', module: 'Módulo 3', title: 'Presentación Final', description: 'Exposición ante el comité evaluador.', order: 2 },
];

export const mockClasses = [
  { id: 'c1', title: 'Introducción al Diplomado', subtopic: 'Historia de la Energía Solar', teacher: 'Dr. Roberto Sánchez', date: '2024-05-10', duration: 45, status: 'completed', videoUrl: 'https://youtube.com/...' },
  { id: 'c2', title: 'Conceptos Básicos y Terminología', subtopic: 'Historia de la Energía Solar', teacher: 'Dr. Roberto Sánchez', date: '2024-05-13', duration: 60, status: 'completed', videoUrl: 'https://youtube.com/...' },
  { id: 'c3', title: 'Evolución Histórica', subtopic: 'Principios Físicos', teacher: 'Mtra. Elena Gómez', date: '2024-05-17', duration: 90, status: 'completed', videoUrl: 'https://youtube.com/...' },
  { id: 'c4', title: 'Taller de Herramientas I', subtopic: 'Diseño de Sistemas', teacher: 'Mtra. Elena Gómez', date: '2024-05-21', duration: 120, status: 'completed', videoUrl: 'https://youtube.com/...' },
  { id: 'c5', title: 'Análisis de Casos de Estudio', subtopic: 'Inversores y Reguladores', teacher: 'Ing. Carlos Díaz', date: '2024-06-01', duration: 60, status: 'upcoming', videoUrl: null },
  { id: 'c6', title: 'Metodología de Investigación', subtopic: 'Metodología de Investigación', teacher: 'Dr. Roberto Sánchez', date: '2024-06-10', duration: 45, status: 'upcoming', videoUrl: null },
  { id: 'c7', title: 'Asesoría Individual', subtopic: 'Presentación Final', teacher: 'Ing. Carlos Díaz', date: '2024-06-15', duration: 30, status: 'upcoming', videoUrl: null },
];

export const mockResources = [
  { id: 'r1', title: 'Presentación: Historia Solar', class: 'Introducción al Diplomado', teacher: 'Dr. Roberto Sánchez', type: 'presentation', url: '#' },
  { id: 'r2', title: 'Guía de Conceptos Básicos', class: 'Conceptos Básicos y Terminología', teacher: 'Dr. Roberto Sánchez', type: 'pdf', url: '#' },
  { id: 'r3', title: 'Simulador Solar Online', class: 'Taller de Herramientas I', teacher: 'Mtra. Elena Gómez', type: 'link', url: '#' },
  { id: 'r4', title: 'Manual de Inversores', class: 'Análisis de Casos de Estudio', teacher: 'Ing. Carlos Díaz', type: 'pdf', url: '#' },
  { id: 'r5', title: 'Plantilla de Proyecto', class: 'Metodología de Investigación', teacher: 'Dr. Roberto Sánchez', type: 'file', url: '#' },
];
