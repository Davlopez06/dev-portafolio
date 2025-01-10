/* eslint-disable max-len */
import { AboutConfig, MeCardProps, NavItems } from './interfaces';
import MailIcon from '@/resources/images/mail.svg';
import MobileIcon from '@/resources/images/mobile.svg';
import BirthdayIcon from '@/resources/images/birthday.svg';
import GpsIcon from '@/resources/images/gps.svg';
import Instagram from '@/resources/images/instagram.svg';
import LinkedIn from '@/resources/images/linkedIn.svg';
import Whatsapp from '@/resources/images/whatsapp.svg';
import FullStack from '@/resources/images/full-stack.svg';
import Frontend from '@/resources/images/frontend.svg';
import Backend from '@/resources/images/backend.svg';

export const NAV_ITEMS: Array<NavItems> = [
  {
    label: 'About',
    value: 'about',
  },
  {
    label: 'Resume',
    value: 'resume',
  },
  {
    label: 'Portfolio',
    value: 'portfolio',
  },
  {
    label: 'Contact',
    value: 'contact',
  },
];

export const CARD_CONFIG: MeCardProps = {
  job: 'Full Stack Developer',
  name: 'David López Valdés',
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
  socialMedia: [
    {
      url: 'https://www.instagram.com/davlopez_06/',
      icon: Instagram,
    },
    {
      url: 'https://www.linkedin.com/in/david-lopez-valdes-310630233/',
      icon: LinkedIn,
    },
    {
      url: 'https://wa.me/573135557940',
      icon: Whatsapp,
    },
  ],
};

export const ABOUT_CONFIG: AboutConfig = {
  title: 'About Me',
  description: 'Hi there! 👋 I’m David, a charismatic and passionate Full Stack Developer with 3 years of experience in the tech world , specializing in tool like React, JavaScript, TypeScript, Next.js, Node.js, Redux, CSS, SCSS, HTML, and Google Cloud services. I pride myself on being analytical, logical, polite, responsible,and honest, always focused on solving problems efficiently and creating practical solutions. I love learning, collaborating, and tackling challenges, bringing both my skills and a positive attitude to every project I work on. 🚀',
  doingCard: [
    {
      icon: FullStack,
      title: 'Full Stack Developer',
      subtitle: 'Creating complete applications with scalable and tailored solutions. 🚀',
    },
    {
      icon: Frontend,
      title: 'Frontend Developer',
      subtitle: 'Specializing in building user-friendly, responsive, and visually appealing interfaces tailored to your needs. 💻',
    },
    {
      icon: Backend,
      title: 'Backend Developer',
      subtitle: 'Focused on building robust, scalable, and efficient server-side systems to power your applications. 🛠️',
    },
  ],
  recomendedCard: [
    {
      gender: 'female',
      name: 'Paula Paredes',
      recomended: 'I recommend David for his outstanding problem-solving skills with agility and willingness. His ability to develop creative and efficient solutions. He is always willing to take on new challenges and approaches each task with a positive attitude. His quick and adaptable approach makes him a great asset to any team.',
    },
    {
      gender: 'male',
      name: 'Christhian Silupú',
      recomended: 'I would not hesitate to recommend David to any company looking for a talented and reliable professional in the field of computer engineering. I am sure that his experience and skills will be a great contribution to any project he is involved in. I have had the opportunity to work with him on several projects and he is an excellent co-worker..',
    },
    {
      gender: 'male',
      name: 'Richard Llano',
      recomended: 'In short, David is an exceptionally talented and committed Full Stack Developer. His positive attitude, work ethic, and willingness to learn and grow make him stand out as an excellent fit for your team. Don\'t hesitate to consider him to make the most of his passion and skills in web development!',
    },
  ],
}
