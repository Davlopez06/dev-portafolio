import ResumeIcon from '@/resources/images/education.svg';
import { ResumeConfig, ResumeItems } from '@/utils/interfaces';
import Image from 'next/image';
import { useState } from 'react';

const Resume = ({ title = '', education = [], experience = [], skills = [] }: ResumeConfig) => {
  const [skillsNumber, setSkillNumbers] = useState(4);

  const getResumeItems = (type: Array<ResumeItems>) => {
    if (type.length === 0) return null;

    return type.map((item, index) => {
      const { title = '', date = '', description = '' } = item || {};

      return (
        <div className="dev-information-education-item" key={`education-${index}`}>
          <div className="dev-information-education-item-line">
            <div className="dev-information-education-item-point" />
          </div>
          <div className="dev-information-education-info">
            <p className="dev-information-education-title">{title}</p>
            <p className="dev-information-education-date">{date}</p>
            <p className="dev-information-education-description">{description}</p>
          </div>
        </div>
      );
    });
  };

  const getEducation = () => {
    return (
      <div className="dev-information-education-ctn">
        <div className="dev-information-view-education-title">
          <Image className="dev-information-view-icon-resume" width={40} height={40} src={ResumeIcon} alt="education-icon" />{' '}
          <p className="dev-information-view-education-title-text">Education</p>
        </div>
        {getResumeItems(education)}
      </div>
    );
  };

  const getExperience = () => {
    return (
      <div className="dev-information-education-ctn">
        <div className="dev-information-view-education-title">
          <Image className="dev-information-view-icon-resume" width={40} height={40} src={ResumeIcon} alt="education-icon" />{' '}
          <p className="dev-information-view-education-title-text">Experience</p>
        </div>
        {getResumeItems(experience)}
      </div>
    );
  };

  const handleButtonShowMore = () => {
    setSkillNumbers(prev => prev + 4);
  }

  const getShowMoreButton = () => {
    if (skillsNumber >= skills.length) return null;

    return <button className='dev-information-show-more-button' onClick={handleButtonShowMore}>Show More</button>
  }

  const getSkillsItem = () => {
    if (skills.length === 0) return null;

    const items = skills.slice(0, skillsNumber).map((skill, index) => {
      const { name = '', experience = '' } = skill || {};
      return (
        <div className="dev-information-skills-item" key={`skill-${index}`}>
          <p>{name}:</p>
          <div className="dev-information-skills-bar-ctn">
            <div className="dev-information-skills-bar" style={{ width: experience }} />
          </div>
        </div>
      );
    });

    return <div className="dev-information-skills-ctn">{items}{getShowMoreButton()}</div>;
  };

  const getSkills = () => {
    return (
      <div className="dev-information-skills-container">
        <div className="dev-information-view-education-title">
          <p className="dev-information-view-education-title-text">My skills</p>
        </div>
        {getSkillsItem()}
      </div>
    );
  };

  return (
    <div className="dev-information-view">
      <h1 className="dev-information-view-title">{title}</h1>
      {getEducation()}
      {getExperience()}
      {getSkills()}
    </div>
  );
};

export default Resume;
