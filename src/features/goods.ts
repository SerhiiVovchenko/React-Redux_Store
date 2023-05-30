type AddAction = { type: 'goods/ADD', payload: string };
type TakeAction = { type: 'goods/TAKE', payload: string };
type ClearAction = { type: 'goods/CLEAR' };

const add = (good: string): AddAction => ({
  type: 'goods/ADD',
  payload: good,
});

const take = (good: string): TakeAction => ({
  type: 'goods/TAKE',
  payload: good,
});

const clear = (): ClearAction => ({
  type: 'goods/CLEAR',
});

type Actions = AddAction | TakeAction | ClearAction;

const goodsReducer = (goods: string[] = [], action: Actions) => {
  switch (action.type) {
    case 'goods/ADD':
      return [...goods, action.payload];

    case 'goods/TAKE':
      return goods.filter(good => good !== action.payload);

    case 'goods/CLEAR':
      return [];

    default:
      return goods;
  }
};

export const actions = { add, take, clear };

export default goodsReducer;
