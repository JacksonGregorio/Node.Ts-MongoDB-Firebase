import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
  order_ID: Schema.Types.ObjectId;
  product_Type: string;
  product_State: string;
  product_Image: string;
  product_Print: string;
  product_Text: string;
  product_Color: string;
  product_Mask: Schema.Types.ObjectId;
  product_Observation: string;
  product_Technique: string;
  product_Description: string;
  product_Unit_Price: number;
  product_Amount_Price: number;
  product_Amount: number;
  product_Delivered: boolean;
}

const ProductSchema: Schema = new Schema({
  order_ID: { type: Schema.Types.ObjectId, ref: 'Order' },
  product_Type: { type: String },
  product_State: { type: String, default: "Aguardando Pagamento" },
  product_Image: { type: String },
  product_Print: { type: String },
  product_Text: { type: String },
  product_Color: { type: String },
  product_Mask: { type: Schema.Types.ObjectId, ref: 'Mask' },
  product_Observation: { type: String },
  product_Technique: { type: String },
  product_Description: { type: String, required: true },
  product_Unit_Price: { type: Number, required: true },
  product_Amount_Price: { type: Number, required: true },
  product_Amount: { type: Number, required: true },
  product_Delivered: { type: Boolean, default: false }
});

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;