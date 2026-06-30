import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Users, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Diplomado FV</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <Home size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/modules" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <BookOpen size={20} />
          <span>Módulos</span>
        </NavLink>
        <NavLink to="/teachers" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
          <Users size={20} />
          <span>Profesores</span>
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <NavLink to="/" className="nav-item">
          <LogOut size={20} />
          <span>Salir</span>
        </NavLink>
      </div>
    </aside>
  );
}
