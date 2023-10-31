//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover
const sequelize = new Sequelize(`postgres://postgres:123456@localhost:5433/discover`, {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err:Error) => {
        console.log(err)
    })

    const db:any = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./user') (sequelize, DataTypes)

//exporting the module
module.exports = db