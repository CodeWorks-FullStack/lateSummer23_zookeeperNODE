import mongoose from "mongoose";
const Schema = mongoose.Schema

export const ExhibitSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 30 },
    emoji: { type: String, required: true },
    biome: { type: String, enum: ["tropical", "aquatic", "arctic", "desert", "woodland", "oslo"] }
},
    { timestamps: true, toJSON: { virtuals: true } }
)

