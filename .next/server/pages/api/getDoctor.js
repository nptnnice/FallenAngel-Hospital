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
exports.id = "pages/api/getDoctor";
exports.ids = ["pages/api/getDoctor"];
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

/***/ "(api)/./pages/api/getDoctor/index.js":
/*!**************************************!*\
  !*** ./pages/api/getDoctor/index.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../db/index */ \"(api)/./db/index.js\");\n/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-base64 */ \"js-base64\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_base64__WEBPACK_IMPORTED_MODULE_1__]);\njs_base64__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let page = req.headers.page;\n    //if req.headers.department is null set it to false\n    let department = req.headers.department === \"null\" ? false : req.headers.department;\n    let search = (0,js_base64__WEBPACK_IMPORTED_MODULE_1__.decode)(req.headers.search || \"\").toLowerCase();\n    if (req.method === \"GET\") {\n        if (department) {\n            let result = await _db_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(`SELECT \"Staff\".*,\"Department\".\"department_name\",\"Position\".\"position_name\",CEILING(COUNT(*) OVER()/8) \n            as page_amount FROM \"public\".\"Staff\" LEFT JOIN \"public\".\"Department\" \n                ON \"Department\".\"departmentID\" = \"Staff\".\"departmentID\" LEFT JOIN \"public\".\"Position\" ON \n                \"Position\".\"positionID\" = \"Staff\".\"positionID\"\n                WHERE (LOWER(\"firstname\") LIKE '%${search}%' OR LOWER(\"lastname\") LIKE '%${search}%' OR LOWER(CONCAT(\"firstname\",' ',\"lastname\")) LIKE '%${search}%')\n                AND \"Department\".\"department_name\" = $1 ORDER BY \"Staff\".\"staffID\" LIMIT 8 OFFSET $2`, [\n                department,\n                (page - 1) * 8\n            ]);\n            res.json(result.rows);\n        } else {\n            let result = await _db_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(`SELECT \"Staff\".*,\"Department\".\"department_name\",\"Position\".\"position_name\",CEILING(COUNT(*) OVER()/8) \n            as page_amount FROM \"public\".\"Staff\" LEFT JOIN \"public\".\"Department\" \n                ON \"Department\".\"departmentID\" = \"Staff\".\"departmentID\" LEFT JOIN \"public\".\"Position\" ON \n                \"Position\".\"positionID\" = \"Staff\".\"positionID\" WHERE (LOWER(\"firstname\") LIKE '%${search}%' OR LOWER(\"lastname\") LIKE '%${search}%' \n                OR LOWER(CONCAT(\"firstname\",' ',\"lastname\")) LIKE '%${search}%')\n                ORDER BY \"staffID\" LIMIT 8 OFFSET $1`, [\n                (page - 1) * 8\n            ]);\n            res.json(result.rows);\n        }\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RG9jdG9yL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrQztBQUNGO0FBQ2hDLGlFQUFlLE9BQU9FLEdBQUcsRUFBRUMsR0FBRyxHQUM5QjtJQUNJLElBQUlDLElBQUksR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNELElBQUk7SUFDM0IsbURBQW1EO0lBQ25ELElBQUlFLFVBQVUsR0FBR0osR0FBRyxDQUFDRyxPQUFPLENBQUNDLFVBQVUsS0FBSyxNQUFNLEdBQUcsS0FBSyxHQUFHSixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsVUFBVTtJQUNuRixJQUFJQyxNQUFNLEdBQUdOLGlEQUFNLENBQUNDLEdBQUcsQ0FBQ0csT0FBTyxDQUFDRSxNQUFNLElBQUUsRUFBRSxDQUFDLENBQUNDLFdBQVcsRUFBRTtJQUN6RCxJQUFJTixHQUFHLENBQUNPLE1BQU0sS0FBSyxLQUFLLEVBQ3hCO1FBQ0ksSUFBR0gsVUFBVSxFQUFDO1lBQ1YsSUFBSUksTUFBTSxHQUFHLE1BQU1WLHVEQUFRLENBQUMsQ0FBQzs7OztpREFJUSxFQUFFTyxNQUFNLENBQUMsK0JBQStCLEVBQUVBLE1BQU0sQ0FBQyx1REFBdUQsRUFBRUEsTUFBTSxDQUFDO29HQUM5RCxDQUFDLEVBQ3RGO2dCQUFDRCxVQUFVO2dCQUFDLENBQUNGLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRSxDQUFDO2FBQUMsQ0FBQztZQUM5QkQsR0FBRyxDQUFDUyxJQUFJLENBQUNGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDO1NBQ3hCLE1BQ0c7WUFDQSxJQUFJSCxNQUFNLEdBQUcsTUFBTVYsdURBQVEsQ0FBQyxDQUFDOzs7Z0dBR3VELEVBQUVPLE1BQU0sQ0FBQywrQkFBK0IsRUFBRUEsTUFBTSxDQUFDO29FQUM3RSxFQUFFQSxNQUFNLENBQUM7b0RBQ3pCLENBQUMsRUFBRTtnQkFBQyxDQUFDSCxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUFDLENBQUM7WUFDNURELEdBQUcsQ0FBQ1MsSUFBSSxDQUFDRixNQUFNLENBQUNHLElBQUksQ0FBQztTQUN4QjtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWxsZW5hbmdlbGhvc3BpdGFsbWFuYWdlbWVudGJyb2ZvcmNwZTM0cHJvamVjdGluc2VtZXN0ZXIyMDIxc2VuZGZvcnRlYWNoZXJwaG9uZC8uL3BhZ2VzL2FwaS9nZXREb2N0b3IvaW5kZXguanM/NDIyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vZGIvaW5kZXgnXG5pbXBvcnQge2RlY29kZX0gZnJvbSAnanMtYmFzZTY0J1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9Plxue1xuICAgIGxldCBwYWdlID0gcmVxLmhlYWRlcnMucGFnZVxuICAgIC8vaWYgcmVxLmhlYWRlcnMuZGVwYXJ0bWVudCBpcyBudWxsIHNldCBpdCB0byBmYWxzZVxuICAgIGxldCBkZXBhcnRtZW50ID0gcmVxLmhlYWRlcnMuZGVwYXJ0bWVudCA9PT0gJ251bGwnID8gZmFsc2UgOiByZXEuaGVhZGVycy5kZXBhcnRtZW50XG4gICAgbGV0IHNlYXJjaCA9IGRlY29kZShyZXEuaGVhZGVycy5zZWFyY2h8fCcnKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKVxuICAgIHtcbiAgICAgICAgaWYoZGVwYXJ0bWVudCl7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZGIucXVlcnkoYFNFTEVDVCBcIlN0YWZmXCIuKixcIkRlcGFydG1lbnRcIi5cImRlcGFydG1lbnRfbmFtZVwiLFwiUG9zaXRpb25cIi5cInBvc2l0aW9uX25hbWVcIixDRUlMSU5HKENPVU5UKCopIE9WRVIoKS84KSBcbiAgICAgICAgICAgIGFzIHBhZ2VfYW1vdW50IEZST00gXCJwdWJsaWNcIi5cIlN0YWZmXCIgTEVGVCBKT0lOIFwicHVibGljXCIuXCJEZXBhcnRtZW50XCIgXG4gICAgICAgICAgICAgICAgT04gXCJEZXBhcnRtZW50XCIuXCJkZXBhcnRtZW50SURcIiA9IFwiU3RhZmZcIi5cImRlcGFydG1lbnRJRFwiIExFRlQgSk9JTiBcInB1YmxpY1wiLlwiUG9zaXRpb25cIiBPTiBcbiAgICAgICAgICAgICAgICBcIlBvc2l0aW9uXCIuXCJwb3NpdGlvbklEXCIgPSBcIlN0YWZmXCIuXCJwb3NpdGlvbklEXCJcbiAgICAgICAgICAgICAgICBXSEVSRSAoTE9XRVIoXCJmaXJzdG5hbWVcIikgTElLRSAnJSR7c2VhcmNofSUnIE9SIExPV0VSKFwibGFzdG5hbWVcIikgTElLRSAnJSR7c2VhcmNofSUnIE9SIExPV0VSKENPTkNBVChcImZpcnN0bmFtZVwiLCcgJyxcImxhc3RuYW1lXCIpKSBMSUtFICclJHtzZWFyY2h9JScpXG4gICAgICAgICAgICAgICAgQU5EIFwiRGVwYXJ0bWVudFwiLlwiZGVwYXJ0bWVudF9uYW1lXCIgPSAkMSBPUkRFUiBCWSBcIlN0YWZmXCIuXCJzdGFmZklEXCIgTElNSVQgOCBPRkZTRVQgJDJgXG4gICAgICAgICAgICAgLCBbZGVwYXJ0bWVudCwocGFnZSAtIDEpICo4XSlcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yb3dzKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZGIucXVlcnkoYFNFTEVDVCBcIlN0YWZmXCIuKixcIkRlcGFydG1lbnRcIi5cImRlcGFydG1lbnRfbmFtZVwiLFwiUG9zaXRpb25cIi5cInBvc2l0aW9uX25hbWVcIixDRUlMSU5HKENPVU5UKCopIE9WRVIoKS84KSBcbiAgICAgICAgICAgIGFzIHBhZ2VfYW1vdW50IEZST00gXCJwdWJsaWNcIi5cIlN0YWZmXCIgTEVGVCBKT0lOIFwicHVibGljXCIuXCJEZXBhcnRtZW50XCIgXG4gICAgICAgICAgICAgICAgT04gXCJEZXBhcnRtZW50XCIuXCJkZXBhcnRtZW50SURcIiA9IFwiU3RhZmZcIi5cImRlcGFydG1lbnRJRFwiIExFRlQgSk9JTiBcInB1YmxpY1wiLlwiUG9zaXRpb25cIiBPTiBcbiAgICAgICAgICAgICAgICBcIlBvc2l0aW9uXCIuXCJwb3NpdGlvbklEXCIgPSBcIlN0YWZmXCIuXCJwb3NpdGlvbklEXCIgV0hFUkUgKExPV0VSKFwiZmlyc3RuYW1lXCIpIExJS0UgJyUke3NlYXJjaH0lJyBPUiBMT1dFUihcImxhc3RuYW1lXCIpIExJS0UgJyUke3NlYXJjaH0lJyBcbiAgICAgICAgICAgICAgICBPUiBMT1dFUihDT05DQVQoXCJmaXJzdG5hbWVcIiwnICcsXCJsYXN0bmFtZVwiKSkgTElLRSAnJSR7c2VhcmNofSUnKVxuICAgICAgICAgICAgICAgIE9SREVSIEJZIFwic3RhZmZJRFwiIExJTUlUIDggT0ZGU0VUICQxYCwgWyhwYWdlIC0gMSkgKiA4XSlcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yb3dzKVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJkYiIsImRlY29kZSIsInJlcSIsInJlcyIsInBhZ2UiLCJoZWFkZXJzIiwiZGVwYXJ0bWVudCIsInNlYXJjaCIsInRvTG93ZXJDYXNlIiwibWV0aG9kIiwicmVzdWx0IiwicXVlcnkiLCJqc29uIiwicm93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getDoctor/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getDoctor/index.js"));
module.exports = __webpack_exports__;

})();