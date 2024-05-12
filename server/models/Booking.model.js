const { model, Schema } = require("mongoose");

const bookingSchema = new Schema(
	{
		buyer: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		restaurant: {
			type: Schema.Types.ObjectId,
			ref: "Restaurant",
			required: true,
		},
		paid: { type: Number, required: true },
		transactionId: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ["pending", "approved", "declined"],
		},
	},
	{ timestamps: true }
);

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
