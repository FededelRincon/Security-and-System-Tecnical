"use client"

import React, { useState } from 'react';
import AboutComponent from '../components/About/About';
import InterestsComponent from '../components/Interests/Interests';
import FormComponent from '../components/Form/Form';
import styles from "./page.module.css";

type ComponentName = 'about' | 'interests' | 'form';

export default function ProfilePage() {
  const [openComponent, setOpenComponent] = useState<ComponentName | null>(null);

  const toggleComponent = (componentName: ComponentName) => {
    if (openComponent === componentName) {
      setOpenComponent(null);
    } else {
      setOpenComponent(componentName);
    }
  };

  return (
    <div className={styles.ProfileContainer}>
      <div 
        onClick={() => toggleComponent('about')} 
        className={`${styles.ComponentContainer} ${openComponent && openComponent !== 'about' ? styles.Hidden : ''}`}
      >
        <h5 className={styles.AboutTitle}>Sobre mi</h5>
        {openComponent === 'about' && <AboutComponent />}
      </div>

      <div 
        onClick={() => toggleComponent('interests')} 
        className={`${styles.ComponentContainer} ${openComponent && openComponent !== 'interests' ? styles.Hidden : ''}`}
      >
        <h5 className={styles.InterestText}>Intereses</h5>
        {openComponent === 'interests' && <InterestsComponent />}
      </div>

      <div 
        onClick={() => toggleComponent('form')} 
        className={`${styles.ComponentContainer} ${openComponent && openComponent !== 'form' ? styles.Hidden : ''}`}
      >
        <h5 className={styles.FormText}>Formulario</h5>
        {openComponent === 'form' && <FormComponent />}
      </div>
    </div>
  );
}
