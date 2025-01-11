import { useState } from 'react';

const Contact = () => {
  const title = 'Contact';
  const googleMapUrl =
    // eslint-disable-next-line max-len
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7780308778842!2d-75.57148961667278!3d6.292876731223696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f2b2e3e6549%3A0x2796a9a52e9db61f!2sCra.%2066%20%239594%2C%20Castilla%2C%20Medell%C3%ADn%2C%20Castilla%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1736555228877!5m2!1ses!2sco';
  const url = '/api/saveToSheet';

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
      <div>
        <p>Contact me</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required />
          <button type="submit">Enviar</button>
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
