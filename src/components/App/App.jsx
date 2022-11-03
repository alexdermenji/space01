import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';

const Container = styled.div`
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 25px;
  background-color: beige;
  border-radius: 10px;
`;

const data = [
  { name: 'Item A', price: 125 },
  { name: 'Item B', price: 230 },
  { name: 'Item C', price: 295 },
  { name: 'Item D', price: 245 },
  { name: 'Item E', price: 900 },
  { name: 'Item F', price: 875 },
  { name: 'Item G', price: 235 },
  { name: 'Item H', price: 400 },
];

const ITEMS_VALUES = 5;

const Test = () => {
  const [isFullList, setIsFullList] = useState(false);
  const sortedItems = () => {
    return data.sort((a, b) => a.price - b.price).slice(0, ITEMS_VALUES);
  };

  const renderItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        <span>{item.name}: </span>
        <span>{item.price}</span>
      </li>
    ));
  };

  const toggleList = () => {
    setIsFullList(!isFullList);
  };

  return (
    <Container>
      <ul>{isFullList ? renderItems(data) : renderItems(sortedItems())}</ul>
      {isFullList && <Button onClick={toggleList}>Collapse</Button>}
      {!isFullList && <Button onClick={toggleList}>View All</Button>}
    </Container>
  );
};

export default Test;
