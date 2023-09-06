import mongoose from "mongoose";
const Schema = mongoose.Schema

export const AnimalSchema = new Schema({
    name: { type: String, required: true, maxLength: 30 },
    emoji: { type: String, required: true },
    age: { type: Number, required: true },
    isAlive: { type: Boolean, default: true },
    exhibitId: { type: Schema.Types.ObjectId, ref: 'Exhibit', required: true }
    // NOTE exhibitId directly comes from the database (ObjectId) and reference an id specifically from the 'Exhbit' collection
    // NOTE our exhibit string matches the string in the dbContext
},
    { toJSON: { virtuals: true } }
)

AnimalSchema.virtual('exhibit', {
    localField: 'exhibitId',
    ref: 'Exhibit',
    foreignField: '_id',
    justOne: true
})

// TODO sam come back and write the story