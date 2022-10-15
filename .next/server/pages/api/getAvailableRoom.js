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
exports.id = "pages/api/getAvailableRoom";
exports.ids = ["pages/api/getAvailableRoom"];
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

/***/ "(api)/./pages/api/getAvailableRoom.js":
/*!***************************************!*\
  !*** ./pages/api/getAvailableRoom.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"(api)/./db/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let headers = {\n        \"start_date\": \"2022-05-14T09:23:11.087Z\",\n        \"end_date\": \"2022-05-14T09:23:11.087Z\"\n    };\n    if (req.method === \"GET\") {\n        let date1 = new Date(req.headers.start_date);\n        let date2 = new Date(req.headers.end_date);\n        console.log(\"date1\", date1);\n        console.log(\"date2\", date2);\n        const availableDoctor = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(`\n        SELECT \"Room\".*\n        FROM \"public\".\"Room\"  GROUP BY \"Room\".\"roomID\"\n        HAVING (SELECT COUNT(*) FROM \"public\".\"RoomUse\" LEFT JOIN\n        \"public\".\"Appointment\" ON \"RoomUse\".\"appointmentID\" = \"Appointment\".\"appointmentID\"\n        WHERE \"RoomUse\".\"roomID\" = \"Room\".\"roomID\" \n        AND ((\"Appointment\".\"start_time\" BETWEEN $1 AND $2) OR (\"Appointment\".\"end_time\" BETWEEN $1 AND $2))) = 0\n    `, [\n            date1,\n            date2\n        ]);\n        res.json(availableDoctor.rows);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0QXZhaWxhYmxlUm9vbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QjtBQUV6QixpRUFBZSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FDOUI7SUFFSSxJQUFJQyxPQUFPLEdBQUc7UUFDVixZQUFZLEVBQUUsMEJBQTBCO1FBQ3hDLFVBQVUsRUFBRSwwQkFBMEI7S0FDekM7SUFDRCxJQUFJRixHQUFHLENBQUNHLE1BQU0sS0FBSyxLQUFLLEVBQ3hCO1FBQ0ksSUFBSUMsS0FBSyxHQUFHLElBQUlDLElBQUksQ0FBQ0wsR0FBRyxDQUFDRSxPQUFPLENBQUNJLFVBQVUsQ0FBQztRQUM1QyxJQUFJQyxLQUFLLEdBQUcsSUFBSUYsSUFBSSxDQUFDTCxHQUFHLENBQUNFLE9BQU8sQ0FBQ00sUUFBUSxDQUFDO1FBRTFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVOLEtBQUssQ0FBQztRQUMzQkssT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFSCxLQUFLLENBQUM7UUFFM0IsTUFBTUksZUFBZSxHQUFHLE1BQU1aLGlEQUFRLENBQUMsQ0FBQzs7Ozs7OztJQU81QyxDQUFDLEVBQUU7WUFBQ0ssS0FBSztZQUFFRyxLQUFLO1NBQUMsQ0FBQztRQUVkTixHQUFHLENBQUNZLElBQUksQ0FBQ0YsZUFBZSxDQUFDRyxJQUFJLENBQUM7S0FDakM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbGxlbmFuZ2VsaG9zcGl0YWxtYW5hZ2VtZW50YnJvZm9yY3BlMzRwcm9qZWN0aW5zZW1lc3RlcjIwMjFzZW5kZm9ydGVhY2hlcnBob25kLy4vcGFnZXMvYXBpL2dldEF2YWlsYWJsZVJvb20uanM/NTcwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi4vLi4vZGInXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT5cbntcblxuICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICBcInN0YXJ0X2RhdGVcIjogXCIyMDIyLTA1LTE0VDA5OjIzOjExLjA4N1pcIiwgLy9pc29zdHJpbmdcbiAgICAgICAgXCJlbmRfZGF0ZVwiOiBcIjIwMjItMDUtMTRUMDk6MjM6MTEuMDg3WlwiLCAvL2lzb3N0cmluZ1xuICAgIH1cbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpXG4gICAge1xuICAgICAgICBsZXQgZGF0ZTEgPSBuZXcgRGF0ZShyZXEuaGVhZGVycy5zdGFydF9kYXRlKVxuICAgICAgICBsZXQgZGF0ZTIgPSBuZXcgRGF0ZShyZXEuaGVhZGVycy5lbmRfZGF0ZSlcblxuICAgICAgICBjb25zb2xlLmxvZygnZGF0ZTEnLCBkYXRlMSlcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGUyJywgZGF0ZTIpXG5cbiAgICAgICAgY29uc3QgYXZhaWxhYmxlRG9jdG9yID0gYXdhaXQgZGIucXVlcnkoYFxuICAgICAgICBTRUxFQ1QgXCJSb29tXCIuKlxuICAgICAgICBGUk9NIFwicHVibGljXCIuXCJSb29tXCIgIEdST1VQIEJZIFwiUm9vbVwiLlwicm9vbUlEXCJcbiAgICAgICAgSEFWSU5HIChTRUxFQ1QgQ09VTlQoKikgRlJPTSBcInB1YmxpY1wiLlwiUm9vbVVzZVwiIExFRlQgSk9JTlxuICAgICAgICBcInB1YmxpY1wiLlwiQXBwb2ludG1lbnRcIiBPTiBcIlJvb21Vc2VcIi5cImFwcG9pbnRtZW50SURcIiA9IFwiQXBwb2ludG1lbnRcIi5cImFwcG9pbnRtZW50SURcIlxuICAgICAgICBXSEVSRSBcIlJvb21Vc2VcIi5cInJvb21JRFwiID0gXCJSb29tXCIuXCJyb29tSURcIiBcbiAgICAgICAgQU5EICgoXCJBcHBvaW50bWVudFwiLlwic3RhcnRfdGltZVwiIEJFVFdFRU4gJDEgQU5EICQyKSBPUiAoXCJBcHBvaW50bWVudFwiLlwiZW5kX3RpbWVcIiBCRVRXRUVOICQxIEFORCAkMikpKSA9IDBcbiAgICBgLCBbZGF0ZTEsIGRhdGUyXSlcblxuICAgICAgICByZXMuanNvbihhdmFpbGFibGVEb2N0b3Iucm93cylcbiAgICB9XG59Il0sIm5hbWVzIjpbImRiIiwicmVxIiwicmVzIiwiaGVhZGVycyIsIm1ldGhvZCIsImRhdGUxIiwiRGF0ZSIsInN0YXJ0X2RhdGUiLCJkYXRlMiIsImVuZF9kYXRlIiwiY29uc29sZSIsImxvZyIsImF2YWlsYWJsZURvY3RvciIsInF1ZXJ5IiwianNvbiIsInJvd3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getAvailableRoom.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getAvailableRoom.js"));
module.exports = __webpack_exports__;

})();