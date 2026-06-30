/**
 * Componente: Layout
 * Estructura contenedora (Wrapper) para las páginas internas de la plataforma.
 * Integra la barra lateral (Sidebar), la barra superior (Header) y define
 * un área dinámica donde se carga el contenido de cada página.
 */
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    // Contenedor principal que ocupa toda la pantalla mediante Flexbox
    <div className="app-layout">
      
      {/* --- BARRA LATERAL (FIJA) --- */}
      <Sidebar />
      
      {/* --- CONTENEDOR PRINCIPAL --- */}
      {/* Esta sección toma todo el ancho sobrante de la pantalla, al lado del Sidebar */}
      <main className="main-content">
        
        {/* --- BARRA SUPERIOR (HEADER) --- */}
        <Header />
        
        {/* --- ÁREA DINÁMICA DE CONTENIDO --- */}
        {/* El componente <Outlet /> de React Router es un "marcador de posición".
            Aquí es donde se insertarán automáticamente los componentes hijos (páginas)
            dependiendo de la URL actual (ej. Dashboard, Módulos, Profesores). */}
        <div className="page-content">
          <Outlet />
        </div>
        
      </main>
    </div>
  );
}
