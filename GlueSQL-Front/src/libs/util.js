import axios from 'axios';
import env from '../config/env';

let util = {

};

const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
    'http://gluesql.local.com' :
    'http://gluesql.local.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;