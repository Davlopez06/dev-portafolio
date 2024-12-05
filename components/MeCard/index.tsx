import Image from 'next/image';
import './index.scss';
import { MeCardProps } from '@/utils/interfaces';
// import MePhoto from '@/resources/images/me.png';

const MeCard = (props: MeCardProps) => {
  const { job = '', name = '', social = [], socialMedia = [] } = props || {};

  const getTopCard = () => {
    return (
      <div className="me-card-personal-information">
        <Image
          // src={MePhoto}
          alt="img"
          className="me-card-personal-information-img"
          height={220}
          loading="lazy"
          src="https://i.pinimg.com/736x/dc/f8/b0/dcf8b0bd5cb6184960e0d32f917b0efd.jpg"
          width={220}
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

  const getSocialMedia = () => {
    if (socialMedia.length === 0) return null;

    return socialMedia.map((item, i) => {
      const { url = '', icon = '' } = item || {};
      return (
        <a href={url} key={`${url}-${i}`}>
          <Image src={icon} alt="instagram" width={20} height={20} />
        </a>
      );
    });
  };

  const getContactDetail = () => {
    return (
      <div className="me-card-contact-information">
        {getSocial()}
        <div className="me-card-contact-information-item">
          <div style={{ width: '42px' }} />
          <div className="me-card-contact-information-social">{getSocialMedia()}</div>
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
