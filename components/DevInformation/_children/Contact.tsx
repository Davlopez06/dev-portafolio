import { useState } from 'react';
import SendIcon from '@/resources/images/send.svg';
import Image from 'next/image';

const Contact = ({ title = '', googleMapUrl = '', url = ''}) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const getMap = () => {
    return (
      <div>
        <iframe src={googleMapUrl} width="100%" height="400px" style={{ border: 0, borderRadius: '9px' }} loading="lazy" />
      </div>
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': JSON.stringify(formData).length.toString(),
          Host: 'script.google.com',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === 'success') {
        alert('Datos enviados correctamente.');
      } else {
        alert('Error al enviar los datos.');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Error de red.');
    }
  };

  const getForm = () => {
    return (
      <div className='dev-information-contact-ctn'>
        <p className="dev-information-contact-subtitle">Contact me</p>
        <form onSubmit={handleSubmit} className="dev-information-contact-form">
          <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required />
          <button type="submit">
            <Image src={SendIcon} alt="send-icon" width={18} height={18} />
            Enviar
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="dev-information-view">
      <h1 className="dev-information-view-title">{title}</h1>
      {getMap()}
      {getForm()}
    </div>
  );
};

export default Contact;
