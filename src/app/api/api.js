import axios from 'axios';

export default {
    user:{
    login: credentials =>
    axios.post('/api/auth', { credentials })
      .catch(err=>{
        return Promise.reject({...err, response: {...err.response, data:{errors:{global:err.response.statusText}}}})
      })
      .then(res => res.data.user),

    signup: user =>
    axios.post('/api/user', { user })
      .then(res => res.data.user)
    }
};
