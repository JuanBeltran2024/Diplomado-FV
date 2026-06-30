// Datos simulados del profesor activo
export const currentTeacher = {
  id: 't1',
  name: 'Dr. Roberto Sánchez',
  email: 'roberto@diplomado.edu',
  area: 'Fundamentos Fotovoltaicos',
  bio: 'Doctor en Ingeniería Eléctrica con 15 años de experiencia en energía solar y sistemas fotovoltaicos.',
  avatar: 'https://ui-avatars.com/api/?name=Roberto+Sanchez&background=1e3a8a&color=fff&size=150',
  linkedin: '#',
};

export const teacherModules = [
  {
    id: 'm1',
    order: 1,
    title: 'Módulo 1: Fundamentos y Contexto',
    description: 'Introducción a los conceptos clave y contexto histórico del diplomado. Establece las bases para los siguientes módulos.',
    subtopics: ['Historia de la Energía Solar', 'Principios Físicos', 'Tipos de Paneles'],
    totalClasses: 3,
    completedClasses: 3,
  },
  {
    id: 'm3',
    order: 3,
    title: 'Módulo 3: Proyecto de Grado',
    description: 'Desarrollo, asesoramiento y presentación del proyecto final del diplomado.',
    subtopics: ['Metodología de Investigación', 'Presentación Final'],
    totalClasses: 2,
    completedClasses: 0,
  },
];

export const teacherClasses = [
  {
    id: 'c1',
    title: 'Introducción al Diplomado',
    subtopic: 'Historia de la Energía Solar',
    module: 'Módulo 1',
    date: '2024-05-10',
    duration: 45,
    status: 'completed',
    videoUrl: 'https://youtube.com/watch?v=example1',
    meetLink: null,
  },
  {
    id: 'c2',
    title: 'Conceptos Básicos y Terminología',
    subtopic: 'Historia de la Energía Solar',
    module: 'Módulo 1',
    date: '2024-05-13',
    duration: 60,
    status: 'completed',
    videoUrl: 'https://youtube.com/watch?v=example2',
    meetLink: null,
  },
  {
    id: 'c3',
    title: 'Evolución Histórica',
    subtopic: 'Principios Físicos',
    module: 'Módulo 1',
    date: '2024-05-17',
    duration: 90,
    status: 'completed',
    videoUrl: 'https://youtube.com/watch?v=example3',
    meetLink: null,
  },
  {
    id: 'c6',
    title: 'Metodología de Investigación',
    subtopic: 'Metodología de Investigación',
    module: 'Módulo 3',
    date: '2024-06-10',
    duration: 45,
    status: 'upcoming',
    videoUrl: null,
    meetLink: 'https://meet.google.com/abc-xyz',
  },
  {
    id: 'c7',
    title: 'Asesoría Individual',
    subtopic: 'Presentación Final',
    module: 'Módulo 3',
    date: '2024-06-15',
    duration: 30,
    status: 'upcoming',
    videoUrl: null,
    meetLink: 'https://meet.google.com/def-uvw',
  },
];

export const teacherPresentations = [
  { id: 'p1', title: 'Presentación: Historia Solar', class: 'Introducción al Diplomado', date: '2024-05-10', slides: 24, url: '#' },
  { id: 'p2', title: 'Presentación: Conceptos Básicos', class: 'Conceptos Básicos y Terminología', date: '2024-05-13', slides: 38, url: '#' },
  { id: 'p3', title: 'Presentación: Evolución Histórica', class: 'Evolución Histórica', date: '2024-05-17', slides: 31, url: '#' },
];

export const teacherRecordings = [
  { id: 'r1', title: 'Grabación: Introducción al Diplomado', class: 'Introducción al Diplomado', date: '2024-05-10', duration: '45 min', platform: 'YouTube', url: 'https://youtube.com/watch?v=example1' },
  { id: 'r2', title: 'Grabación: Conceptos Básicos y Terminología', class: 'Conceptos Básicos y Terminología', date: '2024-05-13', duration: '60 min', platform: 'YouTube', url: 'https://youtube.com/watch?v=example2' },
  { id: 'r3', title: 'Grabación: Evolución Histórica', class: 'Evolución Histórica', date: '2024-05-17', duration: '90 min', platform: 'YouTube', url: 'https://youtube.com/watch?v=example3' },
];

export const teacherResources = [
  { id: 'res1', title: 'Guía de Conceptos Básicos', class: 'Conceptos Básicos y Terminología', type: 'pdf', size: '2.3 MB', url: '#' },
  { id: 'res2', title: 'Simulador Solar Online', class: 'Evolución Histórica', type: 'link', size: null, url: '#' },
  { id: 'res3', title: 'Plantilla de Proyecto Final', class: 'Metodología de Investigación', type: 'file', size: '540 KB', url: '#' },
  { id: 'res4', title: 'Normativa RETIE 2024', class: 'Metodología de Investigación', type: 'pdf', size: '8.1 MB', url: '#' },
];

export const teacherAnnouncements = [
  {
    id: 'a1',
    title: '¡Bienvenidos al Diplomado FV!',
    body: 'Bienvenidos al Diplomado de Fotovoltaica. Estaremos trabajando juntos durante los próximos meses. Recuerden revisar el syllabus y las fechas de clases en el calendario.',
    date: '2024-05-08',
    tag: 'general',
  },
  {
    id: 'a2',
    title: 'Cambio de horario - Clase del 15 de junio',
    body: 'La clase de Asesoría Individual del 15 de junio se traslada de las 3:00 PM a las 5:00 PM. El enlace de Meet permanece igual. Disculpen los inconvenientes.',
    date: '2024-06-05',
    tag: 'urgent',
  },
  {
    id: 'a3',
    title: 'Recurso adicional disponible: Normativa RETIE',
    body: 'He subido el documento de Normativa RETIE 2024 a la sección de Recursos del Módulo 3. Es material de consulta para el proyecto de grado.',
    date: '2024-06-08',
    tag: 'info',
  },
];
