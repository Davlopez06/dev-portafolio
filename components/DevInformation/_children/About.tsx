import { AboutConfig } from '@/utils/interfaces';
import Image from 'next/image';
import Man from '@/resources/images/businessman.svg'
import Woman from '@/resources/images/businesswoman.svg'

const About = ({ title = '', description = '', doingCard = [], recomendedCard = [] }: AboutConfig) => {
  const getCards = () => {
    if (doingCard.length === 0) return null;
    return doingCard.map((item, i) => {
      const { icon = '', title = '', subtitle = '' } = item || {};
      return (
        <div key={`${title}-${i}`} className="dev-information-view-card">
          <Image src={icon} width={50} height={50} alt="doing-icon" />
          <div className="dev-information-view-card-content">
            <p className="dev-information-view-card-title">{title}</p>
            <p className="dev-information-view-card-subtitle">{subtitle}</p>
          </div>
        </div>
      );
    });
  };

  const getGenderImg = (gender: string) => {
    if (gender === 'male') return <Image className='dev-information-view-card-icon' src={Man} alt='icon-recommender' width={30}  height={30} />

    return <Image className='dev-information-view-card-icon' src={Woman} alt='icon-recommender' width={30} height={30} />
  }

  const getRecomendedCards = () => {
    if (recomendedCard.length === 0) return null;

    return recomendedCard.map((item, i) => {
      const { name = '', recomended = '', gender = '' } = item || {};

      return (
        <div key={`${name}-${i}`} className="dev-information-view-card">
          <div className="dev-information-view-card-content">
            {getGenderImg(gender)}
            <p className="dev-information-view-card-title">{name}</p>
            <p className="dev-information-view-card-subtitle">{recomended}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="dev-information-view">
      <h1 className="dev-information-view-title">{title}</h1>
      <p className="dev-information-view-description">{description}</p>
      <h2 className="dev-information-view-subtitle">What I&apos;m Doing</h2>
      <div className="dev-information-view-cards">{getCards()}</div>
      <h2 className="dev-information-view-subtitle">Recommendations</h2>
      <div className="dev-information-view-cards recommender">{getRecomendedCards()}</div>
    </div>
  );
};

export default About;
