/**
 * Componente: ModuleDetail
 * Muestra el listado de clases pertenecientes a un módulo seleccionado.
 * Diferencia visualmente las clases que ya tienen grabación de aquellas que serán en vivo.
 */
import { useParams, Link } from 'react-router-dom';
import { modules } from '../data';
import { PlayCircle, Clock, Video } from 'lucide-react';

export default function ModuleDetail() {
  // Obtener el ID del módulo de la URL
  const { id } = useParams();
  const moduleData = modules.find(m => m.id === id);

  if (!moduleData) return <div>Módulo no encontrado</div>;

  return (
    <div>
      {/* --- ENCABEZADO DEL MÓDULO --- */}
      <div className="page-header">
        <Link to="/modules" style={{ color: 'var(--primary-light)', fontSize: '0.875rem', marginBottom: '1rem', display: 'inline-block' }}>
          &larr; Volver a Módulos
        </Link>
        <h1 className="page-title">{moduleData.title}</h1>
        <p className="page-description">{moduleData.description}</p>
      </div>

      {/* --- LISTA DE CLASES --- */}
      <div style={{ backgroundColor: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
        {moduleData.classes.map((cls, index) => (
          
          <div key={cls.id} style={{ padding: '1.5rem', borderBottom: index !== moduleData.classes.length - 1 ? '1px solid var(--border-color)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Información Básica de la Clase */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e0e7ff', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
                {index + 1}
              </div>
              <div>
                <h4 style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--text-dark)' }}>
                  {cls.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={14} /> {cls.duration}</span>
                </div>
              </div>
            </div>
            
            {/* Botón Dinámico: Grabación vs Meet en Vivo */}
            {cls.status === 'upcoming' ? (
              <Link to={`/class/${cls.id}`} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                <Video size={16} /> Próxima (En Vivo)
              </Link>
            ) : (
              <Link to={`/class/${cls.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                <PlayCircle size={16} /> Ver Grabación
              </Link>
            )}
            
          </div>
          
        ))}
      </div>
    </div>
  );
}
