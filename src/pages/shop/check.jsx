import { useState } from 'react';

export const useCheckFrom = () => {
  const [formData, setFormData] = useState({
    username: '',
    address: '',
    phone: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic khi submit form
    console.log('Form submitted:', formData);
  };

  return { formData, handleChange, handleSubmit };
};