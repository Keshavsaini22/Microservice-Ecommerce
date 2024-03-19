const ProductModel = require('../model/ProductModel')

exports.updateStockOrder = async (payload) => {
    const { productId, stock } = payload.data;
    const data = await ProductModel.findByIdAndUpdate(productId, { stock: stock });
    return data;
}

exports.createOrder = async (payload) => {

}