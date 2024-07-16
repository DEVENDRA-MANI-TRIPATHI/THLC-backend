const Villa = require('../Models/Villa');

// Get all villas
exports.getAllVillas = async (req, res) => {
  try {
    const villas = await Villa.find();
    res.status(200).json(villas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Create new villa
exports.createVilla = async (req, res) => {
  const { name, photoUrls } = req.body;
  const newVilla = new Villa({ name, photoUrls });
  try {
    const savedVilla = await newVilla.save();
    res.status(201).json(savedVilla);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// // Get villa by ID
exports.getVillaById = async (req, res) => {
  try {
    const villa = await Villa.findById(req.params.id);
    if (!villa) {
      return res.status(404).json({ message: 'Villa not found' });
    }
    res.status(200).json(villa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// // Update villa by ID
// exports.updateVilla = async (req, res) => {
//   try {
//     const updatedVilla = await Villa.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedVilla) {
//       return res.status(404).json({ message: 'Villa not found' });
//     }
//     res.status(200).json(updatedVilla);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // Delete villa by ID
// exports.deleteVilla = async (req, res) => {
//   try {
//     const deletedVilla = await Villa.findByIdAndDelete(req.params.id);
//     if (!deletedVilla) {
//       return res.status(404).json({ message: 'Villa not found' });
//     }
//     res.status(200).json({ message: 'Villa deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
