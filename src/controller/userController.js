import userService from '../services/userService';

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter'
        })
    }
    let userData = await userService.handleUserLogin(email, password);
    console.log(userData)
    return res.status(200).json({
        // errcode: 0,
        // message: 'hello anhduc',
        // yourEmail: email,
        // yourPassword: password,
        // test: 'test'
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}
module.exports = {
    handleLogin: handleLogin
}
