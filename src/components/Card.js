import React from 'react';

const Card = ({ cardUrl, cardText }) => {
  const cardClick = () => {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
      });
    });

    function removeActiveClasses() {
      panels.forEach(panel => {
        panel.classList.remove('active');
      });
    }
  };

  return (
    <div
      className='panel active'
      style={{ backgroundImage: `url(${cardUrl})` }}
      onClick={cardClick}
    >
      <h3>{cardText}</h3>
    </div>
  );
};

export default Card;
