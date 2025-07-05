import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Shield, Clock } from 'lucide-react';

interface ProfileSectionProps {
  user: any;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ user }) => {
  const stats = [
    { label: 'Aplicaciones vinculadas', value: '3', icon: Shield },
    { label: 'Último acceso', value: 'Hoy', icon: Clock },
    { label: 'Métodos de auth', value: '2', icon: User }
  ];

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Bienvenido de vuelta</h1>
        <div className="user-info">
          <div className="user-avatar">{user.avatar}</div>
          <div>
            <div style={{ fontWeight: '500' }}>{user.name}</div>
            <div style={{ fontSize: '14px', color: '#9aa0a6' }}>{user.email}</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'linear-gradient(135deg, #4285f4, #34a853)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <stat.icon size={24} />
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', color: '#9aa0a6' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
          Estado de la cuenta
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#e0e0e0' }}>Verificación por correo</span>
            <span style={{ color: '#34a853', fontWeight: '500' }}>✓ Verificado</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#e0e0e0' }}>Reconocimiento facial</span>
            <span style={{ color: '#ea4335', fontWeight: '500' }}>Pendiente</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#e0e0e0' }}>Contraseña de respaldo</span>
            <span style={{ color: '#ea4335', fontWeight: '500' }}>No configurada</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileSection;