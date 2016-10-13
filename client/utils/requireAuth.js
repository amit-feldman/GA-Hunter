
function requireAuth(nextState, replace, callback) {
    if(document.cookie) {
      console.log('in IF statement true')
      replace({
        pathname: '/projects/new/blah',
      });
      callback();
    } else {
      console.log('in ELSE');
      replace({
        pathname: '/login',
      });
      callback();
    }
};

export default requireAuth;
