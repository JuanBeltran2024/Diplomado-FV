import { userProfile } from '../data';
import { useRole } from '../context/RoleContext';

export default function Header() {
  const { role, setRole } = useRole();

  return (
    <header className="app-header">
      <div className="header-search">
        <h3 style={{color: 'var(--text-muted)', fontWeight: 500}}>Plataforma Académica</h3>
      </div>
      
      {/* Selector de Rol Temporal */}
      <div style={{ marginRight: '20px' }}>
        <label htmlFor="role-select" style={{ marginRight: '10px', fontWeight: 'bold' }}>Simular Rol:</label>
        <select 
          id="role-select" 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          style={{ padding: '5px', borderRadius: '4px' }}
        >
          <option value="student">Estudiante</option>
          <option value="teacher">Profesor</option>
          <option value="admin">Administrador</option>
        </select>
      </div>

      <div className="header-profile">
        <div className="profile-info">
          <span className="profile-name">{userProfile.name}</span>
          <span className="profile-role">{role === 'student' ? 'Estudiante' : role === 'teacher' ? 'Profesor' : 'Administrador'}</span>
        </div>
        <img src={userProfile.avatar} alt="Profile" className="profile-avatar" />
      </div>
    </header>
  );
}
