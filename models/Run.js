const { Schema, model } = require("mongoose");

const runSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        date: {
            type: Date,
            required: [true, "The date is missing"],
        },
        distance: {
            type: String,
            required: [true, "Choose distance"],
        },
        country: {
            type: String,
            required: [true, "Country is missing"],
        },
        city: {
            type: String,
            required: [true, "City is missing"],
        },
        type: {
            type: String,
            required: [true, "Run type is missing"],
        },
        timing: {
            type: Number,
            required: [true, "Total run time is missing"],
        },
    },
    { timestamps: true }
);

module.exports = model("Run", runSchema);