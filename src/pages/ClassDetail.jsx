/**
 * Componente: ClassDetail
 * Muestra el detalle de una clase específica. 
 * Dependiendo del estado ('upcoming' o 'completed'), renderizará el espacio
 * para el video grabado o un botón para acceder a Google Meet.
 */
import { useParams, Link } from 'react-router-dom';
import { modules, teachers } from '../data';
import { Download, PlayCircle, FileText, Video, Calendar } from 'lucide-react';

export default function ClassDetail() {
  const { id } = useParams();
  
  let clsData = null;
  let moduleData = null;
  
  // Buscar la clase en todos los módulos de manera anidada
  modules.forEach(m => {
    const found = m.classes.find(c => c.id === id);
    if (found) {
      clsData = found;
      moduleData = m;
    }
  });

  if (!clsData) return <div>Clase no encontrada</div>;

  const teacher = teachers.find(t => t.id === clsData.teacherId);
  const isUpcoming = clsData.status === 'upcoming';

  return (
    <div>
      {/* --- ENCABEZADO DE LA CLASE --- */}
      <div className="page-header" style={{ marginBottom: '1.5rem' }}>
        <Link to={`/modules/${moduleData.id}`} style={{ color: 'var(--primary-light)', fontSize: '0.875rem', marginBottom: '1rem', display: 'inline-block' }}>
          &larr; Volver al Módulo
        </Link>
        <h1 className="page-title">{clsData.title}</h1>
        {/* Etiqueta que identifica si es sesión en vivo o grabada */}
        <span className="badge" style={{ marginTop: '0.5rem', backgroundColor: isUpcoming ? '#fef3c7' : '#e0e7ff', color: isUpcoming ? '#d97706' : 'var(--primary-color)' }}>
          {isUpcoming ? 'Próximamente en Vivo' : 'Clase Grabada'}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        
        {/* --- COLUMNA PRINCIPAL (REPRODUCTOR O ACCESO A MEET) --- */}
        <div>
          {isUpcoming ? (
            
            // Render si la clase es EN VIVO (Muestra botón a Meet)
            <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#f8fafc', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Calendar size={64} style={{ color: 'var(--primary-light)', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Esta clase será transmitida en vivo</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Únete a la sesión de Google Meet a la hora programada.</p>
              <a href={clsData.meetLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                <Video size={18} /> Entrar a Google Meet
              </a>
            </div>
            
          ) : (
            
            // Render si la clase está GRABADA (Muestra reproductor)
            <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#0f172a', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1.5rem', position: 'relative' }}>
              <PlayCircle size={64} style={{ opacity: 0.8 }} />
              <span style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontSize: '0.875rem', opacity: 0.8 }}>Reproductor de Grabación de la Clase</span>
            </div>
            
          )}
          
          {/* Descripción de la clase (texto dinámico) */}
          <div className="card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Acerca de esta clase</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {isUpcoming 
                ? "Esta sesión se impartirá en vivo. Recuerda ser puntual, ingresar a la sesión con micrófono silenciado y haber descargado el material de apoyo (si aplica)."
                : "En esta sesión profundizamos en los conceptos teóricos y realizamos un análisis exhaustivo. La grabación ya está disponible para tu repaso."}
            </p>
          </div>
        </div>
        
        {/* --- COLUMNA SECUNDARIA (PROFESOR Y MATERIALES) --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Ficha del Profesor */}
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
          
          {/* Recursos Descargables */}
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
