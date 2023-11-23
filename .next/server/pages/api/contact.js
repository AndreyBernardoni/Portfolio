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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        auth: {\n            user: process.env.EMAIL,\n            pass: process.env.PASS\n        },\n        secure: true\n    });\n    const mailData = {\n        from: process.env.EMAIL,\n        to: process.env.EMAIL,\n        subject: `Message From ${req.body.name} | ${req.body.subject}`,\n        text: req.body.message + \" | Sent from: \" + req.body.email,\n        html: `<div>${req.body.message}</div><p>Sent from:\r\n    ${req.body.email}</p>`\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUFBLG9EQUF3QjtBQUV4Qiw2QkFBZSxvQ0FBVUUsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDakMsSUFBSUMsYUFBYUosbUJBQU9BLENBQUMsOEJBQVk7SUFDckMsTUFBTUssY0FBY0QsV0FBV0UsZUFBZSxDQUFDO1FBQzdDQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTTtZQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLEtBQUs7WUFDdkJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csSUFBSTtRQUN4QjtRQUNBQyxRQUFRLElBQUk7SUFDZDtJQUNBLE1BQU1DLFdBQVc7UUFDZkMsTUFBTVAsUUFBUUMsR0FBRyxDQUFDQyxLQUFLO1FBQ3ZCTSxJQUFJUixRQUFRQyxHQUFHLENBQUNDLEtBQUs7UUFDckJPLFNBQVMsQ0FBQyxhQUFhLEVBQUVsQixJQUFJbUIsSUFBSSxDQUFDQyxJQUFJLENBQUMsR0FBRyxFQUFFcEIsSUFBSW1CLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7UUFDOURHLE1BQU1yQixJQUFJbUIsSUFBSSxDQUFDRyxPQUFPLEdBQUcsbUJBQW1CdEIsSUFBSW1CLElBQUksQ0FBQ0ksS0FBSztRQUMxREMsTUFBTSxDQUFDLEtBQUssRUFBRXhCLElBQUltQixJQUFJLENBQUNHLE9BQU8sQ0FBQztJQUMvQixFQUFFdEIsSUFBSW1CLElBQUksQ0FBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQztJQUN4QjtJQUNBcEIsWUFBWXNCLFFBQVEsQ0FBQ1YsVUFBVSxTQUFVVyxHQUFHLEVBQUVDLElBQUksRUFBRTtRQUNsRCxJQUFJRCxLQUFLRSxRQUFRQyxHQUFHLENBQUNIO2FBQ2hCRSxRQUFRQyxHQUFHLENBQUNGO0lBQ25CO0lBQ0ExQixJQUFJNkIsTUFBTSxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzcG9ydGZvbGlvLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgbGV0IG5vZGVtYWlsZXIgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTtcclxuICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgIHBvcnQ6IDQ2NSxcclxuICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuRU1BSUwsXHJcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlBBU1MsXHJcbiAgICB9LFxyXG4gICAgc2VjdXJlOiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG1haWxEYXRhID0ge1xyXG4gICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUwsXHJcbiAgICB0bzogcHJvY2Vzcy5lbnYuRU1BSUwsXHJcbiAgICBzdWJqZWN0OiBgTWVzc2FnZSBGcm9tICR7cmVxLmJvZHkubmFtZX0gfCAke3JlcS5ib2R5LnN1YmplY3R9YCxcclxuICAgIHRleHQ6IHJlcS5ib2R5Lm1lc3NhZ2UgKyBcIiB8IFNlbnQgZnJvbTogXCIgKyByZXEuYm9keS5lbWFpbCxcclxuICAgIGh0bWw6IGA8ZGl2PiR7cmVxLmJvZHkubWVzc2FnZX08L2Rpdj48cD5TZW50IGZyb206XHJcbiAgICAke3JlcS5ib2R5LmVtYWlsfTwvcD5gLFxyXG4gIH07XHJcbiAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbERhdGEsIGZ1bmN0aW9uIChlcnIsIGluZm8pIHtcclxuICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICBlbHNlIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gIH0pO1xyXG4gIHJlcy5zdGF0dXMoMjAwKTtcclxufVxyXG4iXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsInJlcSIsInJlcyIsIm5vZGVtYWlsZXIiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInBvcnQiLCJob3N0IiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUwiLCJwYXNzIiwiUEFTUyIsInNlY3VyZSIsIm1haWxEYXRhIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImJvZHkiLCJuYW1lIiwidGV4dCIsIm1lc3NhZ2UiLCJlbWFpbCIsImh0bWwiLCJzZW5kTWFpbCIsImVyciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

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