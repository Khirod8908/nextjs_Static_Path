import classes from './searchbox.module.css';
import { useState, useRef, useEffect } from 'react';

import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export default () => {
  const items = [
    {
      id: 0,
      name: 'Cobol',
    },
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Basic',
    },
    {
      id: 3,
      name: 'PHP',
    },
    {
      id: 4,
      name: 'Java',
    },
  ];

  const result = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    );
  };

  return (
    <div className={`container-fluid ${classes.search_box}`}>
      <div className="container">
        <ReactSearchAutocomplete
          items={items}
          placeholder="Search..."
          autoFocus
          formatResult={result}
          styling={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px',
            placeholderColor: '#919eab',
            color: '#ffffff',
            iconColor: '#919eab',
            lineColor: '#29343f',
            hoverBackgroundColor: '#2f3944',
          }}
        />
      </div>
    </div>
  );
};

// refLink_1 = "https://codesandbox.io/s/sm1-outside-click-detection-in-javascript-hm7rb?from-embed=&file=/src/index.js"

// refLink_2 = "https://medium.com/@kevinfelisilda/click-outside-element-event-using-react-hooks-2c540814b661"
