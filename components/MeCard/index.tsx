import Image from 'next/image';
import './index.scss';
import Instagram from '@/resources/images/instagram.svg';
import LinkedIn from '@/resources/images/linkedIn.svg';
import Whatsapp from '@/resources/images/whatsapp.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
// import MePhoto from '@/resources/images/me.png';

interface social {
  name: string;
  value: string;
  icon: StaticImport | string;
}
export interface MeCardProps {
  instagramUrl: string;
  job: string;
  linkedInUrl: string;
  name: string;
  social: Array<social>;
  whatsappUrl: string;
}

const MeCard = (props: MeCardProps) => {
  const { instagramUrl = '', job = '', linkedInUrl = '', name = '', social = [], whatsappUrl = '' } = props || {};

  const getTopCard = () => {
    return (
      <div className="me-card-personal-information">
        <Image
          alt="img"
          className="me-card-personal-information-img"
          height={200}
          // src={MePhoto}
          src="https://i.pinimg.com/736x/dc/f8/b0/dcf8b0bd5cb6184960e0d32f917b0efd.jpg"
          width={200}
        />
        <p className="me-card-personal-information-name">{name}</p>
        <p className="me-card-personal-information-profession">{job}</p>
      </div>
    );
  };

  const getSocial = () => {
    const socials = social.map((item) => {
      const { name = '', value = '', icon = '' } = item || {};

      return (
        <div className="me-card-contact-information-item" key={name}>
          <Image className="me-card-contact-information-img" width={30} height={30} src={icon} alt="icon" />
          <div className="me-card-contact-information-ctn">
            <p className="me-card-contact-information-label">{name}</p>
            <p className="me-card-contact-information-value">{value}</p>
          </div>
        </div>
      );
    });

    return <>{socials}</>;
  };

  const getContactDetail = () => {
    return (
      <div className="me-card-contact-information">
        {getSocial()}
        <div className="me-card-contact-information-item">
          <div style={{ width: '42px' }} />
          <div className="me-card-contact-information-social">
            <a href={instagramUrl}>
              <Image src={Instagram} alt="instagram" width={20} height={20} />
            </a>
            <a href={linkedInUrl}>
              <Image src={LinkedIn} alt="linkedin" width={20} height={20} />
            </a>
            <a href={whatsappUrl}>
              <Image src={Whatsapp} alt="whatsapp" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="me-card">
      {getTopCard()}
      {getContactDetail()}
    </div>
  );
};

export default MeCard;
