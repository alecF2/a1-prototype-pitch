"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var r = __importStar(require("rethinkdb"));
var multer_1 = __importDefault(require("multer"));
var path_1 = require("path");
var port = 4000;
var app = (0, express_1.default)();
var upload = (0, multer_1.default)();
var connection;
app.use(express_1.default.static((0, path_1.join)(__dirname, "..", "..", "build")));
app.use(express_1.default.json());
var fields = [
    {
        name: "image",
        maxCount: 1
    },
    {
        name: "pronunciation",
        maxCount: 1
    }
];
app.post("/add_item", upload.fields(fields), function (req, res) {
    // console.log(req.body)
    console.log(req.files);
    var files = req.files;
    // console.log(files.image[0])
    // console.log(files.pronunciation[0])
    r.db('a1').table('vocab_items').insert({
        word: req.body.word,
        language: req.body.language,
        translation: req.body.translation,
        example: req.body.example,
        image: {
            mimetype: files === null || files === void 0 ? void 0 : files.image[0].mimetype,
            buffer: files === null || files === void 0 ? void 0 : files.image[0].buffer,
            originalname: files === null || files === void 0 ? void 0 : files.image[0].originalname
        },
        image_desc: req.body.imageDesc,
        pronunciation: {
            mimetype: files === null || files === void 0 ? void 0 : files.pronunciation[0].mimetype,
            buffer: files === null || files === void 0 ? void 0 : files.pronunciation[0].buffer,
            originalname: files === null || files === void 0 ? void 0 : files.pronunciation[0].originalname
        }
    }).run(connection, function (err, result) {
        if (err)
            throw err;
        console.log(JSON.stringify(result, null, 2));
        res.send("success!");
    });
});
app.use(function (req, res) {
    res.sendFile((0, path_1.join)(__dirname, "..", "..", "build", "index.html"));
});
app.listen(port, function () {
    console.log("listening on port " + port);
    r.connect({
        host: 'localhost',
        port: 28015
    }, function (err, conn) {
        if (err)
            throw err;
        connection = conn;
        console.log("connected to rethinkDB!");
    });
});
