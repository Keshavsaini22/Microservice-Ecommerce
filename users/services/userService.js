const CustomError = require('../libs/error');
const UsersModel = require('../models/UserModel')
const Producer = require('../workers/Producer')

exports.createUser = async (payload) => {
    const data = await UsersModel.create({ ...payload })
    console.log('data: ', data);
    return data;
}

exports.fetchAllUsers = async (payload) => {

}