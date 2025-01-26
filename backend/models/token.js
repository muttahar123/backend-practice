import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema( {
  tokenId: { type: Number, required: true },
  beneficiary: { type: mongoose.Schema.Types.ObjectId, ref: "beneficiary" },
  department: {
    type: String,
    enum: [
      "health",
      "education",
      "food assistance",
      "general support",
      "employement",
    ],
  },
  status: {
    type: String,
    enum: ["new", "in-progress", "completed"],
    default: "new",
  },
  actions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "action",
    },
  ],
  generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
},
{ timestamps: true });

export default mongoose.model('Token', tokenSchema);
