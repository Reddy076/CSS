import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem('token');

    // Dispatch custom event to notify Root component
    window.dispatchEvent(new Event('auth-change'));

    // Also dispatch storage event for cross-tab (optional consistency)
    window.dispatchEvent(new Event('storage'));
  }, []);

  return <Redirect to="/login" />;
}
