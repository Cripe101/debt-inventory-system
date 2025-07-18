const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");

const addUser = async (data) => {
  if (!data.username) {
    data.username = data.firstName + data.lastName;
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

const updateUser = async ({ id, data }) => {
  const user = await User.updateOne({ _id: id }, data);

  return user;
};

const deleteUser = async (id) => {
  const user = await Employee.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );

  return user;
};

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };
