import express from 'express';
import getHomePage from '../controllers/homeController';
import userController from '../controllers/userController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', getHomePage.getHomePage);
    router.get('/crud', getHomePage.getCRUD);

    router.post('/post-crud', getHomePage.postCRUD);
    router.get('/get-crud', getHomePage.displayGetCRUD);
    router.get('/update-crud', getHomePage.getUpdateCRUD);

    router.post('/put-crud', getHomePage.putCRUD);
    router.get('/delete-crud', getHomePage.deleteCRUD);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    return app.use('/', router);
};

module.exports = initWebRoutes;
