import { Link } from 'react-router-dom';
import { modules } from '../data';

export default function ModulesList() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Temario del Diplomado</h1>
        <p className="page-description">Explora todos los módulos y su contenido.</p>
      </div>

      <div className="grid-3">
        {modules.map(mod => (
          <div key={mod.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span className="badge">Módulo</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{mod.classes.length} clases</span>
            </div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{mod.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1, fontSize: '0.875rem' }}>{mod.description}</p>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                <span>Progreso</span>
                <span>{mod.progress}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-color)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${mod.progress}%`, height: '100%', backgroundColor: 'var(--primary-light)' }}></div>
              </div>
            </div>
            <Link to={`/modules/${mod.id}`} className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
