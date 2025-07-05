import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Bell, Shield, Eye, Palette, Globe } from 'lucide-react';

const SettingsSection: React.FC = () => {
  const settingsGroups = [
    {
      title: 'Cuenta',
      icon: Settings,
      items: [
        { label: 'Cambiar email', description: 'Actualiza tu dirección de correo electrónico' },
        { label: 'Cambiar contraseña', description: 'Modifica tu contraseña de respaldo' },
        { label: 'Eliminar cuenta', description: 'Elimina permanentemente tu cuenta', danger: true }
      ]
    },
    {
      title: 'Notificaciones',
      icon: Bell,
      items: [
        { label: 'Notificaciones por email', description: 'Recibe alertas importantes por correo' },
        { label: 'Alertas de seguridad', description: 'Notificaciones de actividad sospechosa' },
        { label: 'Nuevas funcionalidades', description: 'Entérate de las últimas actualizaciones' }
      ]
    },
    {
      title: 'Seguridad',
      icon: Shield,
      items: [
        { label: 'Autenticación en dos pasos', description: 'Agrega una capa extra de seguridad' },
        { label: 'Dispositivos conectados', description: 'Gestiona los dispositivos con acceso' },
        { label: 'Historial de acceso', description: 'Revisa tu actividad reciente' }
      ]
    },
    {
      title: 'Privacidad',
      icon: Eye,
      items: [
        { label: 'Datos compartidos', description: 'Controla qué información compartes' },
        { label: 'Aplicaciones con acceso', description: 'Revisa permisos de aplicaciones' },
        { label: 'Política de privacidad', description: 'Lee nuestra política de privacidad' }
      ]
    }
  ];

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Configuración</h1>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        {settingsGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: 'linear-gradient(135deg, #4285f4, #34a853)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <group.icon size={20} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff' }}>
                {group.title}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {group.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px',
                    backgroundColor: '#272727',
                    borderRadius: '8px',
                    border: '1px solid #404040',
                    cursor: 'pointer'
                  }}
                  whileHover={{ backgroundColor: '#404040' }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <div style={{ 
                      fontSize: '16px', 
                      fontWeight: '500', 
                      color: item.danger ? '#ea4335' : '#ffffff',
                      marginBottom: '4px'
                    }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '14px', color: '#9aa0a6' }}>
                      {item.description}
                    </div>
                  </div>
                  <div style={{ color: '#9aa0a6' }}>
                    →
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SettingsSection;