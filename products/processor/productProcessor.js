import { orderService, userService } from '../services';
const CustomError = require('../libs/error');
// import {orderService} from

exports.updateStockOrder = async (payload) => {
    const { productId, stock } = payload
    console.log('productId, stock: ', productId, stock);
    try {
        const response = await orderService.updateStockOrder({ data: { productId, stock } })
        if (!response)
            throw new CustomError("Update is not done");
    }
    catch (e) {
        console.log('e: ', e);
        throw new CustomError("In catch body");
    }
}

exports.updateStockOrder = async (payload) => {

    try {
        const response = await userService.createUser({ payload })// add data here
        if (!response)
            throw new CustomError("User not created");
    }
    catch (e) {
        console.log('e: ', e);
        throw new CustomError("In catch body");
    }
}