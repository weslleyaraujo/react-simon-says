const initialState = [
  'red',
  'blue',
  'blue',
];

export default function blocks(state = initialState, action) {
  const { type } = action;
  switch(type) {
    default:
      return state;
  }
}
