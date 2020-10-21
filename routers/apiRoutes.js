  
const userADDController = require('../controllers/user/userAddQuery');
module.exports = (app, express) => {
    const apiRoute = express.Router();
apiRoute.post('/adduser/', userADDController.addUserQuery);
}
