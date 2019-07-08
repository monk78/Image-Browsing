/**
 * @Author: monk
 * @Date:   2019-07-04T14:28:03+05:30
 * @Filename: unsplash.js
 * @Last modified by:   monk
 * @Last modified time: 2019-07-04T14:40:26+05:30
 */
import axios from 'axios';
  export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
    Authorization:
      'Client-ID de8b967367a8ee63be6f6b8c9eac929fa1eb0283897a3b5f866c1ed6c8bd1899'
    }
  });
