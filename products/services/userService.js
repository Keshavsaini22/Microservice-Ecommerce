const UserModel = require('../model/UserModel')

exports.createUser = async (payload) => {
    const data = await UserModel.create({ ...payload })
    console.log('data: ', data);
    return data;
}

