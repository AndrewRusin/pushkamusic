"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(admin)/dashboard/song_items/page",{

/***/ "(app-pages-browser)/./app/(admin)/components/SongList/SongList.tsx":
/*!******************************************************!*\
  !*** ./app/(admin)/components/SongList/SongList.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SongList: function() { return /* binding */ SongList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api */ \"(app-pages-browser)/./api/api.ts\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components */ \"(app-pages-browser)/./components/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SongList_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SongList.module.css */ \"(app-pages-browser)/./app/(admin)/components/SongList/SongList.module.css\");\n/* harmony import */ var _SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SongList_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _api_song__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/song */ \"(app-pages-browser)/./api/song.tsx\");\n/* harmony import */ var _api_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/file */ \"(app-pages-browser)/./api/file.tsx\");\n/* harmony import */ var _components_Player_Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Player/Player */ \"(app-pages-browser)/./components/Player/Player.tsx\");\n/* harmony import */ var _SelectList_SelectList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SelectList/SelectList */ \"(app-pages-browser)/./app/(admin)/components/SelectList/SelectList.tsx\");\n/* __next_internal_client_entry_do_not_use__ SongList auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst SongList = ()=>{\n    _s();\n    const [SongItems, setSongItems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [trackID, setTrackID] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [selectItem, setSelectItem] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleChange = async (val)=>{\n        if (val !== null) {\n            setValue((prev)=>prev = [\n                    ...val\n                ]);\n        } else {\n            setValue(null);\n            const data = await (0,_api_song__WEBPACK_IMPORTED_MODULE_4__.getSongItems)();\n            setSongItems(data);\n        }\n    };\n    (async ()=>{\n        if (value) {\n            const data = await (0,_api_song__WEBPACK_IMPORTED_MODULE_4__.getSongItemsFilter)(value);\n            setSongItems(data);\n        }\n    })();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const data = await (0,_api_song__WEBPACK_IMPORTED_MODULE_4__.getSongItems)();\n            data.forEach((el)=>el.isSelected = false);\n            setSongItems(data);\n            const playListArr = data.map((el)=>({\n                    src: _api_api__WEBPACK_IMPORTED_MODULE_1__.API.uploadSrc + el.track_link,\n                    name: el.title\n                }));\n            setPlaylist([\n                ...playListArr\n            ]);\n        })();\n        return ()=>{\n        // this now gets called when the component unmounts\n        };\n    }, []);\n    async function deleteItem(id, fileName) {\n        await (0,_api_file__WEBPACK_IMPORTED_MODULE_5__.deleteFile)(fileName);\n        await (0,_api_song__WEBPACK_IMPORTED_MODULE_4__.deleteSongItem)(id);\n        const itemsRefresh = await (0,_api_song__WEBPACK_IMPORTED_MODULE_4__.getSongItems)();\n        setSongItems(itemsRefresh);\n    }\n    function deleteSelected(id) {\n        setSongItems(SongItems.map((song)=>{\n            if (song._id === id) {\n                song.isSelected = false;\n            }\n            return song;\n        }));\n    }\n    function searchSong(song) {\n        const initialSet = [\n            ...SongItems\n        ];\n        console.log(song.length);\n        if (song.length) {\n            const searchArr = SongItems.filter((el)=>el.title.toLowerCase().includes(song.toLowerCase()));\n            setSongItems(searchArr);\n        } else {\n            setSongItems(initialSet);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default().top_bar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Filter, {\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default().search_input),\n                        placeholder: \"Поиск\",\n                        onChange: (e)=>searchSong(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 15\n                    }, undefined),\n                    selectItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SelectList_SelectList__WEBPACK_IMPORTED_MODULE_7__.SelectList, {\n                        selectItem: selectItem,\n                        deleteSelected: deleteSelected\n                    }, void 0, false, {\n                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default().song_list),\n                children: SongItems.map((item, idx)=>!item.isHidden && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default().order),\n                                        children: item.order\n                                    }, void 0, false, {\n                                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    !item.isSelected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        appearance: \"primary\",\n                                        onClick: ()=>{\n                                            setSelectItem({\n                                                id: item._id,\n                                                name: item.title\n                                            });\n                                            item.isSelected = true;\n                                        },\n                                        children: \"+ select\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 46\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: ()=>setTrackID(idx),\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 23\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        appearance: \"alert\",\n                                        onClick: async ()=>deleteItem(item._id, item.track_link),\n                                        children: \"удалить\"\n                                    }, void 0, false, {\n                                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 30\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 23\n                            }, undefined)\n                        ]\n                    }, item._id, true, {\n                        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 37\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                lineNumber: 92,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_SongList_module_css__WEBPACK_IMPORTED_MODULE_8___default().player),\n                children: playlist && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Player_Player__WEBPACK_IMPORTED_MODULE_6__.Player, {\n                    playlist: playlist,\n                    current_track: trackID\n                }, void 0, false, {\n                    fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 31\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/app/(admin)/components/SongList/SongList.tsx\",\n        lineNumber: 85,\n        columnNumber: 13\n    }, undefined);\n};\n_s(SongList, \"l2G+Emr176ponRUnb+SW1WvLwaM=\");\n_c = SongList;\nvar _c;\n$RefreshReg$(_c, \"SongList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYWRtaW4pL2NvbXBvbmVudHMvU29uZ0xpc3QvU29uZ0xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWdDO0FBRWE7QUFHRDtBQUNEO0FBQ21DO0FBQ3RDO0FBQ2Q7QUFDMEI7QUFHRTtBQUsvQyxNQUFPYSxXQUFVOztJQUVwQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQTZCLEVBQUU7SUFDekUsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFtQjtJQUNyRCxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFxQjtJQUM3RCxNQUFNLENBQUNpQixTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNtQixZQUFZQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBd0I7SUFDcEUsTUFBTXFCLGVBQWUsT0FBT0M7UUFFMUIsSUFBSUEsUUFBTSxNQUFNO1lBQ2RSLFNBQVNTLENBQUFBLE9BQVFBLE9BQUs7dUJBQUlEO2lCQUFJO1FBQ2hDLE9BQUs7WUFDSFIsU0FBUztZQUNULE1BQU1VLE9BQU8sTUFBTXBCLHVEQUFZQTtZQUUvQlEsYUFBYVk7UUFDZjtJQUNGO0lBRUM7UUFBYSxJQUFJWCxPQUFPO1lBQ3JCLE1BQU1XLE9BQVMsTUFBTW5CLDZEQUFrQkEsQ0FBQ1E7WUFDeENELGFBQWFZO1FBQ2pCO0lBQUM7SUFDRHZCLGdEQUFTQSxDQUFFO1FBQ047WUFDRCxNQUFNdUIsT0FBTyxNQUFNcEIsdURBQVlBO1lBQy9Cb0IsS0FBS0MsT0FBTyxDQUFDQyxDQUFBQSxLQUFJQSxHQUFHQyxVQUFVLEdBQUc7WUFDakNmLGFBQWFZO1lBQ2IsTUFBTUksY0FBY0osS0FBS0ssR0FBRyxDQUFDSCxDQUFBQSxLQUFLO29CQUFDSSxLQUFJakMseUNBQUdBLENBQUNrQyxTQUFTLEdBQUNMLEdBQUdNLFVBQVU7b0JBQUVDLE1BQUtQLEdBQUdRLEtBQUs7Z0JBQUE7WUFFakZsQixZQUFZO21CQUFJWTthQUFZO1FBQzlCO1FBQ0MsT0FBTztRQUNMLG1EQUFtRDtRQUNyRDtJQUNGLEdBQUcsRUFBRTtJQUVOLGVBQWdCTyxXQUFXQyxFQUFTLEVBQUVDLFFBQWU7UUFDakQsTUFBTS9CLHFEQUFVQSxDQUFDK0I7UUFDakIsTUFBTWxDLHlEQUFjQSxDQUFDaUM7UUFDckIsTUFBTUUsZUFBZSxNQUFNbEMsdURBQVlBO1FBQ3ZDUSxhQUFhMEI7SUFDakI7SUFDRCxTQUFTQyxlQUFlSCxFQUFTO1FBQ2hDeEIsYUFBYUQsVUFBVWtCLEdBQUcsQ0FBQ1csQ0FBQUE7WUFDekIsSUFBSUEsS0FBS0MsR0FBRyxLQUFJTCxJQUFJO2dCQUNsQkksS0FBS2IsVUFBVSxHQUFHO1lBQ3BCO1lBQ0EsT0FBT2E7UUFDVDtJQUNEO0lBQ0gsU0FBU0UsV0FBV0YsSUFBVztRQUM3QixNQUFNRyxhQUFhO2VBQUloQztTQUFVO1FBQ2pDaUMsUUFBUUMsR0FBRyxDQUFDTCxLQUFLTSxNQUFNO1FBQ3ZCLElBQUlOLEtBQUtNLE1BQU0sRUFBRTtZQUNmLE1BQU1DLFlBQVlwQyxVQUFVcUMsTUFBTSxDQUFDdEIsQ0FBQUEsS0FBSUEsR0FBR1EsS0FBSyxDQUFDZSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1YsS0FBS1MsV0FBVztZQUN2RnJDLGFBQWFtQztRQUNmLE9BQU87WUFDTG5DLGFBQWErQjtRQUNmO0lBRUY7SUFFUSxxQkFDSSw4REFBQ1E7OzBCQUNELDhEQUFDQTtnQkFBSUMsV0FBV2xELHFFQUFjOztrQ0FDNUIsOERBQUNILCtDQUFNQTt3QkFBQ3VELFVBQVVqQzs7Ozs7O2tDQUNsQiw4REFBQ2tDO3dCQUFNQyxNQUFLO3dCQUFPSixXQUFXbEQsMEVBQW1CO3dCQUFFd0QsYUFBWTt3QkFBUUosVUFBVUssQ0FBQUEsSUFBR2pCLFdBQVdpQixFQUFFQyxNQUFNLENBQUMvQyxLQUFLOzs7Ozs7b0JBQzVHTSw0QkFBZSw4REFBQ1YsOERBQVVBO3dCQUFDVSxZQUFZQTt3QkFBWW9CLGdCQUFnQkE7Ozs7Ozs7Ozs7OzswQkFHakUsOERBQUNzQjtnQkFBR1QsV0FBV2xELHVFQUFnQjswQkFDL0JTLFVBQVVrQixHQUFHLENBQUMsQ0FBQ2tDLE1BQUtDLE1BQ3BCLENBQUNELEtBQUtFLFFBQVEsa0JBQUssOERBQUNDOzswQ0FDZiw4REFBQ0M7O2tEQUNELDhEQUFDQTt3Q0FBS2YsV0FBV2xELG1FQUFZO2tEQUFHNkQsS0FBS0ssS0FBSzs7Ozs7O29DQUN2QyxDQUFDTCxLQUFLcEMsVUFBVSxrQkFBSSw4REFBQzdCLCtDQUFNQTt3Q0FBRXVFLFlBQVk7d0NBQVdDLFNBQVM7NENBQ01sRCxjQUFjO2dEQUFDZ0IsSUFBRzJCLEtBQUt0QixHQUFHO2dEQUFFUixNQUFLOEIsS0FBSzdCLEtBQUs7NENBQUE7NENBQzNDNkIsS0FBS3BDLFVBQVUsR0FBRzt3Q0FBSTtrREFBRzs7Ozs7O2tEQUU3Riw4REFBQ3dDO3dDQUFLRyxTQUFTLElBQUlwRCxXQUFXOEM7a0RBQU9ELEtBQUs3QixLQUFLOzs7Ozs7Ozs7Ozs7MENBRWpELDhEQUFDaUM7O29DQUFLO2tEQUFDLDhEQUFDckUsK0NBQU1BO3dDQUFDdUUsWUFBVzt3Q0FBUUMsU0FBUyxVQUFVbkMsV0FBVzRCLEtBQUt0QixHQUFHLEVBQUVzQixLQUFLL0IsVUFBVTtrREFBRzs7Ozs7Ozs7Ozs7Ozt1QkFUcEUrQixLQUFLdEIsR0FBRzs7Ozs7Ozs7OzswQkFhMUMsOERBQUNVO2dCQUFJQyxXQUFXbEQsb0VBQWE7MEJBQ3hCYSwwQkFBYSw4REFBQ1AsNkRBQU1BO29CQUFDTyxVQUFVQTtvQkFBVXlELGVBQWV2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdkUsRUFBQztHQTlGV1A7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhhZG1pbikvY29tcG9uZW50cy9Tb25nTGlzdC9Tb25nTGlzdC50c3g/MDhkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIkAvYXBpL2FwaVwiO1xuXG5pbXBvcnQgeyBCdXR0b24sIEZpbHRlciB9IGZyb20gXCJAL2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgSVNvbmdDYXRlZ29yaWVzUmVzcG9uc2UgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL3NvbmcuaW50ZXJmYWNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1NvbmdMaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGRlbGV0ZVNvbmdJdGVtLCBnZXRTb25nSXRlbXMsIGdldFNvbmdJdGVtc0ZpbHRlciB9IGZyb20gXCJAL2FwaS9zb25nXCI7XG5pbXBvcnQgeyBkZWxldGVGaWxlIH0gZnJvbSBcIkAvYXBpL2ZpbGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCJAL2NvbXBvbmVudHMvUGxheWVyL1BsYXllclwiO1xuaW1wb3J0IHsgSVBsYXlsaXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLnByb3BzXCI7XG5pbXBvcnQgeyBJU2VsZWN0SXRlbXMgfSBmcm9tIFwiLi4vU2VsZWN0TGlzdC9TZWxlY3RMaXN0LnByb3BzXCI7XG5pbXBvcnQgeyBTZWxlY3RMaXN0IH0gZnJvbSBcIi4uL1NlbGVjdExpc3QvU2VsZWN0TGlzdFwiO1xuXG5cblxuXG5leHBvcnQgY29uc3QgIFNvbmdMaXN0ID0oKSA9PiB7XG5cbiAgICBjb25zdCBbU29uZ0l0ZW1zLCBzZXRTb25nSXRlbXNdID0gdXNlU3RhdGU8SVNvbmdDYXRlZ29yaWVzUmVzcG9uc2VbXSA+KFtdKVxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nW10gfCBudWxsID4obnVsbClcbiAgICBjb25zdCBbcGxheWxpc3QsIHNldFBsYXlsaXN0XSA9IHVzZVN0YXRlPElQbGF5bGlzdFtdIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBbdHJhY2tJRCwgc2V0VHJhY2tJRF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtzZWxlY3RJdGVtLCBzZXRTZWxlY3RJdGVtXSA9IHVzZVN0YXRlPElTZWxlY3RJdGVtcyAgfCBudWxsID4obnVsbClcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAodmFsOnN0cmluZ1tdIHwgbnVsbCkgPT4ge1xuICAgIFxuICAgICAgaWYgKHZhbCE9PW51bGwpIHtcbiAgICAgICAgc2V0VmFsdWUocHJldiA9PiBwcmV2PVsuLi52YWxdKVxuICAgICAgfWVsc2V7XG4gICAgICAgIHNldFZhbHVlKG51bGwpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTb25nSXRlbXMoKVxuICAgICAgIFxuICAgICAgICBzZXRTb25nSXRlbXMoZGF0YSlcbiAgICAgIH0gICAgXG4gICAgfVxuXG4gICAgKGFzeW5jICgpID0+IHtpZiAodmFsdWUpIHsgICAgICAgIFxuICAgICAgICBjb25zdCBkYXRhID0gICBhd2FpdCBnZXRTb25nSXRlbXNGaWx0ZXIodmFsdWUpXG4gICAgICAgIHNldFNvbmdJdGVtcyhkYXRhKVxuICAgIH19KSgpO1xuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U29uZ0l0ZW1zKClcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsPT5lbC5pc1NlbGVjdGVkID0gZmFsc2UpIFxuICAgICAgICBzZXRTb25nSXRlbXMoZGF0YSlcbiAgICAgICAgY29uc3QgcGxheUxpc3RBcnIgPSBkYXRhLm1hcChlbD0+KHtzcmM6QVBJLnVwbG9hZFNyYytlbC50cmFja19saW5rLCBuYW1lOmVsLnRpdGxlfSkpIFxuICAgICBcbiAgICAgICAgc2V0UGxheWxpc3QoWy4uLnBsYXlMaXN0QXJyXSlcbiAgICAgIH0pKCk7XG4gICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgIC8vIHRoaXMgbm93IGdldHMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xuICAgICAgIH07IFxuICAgICB9LCBbXSlcbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiAgZGVsZXRlSXRlbShpZDpzdHJpbmcsIGZpbGVOYW1lOnN0cmluZyl7XG4gICAgICAgIGF3YWl0IGRlbGV0ZUZpbGUoZmlsZU5hbWUpO1xuICAgICAgICBhd2FpdCBkZWxldGVTb25nSXRlbShpZCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zUmVmcmVzaCA9IGF3YWl0IGdldFNvbmdJdGVtcygpXG4gICAgICAgIHNldFNvbmdJdGVtcyhpdGVtc1JlZnJlc2gpXG4gICAgfVxuICAgZnVuY3Rpb24gZGVsZXRlU2VsZWN0ZWQoaWQ6c3RyaW5nKSB7XG4gICAgc2V0U29uZ0l0ZW1zKFNvbmdJdGVtcy5tYXAoc29uZz0+e1xuICAgICAgaWYgKHNvbmcuX2lkID09PWlkKSB7XG4gICAgICAgIHNvbmcuaXNTZWxlY3RlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gc29uZ1xuICAgIH0pKVxuICAgfSAgXG5mdW5jdGlvbiBzZWFyY2hTb25nKHNvbmc6c3RyaW5nKSB7XG4gIGNvbnN0IGluaXRpYWxTZXQgPSBbLi4uU29uZ0l0ZW1zXVxuICBjb25zb2xlLmxvZyhzb25nLmxlbmd0aClcbiAgaWYgKHNvbmcubGVuZ3RoKSB7XG4gICAgY29uc3Qgc2VhcmNoQXJyID0gU29uZ0l0ZW1zLmZpbHRlcihlbD0+ZWwudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzb25nLnRvTG93ZXJDYXNlKCkpKVxuICAgIHNldFNvbmdJdGVtcyhzZWFyY2hBcnIpXG4gIH0gZWxzZSB7XG4gICAgc2V0U29uZ0l0ZW1zKGluaXRpYWxTZXQpXG4gIH1cblxufVxuIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj4gICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BfYmFyfT5cbiAgICAgICAgICAgICAgPEZpbHRlciBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9pbnB1dH0gcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6XCIgb25DaGFuZ2U9e2U9PnNlYXJjaFNvbmcoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgIHtzZWxlY3RJdGVtICYmICg8U2VsZWN0TGlzdCBzZWxlY3RJdGVtPXtzZWxlY3RJdGVtfSBkZWxldGVTZWxlY3RlZD17ZGVsZXRlU2VsZWN0ZWR9Lz4pfSBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zb25nX2xpc3R9PlxuICAgICAgICAgICAgICAgIHtTb25nSXRlbXMubWFwKChpdGVtLGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAhaXRlbS5pc0hpZGRlbiAmJiAoPGxpIGtleSA9e2l0ZW0uX2lkfSA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMub3JkZXJ9PntpdGVtLm9yZGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXRlbS5pc1NlbGVjdGVkICYmIDxCdXR0b24gIGFwcGVhcmFuY2U9e1wicHJpbWFyeVwifSBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RJdGVtKHtpZDppdGVtLl9pZCwgbmFtZTppdGVtLnRpdGxlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc1NlbGVjdGVkID0gdHJ1ZX19PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHNlbGVjdDwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpPT5zZXRUcmFja0lEKGlkeCl9PntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDxCdXR0b24gYXBwZWFyYW5jZT1cImFsZXJ0XCIgb25DbGljaz17YXN5bmMgKCk9PmRlbGV0ZUl0ZW0oaXRlbS5faWQsIGl0ZW0udHJhY2tfbGluayl9PtGD0LTQsNC70LjRgtGMPC9CdXR0b24+PC9zcGFuPjwvbGk+KVxuICAgICAgICAgICAgICAgICkpfSAgICAgIFxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllcn0+XG4gICAgICAgICAgICAgICAge3BsYXlsaXN0ICYmICg8UGxheWVyIHBsYXlsaXN0PXtwbGF5bGlzdH0gY3VycmVudF90cmFjaz17dHJhY2tJRH0vPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIClcbiBcblxuICB9Il0sIm5hbWVzIjpbIkFQSSIsIkJ1dHRvbiIsIkZpbHRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiZGVsZXRlU29uZ0l0ZW0iLCJnZXRTb25nSXRlbXMiLCJnZXRTb25nSXRlbXNGaWx0ZXIiLCJkZWxldGVGaWxlIiwiUmVhY3QiLCJQbGF5ZXIiLCJTZWxlY3RMaXN0IiwiU29uZ0xpc3QiLCJTb25nSXRlbXMiLCJzZXRTb25nSXRlbXMiLCJ2YWx1ZSIsInNldFZhbHVlIiwicGxheWxpc3QiLCJzZXRQbGF5bGlzdCIsInRyYWNrSUQiLCJzZXRUcmFja0lEIiwic2VsZWN0SXRlbSIsInNldFNlbGVjdEl0ZW0iLCJoYW5kbGVDaGFuZ2UiLCJ2YWwiLCJwcmV2IiwiZGF0YSIsImZvckVhY2giLCJlbCIsImlzU2VsZWN0ZWQiLCJwbGF5TGlzdEFyciIsIm1hcCIsInNyYyIsInVwbG9hZFNyYyIsInRyYWNrX2xpbmsiLCJuYW1lIiwidGl0bGUiLCJkZWxldGVJdGVtIiwiaWQiLCJmaWxlTmFtZSIsIml0ZW1zUmVmcmVzaCIsImRlbGV0ZVNlbGVjdGVkIiwic29uZyIsIl9pZCIsInNlYXJjaFNvbmciLCJpbml0aWFsU2V0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInNlYXJjaEFyciIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJ0b3BfYmFyIiwib25DaGFuZ2UiLCJpbnB1dCIsInR5cGUiLCJzZWFyY2hfaW5wdXQiLCJwbGFjZWhvbGRlciIsImUiLCJ0YXJnZXQiLCJ1bCIsInNvbmdfbGlzdCIsIml0ZW0iLCJpZHgiLCJpc0hpZGRlbiIsImxpIiwic3BhbiIsIm9yZGVyIiwiYXBwZWFyYW5jZSIsIm9uQ2xpY2siLCJwbGF5ZXIiLCJjdXJyZW50X3RyYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(admin)/components/SongList/SongList.tsx\n"));

/***/ })

});