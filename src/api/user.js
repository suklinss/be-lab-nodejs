const user = require("../model/user")

const findOne = {
  handler: async (req, res) => {
    try {
      res = await user.find(req.payload).exec();
      console.log(res);
      return res;
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

const save = {
  // options:{},
  handler: async (req, res) => {
    try {
      res1 = await user.find({username:req.payload.username}).exec()
      console.log(res1);
      if(res1.length == 0){
        console.log("TEST")
        var query = new user(req.payload)
        res = await query.save()
      }
      return res
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

const findByIdAndUpdate = {
  // options:{},
  handler: async (req, res) => {
    try {
      var { id } = req.params
      var { username,password} = req.payload
      res = await user.findByIdAndUpdate(id,{username,password})
      return res
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

const findByIdAndDelete = {
  // options:{},
  handler: async (req, res) => {
    try {
      var { id } = req.params
      res = await user.findByIdAndDelete(id)
      return res
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

module.exports = {
  findOne,
  save,
  findByIdAndUpdate,
  findByIdAndDelete
}

