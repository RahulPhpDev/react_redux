import reducers from './../src/redux/reducers/Index';

test('check the reducer if working all fine', () => {
  let state;
  state = reducers({users:{name:'Rahul',address:'Haridwar'},singers:{}}, {type:'GET_SINGER'});
  expect(state).toEqual({users:{name:'Rahul',address:'Haridwar'},singers:[{id:1,name:'Narender Singh Negi'},{id:2,name:'BK Samant'}]});
});
/*
command to run test.
  npm test
  yarn run test
*/