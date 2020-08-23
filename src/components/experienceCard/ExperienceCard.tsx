import ColorThief from 'colorthief';
import React, { createRef, useState } from 'react';
import './ExperienceCard.scss';

interface CardProps {
  cardInfo: {
    company: string;
    desc: string;
    date: string;
    companylogo: any;
    role: string;
    descBullets?: string[];
  };
}

const ExperienceCard = ({
  cardInfo: { company, desc, date, companylogo, role, descBullets },
}: CardProps) => {
  const [colorArrays, setColorArrays] = useState<any>([]);
  const imgRef = createRef() as any;

  const getColorArrays = () => {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  };

  const rgb: (values: []) => any = (values: []) => {
    return typeof values === 'undefined'
      ? null
      : 'rgb(' + values.join(', ') + ')';
  };

  const GetDescBullets = ({ descBullets }: any) => {
    return descBullets
      ? descBullets.map((item: React.ReactNode) => (
          <li className='subTitle'>{item}</li>
        ))
      : null;
  };

  return (
    <div className='experience-card'>
      <div
        style={{ background: rgb(colorArrays) }}
        className='experience-banner'
      >
        <div className='experience-blurred_div'></div>
        <div className='experience-div-company'>
          <h5 className='experience-text-company'>{company}</h5>
        </div>

        <img
          crossOrigin={'anonymous'}
          ref={imgRef}
          className='experience-roundedimg'
          src={companylogo}
          alt={company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className='experience-text-details'>
        <h5 className='experience-text-role'>{role}</h5>
        <h5 className='experience-text-date'>{date}</h5>
        <p className='subTitle experience-text-desc'>{desc}</p>
        <ul>
          <GetDescBullets descBullets={descBullets} />
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
