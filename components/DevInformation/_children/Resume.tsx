const Resume = () => {
  const title = 'Resume';

  const getEducation = () => {
    return (
      <div>
        <div>
          <img src="" alt="" /> <p>Education</p>
        </div>
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
