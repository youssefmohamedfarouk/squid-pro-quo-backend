const express = require("express");
const bids = express.Router();
const {
  createBid,
  updateBid,
  deleteBid,
  getAllBids,
  getOneListingsBid,
} = require("../queries/bids");

// INDEX
bids.get("/", async (req, res) => {
  const allBids = await getAllBids();
  console.log(allBids);
  if (Array.isArray(allBids)) {
    res.status(200).json(allBids);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// CREATE
bids.post("/", async (req, res) => {
  try {
    const bid = await createBid(req.body);
    res.status(201).json(bid);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

// UPDATE
bids.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const bid = await updateBid(id, req.body);
    res.status(201).json(bid);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

// SHOW
bids.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bid = await getOneListingsBid(id);
  if (bid) {
    res.status(200).json(bid);
  } else {
    res.status(404).json({ error: "Bid not found" });
  }
});

// DELETE
bids.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBid = await deleteBid(id);
  if (deletedBid.id) {
    res.status(200).json(deletedBid);
  } else {
    res.status(404).json({ error: "Bid not found" });
  }
});

module.exports = bids;
