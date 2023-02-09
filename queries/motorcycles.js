const db = require("../database/dbConfig");

// FORMAT SNACK NAME
function formatString(string) {
  return string
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

// SHOW ALL SNACKS
const getAllMotorcycles = async () => {
  try {
    const allMotorcycles = await db.any("SELECT * FROM motorcycles");
    return allMotorcycles;
  } catch (error) {
    return error;
  }
};

// SHOW ONE SNACK
const getOneMotorcycle = async (id) => {
  try {
    const oneMotorcycle = await db.oneOrNone(
      "SELECT * FROM motorcycles WHERE id=$1",
      id
    );
    return oneMotorcycle;
  } catch (error) {
    return error;
  }
};

// CREATE NEW SNACK
const createMotorcycle = async (motorcycle) => {
  // id, name, fiber, protein, added_sugar, is_healthy, image
  const {
    owner,
    make,
    model,
    year,
    odometer,
    isNew,
    mods,
    title_on_hand,
    price,
    city,
    state,
  } = motorcycle;
  try {
    const newMotorcycle = await db.one(
      "INSERT INTO motorcycles (owner, make, model, year, odometer, is_new, mods, title_on_hand, price, city, state) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [
        formatString(name),
        formatString(make),
        model,
        year,
        odometer,
        isNew,
        formatString(mods),
        title_on_hand,
        price,
        formatString(city),
        state.toUpperCase(),
      ]
    );
    return newMotorcycle;
  } catch (error) {
    throw error;
  }
};

// UPDATE A SNACK
const updateMotorcycle = async (id, motorcycle) => {
  const {
    owner,
    make,
    model,
    year,
    odometer,
    isNew,
    mods,
    title_on_hand,
    price,
    city,
    state,
  } = motorcycle;
  try {
    const updatedMotorcycle = await db.one(
      "UPDATE motorcycles SET owner=$1, make=$2, model=$3, year=$4, odometer=$5, is_new=$6, mods=$7, title_on_hand=$8, price=$9, city=$10, state=$11 WHERE id=$12 RETURNING *",
      [
        formatString(name),
        formatString(make),
        model,
        year,
        odometer,
        isNew,
        formatString(mods),
        title_on_hand,
        price,
        formatString(city),
        state.toUpperCase(),
      ]
    );
    return updatedMotorcycle;
  } catch (error) {
    return error;
  }
};

//DELETE A SNACK
const deleteMotorcycle = async (id) => {
  try {
    const deletedMotorcycle = await db.one(
      "DELETE FROM motorcycles WHERE id=$1 RETURNING *",
      id
    );
    return deletedMotorcycle;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createMotorcycle,
  updateMotorcycle,
  deleteMotorcycle,
  getAllMotorcycles,
  getOneMotorcycle,
};
