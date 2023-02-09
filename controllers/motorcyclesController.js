const express = require("express");
const motorcycles = express.Router();
const {
  createMotorcycle,
  updateMotorcycle,
  deleteMotorcycle,
  getAllMotorcycles,
  getOneMotorcycle,
} = require("../queries/motorcycles");

// const Jimp = require("jimp");

// MIDDLEWARE
// async function imgResize(req, res, next) {
//   // const buffer = Buffer.from(req.body.image, "base64");
//   const result = await Jimp.read(req.body.image);
//   console.log(
//     `Original image size: ${result.getWidth()} x ${result.getHeight()}`
//   );

//   if (result.getWidth() > 300 || result.getWidth() > 300) {
//     await result.resize(300, 300);
//     // result.scaleToFit(300, 300);
//     console.log(
//       `Resized image size: ${result.getWidth()} x ${result.getHeight()}`
//     );
//   }
//   req.body.image_b64 = await result.getBase64Async(Jimp.AUTO);
//   next();
// }

// INDEX
motorcycles.get("/", async (req, res) => {
  const allMotorcycles = await getAllMotorcycles();
  console.log(allMotorcycles);
  if (Array.isArray(allMotorcycles)) {
    res.status(200).json(allMotorcycles);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// CREATE
motorcycles.post("/", async (req, res) => {
  try {
    const motorcycle = await createMotorcycle(req.body);
    res.status(201).json(motorcycle);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

// UPDATE
motorcycles.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const motorcycle = await updateMotorcycle(id, req.body);
    res.status(201).json(motorcycle);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

// SHOW
motorcycles.get("/:id", async (req, res) => {
  const { id } = req.params;
  const motorcycle = await getOneMotorcycle(id);
  if (motorcycle) {
    res.status(200).json(motorcycle);
  } else {
    res.status(404).json({ error: "Motorcycle not found" });
  }
});

// DELETE
motorcycles.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedMotorcycle = await deleteMotorcycle(id);
  if (deletedMotorcycle.id) {
    res.status(200).json(deletedMotorcycle);
  } else {
    res.status(404).json({ error: "motorcycle not found" });
  }
});

module.exports = motorcycles;
