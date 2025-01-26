import Token from '../models/token.js';

export const createToken = async (req, res) => {
  const { beneficiaryId, department, purpose } = req.body;
  try {
    const newToken = new Token({ beneficiaryId, department, purpose });
    await newToken.save();
    res.status(201).json({ tokenId: newToken._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};