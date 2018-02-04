import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';


export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = {...state };
      // newState[post.id] = post;
      // return newState;

      return {...state, [action.payload.data.id]: action.payload.data};
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      /*Alternate solution to {id: {id:2, data:'data'}}*/
      // return action.payload.data.reduce((acc, val, index) => {
      //   acc[val.id] = val;
      //   return acc;
      // }, {});
    default:
      return state;
  }
}
