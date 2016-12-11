import { ids } from '../constants';

const getRandomId = () => ids[Math.floor(Math.random() * ids.length)];

export default getRandomId;
