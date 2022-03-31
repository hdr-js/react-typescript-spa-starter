import axios from 'axios';

export default {
  getMoviesRequest: async ({ keyword }) => {
    return await axios.get(`https://wookie.codesubmit.io/movies${keyword ? `?q=${keyword}` : ''}`, {
      headers: { Authorization: 'Bearer Wookie2019' },
    });
  },
};
