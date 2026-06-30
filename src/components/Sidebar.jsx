/**
 * Componente: Sidebar
 * Representa la barra lateral de navegación de la plataforma LMS.
 * Contiene los enlaces principales para navegar entre las distintas secciones.
 */
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Users, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    // Contenedor principal de la barra lateral (fija a la izquierda)
    <aside className="sidebar">
      
      {/* --- SECCIÓN 1: Logotipo / Título --- */}
      <div className="sidebar-logo">
        <h2>Diplomado FV</h2>
      </div>

      {/* --- SECCIÓN 2: Menú de Navegación Principal --- */}
      {/* Utilizamos NavLink de react-router-dom porque nos permite saber si la ruta 
          está activa y asignarle la clase CSS 'active' dinámicamente. */}
      <nav className="sidebar-nav">
        
        {/* Enlace al Inicio/Dashboard */}
        <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <Home size={20} />
          <span>Dashboard</span>
        </NavLink>
        
        {/* Enlace al Temario/Módulos */}
        <NavLink to="/modules" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <BookOpen size={20} />
          <span>Módulos</span>
        </NavLink>
        
        {/* Enlace al Directorio de Profesores */}
        <NavLink to="/teachers" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <Users size={20} />
          <span>Profesores</span>
        </NavLink>
      </nav>

      {/* --- SECCIÓN 3: Pie de la barra lateral --- */}
      <div className="sidebar-footer">
        {/* Botón para cerrar sesión y regresar al inicio público */}
        <NavLink to="/" className="nav-item">
          <LogOut size={20} />
          <span>Salir</span>
        </NavLink>
      </div>
      
    </aside>
  );
}
