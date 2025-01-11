import { useState } from 'react';
import Image from 'next/image';
import { PortfolioConfig } from '@/utils/interfaces';

const Portfolio = ({ title = '', filters = [], projects = [] }: PortfolioConfig) => {
  const [filterSelected, setFilterSelected] = useState(filters?.[0] || 'All');
  const [projectCards, setProjectCards] = useState(6);

  const getFilterItems = () => {
    if (filters.length === 0) return null;

    return filters.map((filter, index) => {
      const classSelected = filter === filterSelected ? ' selected' : '';
      return (
        <button
          className={`dev-information-portfolio-filter-item${classSelected}`}
          key={`porfolio-${index}`}
          onClick={() => setFilterSelected(filter)}
        >
          {filter}
        </button>
      );
    });
  };

  const handleButtonShowMore = () => {
    setProjectCards((prev) => prev + 3);
  };

  const getShowMoreButton = () => {
    if (projectCards >= projects.length) return null;

    return (
      <button className="dev-information-show-more-button" onClick={handleButtonShowMore}>
        Show More
      </button>
    );
  };

  const getFilteredProyects = () => {
    if (filterSelected === filters?.[0] || filterSelected === 'All') return projects;

    return projects.filter((project) => project.type === filterSelected) || [];
  };

  const getProjects = () => {
    if (getFilteredProyects().length === 0) return null;

    return getFilteredProyects()
      .slice(0, projectCards)
      .map((project) => {
        const { image = '', name = '', type = '', url = '' } = project || {};

        const content = (
          <>
            <Image className="dev-information-portfolio-project-img" src={image} alt={name} width={240} height={135} />
            <p>{name}</p>
            <p>{type}</p>
          </>
        );

        if (!url || url === '')
          return (
            <div className="dev-information-portfolio-project-card" key={`project-${name}`}>
              {content}
            </div>
          );

        return (
          <a className="dev-information-portfolio-project-card" key={`project-${name}`} href={url}>
            {content}
          </a>
        );
      });
  };

  return (
    <div className="dev-information-view">
      <h1 className="dev-information-view-title">{title}</h1>
      <div className="dev-information-portfolio-filter">{getFilterItems()}</div>
      <div className="dev-information-portfolio-projects">{getProjects()}</div>
      {getShowMoreButton()}
    </div>
  );
};

export default Portfolio;
