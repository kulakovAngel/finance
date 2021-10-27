import mongoose from "mongoose";

export const Finances = mongoose.model('Finances', {
    money: Number,
    isCome: Boolean,
});