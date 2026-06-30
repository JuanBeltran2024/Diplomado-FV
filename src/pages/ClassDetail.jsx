import { useParams, Link } from 'react-router-dom';
import { modules, teachers } from '../data';
import { Download, PlayCircle, FileText } from 'lucide-react';

export default function ClassDetail() {
  const { id } = useParams();
  
  let clsData = null;
  let moduleData = null;
  
  modules.forEach(m => {
    const found = m.classes.find(c => c.id === id);
    if (found) {
      clsData = found;
      moduleData = m;
    }
  });

  if (!clsData) return <div>Clase no encontrada</div>;

  const teacher = teachers.find(t => t.id === clsData.teacherId);

  return (
    <div>
      <div className="page-header" style={{ marginBottom: '1.5rem' }}>
        <Link to={`/modules/${moduleData.id}`} style={{ color: 'var(--primary-light)', fontSize: '0.875rem', marginBottom: '1rem', display: 'inline-block' }}>
          &larr; Volver al Módulo
        </Link>
        <h1 className="page-title">{clsData.title}</h1>
        <span className="badge" style={{ marginTop: '0.5rem' }}>{moduleData.title}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div>
          {/* Video Player Placeholder */}
          <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#0f172a', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1.5rem', position: 'relative' }}>
            <PlayCircle size={64} style={{ opacity: 0.8 }} />
            <span style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontSize: '0.875rem', opacity: 0.8 }}>Reproductor de Video Simulado</span>
          </div>
          
          <div className="card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Acerca de esta clase</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>En esta sesión profundizaremos en los conceptos teóricos y realizaremos un análisis exhaustivo de los casos prácticos presentados en el material de apoyo. Asegúrate de descargar la presentación antes de comenzar la reproducción.</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Profesor</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={teacher.avatar} alt={teacher.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              <div>
                <h4 style={{ fontWeight: 600 }}>{teacher.name}</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{teacher.role}</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Recursos</h3>
            <button className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={18} /> Presentación.pdf</span>
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
