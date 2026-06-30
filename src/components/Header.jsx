import { userProfile } from '../data';

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-search">
        <h3 style={{color: 'var(--text-muted)', fontWeight: 500}}>Plataforma Académica</h3>
      </div>
      <div className="header-profile">
        <div className="profile-info">
          <span className="profile-name">{userProfile.name}</span>
          <span className="profile-role">{userProfile.role}</span>
        </div>
        <img src={userProfile.avatar} alt="Profile" className="profile-avatar" />
      </div>
    </header>
  );
}
