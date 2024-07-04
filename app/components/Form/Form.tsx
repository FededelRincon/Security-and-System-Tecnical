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

  const validateForm = (): FormErrors => {
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
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formErrors = validateForm();
    setErrors(formErrors);
  
    if (Object.keys(formErrors).length === 0) {
      toast.success('Mensaje enviado !!'); 
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
      <h5 className={styles.FormText}>Form</h5>

      <div className={styles.FormContainer}>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.separator}>
            <label htmlFor="fullName" className={styles.fieldName} >Nombre:</label>
            <input
              className={styles.field}
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nombre"
            />
            {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
          </div>

          <div className={styles.separator}>
            <label htmlFor="email" className={styles.fieldName}>Email:</label>
            <input
              className={styles.field}
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.separator}>
            <label htmlFor="description" className={styles.fieldName}>Mensaje:</label>
            <textarea
              className={styles.field}
              id="description"
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