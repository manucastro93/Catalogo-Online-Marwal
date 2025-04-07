import { Component } from 'solid-js';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import { Outlet } from '@solidjs/router';

const DashboardComponent: Component = () => {
  console.log('DashboardComponent');
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ 'flex-grow': 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardComponent;