import axios from 'axios';
import { FETCH_USER } from './types';

// whenever action creator is called, immediately returns an action
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};
