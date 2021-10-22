import axios from 'axios';
import { FETCH_USER } from './types';

// whenever action creator is called, immediately returns an action
const fetchUser = () => {
  return function () {
    axios
      .get('/api/current_user')
      .then((res) => dispatchEvent({ type: FETCH_USER, payload: res }));
  };
};
