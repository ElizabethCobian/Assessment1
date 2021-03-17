
// Para la versión 2016
import dotenv from "dotenv";
dotenv.config();

// Para la versión 2015
// const dotenv = require('dotenv');
// const result = dotenv.config();

//import dotenv from 'dotenv'
//dotenv.config()


export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME:'Test',
        PASSWORD:'1234'
    },
    VALID_INFO_USER:{
        NAME: process.env.NAME_USER,
        LAST_NAME: process.env.LAST_NAME_USER,
        ZIP_CODE: process.env.ZIPCODE_USER  
    }

}