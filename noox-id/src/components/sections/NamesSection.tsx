import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Check } from 'lucide-react';

const NamesSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    address: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular registro
    setTimeout(() => {
      setIsSuccess(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSuccess) {
    return (
      <div>
        <div className="header">
          <h1 className="header-title">Información personal guardada</h1>
        </div>

        <motion.div
          className="card"
          style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="success-check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Check size={48} />
          </motion.div>
          
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '16px' }}>
            ¡Información personal guardada!
          </h3>
          
          <p style={{ color: '#9aa0a6', fontSize: '16px', lineHeight: '1.6' }}>
            Tus datos personales han sido guardados de forma segura.
            Podrás actualizarlos en cualquier momento desde configuración.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h1 className="header-title">Ingresar nombres (Opcional)</h1>
      </div>

      <motion.div
        className="card"
        style={{ maxWidth: '600px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'linear-gradient(135deg, #4285f4, #34a853)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            color: 'white'
          }}>
            <User size={32} />
          </div>
          
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
            Información personal
          </h3>
          
          <p style={{ color: '#9aa0a6', fontSize: '16px' }}>
            Agrega tus datos personales para una experiencia más personalizada
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div className="form-group">
              <label className="form-label">Nombres</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                placeholder="Ingresa tus nombres"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Apellidos</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                placeholder="Ingresa tus apellidos"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div className="form-group">
              <label className="form-label">Edad</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="form-input"
                placeholder="Ingresa tu edad"
                min="1"
                max="120"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Dirección</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
                placeholder="Ingresa tu dirección"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '20px' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <User size={20} />
            Guardar información
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default NamesSection;