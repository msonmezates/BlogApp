import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=abc123';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
