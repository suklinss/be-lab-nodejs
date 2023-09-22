const user = require("../model/user")
const hashData = require("../function/Encryption")

const find = {
  handler: async (req, res) => {
    try {
      res = await user.find(req.payload).exec()
      return res
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
      if(res1.length == 0){
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
      var { username,password } = req.payload
      res = await user.findByIdAndUpdate(id,{username,password,updatedAt: new Date()})
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

const hashDatas = {
  // options:{},
  handler: async (req, res) => {
    try {
      var { data, salt } = req.payload
      if(salt){
        res = await hashData.sha512(data,salt)
      }else{
        res = await hashData.saltHashData(data)
      }
      console.log(req.payload)
      console.log(res)
      return res
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

module.exports = {
  find,
  save,
  findByIdAndUpdate,
  findByIdAndDelete,
  hashDatas,
}

