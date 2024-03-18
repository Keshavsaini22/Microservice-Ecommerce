const ProductModel = require('../model/ProductModel')
const UserModel = require('../model/UserModel')

exports.createProduct = async (payload) => {
    const images = payload.files.images.map((i) => { return i.path });
    const { name, desc, price, stock, category } = payload.body
    const userId = payload.query.userId
    const user = await UserModel.findById(user);
    console.log('user: ', user.role);
    
    //console.log("user", payload.userId)
    // if (images && title && body) {
    //     const data = (await PostModel.create({ userId: userId, title: title, body: body, images: images })).populate({ path: 'userId' });
    //     return data;
    // }
    // throw new CustomError("Empty fields", 401);
}
