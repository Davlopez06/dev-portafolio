import Image from 'next/image';
import './index.scss';
import MailIcon from '@/resources/images/mail.svg';

const MeCard = () => {
  const getTopCard = () => {
    return (
      <div className="me-card-personal-information">
        <Image
          alt="img"
          className="me-card-personal-information-img"
          height={200}
          src="https://i.pinimg.com/736x/dc/f8/b0/dcf8b0bd5cb6184960e0d32f917b0efd.jpg"
          width={200}
        />
        <p className="me-card-personal-information-name">David López Valdés</p>
        <p className="me-card-personal-information-profession">Full Stack Developer</p>
      </div>
    );
  };

  const getContactDetail = () => {
    return <div className='me-card-contact-information'>
      <div className='me-card-contact-information-item'>
        <Image className='me-card-contact-information-img' width={30} height={30} src={MailIcon} alt='icon'/>
        <div className='me-card-contact-information-ctn'>
          <p className='me-card-contact-information-label'>Email</p>
          <p className='me-card-contact-information-value'>davidlopezvaldes@gmail.com</p>
        </div>
      </div>
    </div>
  }

  return <div className="me-card">{getTopCard()}
    {getContactDetail()}</div>;
};

export default MeCard;
