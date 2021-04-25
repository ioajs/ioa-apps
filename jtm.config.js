import test from 'jtm';
import ioa from 'ioa';
import axios from 'axios';

test.ioa = ioa;
axios.defaults.baseURL = 'http://localhost:8600';

await ioa.loadApp(
  "./main",
  "./admin",
  "./user"
);