const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");

const addUser = async (data) => {
  if (!data.username) {
    data.username = data.firstName;
  }

  const doesExist = await User.findOne({ username: data.username });
  if (doesExist) {
    throw new Error("User already exist");
  }

  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);

  const user = new User(data);
  await user.save();
  return user;
};

const getUsers = async () => {
  const users = await User.find();
  return users;
};

const getUser = async (id) => {
  const user = await User.findById(id);
  return user;
};

const updateUser = async ({ id, data, pushField = null }) => {
  const user = await User.findById(id);
  if (!user) return null;

  // If you're pushing to an array field like 'inventory'
  if (pushField === "inventory" && data[pushField]) {
    const newItem = data[pushField];

    // Check if product already exists in inventory
    const exists = user.inventory.some(
      (item) => item.product.toString() === newItem.product
    );

    if (!exists) {
      user.inventory.push(newItem);
    } else {
      // Optionally update quantity if it already exists
      user.inventory = user.inventory.map((item) =>
        item.product.toString() === newItem.product
          ? { ...item.toObject(), quantity: newItem.quantity }
          : item
      );
    }

    await user.save();
    return user;
  }

  // Standard update for non-array fields
  const updatedUser = await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await User.updateOne({ _id: id }, { $set: { isDeleted: true } });

  return user;
};

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };
