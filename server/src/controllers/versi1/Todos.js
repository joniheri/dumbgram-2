// DataDummyTodos
let todos = [
  {
    id: 1,
    title: "Belajar Node JS",
    isDone: false,
  },
  {
    id: 2,
    title: "Belajar Express",
    isDone: false,
  },
  {
    id: 3,
    title: "Belajar React JS",
    isDone: false,
  },
];
// DataDumyyTodos

// Function GetDataTodos
exports.getTodos = (req, res) => {
  res.send({
    status: "Response Success",
    message: "Get data Success",
    data: todos,
  });
};
// End Function GetDataTodos

// Function GetDataTodoById
exports.getTodo = (req, res) => {
  const id = req.params.id;
  const todoById = todos.find((todo) => todo.id == id);

  if (!todoById) {
    return res.send({
      status: "Response Failed",
      message: `Data todo with ID ${id} NOT FOUND!`,
      data: null,
    });
  }

  res.send({
    status: "Response Success",
    message: "Get data Success",
    data: todoById,
  });
};
// End Function GetDataTodoById

// Function AddDataTodos
exports.addTodo = (req, res) => {
  const dataAdd = req.body;
  todos = [...todos, dataAdd];

  res.send({
    status: "Response Success",
    message: "Add data Success",
    dataAdded: dataAdd,
    dataAfterAdd: todos,
  });
};
// End Function AddDataTodos

// Function UpdateDataTodo
exports.updateTodoPatch = (req, res) => {
  const { id } = req.params; // This is like ==> const id = req.params.id

  const todoById = todos.find((todo) => todo.id == id);

  if (!todoById) {
    return res.send({
      status: `ID ${id} NOT FOUND!`,
      message: "Update data Fail!",
    });
  }

  todos = todos.map((todo) => (todo.id == id ? req.body : todo));

  res.send({
    status: "Response Success",
    message: "Update data Success",
    id: id,
    dataUpdated: req.body,
    dataAfterUpdate: todos,
  });
};
// End Function UpdateDataTodo

// Function UpdatDataTodoWithPut
exports.updateTodoPut = (req, res) => {
  const { id } = req.params; // This is like ==> const id = req.params.id

  const todoById = todos.find((todo) => todo.id == id);

  if (!todoById) {
    return res.send({
      status: `ID ${id} NOT FOUND!`,
      message: "Update data Fail!",
    });
  }

  todos = todos.map((todo) => (todo.id == id ? req.body : todo));

  res.send({
    status: "Response Success",
    message: "Update data Success",
    id: id,
    dataUpdated: req.body,
    dataAfterUpdate: todos,
  });
};
// End Function UpdatDataTodoWithPut

// Function DeleteDataTodo
exports.deleteTodo = (req, res) => {
  const { id } = req.params; // This is like ==> const id = req.params.id

  const todoById = todos.find((todo) => todo.id == id);

  if (!todoById) {
    return res.send({
      status: `ID ${id} NOT FOUND!`,
      message: "Delete data Failed!",
    });
  }

  todos = todos.filter((todo) => todo.id != id);

  res.send({
    status: "Response Success",
    message: "Delete data Success",
    idDataDeleted: id,
    dataAfterDelete: todos,
  });
};
// End Function DeleteDataTodo

// ==============================================================================

// import joi
const joi = require("joi");

// import models
const { Todo } = require("../../../models");

// Function GetDatas
exports.getTodosDB = async (req, res) => {
  try {
    const getDatas = await Todo.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (getDatas == null) {
      return res.send({
        status: "Response Failed",
        message: "Data is empty!",
      });
    }

    res.send({
      status: "Response Success",
      message: "Get data Success.",
      dataCount: getDatas.length,
      data: getDatas,
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Get data Error!",
      error: error,
    });
  }
};
// End Function GetDatas

// Function GetDataById
exports.getTodoDB = async (req, res) => {
  try {
    const { idParam } = req.params;

    const getData = await Todo.findOne({
      where: {
        id: idParam,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (getData == null) {
      return res.send({
        status: "Response Failed",
        message: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }

    res.send({
      status: "Response Success",
      message: "Get data Success.",
      idParam: idParam,
      data: getData,
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Get data Error!",
      error: error,
    });
  }
};
// End Function GetDataById

// Function AddData
exports.addTodoDB = async (req, res) => {
  try {
    const dataAdd = req.body; //Data will Added

    // ChekcValidationInput
    const schema = joi.object({
      name: joi.string().min(1).required(),
      year: joi.string().min(4).required(),
      date: joi.string().min(8).required(),
    });
    const { error } = schema.validate(dataAdd);
    if (error) {
      return res.send({
        status: "Response Failed",
        message: error.details[0].message,
        data: dataAdd,
      });
    }
    // EndChekcValidationInput

    // AddData
    const dataAdded = await Todo.create(dataAdd);
    if (!dataAdded) {
      return res.send({
        status: "Response Failed",
        message: `Add data Failed!`,
      });
    }
    // EndAddData

    // GetArtistById
    const idTodo = dataAdded.id;
    const getData = await Todo.findOne({
      where: {
        id: idTodo,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (getData == null) {
      return res.send({
        status: "Response Failed",
        message: `Data with id ${idArtist} Not Found!`,
        data: null,
      });
    }
    // EndGetArtistById

    res.send({
      status: "Response Success",
      message: "Add data Success!",
      dataAdded: getData,
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Add Data Error!",
      error: error,
    });
  }
};
// End Function AddData

// Function UpdatData
exports.updateTodoDB = async (req, res) => {
  try {
    const { idParam } = req.params;

    // CheckDataById
    const getDataById = await Todo.findOne({
      where: {
        id: idParam,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (getDataById == null) {
      return res.send({
        status: "Response Failed",
        message: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }
    // EndCheckDataById

    // UpdateData
    const dataUpdate = req.body; //Data will updated
    const dataUpdated = await Todo.update(dataUpdate, {
      where: {
        id: idParam,
      },
    });
    if (!dataUpdated) {
      return res.send({
        status: "Response Failed",
        message: `Update Data Failed!`,
        data: null,
      });
    }
    // EndUpdateData

    // getDataAfterUpdateById
    const getDataAfterUpdateById = await Todo.findOne({
      where: {
        id: idParam,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    // getDataAfterUpdateById

    if (getDataAfterUpdateById == null) {
      return res.send({
        status: "Response Failed",
        message: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }
    // EndgetUserAfterUpdateById

    res.send({
      status: "Response Success",
      message: "Update data Success.",
      idParam: idParam,
      dataUpdated: getDataAfterUpdateById,
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Update Error!",
      error: error,
    });
  }
};
// End Function Update

// Function DeleteData
exports.deleteTodoDB = async (req, res) => {
  try {
    const { idParam } = req.params;

    // CheckDataById
    const getDataById = await Todo.findOne({
      where: {
        id: idParam,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (getDataById == null) {
      return res.send({
        status: "Response Failed",
        message: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }
    // EndCheckDataById

    // DeleteData
    const deleteData = await Todo.destroy({
      where: {
        id: idParam,
      },
    });
    if (!deleteData) {
      return res.send({
        status: "Response Failed",
        message: `Delete data Failed!`,
        data: null,
      });
    }
    // EndDeleteData

    res.send({
      status: "Response Success",
      message: "Delete data Success.",
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Delete Error!",
      error: error,
    });
  }
};
// End Function DeleteData

// Function Template
exports.templateFunction = async (req, res) => {
  try {
    res.send({
      status: "Response Success",
      message: "Success.",
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Error!",
      error: error,
    });
  }
};
// End Function Template
