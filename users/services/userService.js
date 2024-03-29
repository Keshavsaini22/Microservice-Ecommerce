const CustomError = require('../libs/error');
const UsersModel = require('../models/UserModel')
const Producer = require('../workers/Producer')

exports.createUser = async (payload) => {
    const uuid = payload.uuid
    const user = await UsersModel.findOne({ uuid });
    if (user)
        throw new CustomError("User all ready exist")
    const data = await UsersModel.create({ ...payload })
    return data;
}

exports.fetchAllUsers = async (payload) => {

}