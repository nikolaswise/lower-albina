import http from './http.js';
import SC from './sound-cloud.js';

var sc = SC('739b39925c3cc275aeb03837ff27762c');

sc.userID('paulcpederson').then(
  (value) => {
    sc.favorites(value.id).then( thing => console.log(thing) )
  },
  (reason) => { console.error('Something went wrong', reason); }
);
