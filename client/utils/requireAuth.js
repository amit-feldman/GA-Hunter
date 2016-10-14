
function requireAuth(nextState, replace, callback) {
    if(document.cookie) {
      replace({
        pathname: '/projects/new/form',
      });
      callback();
    } else {
      replace({
        pathname: '/login',
      });
      callback();
    }
};

export default requireAuth;
