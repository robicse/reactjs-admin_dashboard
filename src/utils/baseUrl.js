/* eslint-disable import/no-mutable-exports */
const env = process.env.NODE_ENV;

let baseURL;
if (env === 'development') {
    baseURL = 'http://localhost:5050';
    //  baseURL = "https://api.jananiexpressparcel.com";
} else {
    baseURL = 'https://api.jananiexpressparcel.com';
}
export default baseURL;
