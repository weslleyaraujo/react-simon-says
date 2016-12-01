export default function createAction(type) {
  return (payload = {}) => ({
    type,
    payload,
  });
}
