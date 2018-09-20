import React from 'react';
import './Card.css';
import CardContent from './CardContent';

const CardContainer = props => {
  return (
    <div id="card-container">
      <div>
        <CardContent />
      </div>
    </div>
  );
};

export default CardContainer;
