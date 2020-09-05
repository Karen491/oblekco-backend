const { Schema, model, models } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is mandatory"],
        },
        last_name: {
            type: String,
            required: [true, "Last name is mandatory"],
        },
        email: {
            type: String,
            required: [true, "Email address is mandatory"],
            validate: {
                message: "Email address already exists",
                validator: async (email) => {
                  const items = await models["User"].count({ email });
                  return items < 1;
                },
              },
        },
        password: {
            type: String,
            required: [true, "Password missing"],
        },
    },
    { timestamps: true }
);

module.exports = model("User", userSchema);