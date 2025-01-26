import QRCode from 'qrcode';

// Generate Token
router.post('/generate-token', async (req, res) => {
  const { cnic, department } = req.body;

  try {
    const tokenId = `${cnic}-${Date.now()}`;
    const newToken = await new Token({ tokenId, department }).save();

    const qrCode = await QRCode.toDataURL(tokenId);

    res.json({ tokenId, qrCode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
