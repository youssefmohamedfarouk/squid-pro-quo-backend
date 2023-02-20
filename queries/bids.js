const db = require("../database/dbConfig");

// FORMAT BUYER NAME
function formatString(string) {
  return string
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

// SHOW ALL MOTORCYCLE BIDS
const getAllBids = async () => {
  try {
    const allBids = await db.any("SELECT * FROM bids");
    return allBids;
  } catch (error) {
    return error;
  }
};

// SHOW ONE MOTORCYCLE BID
const getOneListingsBid = async (listing_id) => {
  try {
    const oneListingsBid = await db.any(
      "SELECT * FROM bids WHERE listing_id=$1",
      listing_id
    );
    return oneListingsBid;
  } catch (error) {
    return error;
  }
};

// CREATE NEW MOTORCYCLE BID
const createBid = async (bid) => {
  const { bidder, price, listing_id } = bid;
  try {
    const newBid = await db.one(
      "INSERT INTO bids (bidder, price, listing_id) VALUES ($1, $2, $3) RETURNING *",
      [bidder, price, listing_id]
    );
    return newBid;
  } catch (error) {
    throw error;
  }
};

// UPDATE A MOTORCYCLE BID
const updateBid = async (id, bid) => {
  const { bidder, price } = bid;
  try {
    const updatedBid = await db.one(
      "UPDATE bids SET bidder=$1, price=$2 WHERE id=$3 RETURNING *",
      [bidder, price, id]
    );
    return updatedBid;
  } catch (error) {
    return error;
  }
};

//DELETE A MOTORCYCLE BID
const deleteBid = async (id) => {
  try {
    const deletedBid = await db.one(
      "DELETE FROM bids WHERE id=$1 RETURNING *",
      id
    );
    return deletedBid;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createBid,
  updateBid,
  deleteBid,
  getAllBids,
  getOneListingsBid,
};
