import request from 'superagent';

function requireAuth(nextState, replace, callback) {
  const path = `api${nextState.location.pathname}`;
  request.get(path)
    .then(res => {
      replace(path);
      callback();
    })
    .catch((error) => {
      replace('/login');
      callback(error);
    });
};

export default requireAuth;
