// import joi
const joi = require("joi");

// import models
const { User } = require("../../../models");

// Function GetDatas
exports.getUsers = async (req, res) => {
  try {
    const getDatas = await User.findAll({
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
exports.getUserById = async (req, res) => {
  try {
    const { idParam } = req.params;

    const getData = await User.findOne({
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

// Function UpdatData
exports.updateUser = async (req, res) => {
  try {
    const { idParam } = req.params;

    // CheckDataById
    const getDataById = await User.findOne({
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
    const dataUpdated = await User.update(dataUpdate, {
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
    const getDataAfterUpdateById = await User.findOne({
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
exports.deleteUser = async (req, res) => {
  try {
    const { idParam } = req.params;

    // CheckDataById
    const getDataById = await User.findOne({
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
    const deleteData = await User.destroy({
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
