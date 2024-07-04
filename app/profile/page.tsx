"use client"

import React, { useState } from 'react';
import AboutComponent from '../components/About/About';
import InterestsComponent from '../components/Interests/Interests';
import FormComponent from '../components/Form/Form';

type ComponentName = 'about' | 'interests' | 'form';

export default function ProfilePage() {
  const [openComponent, setOpenComponent] = useState<ComponentName | null>(null);

  const toggleComponent = (componentName:any) => {
    if (openComponent === componentName) {
      setOpenComponent(null);
    } else {
      setOpenComponent(componentName);
    }
  };

  return (
    <>
      <div onClick={() => toggleComponent('about')}>
        <h2>About</h2>
        {openComponent === 'about' && <AboutComponent />}
      </div>

      <div onClick={() => toggleComponent('interests')}>
        <h2>Interests</h2>
        {openComponent === 'interests' && <InterestsComponent />}
      </div>

      <div onClick={() => toggleComponent('form')}>
        <h2>Form</h2>
        {openComponent === 'form' && <FormComponent />}
      </div>
    </>
  );
}