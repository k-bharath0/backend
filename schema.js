const mongoose = require("mongoose")

const contentSchema={
    username:String,
    password:String
}

const Content = mongoose.model("project",contentSchema)

module.exports = Content