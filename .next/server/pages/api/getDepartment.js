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
exports.id = "pages/api/getDepartment";
exports.ids = ["pages/api/getDepartment"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./db/index.js":
/*!*********************!*\
  !*** ./db/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = new (pg__WEBPACK_IMPORTED_MODULE_0___default().Pool)({\n    connectionString: \"postgresql://program:ToBoq8OzZcYTKVLbyzCvwQ@free-tier6.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dbrobrobro-2568\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: (text, callback)=>{\n        return pool.query(text, callback);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUI7QUFDbkIsTUFBTUMsSUFBSSxHQUFHLElBQUlELGdEQUFPLENBQUM7SUFBRUcsZ0JBQWdCLEVBQUUsdUtBQXVLO0NBQUUsQ0FBQztBQUN2TixpRUFBZTtJQUNYQyxLQUFLLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFQyxRQUFRLEdBQ3RCO1FBQ0ksT0FBT0wsSUFBSSxDQUFDRyxLQUFLLENBQUNDLElBQUksRUFBRUMsUUFBUSxDQUFDO0tBQ3BDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWxsZW5hbmdlbGhvc3BpdGFsbWFuYWdlbWVudGJyb2ZvcmNwZTM0cHJvamVjdGluc2VtZXN0ZXIyMDIxc2VuZGZvcnRlYWNoZXJwaG9uZC8uL2RiL2luZGV4LmpzPzhmYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBnIGZyb20gJ3BnJ1xuY29uc3QgcG9vbCA9IG5ldyBwZy5Qb29sKHsgY29ubmVjdGlvblN0cmluZzogJ3Bvc3RncmVzcWw6Ly9wcm9ncmFtOlRvQm9xOE96WmNZVEtWTGJ5ekN2d1FAZnJlZS10aWVyNi5nY3AtYXNpYS1zb3V0aGVhc3QxLmNvY2tyb2FjaGxhYnMuY2xvdWQ6MjYyNTcvZGVmYXVsdGRiP3NzbG1vZGU9dmVyaWZ5LWZ1bGwmb3B0aW9ucz0tLWNsdXN0ZXIlM0Ricm9icm9icm8tMjU2OCcgfSlcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBxdWVyeTogKHRleHQsIGNhbGxiYWNrKSA9PlxuICAgIHtcbiAgICAgICAgcmV0dXJuIHBvb2wucXVlcnkodGV4dCwgY2FsbGJhY2spXG4gICAgfVxufSJdLCJuYW1lcyI6WyJwZyIsInBvb2wiLCJQb29sIiwiY29ubmVjdGlvblN0cmluZyIsInF1ZXJ5IiwidGV4dCIsImNhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/getDepartment.js":
/*!************************************!*\
  !*** ./pages/api/getDepartment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"GET\") {\n        let result = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(`SELECT * FROM \"public\".\"Department\"`);\n        res.json(result.rows);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RGVwYXJ0bWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QjtBQUV6QixpRUFBZSxPQUFPQyxHQUFHLEVBQUNDLEdBQUcsR0FBRztJQUM1QixJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUM7UUFDcEIsSUFBSUMsTUFBTSxHQUFHLE1BQU1KLGlEQUFRLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ2xFRSxHQUFHLENBQUNJLElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxJQUFJLENBQUM7S0FDeEI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbGxlbmFuZ2VsaG9zcGl0YWxtYW5hZ2VtZW50YnJvZm9yY3BlMzRwcm9qZWN0aW5zZW1lc3RlcjIwMjFzZW5kZm9ydGVhY2hlcnBob25kLy4vcGFnZXMvYXBpL2dldERlcGFydG1lbnQuanM/NzBhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi4vLi4vZGInXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKT0+e1xuICAgIGlmKHJlcS5tZXRob2QgPT09ICdHRVQnKXtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGRiLnF1ZXJ5KGBTRUxFQ1QgKiBGUk9NIFwicHVibGljXCIuXCJEZXBhcnRtZW50XCJgKVxuICAgICAgICByZXMuanNvbihyZXN1bHQucm93cylcbiAgICB9XG59Il0sIm5hbWVzIjpbImRiIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVzdWx0IiwicXVlcnkiLCJqc29uIiwicm93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getDepartment.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getDepartment.js"));
module.exports = __webpack_exports__;

})();