// const Joi = require("joi");
const Api = require("./api");
const router = [
    {
      method: "POST",
      path: "/user",
      config: Api.user.find
    },
    {
      method: "POST",
      path: "/user/add",
      config: Api.user.save,
    },
    {
      method: "PUT",
      path: "/user/{id}",
      config: Api.user.findByIdAndUpdate,
    },
    {
      method: "DELETE",
      path: "/user/{id}",
      config: Api.user.findByIdAndDelete,
    },
    {
      method: "POST",
      path: "/user/hash",
      config: Api.user.hashDatas
    },
  ];
  
  module.exports = router;
