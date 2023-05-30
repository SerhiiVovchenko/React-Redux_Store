import { useDispatch } from 'react-redux';
import React from 'react';
import { useAppSelector } from '../app/hooks';
import { action as positionAction } from '../features/position';

export const Position: React.FC = () => {
  const dispatch = useDispatch();
  const { x, y } = useAppSelector(state => state.position);

  const moveLeft = () => dispatch(positionAction.moveLeft());
  const moveRight = () => dispatch(positionAction.moveRight());
  const moveUp = () => dispatch(positionAction.moveUp());
  const moveDown = () => dispatch(positionAction.moveDown());

  const transformValue = `translate(${x * 100}%, ${y * 100}%)`;

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button type="button" onClick={moveUp}>&uarr;</button>

          <div>
            <button type="button" onClick={moveLeft}>&larr;</button>
            <strong>
              {x}
              :
              {y}
            </strong>
            <button type="button" onClick={moveRight}>&rarr;</button>
          </div>

          <button type="button" onClick={moveDown}>&darr;</button>
        </div>

        <div className="field">
          <div className="track" style={{ transform: transformValue }}>
            {x + y}
          </div>
        </div>
      </div>
    </section>
  );
};
