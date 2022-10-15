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
exports.id = "pages/api/getPatient";
exports.ids = ["pages/api/getPatient"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "js-base64":
/*!****************************!*\
  !*** external "js-base64" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-base64");;

/***/ }),

/***/ "(api)/./db/index.js":
/*!*********************!*\
  !*** ./db/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = new (pg__WEBPACK_IMPORTED_MODULE_0___default().Pool)({\n    connectionString: \"postgresql://program:ToBoq8OzZcYTKVLbyzCvwQ@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dbrobrobro-2568\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: (text, callback)=>{\n        return pool.query(text, callback);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUI7QUFDbkIsTUFBTUMsSUFBSSxHQUFHLElBQUlELGdEQUFPLENBQUM7SUFBRUcsZ0JBQWdCLEVBQUUsdUtBQXVLO0NBQUUsQ0FBQztBQUN2TixpRUFBZTtJQUNYQyxLQUFLLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFQyxRQUFRLEdBQ3RCO1FBQ0ksT0FBT0wsSUFBSSxDQUFDRyxLQUFLLENBQUNDLElBQUksRUFBRUMsUUFBUSxDQUFDO0tBQ3BDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWxsZW5hbmdlbGhvc3BpdGFsbWFuYWdlbWVudGJyb2ZvcmNwZTM0cHJvamVjdGluc2VtZXN0ZXIyMDIxc2VuZGZvcnRlYWNoZXJwaG9uZC8uL2RiL2luZGV4LmpzPzhmYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBnIGZyb20gJ3BnJ1xuY29uc3QgcG9vbCA9IG5ldyBwZy5Qb29sKHsgY29ubmVjdGlvblN0cmluZzogJ3Bvc3RncmVzcWw6Ly9wcm9ncmFtOlRvQm9xOE96WmNZVEtWTGJ5ekN2d1FAZnJlZS10aWVyNi5nY3AtYXNpYS1zb3V0aGVhc3QxLmNvY2tyb2FjaGxhYnMuY2xvdWQ6MjYyNTcvZGVmYXVsdGRiP3NzbG1vZGU9dmVyaWZ5LWZ1bGwmb3B0aW9ucz0tLWNsdXN0ZXIlM0Ricm9icm9icm8tMjU2OCcgfSlcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBxdWVyeTogKHRleHQsIGNhbGxiYWNrKSA9PlxuICAgIHtcbiAgICAgICAgcmV0dXJuIHBvb2wucXVlcnkodGV4dCwgY2FsbGJhY2spXG4gICAgfVxufSJdLCJuYW1lcyI6WyJwZyIsInBvb2wiLCJQb29sIiwiY29ubmVjdGlvblN0cmluZyIsInF1ZXJ5IiwidGV4dCIsImNhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/getPatient/index.js":
/*!***************************************!*\
  !*** ./pages/api/getPatient/index.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db/index */ \"(api)/./db/index.js\");\n/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-base64 */ \"js-base64\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_base64__WEBPACK_IMPORTED_MODULE_1__]);\njs_base64__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let search = (0,js_base64__WEBPACK_IMPORTED_MODULE_1__.decode)(req.headers.search || \"\").toLowerCase();\n    let page = req.headers.page;\n    if (req.method === \"GET\") {\n        let result = await _db_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(`SELECT \"Patient\".*,CEILING(COUNT(*) OVER()/8) as page_amount FROM \"public\".\"Patient\"\n                    WHERE (LOWER(CONCAT(\"firstname\",' ',\"lastname\")) LIKE '%${search}%')\n                    ORDER BY \"patientID\" ASC LIMIT 8 OFFSET $1 `, [\n            (page - 1) * 8\n        ]);\n        res.json(result.rows);\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0UGF0aWVudC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0M7QUFDQTtBQUdsQyxpRUFBZSxPQUFPRSxHQUFHLEVBQUVDLEdBQUcsR0FDOUI7SUFDSSxJQUFJQyxNQUFNLEdBQUdILGlEQUFNLENBQUNDLEdBQUcsQ0FBQ0csT0FBTyxDQUFDRCxNQUFNLElBQUksRUFBRSxDQUFDLENBQUNFLFdBQVcsRUFBRTtJQUMzRCxJQUFJQyxJQUFJLEdBQUdMLEdBQUcsQ0FBQ0csT0FBTyxDQUFDRSxJQUFJO0lBRTNCLElBQUlMLEdBQUcsQ0FBQ00sTUFBTSxLQUFLLEtBQUssRUFDeEI7UUFDSSxJQUFJQyxNQUFNLEdBQUcsTUFBTVQsdURBQVEsQ0FBQyxDQUFDOzRFQUN1QyxFQUFFSSxNQUFNLENBQUM7K0RBQ3RCLENBQUMsRUFBRTtZQUFDLENBQUNHLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQUMsQ0FBQztRQUMzRUosR0FBRyxDQUFDUSxJQUFJLENBQUNGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDO0tBQ3hCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWxsZW5hbmdlbGhvc3BpdGFsbWFuYWdlbWVudGJyb2ZvcmNwZTM0cHJvamVjdGluc2VtZXN0ZXIyMDIxc2VuZGZvcnRlYWNoZXJwaG9uZC8uL3BhZ2VzL2FwaS9nZXRQYXRpZW50L2luZGV4LmpzPzM0MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL2RiL2luZGV4J1xuaW1wb3J0IHsgZGVjb2RlIH0gZnJvbSAnanMtYmFzZTY0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT5cbntcbiAgICBsZXQgc2VhcmNoID0gZGVjb2RlKHJlcS5oZWFkZXJzLnNlYXJjaCB8fCAnJykudG9Mb3dlckNhc2UoKVxuICAgIGxldCBwYWdlID0gcmVxLmhlYWRlcnMucGFnZVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKVxuICAgIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGRiLnF1ZXJ5KGBTRUxFQ1QgXCJQYXRpZW50XCIuKixDRUlMSU5HKENPVU5UKCopIE9WRVIoKS84KSBhcyBwYWdlX2Ftb3VudCBGUk9NIFwicHVibGljXCIuXCJQYXRpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgV0hFUkUgKExPV0VSKENPTkNBVChcImZpcnN0bmFtZVwiLCcgJyxcImxhc3RuYW1lXCIpKSBMSUtFICclJHtzZWFyY2h9JScpXG4gICAgICAgICAgICAgICAgICAgIE9SREVSIEJZIFwicGF0aWVudElEXCIgQVNDIExJTUlUIDggT0ZGU0VUICQxIGAsIFsocGFnZSAtIDEpICogOF0pXG4gICAgICAgIHJlcy5qc29uKHJlc3VsdC5yb3dzKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiZGIiLCJkZWNvZGUiLCJyZXEiLCJyZXMiLCJzZWFyY2giLCJoZWFkZXJzIiwidG9Mb3dlckNhc2UiLCJwYWdlIiwibWV0aG9kIiwicmVzdWx0IiwicXVlcnkiLCJqc29uIiwicm93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getPatient/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getPatient/index.js"));
module.exports = __webpack_exports__;

})();