import MeCard, { MeCardProps } from '@/components/MeCard';
import './index.scss';
import DevInformation from '@/components/DevInformation';
import MailIcon from '@/resources/images/mail.svg';
import MobileIcon from '@/resources/images/mobile.svg';
import BirthdayIcon from '@/resources/images/birthday.svg';
import GpsIcon from '@/resources/images/gps.svg';

const Portfolio = () => {
  const cardConfig: MeCardProps = {
    instagramUrl: 'https://www.instagram.com/davlopez_06/',
    job: 'Full Stack Developer',
    linkedInUrl: 'https://www.linkedin.com/in/david-lopez-valdes-310630233/',
    name: 'David López Valdés',
    whatsappUrl: 'https://wa.me/573135557940',
    social: [
      {
        name: 'Email',
        value: 'davidlopezvaldes@gmail.com',
        icon: MailIcon,
      },
      {
        name: 'Phone',
        value: '+57 3135557940',
        icon: MobileIcon,
      },
      {
        name: 'Birthday',
        value: '6 January, 2001',
        icon: BirthdayIcon,
      },
      {
        name: 'Location',
        value: 'Medellín, Colombia',
        icon: GpsIcon,
      },
    ],
  };

  return (
    <div className="portfolio">
      <MeCard {...cardConfig} />
      <DevInformation />
    </div>
  );
};

export default Portfolio;
