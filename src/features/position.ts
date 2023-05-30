type MoveLeftAction = { type: 'position/MOVE_LEFT' };
type MoveRightAction = { type: 'position/MOVE_RIGHT' };
type MoveUpAction = { type: 'position/MOVE_UP' };
type MoveDownAction = { type: 'position/MOVE_DOWN' };

const moveLeft = (): MoveLeftAction => ({
  type: 'position/MOVE_LEFT',
});

const moveRight = (): MoveRightAction => ({
  type: 'position/MOVE_RIGHT',
});

const moveUp = (): MoveUpAction => ({
  type: 'position/MOVE_UP',
});

const moveDown = (): MoveDownAction => ({
  type: 'position/MOVE_DOWN',
});

type Actions = MoveLeftAction | MoveRightAction | MoveUpAction | MoveDownAction;

type Position = {
  x: number,
  y: number,
};

const startPosition = { x: 0, y: 0 };

const positionReducer = (position: Position = startPosition, action: Actions): Position => {
  switch (action.type) {
    case 'position/MOVE_LEFT':
      return position.x !== 0
        ? { ...position, x: position.x - 1 }
        : position;

    case 'position/MOVE_RIGHT':
      return { ...position, x: position.x + 1 };

    case 'position/MOVE_UP':
      return position.y !== 0
        ? { ...position, y: position.y - 1 }
        : position;

    case 'position/MOVE_DOWN':
      return position.y < 4
        ? { ...position, y: position.y + 1 }
        : position;

    default:
      return position;
  }
};

export const action = {
  moveLeft, moveRight, moveUp, moveDown,
};

export default positionReducer;
