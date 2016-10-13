import request from 'superagent';

function requireAuth(nextState, replace, callback) {
  const path = `api${nextState.location.pathname}`;
  request.get(path)
    .then(res => {
      callback();
    }).catch((err) => {
      replace({
        pathname: '/login',
        state: {next: nextState.location.pathname}
      });
      callback();
    })
};

export default requireAuth;
