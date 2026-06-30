/**
 * Componente: Sidebar
 * Representa la barra lateral de navegación de la plataforma LMS.
 * Contiene los enlaces principales para navegar entre las distintas secciones.
 */
import { NavLink } from 'react-router-dom';
import { useRole } from '../context/RoleContext';
import { Home, BookOpen, Users, LogOut, Settings, Video, Upload, FileText, LayoutDashboard } from 'lucide-react';

export default function Sidebar() {
  const { role } = useRole();

  return (
    // Contenedor principal de la barra lateral (fija a la izquierda)
    <aside className="sidebar">
      
      {/* --- SECCIÓN 1: Logotipo / Título --- */}
      <div className="sidebar-logo">
        <h2>Diplomado FV</h2>
      </div>

      {/* --- SECCIÓN 2: Menú de Navegación Principal --- */}
      <nav className="sidebar-nav">
        
        {/* Enlace común para todos */}
        <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <Home size={20} />
          <span>Dashboard</span>
        </NavLink>

        {/* --- ENLACES ESTUDIANTE --- */}
        {role === 'student' && (
          <>
            <NavLink to="/modules" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <BookOpen size={20} />
              <span>Módulos</span>
            </NavLink>
            <NavLink to="/teachers" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <Users size={20} />
              <span>Profesores</span>
            </NavLink>
          </>
        )}

        {/* --- ENLACES PROFESOR --- */}
        {role === 'teacher' && (
          <>
            <NavLink to="/modules" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <BookOpen size={20} />
              <span>Mis Módulos</span>
            </NavLink>
            <NavLink to="/resources" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <Upload size={20} />
              <span>Subir Recursos</span>
            </NavLink>
            <NavLink to="/classes" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <Video size={20} />
              <span>Mis Clases</span>
            </NavLink>
          </>
        )}

        {/* --- ENLACES ADMINISTRADOR --- */}
        {role === 'admin' && (
          <>
            <NavLink to="/admin" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
              <LayoutDashboard size={20} />
              <span>Panel Admin</span>
            </NavLink>
          </>
        )}

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
