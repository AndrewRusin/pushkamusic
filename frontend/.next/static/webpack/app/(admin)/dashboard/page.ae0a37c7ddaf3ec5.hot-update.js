"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(admin)/dashboard/page",{

/***/ "(app-pages-browser)/./app/(admin)/components/SongList/SongList.tsx":
/*!******************************************************!*\
  !*** ./app/(admin)/components/SongList/SongList.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SongList: function() { return /* binding */ SongList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ \"(app-pages-browser)/./api/api.ts\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ \"(app-pages-browser)/./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SongList_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SongList.module.css */ \"(app-pages-browser)/./app/(admin)/components/SongList/SongList.module.css\");\n/* harmony import */ var _SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SongList_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _api_song__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/song */ \"(app-pages-browser)/./api/song.tsx\");\n/* harmony import */ var _api_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/file */ \"(app-pages-browser)/./api/file.tsx\");\n/* harmony import */ var _components_Player_Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Player/Player */ \"(app-pages-browser)/./components/Player/Player.tsx\");\n/* harmony import */ var _SelectList_SelectList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SelectList/SelectList */ \"(app-pages-browser)/./app/(admin)/components/SelectList/SelectList.tsx\");\n/* __next_internal_client_entry_do_not_use__ SongList auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst SongList = ()=>{\n    _s();\n    const [SongItems, setSongItems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [trackID, setTrackID] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [selectItem, setSelectItem] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleChange = async (val)=>{\n        if (val !== null) {\n            setValue((prev)=>prev = [\n                    ...val\n                ]);\n        } else {\n            setValue(null);\n            const data = await (0,_api_song__WEBPACK_IMPORTED_MODULE_4__.getSongItems)();\n            setSongItems(data);\n        }\n    };\n    (async ()=>{\n        if (value) {\n            const data = await (0,_api_song__WEBPACK_IMPORTED_MODULE_4__.getSongItemsFilter)(value);\n            setSongItems(data);\n        }\n    })();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const data = await (0,_api_song__WEBPACK_IMPORTED_MODULE_4__.getSongItems)();\n            data.forEach((el)=>el.isSelected = false);\n            setSongItems(data);\n            const playListArr = data.map((el)=>({\n                    src: _api_api__WEBPACK_IMPORTED_MODULE_1__.API.uploadSrc + el.track_link,\n                    name: el.title\n                }));\n            setPlaylist([\n                ...playListArr\n            ]);\n        })();\n        return ()=>{\n        // this now gets called when the component unmounts\n        };\n    }, []);\n    async function deleteItem(id, fileName) {\n        await (0,_api_file__WEBPACK_IMPORTED_MODULE_5__.deleteFile)(fileName);\n        await (0,_api_song__WEBPACK_IMPORTED_MODULE_4__.deleteSongItem)(id);\n        const itemsRefresh = await (0,_api_song__WEBPACK_IMPORTED_MODULE_4__.getSongItems)();\n        setSongItems(itemsRefresh);\n    }\n    function deleteSelected(id) {\n        setSongItems(SongItems.map((song)=>{\n            if (song._id === id) {\n                song.isSelected = false;\n            }\n            return song;\n        }));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default().top_bar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Filter, {\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default().search_input)\n                    }, void 0, false, {\n                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 15\n                    }, undefined),\n                    selectItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SelectList_SelectList__WEBPACK_IMPORTED_MODULE_7__.SelectList, {\n                        selectItem: selectItem,\n                        deleteSelected: deleteSelected\n                    }, void 0, false, {\n                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default().song_list),\n                children: SongItems.map((item, idx)=>!item.isHidden && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default().order),\n                                        children: item.order\n                                    }, void 0, false, {\n                                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    !item.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        appearance: \"primary\",\n                                        onClick: ()=>{\n                                            setSelectItem({\n                                                id: item._id,\n                                                name: item.title\n                                            });\n                                            item.isSelected = true;\n                                        },\n                                        children: \"+ select\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 46\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: ()=>setTrackID(idx),\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 23\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        appearance: \"alert\",\n                                        onClick: async ()=>deleteItem(item._id, item.track_link),\n                                        children: \"удалить\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 30\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 23\n                            }, undefined)\n                        ]\n                    }, item._id, true, {\n                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 37\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                lineNumber: 82,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default().player),\n                children: playlist && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Player_Player__WEBPACK_IMPORTED_MODULE_6__.Player, {\n                    playlist: playlist,\n                    current_track: trackID\n                }, void 0, false, {\n                    fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 31\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n        lineNumber: 75,\n        columnNumber: 13\n    }, undefined);\n};\n_s(SongList, \"l2G+Emr176ponRUnb+SW1WvLwaM=\");\n_c = SongList;\nvar _c;\n$RefreshReg$(_c, \"SongList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYWRtaW4pL2NvbXBvbmVudHMvU29uZ0xpc3QvU29uZ0xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWdDO0FBRWE7QUFHRDtBQUNEO0FBQ21DO0FBQ3RDO0FBQ2Q7QUFDMEI7QUFHRTtBQUsvQyxNQUFPYSxXQUFVOztJQUVwQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQTZCLEVBQUU7SUFDekUsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFtQjtJQUNyRCxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFxQjtJQUM3RCxNQUFNLENBQUNpQixTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNtQixZQUFZQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBd0I7SUFDcEUsTUFBTXFCLGVBQWUsT0FBT0M7UUFFMUIsSUFBSUEsUUFBTSxNQUFNO1lBQ2RSLFNBQVNTLENBQUFBLE9BQVFBLE9BQUs7dUJBQUlEO2lCQUFJO1FBQ2hDLE9BQUs7WUFDSFIsU0FBUztZQUNULE1BQU1VLE9BQU8sTUFBTXBCLHVEQUFZQTtZQUUvQlEsYUFBYVk7UUFDZjtJQUNGO0lBRUM7UUFBYSxJQUFJWCxPQUFPO1lBQ3JCLE1BQU1XLE9BQVMsTUFBTW5CLDZEQUFrQkEsQ0FBQ1E7WUFDeENELGFBQWFZO1FBQ2pCO0lBQUM7SUFDRHZCLGdEQUFTQSxDQUFFO1FBQ047WUFDRCxNQUFNdUIsT0FBTyxNQUFNcEIsdURBQVlBO1lBQy9Cb0IsS0FBS0MsT0FBTyxDQUFDQyxDQUFBQSxLQUFJQSxHQUFHQyxVQUFVLEdBQUc7WUFDakNmLGFBQWFZO1lBQ2IsTUFBTUksY0FBY0osS0FBS0ssR0FBRyxDQUFDSCxDQUFBQSxLQUFLO29CQUFDSSxLQUFJakMseUNBQUdBLENBQUNrQyxTQUFTLEdBQUNMLEdBQUdNLFVBQVU7b0JBQUVDLE1BQUtQLEdBQUdRLEtBQUs7Z0JBQUE7WUFFakZsQixZQUFZO21CQUFJWTthQUFZO1FBQzlCO1FBQ0MsT0FBTztRQUNMLG1EQUFtRDtRQUNyRDtJQUNGLEdBQUcsRUFBRTtJQUVOLGVBQWdCTyxXQUFXQyxFQUFTLEVBQUVDLFFBQWU7UUFDakQsTUFBTS9CLHFEQUFVQSxDQUFDK0I7UUFDakIsTUFBTWxDLHlEQUFjQSxDQUFDaUM7UUFDckIsTUFBTUUsZUFBZSxNQUFNbEMsdURBQVlBO1FBQ3ZDUSxhQUFhMEI7SUFDakI7SUFDRCxTQUFTQyxlQUFlSCxFQUFTO1FBQ2hDeEIsYUFBYUQsVUFBVWtCLEdBQUcsQ0FBQ1csQ0FBQUE7WUFDekIsSUFBSUEsS0FBS0MsR0FBRyxLQUFJTCxJQUFJO2dCQUNsQkksS0FBS2IsVUFBVSxHQUFHO1lBQ3BCO1lBQ0EsT0FBT2E7UUFDVDtJQUNEO0lBR0sscUJBQ0ksOERBQUNFOzswQkFDRCw4REFBQ0E7Z0JBQUlDLFdBQVd6QyxxRUFBYzs7a0NBQzVCLDhEQUFDSCwrQ0FBTUE7d0JBQUM4QyxVQUFVeEI7Ozs7OztrQ0FDbEIsOERBQUN5Qjt3QkFBTUMsTUFBSzt3QkFBT0osV0FBV3pDLDBFQUFtQjs7Ozs7O29CQUNoRGlCLDRCQUFlLDhEQUFDViw4REFBVUE7d0JBQUNVLFlBQVlBO3dCQUFZb0IsZ0JBQWdCQTs7Ozs7Ozs7Ozs7OzBCQUdqRSw4REFBQ1U7Z0JBQUdOLFdBQVd6Qyx1RUFBZ0I7MEJBQy9CUyxVQUFVa0IsR0FBRyxDQUFDLENBQUNzQixNQUFLQyxNQUNwQixDQUFDRCxLQUFLRSxRQUFRLGtCQUFLLDhEQUFDQzs7MENBQ2YsOERBQUNDOztrREFDRCw4REFBQ0E7d0NBQUtaLFdBQVd6QyxtRUFBWTtrREFBR2lELEtBQUtLLEtBQUs7Ozs7OztvQ0FDdkMsQ0FBQ0wsS0FBS3hCLFVBQVUsa0JBQUksOERBQUM3QiwrQ0FBTUE7d0NBQUUyRCxZQUFZO3dDQUFXQyxTQUFTOzRDQUNNdEMsY0FBYztnREFBQ2dCLElBQUdlLEtBQUtWLEdBQUc7Z0RBQUVSLE1BQUtrQixLQUFLakIsS0FBSzs0Q0FBQTs0Q0FDM0NpQixLQUFLeEIsVUFBVSxHQUFHO3dDQUFJO2tEQUFHOzs7Ozs7a0RBRTdGLDhEQUFDNEI7d0NBQUtHLFNBQVMsSUFBSXhDLFdBQVdrQztrREFBT0QsS0FBS2pCLEtBQUs7Ozs7Ozs7Ozs7OzswQ0FFakQsOERBQUNxQjs7b0NBQUs7a0RBQUMsOERBQUN6RCwrQ0FBTUE7d0NBQUMyRCxZQUFXO3dDQUFRQyxTQUFTLFVBQVV2QixXQUFXZ0IsS0FBS1YsR0FBRyxFQUFFVSxLQUFLbkIsVUFBVTtrREFBRzs7Ozs7Ozs7Ozs7Ozt1QkFUcEVtQixLQUFLVixHQUFHOzs7Ozs7Ozs7OzBCQWExQyw4REFBQ0M7Z0JBQUlDLFdBQVd6QyxvRUFBYTswQkFDeEJhLDBCQUFhLDhEQUFDUCw2REFBTUE7b0JBQUNPLFVBQVVBO29CQUFVNkMsZUFBZTNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU92RSxFQUFDO0dBcEZXUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGFkbWluKS9jb21wb25lbnRzL1NvbmdMaXN0L1NvbmdMaXN0LnRzeD8wOGQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiQC9hcGkvYXBpXCI7XG5cbmltcG9ydCB7IEJ1dHRvbiwgRmlsdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiXG5pbXBvcnQgeyBJU29uZ0NhdGVnb3JpZXNSZXNwb25zZSB9IGZyb20gXCJAL2ludGVyZmFjZXMvc29uZy5pbnRlcmZhY2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU29uZ0xpc3QubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZGVsZXRlU29uZ0l0ZW0sIGdldFNvbmdJdGVtcywgZ2V0U29uZ0l0ZW1zRmlsdGVyIH0gZnJvbSBcIkAvYXBpL3NvbmdcIjtcbmltcG9ydCB7IGRlbGV0ZUZpbGUgfSBmcm9tIFwiQC9hcGkvZmlsZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyXCI7XG5pbXBvcnQgeyBJUGxheWxpc3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL1BsYXllci9QbGF5ZXIucHJvcHNcIjtcbmltcG9ydCB7IElTZWxlY3RJdGVtcyB9IGZyb20gXCIuLi9TZWxlY3RMaXN0L1NlbGVjdExpc3QucHJvcHNcIjtcbmltcG9ydCB7IFNlbGVjdExpc3QgfSBmcm9tIFwiLi4vU2VsZWN0TGlzdC9TZWxlY3RMaXN0XCI7XG5cblxuXG5cbmV4cG9ydCBjb25zdCAgU29uZ0xpc3QgPSgpID0+IHtcblxuICAgIGNvbnN0IFtTb25nSXRlbXMsIHNldFNvbmdJdGVtc10gPSB1c2VTdGF0ZTxJU29uZ0NhdGVnb3JpZXNSZXNwb25zZVtdID4oW10pXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmdbXSB8IG51bGwgPihudWxsKVxuICAgIGNvbnN0IFtwbGF5bGlzdCwgc2V0UGxheWxpc3RdID0gdXNlU3RhdGU8SVBsYXlsaXN0W10gfCBudWxsPihudWxsKVxuICAgIGNvbnN0IFt0cmFja0lELCBzZXRUcmFja0lEXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW3NlbGVjdEl0ZW0sIHNldFNlbGVjdEl0ZW1dID0gdXNlU3RhdGU8SVNlbGVjdEl0ZW1zICB8IG51bGwgPihudWxsKVxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jICh2YWw6c3RyaW5nW10gfCBudWxsKSA9PiB7XG4gICAgXG4gICAgICBpZiAodmFsIT09bnVsbCkge1xuICAgICAgICBzZXRWYWx1ZShwcmV2ID0+IHByZXY9Wy4uLnZhbF0pXG4gICAgICB9ZWxzZXtcbiAgICAgICAgc2V0VmFsdWUobnVsbClcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFNvbmdJdGVtcygpXG4gICAgICAgXG4gICAgICAgIHNldFNvbmdJdGVtcyhkYXRhKVxuICAgICAgfSAgICBcbiAgICB9XG5cbiAgICAoYXN5bmMgKCkgPT4ge2lmICh2YWx1ZSkgeyAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGEgPSAgIGF3YWl0IGdldFNvbmdJdGVtc0ZpbHRlcih2YWx1ZSlcbiAgICAgICAgc2V0U29uZ0l0ZW1zKGRhdGEpXG4gICAgfX0pKCk7XG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTb25nSXRlbXMoKVxuICAgICAgICBkYXRhLmZvckVhY2goZWw9PmVsLmlzU2VsZWN0ZWQgPSBmYWxzZSkgXG4gICAgICAgIHNldFNvbmdJdGVtcyhkYXRhKVxuICAgICAgICBjb25zdCBwbGF5TGlzdEFyciA9IGRhdGEubWFwKGVsPT4oe3NyYzpBUEkudXBsb2FkU3JjK2VsLnRyYWNrX2xpbmssIG5hbWU6ZWwudGl0bGV9KSkgXG4gICAgIFxuICAgICAgICBzZXRQbGF5bGlzdChbLi4ucGxheUxpc3RBcnJdKVxuICAgICAgfSkoKTtcbiAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgLy8gdGhpcyBub3cgZ2V0cyBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gICAgICAgfTsgXG4gICAgIH0sIFtdKVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uICBkZWxldGVJdGVtKGlkOnN0cmluZywgZmlsZU5hbWU6c3RyaW5nKXtcbiAgICAgICAgYXdhaXQgZGVsZXRlRmlsZShmaWxlTmFtZSk7XG4gICAgICAgIGF3YWl0IGRlbGV0ZVNvbmdJdGVtKGlkKTtcbiAgICAgICAgY29uc3QgaXRlbXNSZWZyZXNoID0gYXdhaXQgZ2V0U29uZ0l0ZW1zKClcbiAgICAgICAgc2V0U29uZ0l0ZW1zKGl0ZW1zUmVmcmVzaClcbiAgICB9XG4gICBmdW5jdGlvbiBkZWxldGVTZWxlY3RlZChpZDpzdHJpbmcpIHtcbiAgICBzZXRTb25nSXRlbXMoU29uZ0l0ZW1zLm1hcChzb25nPT57XG4gICAgICBpZiAoc29uZy5faWQgPT09aWQpIHtcbiAgICAgICAgc29uZy5pc1NlbGVjdGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiBzb25nXG4gICAgfSkpXG4gICB9ICBcblxuIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj4gICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BfYmFyfT5cbiAgICAgICAgICAgICAgPEZpbHRlciBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9pbnB1dH0vPlxuICAgICAgICAgICAgICB7c2VsZWN0SXRlbSAmJiAoPFNlbGVjdExpc3Qgc2VsZWN0SXRlbT17c2VsZWN0SXRlbX0gZGVsZXRlU2VsZWN0ZWQ9e2RlbGV0ZVNlbGVjdGVkfS8+KX0gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc29uZ19saXN0fT5cbiAgICAgICAgICAgICAgICB7U29uZ0l0ZW1zLm1hcCgoaXRlbSxpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgIWl0ZW0uaXNIaWRkZW4gJiYgKDxsaSBrZXkgPXtpdGVtLl9pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyfT57aXRlbS5vcmRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWl0ZW0uaXNTZWxlY3RlZCAmJiA8QnV0dG9uICBhcHBlYXJhbmNlPXtcInByaW1hcnlcIn0gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0SXRlbSh7aWQ6aXRlbS5faWQsIG5hbWU6aXRlbS50aXRsZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNTZWxlY3RlZCA9IHRydWV9fT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBzZWxlY3Q8L0J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKT0+c2V0VHJhY2tJRChpZHgpfT57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8QnV0dG9uIGFwcGVhcmFuY2U9XCJhbGVydFwiIG9uQ2xpY2s9e2FzeW5jICgpPT5kZWxldGVJdGVtKGl0ZW0uX2lkLCBpdGVtLnRyYWNrX2xpbmspfT7Rg9C00LDQu9C40YLRjDwvQnV0dG9uPjwvc3Bhbj48L2xpPilcbiAgICAgICAgICAgICAgICApKX0gICAgICBcbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJ9PlxuICAgICAgICAgICAgICAgIHtwbGF5bGlzdCAmJiAoPFBsYXllciBwbGF5bGlzdD17cGxheWxpc3R9IGN1cnJlbnRfdHJhY2s9e3RyYWNrSUR9Lz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICApXG4gXG5cbiAgfSJdLCJuYW1lcyI6WyJBUEkiLCJCdXR0b24iLCJGaWx0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImRlbGV0ZVNvbmdJdGVtIiwiZ2V0U29uZ0l0ZW1zIiwiZ2V0U29uZ0l0ZW1zRmlsdGVyIiwiZGVsZXRlRmlsZSIsIlJlYWN0IiwiUGxheWVyIiwiU2VsZWN0TGlzdCIsIlNvbmdMaXN0IiwiU29uZ0l0ZW1zIiwic2V0U29uZ0l0ZW1zIiwidmFsdWUiLCJzZXRWYWx1ZSIsInBsYXlsaXN0Iiwic2V0UGxheWxpc3QiLCJ0cmFja0lEIiwic2V0VHJhY2tJRCIsInNlbGVjdEl0ZW0iLCJzZXRTZWxlY3RJdGVtIiwiaGFuZGxlQ2hhbmdlIiwidmFsIiwicHJldiIsImRhdGEiLCJmb3JFYWNoIiwiZWwiLCJpc1NlbGVjdGVkIiwicGxheUxpc3RBcnIiLCJtYXAiLCJzcmMiLCJ1cGxvYWRTcmMiLCJ0cmFja19saW5rIiwibmFtZSIsInRpdGxlIiwiZGVsZXRlSXRlbSIsImlkIiwiZmlsZU5hbWUiLCJpdGVtc1JlZnJlc2giLCJkZWxldGVTZWxlY3RlZCIsInNvbmciLCJfaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0b3BfYmFyIiwib25DaGFuZ2UiLCJpbnB1dCIsInR5cGUiLCJzZWFyY2hfaW5wdXQiLCJ1bCIsInNvbmdfbGlzdCIsIml0ZW0iLCJpZHgiLCJpc0hpZGRlbiIsImxpIiwic3BhbiIsIm9yZGVyIiwiYXBwZWFyYW5jZSIsIm9uQ2xpY2siLCJwbGF5ZXIiLCJjdXJyZW50X3RyYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(admin)/components/SongList/SongList.tsx\n"));

/***/ })

});