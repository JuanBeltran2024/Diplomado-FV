import { Link } from 'react-router-dom';
import { modules, userProfile } from '../data';
import { PlayCircle, BookOpen } from 'lucide-react';

export default function Dashboard() {
  const latestModule = modules[0];
  
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">¡Hola, {userProfile.name.split(' ')[0]}!</h1>
        <p className="page-description">Aquí tienes un resumen de tu progreso en el diplomado.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%)', color: 'white' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Continuar Aprendiendo</h3>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>{latestModule.title}</p>
          <Link to={`/modules/${latestModule.id}`} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
            <PlayCircle size={20} /> Ir al módulo actual
          </Link>
        </div>
        
        <div className="card">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--text-dark)' }}>Tu Progreso General</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ flex: 1, height: '10px', backgroundColor: 'var(--bg-color)', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: '35%', height: '100%', backgroundColor: 'var(--primary-light)' }}></div>
            </div>
            <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>35%</span>
          </div>
        </div>
      </div>
      
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Accesos Rápidos</h2>
      <div className="grid-3">
        <Link to="/modules" className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '1rem', backgroundColor: '#e0e7ff', color: 'var(--primary-color)', borderRadius: 'var(--radius-md)' }}>
            <BookOpen size={24} />
          </div>
          <div>
            <h4 style={{ fontWeight: 600 }}>Ver Temario</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Explora todos los módulos</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
