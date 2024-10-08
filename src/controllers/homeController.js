import e from "express";
import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homePage.ejs", {
            data: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
};

let getCRUD = (req, res) => {
    return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("post crud from server");
};

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();

    return res.render("displayCRUD.ejs", {
        dataTable: data,
    });
};

let getUpdateCRUD = async (req, res) => {
    let userId = req.query.id;

    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);

        return res.render("updateCRUD.ejs", {
            user: userData,
        });
    } else {
        return res.send("User not found!");
    }
};

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateUserData(data);
    return res.render("displayCRUD.ejs", {
        dataTable: allUser,
    });
};

let deleteCRUD = async (req, res) => {
    let id = req.body.id;

    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send("delete the user success");
    } else {
        return res.send("user not found");
    }
};

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getUpdateCRUD: getUpdateCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
};
