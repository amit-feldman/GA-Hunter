import request from 'superagent';

function requireAuth(nextState, replace, callback) {
  const path = `api${nextState.location.pathname}`;
  request.get(path)
    .then(res => {
      console.log('in .then auth')
      callback();
    }).catch((err) => {
      console.log(err)
      replace({
        pathname: '/login',
        state: {next: nextState.location.pathname}
      });
    })
};

export default requireAuth;



// import request from 'superagent';
//
// function requireAuth(nextState, replace, callback) {
//   const path = `api${nextState.location.pathname}`;
//   request.get(path)
//     .then(res => {
//       replace(path);
//       callback();
//     })
//     .catch((error) => {
//       replace('/login');
//       callback(error);
//     });
// };
//
// export default requireAuth;
