// this is the es6 way of importing and exporting a module 
import * as http from 'http';
import https from 'https';


export {
    myFunction,
    myVariable
};


//this is the common js way of importing and exporting a module
const http=require('http');
module.exports={
    myFunction,
    myVariable
}