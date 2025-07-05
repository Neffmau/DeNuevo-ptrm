import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Camera, 
  Mail, 
  Lock, 
  FileText, 
  Smartphone, 
  Download, 
  Key, 
  Settings, 
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange, onLogout }) => {
  const presentationItems = [
    { id: 'profile', icon: User, label: 'Perfil' },
    { id: 'face', icon: Camera, label: 'Registrar rostro' },
    { id: 'email', icon: Mail, label: 'Registrar correo' },
    { id: 'password', icon: Lock, label: 'Contraseña de respaldo' },
    { id: 'names', icon: FileText, label: 'Ingresar nombres' }
  ];

  const controlItems = [
    { id: 'apps', icon: Smartphone, label: 'Aplicaciones vinculadas' },
    { id: 'data', icon: Download, label: 'Solicitar datos personales' },
    { id: 'api', icon: Key, label: 'Solicitar API key' }
  ];

  return (
    <motion.div
      className="sidebar"
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sidebar-header">
        <div className="sidebar-logo">N</div>
        <div className="sidebar-title">noox id</div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Presentarte</div>
        <ul className="sidebar-nav">
          {presentationItems.map((item) => (
            <motion.li key={item.id} whileHover={{ scale: 1.02 }}>
              <a
                href="#"
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionChange(item.id);
                }}
              >
                <item.icon size={20} />
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Centro de Control</div>
        <ul className="sidebar-nav">
          {controlItems.map((item) => (
            <motion.li key={item.id} whileHover={{ scale: 1.02 }}>
              <a
                href="#"
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionChange(item.id);
                }}
              >
                <item.icon size={20} />
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <motion.button
          onClick={() => onSectionChange('settings')}
          className="btn btn-secondary"
          style={{ width: '100%', marginBottom: '12px' }}
          whileHover={{ scale: 1.02 }}
        >
          <Settings size={20} />
          Configuración
        </motion.button>
        
        <motion.button
          onClick={onLogout}
          className="btn btn-danger"
          style={{ width: '100%' }}
          whileHover={{ scale: 1.02 }}
        >
          <LogOut size={20} />
          Cerrar sesión
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Sidebar;