import { teachers } from '../data';
import { Mail } from 'lucide-react';

export default function Teachers() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Cuerpo Docente</h1>
        <p className="page-description">Conoce a los expertos que te acompañarán durante el diplomado.</p>
      </div>

      <div className="grid-3">
        {teachers.map(teacher => (
          <div key={teacher.id} className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
            <img src={teacher.avatar} alt={teacher.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }} />
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '0.25rem' }}>{teacher.name}</h3>
            <p style={{ color: 'var(--primary-light)', fontWeight: 500, fontSize: '0.875rem', marginBottom: '1rem' }}>{teacher.role}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{teacher.bio}</p>
            <button className="btn btn-outline" style={{ width: '100%', fontSize: '0.875rem' }}>
              <Mail size={16} /> Contactar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
