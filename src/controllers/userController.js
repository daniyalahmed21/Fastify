const userService = require("../services/userService")

async function userControllerHandler(req,res) {

    const newUser = await userService.createUser(req.body,req.server)

    return {"data":newUser}
    
}

module.exports = {userControllerHandler}