'use client';

import { useState } from 'react';
import './index.scss';

const DevInformation = () => {
  const [view, setView] = useState<string>('about');

  const getClassActive = (viewType: string) => {
    return view === viewType ? ' active' : '';
  };

  const NavMenu = () => {
    return (
      <div className="dev-information-menu">
        <button className={`dev-information-menu-item${getClassActive('about')}`} onClick={() => setView('about')}>
          About
        </button>
        <button className={`dev-information-menu-item${getClassActive('resume')}`} onClick={() => setView('resume')}>
          Resume
        </button>
        <button className={`dev-information-menu-item${getClassActive('portfolio')}`} onClick={() => setView('portfolio')}>
          Portfolio
        </button>
        <button className={`dev-information-menu-item${getClassActive('contact')}`} onClick={() => setView('contact')}>
          Contact
        </button>
      </div>
    );
  };

  return (
    <div className="dev-information">
      {NavMenu()}
      {view}
    </div>
  );
};

export default DevInformation;
