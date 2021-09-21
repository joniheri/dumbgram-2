const express = require("express");

const router = express.Router();

// // ImportMiddleware
// const { AuthMiddleware } = require("../middleware/Auth");
// const { UploadFiles } = require("../middleware/UploadFiles");

// TodosRouter
const {
  getTodos,
  getTodo,
  addTodo,
  updateTodoPatch,
  updateTodoPut,
  deleteTodo,
  getTodosDB,
  getTodoDB,
  addTodoDB,
  updateTodoDB,
  deleteTodoDB,
} = require("../controllers/versi1/Todos");

router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.post("/addtodo", addTodo);
router.patch("/updatetodo/:id", updateTodoPatch);
router.put("/updatetodo-put/:id", updateTodoPut);
router.delete("/deletetodo/:id", deleteTodo);
router.get("/todosdb", getTodosDB);
router.get("/tododb/:idParam", getTodoDB);
router.post("/addtododb", addTodoDB);
router.patch("/updatetododb/:idParam", updateTodoDB);
router.delete("/deletetododb/:idParam", deleteTodoDB);
// EndTodosRouter

// AuthRoute
const {
  registerAuth,
  loginAuth,
  //   checkAuth,
} = require("../controllers/versi1/Auth");

router.post("/register", registerAuth);
router.post("/login", loginAuth);
// router.get("/check-auth", AuthMiddleware, checkAuth);
// EndAuthRoute

// UsersRouter
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/versi1/User");

router.get("/users", getUsers);
router.get("/user/:idParam", getUserById);
router.patch("/updateuser/:idParam", updateUser);
router.delete("/deleteuser/:idParam", deleteUser);
// EndUsersRouter

// // TransactionRoute
// const {
//   getTransactionsHasManyUser,
//   Pay,
// } = require("../controllers/versi1/Transaction");

// // router.post("/pay", UploadFiles("imageFile"), Pay);
// router.get("/transactions-user", getTransactionsHasManyUser);
// router.post("/pay", Pay);
// // EndAuthRoute

module.exports = router;
