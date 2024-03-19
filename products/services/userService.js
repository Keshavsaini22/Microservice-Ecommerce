const UserModel = require('../model/UserModel')

exports.createUser = async (payload) => {
    const data = await UserModel.create({ ...payload })
    return data;
}

