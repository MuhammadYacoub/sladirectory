// src/components/CardItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const CardItem = ({ title, description, link }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={link}>
          <Button variant="primary">المزيد</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
