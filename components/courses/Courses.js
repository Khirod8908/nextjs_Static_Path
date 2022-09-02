import React, { useState } from 'react';
import Tabs, { Tab } from '../../UI/Tab/Tabs';
import Card from '../Card/Card';
import classes from './courses.module.css';

export default () => {
  const [active, setActive] = useState(0);
  const handleChange = (newActive) => setActive(newActive);
  return (
    <section className="container">
      <h2>Our Courses</h2>
      <Tabs active={active} onChange={handleChange}>
        <Tab title="Tab1">
          <Card />
        </Tab>
        <Tab title="Tab2">Paragraph yyyyyyy</Tab>
        <Tab title="Tab3">Paragraph zzzzzzz</Tab>
      </Tabs>
    </section>
  );
};
