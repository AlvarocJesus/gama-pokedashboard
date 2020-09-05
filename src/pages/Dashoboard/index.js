import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

// import * from './styled';

const Dashboard = () => {
  axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(res => {
      const pokemons = res.data.results;
      
      console.log(pokemons)
    })
    .catch(err => console.log(err));
    

  return (
    <Card style={{width: '18rem'}} >
      <Card.Img variant="top" src="" />
        <Card.Title>titulo</Card.Title>
        <Card.Text>
          algum text
        </Card.Text>
        <Button variant="primary">Detalhes</Button>
    </Card>
    
  );
};

export default Dashboard;
