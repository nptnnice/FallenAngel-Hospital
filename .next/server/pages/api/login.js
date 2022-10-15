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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

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

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_spec_compliant_fetch_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/spec-compliant/fetch-event */ \"(api)/./node_modules/next/dist/server/web/spec-compliant/fetch-event.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db */ \"(api)/./db/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    const mySecretKeyBro = \"secretOrPrivateKey is a string, buffer, or object containing either the secret for HMAC algorithms or the PEM encoded private key for RSA and ECDSA. In case of a private key with passphrase an object { key, passphrase } can be used (based on crypto documentation), in this case be sure you pass the algorithm option.\";\n    if (req.method == \"POST\") {\n        let result = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query('SELECT * FROM \"public\".\"Staff\" WHERE username = $1', [\n            req.body.username\n        ]);\n        if (result.rows.length != 1) {\n            res.send(\"Username not found\");\n        } else {\n            if (result.rows[0].password == req.body.password) {\n                let token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n                    username: result.rows[0].username,\n                    staffID: result.rows[0].staffID,\n                    positionID: result.rows[0].positionID\n                }, mySecretKeyBro, {\n                    expiresIn: \"6h\"\n                });\n                result.rows[0].token = token;\n                res.json(result.rows[0]);\n            } else {\n                res.send(\"Wrong Password\");\n            }\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0Y7QUFDdkQ7QUFDSztBQUNmLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQzlDO0lBQ0ksTUFBTUMsY0FBYyxHQUFHLDhUQUE4VDtJQUNyVixJQUFJRixHQUFHLENBQUNHLE1BQU0sSUFBSSxNQUFNLEVBQ3hCO1FBQ0ksSUFBSUMsTUFBTSxHQUFHLE1BQU1QLGlEQUFRLENBQUMsb0RBQW9ELEVBQzFFO1lBQUNHLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxRQUFRO1NBQUMsQ0FBQztRQUMxQixJQUFJSCxNQUFNLENBQUNJLElBQUksQ0FBQ0MsTUFBTSxJQUFJLENBQUMsRUFDM0I7WUFDSVIsR0FBRyxDQUFDUyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FDakMsTUFFRDtZQUNJLElBQUlOLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxRQUFRLElBQUlYLEdBQUcsQ0FBQ00sSUFBSSxDQUFDSyxRQUFRLEVBQ2hEO2dCQUNJLElBQUlDLEtBQUssR0FBR2Qsd0RBQVEsQ0FBQztvQkFDakJTLFFBQVEsRUFBRUgsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNELFFBQVE7b0JBQ2pDTyxPQUFPLEVBQUVWLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDTSxPQUFPO29CQUMvQkMsVUFBVSxFQUFFWCxNQUFNLENBQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ08sVUFBVTtpQkFDeEMsRUFBRWIsY0FBYyxFQUFFO29CQUNmYyxTQUFTLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQztnQkFDRlosTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNJLEtBQUssR0FBR0EsS0FBSztnQkFDNUJYLEdBQUcsQ0FBQ2dCLElBQUksQ0FBQ2IsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0IsTUFFRDtnQkFDSVAsR0FBRyxDQUFDUyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7YUFDN0I7U0FDSjtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWxsZW5hbmdlbGhvc3BpdGFsbWFuYWdlbWVudGJyb2ZvcmNwZTM0cHJvamVjdGluc2VtZXN0ZXIyMDIxc2VuZGZvcnRlYWNoZXJwaG9uZC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc3BvbnNlU3ltYm9sIH0gZnJvbSAnbmV4dC9kaXN0L3NlcnZlci93ZWIvc3BlYy1jb21wbGlhbnQvZmV0Y2gtZXZlbnQnXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vZGInXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpXG57XG4gICAgY29uc3QgbXlTZWNyZXRLZXlCcm8gPSAnc2VjcmV0T3JQcml2YXRlS2V5IGlzIGEgc3RyaW5nLCBidWZmZXIsIG9yIG9iamVjdCBjb250YWluaW5nIGVpdGhlciB0aGUgc2VjcmV0IGZvciBITUFDIGFsZ29yaXRobXMgb3IgdGhlIFBFTSBlbmNvZGVkIHByaXZhdGUga2V5IGZvciBSU0EgYW5kIEVDRFNBLiBJbiBjYXNlIG9mIGEgcHJpdmF0ZSBrZXkgd2l0aCBwYXNzcGhyYXNlIGFuIG9iamVjdCB7IGtleSwgcGFzc3BocmFzZSB9IGNhbiBiZSB1c2VkIChiYXNlZCBvbiBjcnlwdG8gZG9jdW1lbnRhdGlvbiksIGluIHRoaXMgY2FzZSBiZSBzdXJlIHlvdSBwYXNzIHRoZSBhbGdvcml0aG0gb3B0aW9uLidcbiAgICBpZiAocmVxLm1ldGhvZCA9PSBcIlBPU1RcIilcbiAgICB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBkYi5xdWVyeSgnU0VMRUNUICogRlJPTSBcInB1YmxpY1wiLlwiU3RhZmZcIiBXSEVSRSB1c2VybmFtZSA9ICQxJ1xuICAgICAgICAgICAgLCBbcmVxLmJvZHkudXNlcm5hbWVdKVxuICAgICAgICBpZiAocmVzdWx0LnJvd3MubGVuZ3RoICE9IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcy5zZW5kKFwiVXNlcm5hbWUgbm90IGZvdW5kXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnJvd3NbMF0ucGFzc3dvcmQgPT0gcmVxLmJvZHkucGFzc3dvcmQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gand0LnNpZ24oe1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogcmVzdWx0LnJvd3NbMF0udXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHN0YWZmSUQ6IHJlc3VsdC5yb3dzWzBdLnN0YWZmSUQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uSUQ6IHJlc3VsdC5yb3dzWzBdLnBvc2l0aW9uSURcbiAgICAgICAgICAgICAgICB9LCBteVNlY3JldEtleUJybywge1xuICAgICAgICAgICAgICAgICAgICBleHBpcmVzSW46ICc2aCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJlc3VsdC5yb3dzWzBdLnRva2VuID0gdG9rZW5cbiAgICAgICAgICAgICAgICByZXMuanNvbihyZXN1bHQucm93c1swXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXMuc2VuZChcIldyb25nIFBhc3N3b3JkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbInJlc3BvbnNlU3ltYm9sIiwiZGIiLCJqd3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibXlTZWNyZXRLZXlCcm8iLCJtZXRob2QiLCJyZXN1bHQiLCJxdWVyeSIsImJvZHkiLCJ1c2VybmFtZSIsInJvd3MiLCJsZW5ndGgiLCJzZW5kIiwicGFzc3dvcmQiLCJ0b2tlbiIsInNpZ24iLCJzdGFmZklEIiwicG9zaXRpb25JRCIsImV4cGlyZXNJbiIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/web/spec-compliant/fetch-event.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/dist/server/web/spec-compliant/fetch-event.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.waitUntilSymbol = exports.passThroughSymbol = exports.responseSymbol = void 0;\nvar _key, _key1;\nconst responseSymbol = Symbol('response');\nexports.responseSymbol = responseSymbol;\nconst passThroughSymbol = Symbol('passThrough');\nexports.passThroughSymbol = passThroughSymbol;\nconst waitUntilSymbol = Symbol('waitUntil');\nexports.waitUntilSymbol = waitUntilSymbol;\nclass FetchEvent {\n    // eslint-disable-next-line @typescript-eslint/no-useless-constructor\n    constructor(_request){\n        this[_key] = [];\n        this[_key1] = false;\n    }\n    respondWith(response) {\n        if (!this[responseSymbol]) {\n            this[responseSymbol] = Promise.resolve(response);\n        }\n    }\n    passThroughOnException() {\n        this[passThroughSymbol] = true;\n    }\n    waitUntil(promise) {\n        this[waitUntilSymbol].push(promise);\n    }\n}\nexports.FetchEvent = FetchEvent;\n_key = waitUntilSymbol;\n_key1 = passThroughSymbol;\n\n//# sourceMappingURL=fetch-event.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci93ZWIvc3BlYy1jb21wbGlhbnQvZmV0Y2gtZXZlbnQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRix1QkFBdUIsR0FBRyx5QkFBeUIsR0FBRyxzQkFBc0I7QUFDNUU7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbGxlbmFuZ2VsaG9zcGl0YWxtYW5hZ2VtZW50YnJvZm9yY3BlMzRwcm9qZWN0aW5zZW1lc3RlcjIwMjFzZW5kZm9ydGVhY2hlcnBob25kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvd2ViL3NwZWMtY29tcGxpYW50L2ZldGNoLWV2ZW50LmpzPzY3ODYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndhaXRVbnRpbFN5bWJvbCA9IGV4cG9ydHMucGFzc1Rocm91Z2hTeW1ib2wgPSBleHBvcnRzLnJlc3BvbnNlU3ltYm9sID0gdm9pZCAwO1xudmFyIF9rZXksIF9rZXkxO1xuY29uc3QgcmVzcG9uc2VTeW1ib2wgPSBTeW1ib2woJ3Jlc3BvbnNlJyk7XG5leHBvcnRzLnJlc3BvbnNlU3ltYm9sID0gcmVzcG9uc2VTeW1ib2w7XG5jb25zdCBwYXNzVGhyb3VnaFN5bWJvbCA9IFN5bWJvbCgncGFzc1Rocm91Z2gnKTtcbmV4cG9ydHMucGFzc1Rocm91Z2hTeW1ib2wgPSBwYXNzVGhyb3VnaFN5bWJvbDtcbmNvbnN0IHdhaXRVbnRpbFN5bWJvbCA9IFN5bWJvbCgnd2FpdFVudGlsJyk7XG5leHBvcnRzLndhaXRVbnRpbFN5bWJvbCA9IHdhaXRVbnRpbFN5bWJvbDtcbmNsYXNzIEZldGNoRXZlbnQge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlbGVzcy1jb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKF9yZXF1ZXN0KXtcbiAgICAgICAgdGhpc1tfa2V5XSA9IFtdO1xuICAgICAgICB0aGlzW19rZXkxXSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNwb25kV2l0aChyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXRoaXNbcmVzcG9uc2VTeW1ib2xdKSB7XG4gICAgICAgICAgICB0aGlzW3Jlc3BvbnNlU3ltYm9sXSA9IFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFzc1Rocm91Z2hPbkV4Y2VwdGlvbigpIHtcbiAgICAgICAgdGhpc1twYXNzVGhyb3VnaFN5bWJvbF0gPSB0cnVlO1xuICAgIH1cbiAgICB3YWl0VW50aWwocHJvbWlzZSkge1xuICAgICAgICB0aGlzW3dhaXRVbnRpbFN5bWJvbF0ucHVzaChwcm9taXNlKTtcbiAgICB9XG59XG5leHBvcnRzLkZldGNoRXZlbnQgPSBGZXRjaEV2ZW50O1xuX2tleSA9IHdhaXRVbnRpbFN5bWJvbDtcbl9rZXkxID0gcGFzc1Rocm91Z2hTeW1ib2w7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZldGNoLWV2ZW50LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/web/spec-compliant/fetch-event.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();