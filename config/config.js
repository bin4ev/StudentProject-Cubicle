const config ={
    development:{
        PORT: 5000,
         DB_CONNEECTION :'mongodb://localhost/cubicle',
         SALT_ROUND: 10,
         SECRET: 'javascript is cool',
         COOCKIE_NAME:'USER_SESSION'

    },
    production:{
        PORT: 80,
         DB_CONNEECTION :'insert mongodb atlas connection here' ,
         SALT_ROUND: 10,
         SECRET: 'javascript is cool',
         COOCKIE_NAME:'USER_SESSION'
    }
}

module.exports =config[process.env.NODE_ENV.trim()]