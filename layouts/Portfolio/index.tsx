import MeCard from '@/components/MeCard';
import './index.scss';
import DevInformation from '@/components/DevInformation';
import { CARD_CONFIG } from '@/utils/constans';

const Portfolio = () => {

  return (
    <div className="portfolio">
      <MeCard {...CARD_CONFIG} />
      <DevInformation />
    </div>
  );
};

export default Portfolio;
