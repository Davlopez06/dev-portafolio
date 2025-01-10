import educationIcon from '@/resources/images/education.svg';
import Image from 'next/image';

const Resume = () => {
  const title = 'Resume';
  const education = [
    {
      title: 'Technology in software development, ITM',
      date: '2018 - 2023',
      description: 'I have studied the basics of programming, data structures, algorithms, and software engineering',
    },
    {
      title: 'Full Stack Development, Henry',
      date: '2022',
      // eslint-disable-next-line max-len
      description: 'Henry Full Stack Bootcamp is an intensive program that teaches web development using technologies like JavaScript, React, and Node.js, with a hands-on approach focused on employability. It also offers mentoring and job search support to ensure graduates success.',
    },
    {
      title: 'Master in Javascript, Udemy',
      date: '2022',
      description: 'Master in Javascript course, which covers advanced topics in JavaScript',
    },
    {
      title: 'Systems engineering, ITM',
      date: '2023 - 2025',
      // eslint-disable-next-line max-len
      description: 'Systems Engineering is a discipline that designs, develops, and manages complex systems by integrating hardware, software, and processes to solve problems. It combines areas like programming, networks, and data analysis to optimize technological solutions.',
    },
  ];

  const getEducationItems = () => {
    if (education.length === 0) return null;

    return education.map((item,index) => {
      const { title = '', date = '', description = '' } = item || {};

      return (
        <div className="dev-information-education-item" key={`education-${index}`}>
          <div className="dev-information-education-item-line">
            <div className="dev-information-education-item-point" />
          </div>
          <div className='dev-information-education-info'>
            <p className='dev-information-education-title'>{title}</p>
            <p className='dev-information-education-date'>{date}</p>
            <p className='dev-information-education-description'>{description}</p>
          </div>
        </div>
      );
    });
  };

  const getEducation = () => {
    return (
      <div className="dev-information-education-ctn">
        <div className="dev-information-view-education-title">
          <Image className="dev-information-view-icon-resume" width={40} height={40} src={educationIcon} alt="education-icon" />{' '}
          <p className="dev-information-view-education-title-text">Education</p>
        </div>
        {getEducationItems()}
      </div>
    );
  };
  return (
    <div className="dev-information-view">
      <h1 className="dev-information-view-title">{title}</h1>
      {getEducation()}
    </div>
  );
};

export default Resume;
