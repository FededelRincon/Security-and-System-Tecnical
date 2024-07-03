"use client"
import React, { useState, FormEvent } from 'react';
import { toast } from 'react-hot-toast';

import styles from "./Form.module.css";

interface FormData {
  fullName: string;
  email: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  description?: string;
}

export default function FormComponent() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (formData.fullName.length < 3) {
      newErrors.fullName = 'El nombre debe tener al menos 3 caracteres';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Formato de Email inválido';
    }
    if (formData.description.length < 6) {
      newErrors.description = 'El mensaje debe tener al menos 6 caracteres';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      toast.error('Mensaje enviado !!'); 
      console.log('Form is valid', formData);

    } else {
      toast.error('Hay errores que corregir !!');
      console.log('Form is invalid');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.FormPageContainer}>
      <div>Form</div>
      
      <div className={styles.FormContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Nombre:</label>
            <input
              className={styles.field}
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nombre"
            />
            {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              className={styles.field}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div>
            <label htmlFor="description">Mensaje:</label>
            <textarea
              className={styles.field}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tu mensaje..."
              cols={20}
              rows={5}
            />
            {errors.description && <span className={styles.error}>{errors.description}</span>}
          </div>

          <div>
            <button className={styles.button} type="submit">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}