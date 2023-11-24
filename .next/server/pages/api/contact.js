"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        host: \"smtp-mail.outlook.com\",\n        service: \"outlook\",\n        secureConnection: false,\n        tls: {\n            ciphers: \"SSLv3\"\n        },\n        port: 587,\n        auth: {\n            user: process.env.EMAIL,\n            pass: process.env.PASS\n        }\n    });\n    const mailData = {\n        from: process.env.EMAIL,\n        to: process.env.EMAIL,\n        subject: `${req.body.name} | ${req.body.subject}`,\n        text: req.body.message + \" | Sent from: \" + req.body.email,\n        html: `<div>${req.body.message}</div><p>Entre em contato pelo email:\r\n    ${req.body.email}</p>`\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) {\n            res.status(500).send(\"Erro ao enviar e-mail\");\n        } else {\n            res.status(200).send(\"Email enviado\");\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUFBLG9EQUF3QjtBQUV4Qiw2QkFBZSxvQ0FBVUUsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDakMsSUFBSUMsYUFBYUosbUJBQU9BLENBQUMsOEJBQVk7SUFDckMsTUFBTUssY0FBY0QsV0FBV0UsZUFBZSxDQUFDO1FBQzdDQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsa0JBQWtCLEtBQUs7UUFDdkJDLEtBQUs7WUFDSEMsU0FBUztRQUNYO1FBQ0FDLE1BQU07UUFDTkMsTUFBTTtZQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLEtBQUs7WUFDdkJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csSUFBSTtRQUN4QjtJQUNGO0lBQ0EsTUFBTUMsV0FBVztRQUNmQyxNQUFNTixRQUFRQyxHQUFHLENBQUNDLEtBQUs7UUFDdkJLLElBQUlQLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSztRQUNyQk0sU0FBUyxDQUFDLEVBQUVyQixJQUFJc0IsSUFBSSxDQUFDQyxJQUFJLENBQUMsR0FBRyxFQUFFdkIsSUFBSXNCLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7UUFDakRHLE1BQU14QixJQUFJc0IsSUFBSSxDQUFDRyxPQUFPLEdBQUcsbUJBQW1CekIsSUFBSXNCLElBQUksQ0FBQ0ksS0FBSztRQUMxREMsTUFBTSxDQUFDLEtBQUssRUFBRTNCLElBQUlzQixJQUFJLENBQUNHLE9BQU8sQ0FBQztJQUMvQixFQUFFekIsSUFBSXNCLElBQUksQ0FBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQztJQUN4QjtJQUVBdkIsWUFBWXlCLFFBQVEsQ0FBQ1YsVUFBVSxTQUFVVyxHQUFHLEVBQUVDLElBQUksRUFBRTtRQUNsRCxJQUFJRCxLQUFLO1lBQ1A1QixJQUFJOEIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUN2QixPQUFPO1lBQ0wvQixJQUFJOEIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0g7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNwb3J0Zm9saW8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz8zNDkzIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBsZXQgbm9kZW1haWxlciA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpO1xyXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgaG9zdDogXCJzbXRwLW1haWwub3V0bG9vay5jb21cIixcclxuICAgIHNlcnZpY2U6IFwib3V0bG9va1wiLFxyXG4gICAgc2VjdXJlQ29ubmVjdGlvbjogZmFsc2UsXHJcbiAgICB0bHM6IHtcclxuICAgICAgY2lwaGVyczogXCJTU0x2M1wiLFxyXG4gICAgfSxcclxuICAgIHBvcnQ6IDU4NyxcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUwsXHJcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlBBU1MsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IG1haWxEYXRhID0ge1xyXG4gICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUwsXHJcbiAgICB0bzogcHJvY2Vzcy5lbnYuRU1BSUwsXHJcbiAgICBzdWJqZWN0OiBgJHtyZXEuYm9keS5uYW1lfSB8ICR7cmVxLmJvZHkuc3ViamVjdH1gLFxyXG4gICAgdGV4dDogcmVxLmJvZHkubWVzc2FnZSArIFwiIHwgU2VudCBmcm9tOiBcIiArIHJlcS5ib2R5LmVtYWlsLFxyXG4gICAgaHRtbDogYDxkaXY+JHtyZXEuYm9keS5tZXNzYWdlfTwvZGl2PjxwPkVudHJlIGVtIGNvbnRhdG8gcGVsbyBlbWFpbDpcclxuICAgICR7cmVxLmJvZHkuZW1haWx9PC9wPmAsXHJcbiAgfTtcclxuXHJcbiAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnIsIGluZm8pIHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJFcnJvIGFvIGVudmlhciBlLW1haWxcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChcIkVtYWlsIGVudmlhZG9cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJyZXEiLCJyZXMiLCJub2RlbWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0Iiwic2VydmljZSIsInNlY3VyZUNvbm5lY3Rpb24iLCJ0bHMiLCJjaXBoZXJzIiwicG9ydCIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkVNQUlMIiwicGFzcyIsIlBBU1MiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsInN1YmplY3QiLCJib2R5IiwibmFtZSIsInRleHQiLCJtZXNzYWdlIiwiZW1haWwiLCJodG1sIiwic2VuZE1haWwiLCJlcnIiLCJpbmZvIiwic3RhdHVzIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();