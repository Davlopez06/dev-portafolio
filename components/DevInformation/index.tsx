'use client';

import { useState } from 'react';
import './index.scss';
import { ABOUT_CONFIG, CONTACT_CONFIG, NAV_ITEMS, PORTFOLIO_CONFIG, RESUME_CONFIG } from '@/utils/constans';
import dynamic from 'next/dynamic';
import Contact from './_children/Contact';

const About = dynamic(() => import('./_children/About'));
const Resume = dynamic(() => import('./_children/Resume'));
const Portfolio = dynamic(() => import('./_children/Portfolio'));

const DevInformation = () => {
  const [view, setView] = useState<string>('about');

  const getClassActive = (viewType: string) => {
    return view === viewType ? ' active' : '';
  };

  const getNavItem = () => {
    if (NAV_ITEMS.length === 0) return null;

    return NAV_ITEMS.map((item, i) => {
      const { label = '', value = '' } = item || {};
      return (
        <button key={`${label}-${i}`} className={`dev-information-menu-item${getClassActive(value)}`} onClick={() => setView(value)}>
          {label}
        </button>
      );
    });
  };

  const NavMenu = () => {
    return <div className="dev-information-menu">{getNavItem()}</div>;
  };

  const getView = () => {
    if (view === 'resume') return <Resume {...RESUME_CONFIG} />;
    if (view === 'portfolio') return <Portfolio {...PORTFOLIO_CONFIG} />;
    if (view === 'contact') return <Contact {...CONTACT_CONFIG} />;

    return <About {...ABOUT_CONFIG} />;
  };

  return (
    <div className="dev-information-ctn">
      <div className="dev-information">
        {NavMenu()}
        {getView()}
      </div>
    </div>
  );
};

export default DevInformation;
