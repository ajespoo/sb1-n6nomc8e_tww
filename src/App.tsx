import React, { useState } from 'react';
import DashboardLayout from './features/dashboard/layout/DashboardLayout';
import UserDashboard from './features/dashboard/UserDashboard';
import type { DashboardSection } from './features/dashboard/types/dashboard';

function App() {
  const [activeSection, setActiveSection] = useState<DashboardSection>('overview');

  return (
    <DashboardLayout
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    >
      <UserDashboard activeSection={activeSection} />
    </DashboardLayout>
  );
}

export default App;