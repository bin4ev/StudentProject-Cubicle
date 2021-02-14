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
         DB_CONNEECTION :'mongodb://localhost/cubicle',
         /* 'mongodb+srv://bin4ev123:bin4ev321@cluster0.ge2kj.mongodb.net/test?authSource=admin&replicaSet=atlas-mmqq09-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true' */,
         SALT_ROUND: 10,
         SECRET: 'javascript is cool',
         COOCKIE_NAME:'USER_SESSION'
    }
}

module.exports =config[process.env.NODE_ENV.trim()]