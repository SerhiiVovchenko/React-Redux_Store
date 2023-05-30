import React from 'react';
import './App.scss';
import { Amount } from './components/Amount';
import { GoodsList } from './components/GoodsList';
import { Position } from './components/Position';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Amount />
      <hr />
      <Position />
      <hr />
      <GoodsList />
    </div>
  );
};
