import { useDispatch } from 'react-redux';
import React from 'react';
import { action as amountAction } from '../features/amount';
import { useAppSelector } from '../app/hooks';

export const Amount: React.FC = () => {
  const dispatch = useDispatch();
  const amount = useAppSelector(state => state.amount);

  const add = (value: number) => dispatch(amountAction.add(value));
  const take = (value: number) => dispatch(amountAction.take(value));
  const clear = () => dispatch(amountAction.clear());

  function renderContent(content: unknown) {
    if (typeof content === 'string' || typeof content === 'number') {
      return content;
    }

    return content;
  }

  return (
    <h2 className="amount">
      <span>
        Amount:
        {renderContent(amount)}
      </span>

      <button type="button" onClick={() => take(50)}>-50</button>
      <button type="button" onClick={() => take(10)}>-10</button>
      <button type="button" onClick={clear}>❌</button>
      <button type="button" onClick={() => add(10)}>+10</button>
      <button type="button" onClick={() => add(50)}>+50</button>
    </h2>
  );
};
