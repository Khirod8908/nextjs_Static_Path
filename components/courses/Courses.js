import React, { useState } from 'react';
import Tabs, { Tab } from '../../UI/Tab/Tabs';
import Card from '../Card/Card';
import classes from './courses.module.css';
import SectionHeading from '../../UI/Section_heading/SectionHeading';

export default (props) => {
  const [active, setActive] = useState(0);
  const handleChange = (newActive) => setActive(newActive);

  const title = 'Our Courses';
  const para = '10,000+ unique online Course list design';
  return (
    <section className={`container ${classes.courses}`}>
      <SectionHeading title={title} para={para} />
      <Tabs active={active} onChange={handleChange}>
        <Tab title="Tab1">
          <Card />
        </Tab>
        <Tab title="Tab2">
          <Card />
        </Tab>
        <Tab title="Tab3">
          <Card />
        </Tab>
      </Tabs>
    </section>
  );
};
