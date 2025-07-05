import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        onLogout={onLogout}
      />
      <motion.div
        className="main-content"
        style={{
          flex: 1,
          padding: '24px',
          width: '100%',
          maxWidth: 'calc(100% - 240px)', // Adjust based on sidebar width
          marginLeft: '270px' // Same as sidebar width
        }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DashboardContent 
          activeSection={activeSection}
          user={user}
        />
      </motion.div>
    </div>
  );
};

export default Dashboard;