const { userService } = require('../services');
const CustomError = require('../libs/error');

exports.createUser = async (payload) => {
    console.log('payload: ', payload);

    try {
        const response = await userService.createUser(payload)// add data here
        if (!response)
            throw new CustomError("User not created");
    }
    catch (e) {
        console.log('e: ', e);
        throw new CustomError("In catch body");
    }
}