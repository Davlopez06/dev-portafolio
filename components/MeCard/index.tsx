'use client';

import { useState } from 'react';
import Image from 'next/image';
import './index.scss';
import { MeCardProps } from '@/utils/interfaces';
import MePhoto from '@/resources/images/me.png';

const MeCard = (props: MeCardProps) => {
  const { job = '', name = '', social = [], socialMedia = [] } = props || {};

  const [tooltip, setTooltip] = useState({
    show: false,
    index: 0,
  });

  const getTopCard = () => {
    return (
      <div className="me-card-personal-information">
        <Image src={MePhoto} alt="img" className="me-card-personal-information-img" height={220} loading="lazy" width={220} />
        <p className="me-card-personal-information-name">{name}</p>
        <p className="me-card-personal-information-profession">{job}</p>
      </div>
    );
  };

  const copyText = (text: string, index: number) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setTooltip(() => ({
          show: true,
          index: index + 1,
        }));
        setTimeout(
          () =>
            setTooltip(() => ({
              show: false,
              index: 0,
            })),
          2000,
        );
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Error al copiar al portapapeles: ', err);
      });
  };

  const getTooltip = (i: number) => {
    if (!tooltip.show || tooltip.index !== i + 1) return null;

    return <div className={'me-card-contact-information-tooltip'}>Texto Copiado</div>;
  };

  const getSocial = () => {
    const socials = social.map((item, index) => {
      const { name = '', value = '', icon = '' } = item || {};

      return (
        <div className="me-card-contact-information-item" key={name}>
          <Image className="me-card-contact-information-img" width={30} height={30} src={icon} alt="icon" />
          <div className="me-card-contact-information-ctn">
            <p className="me-card-contact-information-label">{name}</p>
            <div className="me-card-contact-information-value" onClick={() => copyText(value, index)}>
              {value}
            </div>
            {getTooltip(index)}
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
