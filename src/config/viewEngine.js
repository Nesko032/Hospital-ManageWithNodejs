import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // Server chỉ lấy được ảnh từ src/public
    app.set("view engine", "ejs"); // Gõ logic trong file html
    app.set("views", "./src/views");
};

module.exports = configViewEngine;
