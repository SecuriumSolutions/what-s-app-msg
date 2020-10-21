const userADDController = require('../controllers/user/userAddQuery');
module.exports = (app, express) => {
apiRoute.post('/adduser/', userADDController.addUserQuery);
}