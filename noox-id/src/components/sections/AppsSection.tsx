import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Edit, Trash2 } from 'lucide-react';

const AppsSection: React.FC = () => {
  const apps = [
    {
      id: 1,
      name: 'Gmail',
      icon: 'G',
      session: 'Activa desde hace 2 días',
      color: '#ea4335'
    },
    {
      id: 2,
      name: 'GitHub',
      icon: 'GH',
      session: 'Activa desde hace 1 semana',
      color: '#333'
    },
    {
      id: 3,
      name: 'Spotify',
      icon: 'S',
      session: 'Activa desde hace 3 días',
      color: '#1db954'
    },
    {
      id: 4,
      name: 'Slack',
      icon: 'SL',
      session: 'Activa desde hace 1 día',
      color: '#4a154b'
    }
  ];

  const handleEdit = (appId: number) => {
    console.log('Editando app:', appId);
  };

  const handleDelete = (appId: number) => {
    console.log('Eliminando app:', appId);
  };

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Aplicaciones vinculadas</h1>
        <motion.button
          className="btn btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Smartphone size={20} />
          Vincular nueva app
        </motion.button>
      </div>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff', marginBottom: '20px' }}>
          Aplicaciones conectadas ({apps.length})
        </h3>
        
        <p style={{ color: '#9aa0a6', fontSize: '16px', marginBottom: '24px' }}>
          Estas aplicaciones tienen acceso a tu cuenta noox id. 
          Puedes revocar el acceso en cualquier momento.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              className="app-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div 
                className="app-icon" 
                style={{ backgroundColor: app.color }}
              >
                {app.icon}
              </div>
              
              <div className="app-info">
                <div className="app-name">{app.name}</div>
                <div className="app-session">{app.session}</div>
              </div>

              <div className="app-actions">
                <motion.button
                  onClick={() => handleEdit(app.id)}
                  className="btn btn-secondary"
                  style={{ padding: '8px 12px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Edit size={16} />
                </motion.button>
                
                <motion.button
                  onClick={() => handleDelete(app.id)}
                  className="btn btn-danger"
                  style={{ padding: '8px 12px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Trash2 size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AppsSection;