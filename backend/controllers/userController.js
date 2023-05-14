import asyncHandler from "../middleware/asyncHandler.js";
import Users from "../models/userModel.js";

//desc    Auth user and get token
//route   POST /api/users/login
//acess   Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("auth user/login");
});

//desc    Register a new user
//route   POST /api/users
//acess   Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});
//desc    Logout user / clear cookie
//route   POST /api/users/logout
//acess   Public
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});
//desc    Get user profile
//route   GET /api/users/profile
//acess   Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});
//desc    Update user profile
//route   PUT /api/users/profile
//acess   Private/
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

//desc    Get all users
//route   GET /api/users
//acess   Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

//desc    Delete user
//route   DELETE /api/users/:id
//acess   Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete users");
});
//desc    Get USer By ID
//route   GET /api/users/:id
//acess   Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by Id");
});
//desc    Update user
//route   PUT /api/users/:id
//acess   Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});
export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
