import mongoose from 'mongoose';


const CartItemSchema = new mongoose.Schema({
product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
qty: { type: Number, required: true, default: 1 },
createdAt: { type: Date, default: Date.now },
});


export default mongoose.model('CartItem', CartItemSchema);