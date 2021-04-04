webpackHotUpdate("main_window",{

/***/ "./src/components/runner/Runner.tsx":
/*!******************************************!*\
  !*** ./src/components/runner/Runner.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _main_ipcConnector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../main/ipcConnector */ "./src/main/ipcConnector.ts");
/* harmony import */ var _utils_Moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/Moment */ "./src/utils/Moment.ts");
/* harmony import */ var _ComponentContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ComponentContext */ "./src/components/ComponentContext.ts");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();



var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var Runner = function Runner() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_ComponentContext__WEBPACK_IMPORTED_MODULE_8__["Context"]);
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var captchaRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      captcha = _useState2[0],
      setCaptcha = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      imageURL = _useState4[0],
      setImageURL = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      captchaCookie = _useState6[0],
      setCaptchaCookie = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      clients = _useState8[0],
      setClients = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      counter = _useState10[0],
      setCounter = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),
      processing = _useState12[0],
      setProcessing = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    void function () {
      var _fetchData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var _context$user;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_main_ipcConnector__WEBPACK_IMPORTED_MODULE_6__["sendRequestByIPC"])("find-clients", {
                  user_id: (_context$user = context.user) === null || _context$user === void 0 ? void 0 : _context$user._id
                }).then(function (clients) {
                  setClients(clients);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }()();
    generateCaptcha();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _captchaRef$current;

    (_captchaRef$current = captchaRef.current) === null || _captchaRef$current === void 0 ? void 0 : _captchaRef$current.focus();
  });

  var generateCaptcha = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_main_ipcConnector__WEBPACK_IMPORTED_MODULE_6__["sendRequestByIPC"])("captcha").then(function (response) {
                var base = "data:image/jpeg;base64,".concat(new Buffer(response.data, 'binary').toString('base64'));
                setImageURL(base);
                setCaptchaCookie(response.cookie);
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function generateCaptcha() {
      return _ref.apply(this, arguments);
    };
  }();

  var doLogin = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_main_ipcConnector__WEBPACK_IMPORTED_MODULE_6__["sendRequestByIPC"])("login", {
                captcha: captcha,
                cookies: captchaCookie,
                client: clients[counter]
              }).then(function (response) {
                if (response.data.includes("Nome:")) {
                  var _doc$getElementById, _doc$getElementById$q, _doc$getElementById2, _doc$getElementById2$;

                  var dom = response.data;
                  var doc = new DOMParser().parseFromString(dom, "text/html");
                  var cnhStatus = doc.querySelectorAll("#extrato_condutor_situacaocnh");
                  var cnhData = {
                    user_id: context.user._id,
                    client_id: clients[counter]._id,
                    cnhSituation: cnhStatus[0].children[1].innerHTML,
                    cnhOversight: cnhStatus[1].children[1].children[0].innerHTML,
                    updatedAt: Object(_utils_Moment__WEBPACK_IMPORTED_MODULE_7__["nowLocale"])().format("L [às] LT"),
                    infractions: []
                  };
                  var qtyInfractions = doc.querySelectorAll('div[id*="modal-suspensoes-infracoes_"]').length;
                  var infractionsDOMTitles = Array.from(((_doc$getElementById = doc.getElementById("content-suspensoes")) === null || _doc$getElementById === void 0 ? void 0 : (_doc$getElementById$q = _doc$getElementById.querySelector('#table-expandable')) === null || _doc$getElementById$q === void 0 ? void 0 : _doc$getElementById$q.children[0].querySelectorAll("tr:not(.expanded-row)")) || []);
                  infractionsDOMTitles.shift();
                  var infractionsDOMInfos = Array.from(((_doc$getElementById2 = doc.getElementById("content-suspensoes")) === null || _doc$getElementById2 === void 0 ? void 0 : (_doc$getElementById2$ = _doc$getElementById2.querySelector('#table-expandable')) === null || _doc$getElementById2$ === void 0 ? void 0 : _doc$getElementById2$.children[0].querySelectorAll(".expanded-row")) || []);

                  if (infractionsDOMTitles) {
                    for (var i = 0; i < qtyInfractions; i++) {
                      var _infractionsDOMTitles;

                      var infraction_id = ((_infractionsDOMTitles = infractionsDOMTitles[i].getElementsByClassName("hue")[0].textContent) === null || _infractionsDOMTitles === void 0 ? void 0 : _infractionsDOMTitles.trim()) || "";
                      var infraction_situation = infractionsDOMTitles[i].getElementsByClassName("text-right")[0].textContent || "";
                      var create_at = infractionsDOMInfos[i].querySelectorAll("fieldset")[0].children[1].children[1].textContent || "";
                      var infraction_deadline = infractionsDOMInfos[i].querySelectorAll("fieldset")[0].children[7].children[1].textContent || "";
                      cnhData.infractions.push({
                        infraction_id: infraction_id,
                        infraction_situation: infraction_situation,
                        create_at: create_at,
                        infraction_deadline: infraction_deadline
                      });
                    }
                  }

                  return cnhData;
                } else {
                  return null;
                }
              });

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function doLogin() {
      return _ref2.apply(this, arguments);
    };
  }();

  var saveCnhInfos = /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(cnhInfos) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_main_ipcConnector__WEBPACK_IMPORTED_MODULE_6__["sendRequestByIPC"])("save-cnh-infos", cnhInfos).then(function () {
                handleCounterForward();
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function saveCnhInfos(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleCounterForward = function handleCounterForward() {
    if (counter == clients.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  var handleCounterBackward = function handleCounterBackward() {
    console.log(counter);

    if (counter == 0) {
      setCounter(clients.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  var handleExecute = /*#__PURE__*/function () {
    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
      var cnhData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setProcessing(true);
              _context5.next = 3;
              return doLogin();

            case 3:
              cnhData = _context5.sent;

              if (cnhData) {
                _context5.next = 10;
                break;
              }

              setCaptcha("");
              _context5.next = 8;
              return generateCaptcha();

            case 8:
              _context5.next = 14;
              break;

            case 10:
              saveCnhInfos(cnhData);
              setCaptcha("");
              _context5.next = 14;
              return generateCaptcha();

            case 14:
              setProcessing(false);

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleExecute() {
      return _ref4.apply(this, arguments);
    };
  }();

  var buttonStatus = function buttonStatus() {
    switch (counter) {
      case 0:
        return "Iniciar";

      case clients.length - 1:
        return "Encerrar";

      default:
        return "Próximo";
    }
  };

  var keyUpHandler = function keyUpHandler(key) {
    if (key.keyCode == 13) {
      handleExecute();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    outline: true,
    size: "sm",
    style: {
      margin: "5px"
    },
    onClick: function onClick() {
      history.push("/menu");
    }
  }, "Voltar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    style: {
      padding: "50px",
      width: "100%",
      height: "100%",
      textAlign: "center"
    },
    key: "captcha"
  }, clients.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Progresso: ".concat(counter + 1, "/").concat(clients.length)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Cliente: ".concat(clients[counter].name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ButtonGroup"], {
    vertical: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    style: {
      minWidth: "128px"
    },
    object: true,
    src: imageURL
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    style: {
      height: "10px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "captcha",
    id: "captcha",
    onKeyUp: keyUpHandler,
    autoFocus: true,
    innerRef: captchaRef,
    disabled: processing,
    value: captcha,
    onChange: function onChange(e) {
      setCaptcha(e.target.value);
    },
    placeholder: "Insira o captcha"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    style: {
      height: "10px"
    }
  })))), processing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, "Processando ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    size: "sm",
    color: "primary"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "sm",
    type: "submit",
    color: "primary",
    onKeyUp: keyUpHandler,
    disabled: processing,
    onClick: handleExecute
  }, buttonStatus()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "sm",
    color: "danger",
    disabled: processing,
    style: {
      marginRight: "20px"
    },
    onClick: handleCounterBackward
  }, "<- Retornar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "sm",
    color: "danger",
    disabled: processing,
    onClick: handleCounterForward
  }, "Avançar ->")))), clients.length == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Nenhum cliente cadastrado!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Nenhum cliente cadastrado!")))));
};

__signature__(Runner, "useContext{context}\nuseHistory{history}\nuseRef{captchaRef}\nuseState{[captcha, setCaptcha](\"\")}\nuseState{[imageURL, setImageURL](\"\")}\nuseState{[captchaCookie, setCaptchaCookie](\"\")}\nuseState{[clients, setClients]([])}\nuseState{[counter, setCounter](0)}\nuseState{[processing, setProcessing](false)}\nuseEffect{}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"]];
});

var _default = Runner;
/* harmony default export */ __webpack_exports__["default"] = (_default);

function useFocus() {
  throw new Error('Function not implemented.');
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Runner, "Runner", "C:\\Users\\M. Torres\\Desktop\\Electron-Consulta-Detran\\src\\components\\runner\\Runner.tsx");
  reactHotLoader.register(useFocus, "useFocus", "C:\\Users\\M. Torres\\Desktop\\Electron-Consulta-Detran\\src\\components\\runner\\Runner.tsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\M. Torres\\Desktop\\Electron-Consulta-Detran\\src\\components\\runner\\Runner.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ydW5uZXIvUnVubmVyLnRzeCJdLCJuYW1lcyI6WyJSdW5uZXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImNhcHRjaGFSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImNhcHRjaGEiLCJzZXRDYXB0Y2hhIiwiaW1hZ2VVUkwiLCJzZXRJbWFnZVVSTCIsImNhcHRjaGFDb29raWUiLCJzZXRDYXB0Y2hhQ29va2llIiwiY2xpZW50cyIsInNldENsaWVudHMiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwidXNlRWZmZWN0Iiwic2VuZFJlcXVlc3RCeUlQQyIsInVzZXJfaWQiLCJ1c2VyIiwiX2lkIiwidGhlbiIsImZldGNoRGF0YSIsImdlbmVyYXRlQ2FwdGNoYSIsImN1cnJlbnQiLCJmb2N1cyIsInJlc3BvbnNlIiwiYmFzZSIsIkJ1ZmZlciIsImRhdGEiLCJ0b1N0cmluZyIsImNvb2tpZSIsImRvTG9naW4iLCJjb29raWVzIiwiY2xpZW50IiwiaW5jbHVkZXMiLCJkb20iLCJkb2MiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJjbmhTdGF0dXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY25oRGF0YSIsImNsaWVudF9pZCIsImNuaFNpdHVhdGlvbiIsImNoaWxkcmVuIiwiaW5uZXJIVE1MIiwiY25oT3ZlcnNpZ2h0IiwidXBkYXRlZEF0Iiwibm93TG9jYWxlIiwiZm9ybWF0IiwiaW5mcmFjdGlvbnMiLCJxdHlJbmZyYWN0aW9ucyIsImxlbmd0aCIsImluZnJhY3Rpb25zRE9NVGl0bGVzIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yIiwic2hpZnQiLCJpbmZyYWN0aW9uc0RPTUluZm9zIiwiaSIsImluZnJhY3Rpb25faWQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJ0cmltIiwiaW5mcmFjdGlvbl9zaXR1YXRpb24iLCJjcmVhdGVfYXQiLCJpbmZyYWN0aW9uX2RlYWRsaW5lIiwicHVzaCIsInNhdmVDbmhJbmZvcyIsImNuaEluZm9zIiwiaGFuZGxlQ291bnRlckZvcndhcmQiLCJoYW5kbGVDb3VudGVyQmFja3dhcmQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRXhlY3V0ZSIsImJ1dHRvblN0YXR1cyIsImtleVVwSGFuZGxlciIsImtleSIsImtleUNvZGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJuYW1lIiwibWluV2lkdGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5SaWdodCIsInVzZUZvY3VzIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFFakIsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyx5REFBRCxDQUExQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsbUVBQVUsRUFBMUI7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLENBQW1CLElBQW5CLENBQXpCOztBQUppQixrQkFPYUMsc0RBQVEsQ0FBQyxFQUFELENBUHJCO0FBQUE7QUFBQSxNQU9WQyxPQVBVO0FBQUEsTUFPREMsVUFQQzs7QUFBQSxtQkFRZUYsc0RBQVEsQ0FBQyxFQUFELENBUnZCO0FBQUE7QUFBQSxNQVFWRyxRQVJVO0FBQUEsTUFRQUMsV0FSQTs7QUFBQSxtQkFTeUJKLHNEQUFRLENBQUMsRUFBRCxDQVRqQztBQUFBO0FBQUEsTUFTVkssYUFUVTtBQUFBLE1BU0tDLGdCQVRMOztBQUFBLG1CQVVhTixzREFBUSxDQUFXLEVBQVgsQ0FWckI7QUFBQTtBQUFBLE1BVVZPLE9BVlU7QUFBQSxNQVVEQyxVQVZD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QUFFaEUsVUFBakY7QUFBNkYsV0FBTyxFQUFFOEQ7QUFBdEcsS0FBdUhDLFlBQVksRUFBbkksQ0FESixDQURKLENBdENtQixlQTJDbkIsc0VBM0NtQixlQTRDbkIsMkRBQUMsOENBQUQscUJBQ0ksMkRBQUMsOENBQUQscUJBQ0ksMkRBQUMsaURBQUQ7QUFBUSxRQUFJLEVBQUMsSUFBYjtBQUFrQixTQUFLLEVBQUMsUUFBeEI7QUFBaUMsWUFBUSxFQUFFL0QsVUFBM0M7QUFBdUQsU0FBSyxFQUFFO0FBQUU2RSxpQkFBVyxFQUFDO0FBQWQsS0FBOUQ7QUFBcUYsV0FBTyxFQUFFbEI7QUFBOUYsS0FBdUgsYUFBdkgsQ0FESixlQUVJLDJEQUFDLGlEQUFEO0FBQVEsUUFBSSxFQUFDLElBQWI7QUFBa0IsU0FBSyxFQUFDLFFBQXhCO0FBQWlDLFlBQVEsRUFBRTNELFVBQTNDO0FBQXVELFdBQU8sRUFBRTBEO0FBQWhFLEtBQXdGLFlBQXhGLENBRkosQ0FESixDQTVDbUIsQ0FEM0IsRUFxREs5RCxPQUFPLENBQUMyQyxNQUFSLElBQWtCLENBQWxCLGlCQUF1QiwyREFBQyw4Q0FBRCxxQkFDcEIsMkRBQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBRWdDLGVBQVMsRUFBRTtBQUFiO0FBQVosa0JBQ0ksMkRBQUMsZ0RBQUQscUNBREosZUFFSSwyREFBQyxnREFBRCxxQ0FGSixDQURvQixDQXJENUIsQ0FISixDQURKO0FBb0VILENBdk1EOztjQUFNMUYsTTtVQUdjSywyRDs7O2VBc01MTCxNO0FBQUE7O0FBRWYsU0FBU2lHLFFBQVQsR0FBZ0M7QUFDNUIsUUFBTSxJQUFJQyxLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNIOzs7Ozs7Ozs7OzswQkE3TUtsRyxNOzBCQTJNR2lHLFEiLCJmaWxlIjoibWFpbl93aW5kb3cuYjRmOWUwZjA0Y2JmMzM4NmNhNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCwgQ29sLCBDb250YWluZXIsIElucHV0LCBMYWJlbCwgTWVkaWEsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IHNlbmRSZXF1ZXN0QnlJUEMgfSBmcm9tICcuLi8uLi9tYWluL2lwY0Nvbm5lY3Rvcic7XHJcbmltcG9ydCB7IENsaWVudCwgRGV0cmFuSW5mb3MsIEluZnJhY3Rpb24gfSBmcm9tICcuLi8uLi90eXBlcy9UeXBlcyc7XHJcbmltcG9ydCB7IG5vd0xvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxzL01vbWVudCc7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db21wb25lbnRDb250ZXh0JztcclxuXHJcblxyXG5jb25zdCBSdW5uZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcbiAgICBjb25zdCBjYXB0Y2hhUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbY2FwdGNoYSwgc2V0Q2FwdGNoYV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpbWFnZVVSTCwgc2V0SW1hZ2VVUkxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2FwdGNoYUNvb2tpZSwgc2V0Q2FwdGNoYUNvb2tpZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlPENsaWVudFtdPihbXSk7XHJcbiAgICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtwcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHZvaWQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgICAgICBhd2FpdCBzZW5kUmVxdWVzdEJ5SVBDKFwiZmluZC1jbGllbnRzXCIsIHsgdXNlcl9pZDogY29udGV4dC51c2VyPy5faWQgfSkudGhlbigoY2xpZW50czogQ2xpZW50W10pID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENsaWVudHMoY2xpZW50cylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KCk7XHJcbiAgICAgICAgZ2VuZXJhdGVDYXB0Y2hhKClcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjYXB0Y2hhUmVmLmN1cnJlbnQ/LmZvY3VzKClcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZ2VuZXJhdGVDYXB0Y2hhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNlbmRSZXF1ZXN0QnlJUEMoXCJjYXB0Y2hhXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlID0gYGRhdGE6aW1hZ2UvanBlZztiYXNlNjQsJHtuZXcgQnVmZmVyKHJlc3BvbnNlLmRhdGEsICdiaW5hcnknKS50b1N0cmluZygnYmFzZTY0Jyl9YFxyXG4gICAgICAgICAgICBzZXRJbWFnZVVSTChiYXNlKVxyXG4gICAgICAgICAgICBzZXRDYXB0Y2hhQ29va2llKHJlc3BvbnNlLmNvb2tpZSlcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkb0xvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBzZW5kUmVxdWVzdEJ5SVBDKFwibG9naW5cIiwgeyBjYXB0Y2hhOiBjYXB0Y2hhLCBjb29raWVzOiBjYXB0Y2hhQ29va2llLCBjbGllbnQ6IGNsaWVudHNbY291bnRlcl0gfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmluY2x1ZGVzKFwiTm9tZTpcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbTogc3RyaW5nID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkb20sIFwidGV4dC9odG1sXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY25oU3RhdHVzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZXh0cmF0b19jb25kdXRvcl9zaXR1YWNhb2NuaFwiKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY25oRGF0YTogRGV0cmFuSW5mb3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogY29udGV4dC51c2VyIS5faWQhLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogY2xpZW50c1tjb3VudGVyXS5faWQhLFxyXG4gICAgICAgICAgICAgICAgICAgIGNuaFNpdHVhdGlvbjogY25oU3RhdHVzWzBdLmNoaWxkcmVuWzFdLmlubmVySFRNTCxcclxuICAgICAgICAgICAgICAgICAgICBjbmhPdmVyc2lnaHQ6IGNuaFN0YXR1c1sxXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5pbm5lckhUTUwsXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBub3dMb2NhbGUoKS5mb3JtYXQoXCJMIFvDoHNdIExUXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZnJhY3Rpb25zOiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHF0eUluZnJhY3Rpb25zID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltpZCo9XCJtb2RhbC1zdXNwZW5zb2VzLWluZnJhY29lc19cIl0nKS5sZW5ndGhcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZyYWN0aW9uc0RPTVRpdGxlcyA9IEFycmF5LmZyb20oZG9jLmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1zdXNwZW5zb2VzXCIpPy5xdWVyeVNlbGVjdG9yKCcjdGFibGUtZXhwYW5kYWJsZScpPy5jaGlsZHJlblswXS5xdWVyeVNlbGVjdG9yQWxsKFwidHI6bm90KC5leHBhbmRlZC1yb3cpXCIpIHx8IFtdKVxyXG4gICAgICAgICAgICAgICAgaW5mcmFjdGlvbnNET01UaXRsZXMuc2hpZnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZnJhY3Rpb25zRE9NSW5mb3MgPSBBcnJheS5mcm9tKGRvYy5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtc3VzcGVuc29lc1wiKT8ucXVlcnlTZWxlY3RvcignI3RhYmxlLWV4cGFuZGFibGUnKT8uY2hpbGRyZW5bMF0ucXVlcnlTZWxlY3RvckFsbChcIi5leHBhbmRlZC1yb3dcIikgfHwgW10pXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZnJhY3Rpb25zRE9NVGl0bGVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXR5SW5mcmFjdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZyYWN0aW9uX2lkID0gaW5mcmFjdGlvbnNET01UaXRsZXNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImh1ZVwiKVswXS50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZnJhY3Rpb25fc2l0dWF0aW9uID0gaW5mcmFjdGlvbnNET01UaXRsZXNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRleHQtcmlnaHRcIilbMF0udGV4dENvbnRlbnQgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlX2F0ID0gaW5mcmFjdGlvbnNET01JbmZvc1tpXS5xdWVyeVNlbGVjdG9yQWxsKFwiZmllbGRzZXRcIilbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZyYWN0aW9uX2RlYWRsaW5lID0gaW5mcmFjdGlvbnNET01JbmZvc1tpXS5xdWVyeVNlbGVjdG9yQWxsKFwiZmllbGRzZXRcIilbMF0uY2hpbGRyZW5bN10uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbmhEYXRhLmluZnJhY3Rpb25zLnB1c2goeyBpbmZyYWN0aW9uX2lkOiBpbmZyYWN0aW9uX2lkLCBpbmZyYWN0aW9uX3NpdHVhdGlvbjogaW5mcmFjdGlvbl9zaXR1YXRpb24sIGNyZWF0ZV9hdDogY3JlYXRlX2F0LCBpbmZyYWN0aW9uX2RlYWRsaW5lOiBpbmZyYWN0aW9uX2RlYWRsaW5lIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNuaERhdGFcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzYXZlQ25oSW5mb3MgPSBhc3luYyAoY25oSW5mb3M6IERldHJhbkluZm9zKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2VuZFJlcXVlc3RCeUlQQyhcInNhdmUtY25oLWluZm9zXCIsIGNuaEluZm9zKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlQ291bnRlckZvcndhcmQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvdW50ZXJGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb3VudGVyID09IGNsaWVudHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBzZXRDb3VudGVyKDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q291bnRlcihjb3VudGVyICsgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvdW50ZXJCYWNrd2FyZCA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb3VudGVyKVxyXG4gICAgICAgIGlmIChjb3VudGVyID09IDApIHtcclxuICAgICAgICAgICAgc2V0Q291bnRlcihjbGllbnRzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q291bnRlcihjb3VudGVyIC0gMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVFeGVjdXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldFByb2Nlc3NpbmcodHJ1ZSlcclxuICAgICAgICBjb25zdCBjbmhEYXRhOiBEZXRyYW5JbmZvcyB8IG51bGwgPSBhd2FpdCBkb0xvZ2luKClcclxuICAgICAgICBpZiAoIWNuaERhdGEpIHtcclxuICAgICAgICAgICAgc2V0Q2FwdGNoYShcIlwiKVxyXG4gICAgICAgICAgICBhd2FpdCBnZW5lcmF0ZUNhcHRjaGEoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2F2ZUNuaEluZm9zKGNuaERhdGEpXHJcbiAgICAgICAgICAgIHNldENhcHRjaGEoXCJcIilcclxuICAgICAgICAgICAgYXdhaXQgZ2VuZXJhdGVDYXB0Y2hhKClcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0UHJvY2Vzc2luZyhmYWxzZSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYnV0dG9uU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoY291bnRlcikge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbmljaWFyXCJcclxuICAgICAgICAgICAgY2FzZSBjbGllbnRzLmxlbmd0aCAtIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJFbmNlcnJhclwiXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcsOzeGltb1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSAoa2V5OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoa2V5LmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgaGFuZGxlRXhlY3V0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gb3V0bGluZSBzaXplPVwic21cIiBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIgfX0gb25DbGljaz17KCkgPT4geyBoaXN0b3J5LnB1c2goXCIvbWVudVwiKSB9fT5Wb2x0YXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nOiBcIjUwcHhcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0ga2V5PVwiY2FwdGNoYVwiID5cclxuICAgICAgICAgICAgICAgIHtjbGllbnRzLmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPntgUHJvZ3Jlc3NvOiAke2NvdW50ZXIgKyAxfS8ke2NsaWVudHMubGVuZ3RofWB9PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD57YENsaWVudGU6ICR7Y2xpZW50c1tjb3VudGVyXS5uYW1lfWB9PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCB2ZXJ0aWNhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHN0eWxlPXt7IG1pbldpZHRoOiBcIjEyOHB4XCIgfX0gb2JqZWN0IHNyYz17aW1hZ2VVUkx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwcHhcIiB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9XCJjYXB0Y2hhXCIgaWQ9XCJjYXB0Y2hhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17a2V5VXBIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJSZWY9e2NhcHRjaGFSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9jZXNzaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FwdGNoYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldENhcHRjaGEoZS50YXJnZXQudmFsdWUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIG8gY2FwdGNoYVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGhlaWdodDogXCIxMHB4XCIgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3NpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2Vzc2FuZG8gPFNwaW5uZXIgc2l6ZT1cInNtXCIgY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz59XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gZGlzYWJsZWQ9e3Byb2Nlc3Npbmd9IG9uQ2xpY2s9e2hhbmRsZUV4ZWN1dGV9ID57YnV0dG9uU3RhdHVzKCl9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIGNvbG9yPVwiZGFuZ2VyXCIgZGlzYWJsZWQ9e3Byb2Nlc3Npbmd9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OlwiMjBweFwifX0gb25DbGljaz17aGFuZGxlQ291bnRlckJhY2t3YXJkfSA+e1wiPC0gUmV0b3JuYXJcIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgY29sb3I9XCJkYW5nZXJcIiBkaXNhYmxlZD17cHJvY2Vzc2luZ30gb25DbGljaz17aGFuZGxlQ291bnRlckZvcndhcmR9ID57XCJBdmFuw6dhciAtPlwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge2NsaWVudHMubGVuZ3RoID09IDAgJiYgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPk5lbmh1bSBjbGllbnRlIGNhZGFzdHJhZG8hPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPk5lbmh1bSBjbGllbnRlIGNhZGFzdHJhZG8hPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93Pn1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSdW5uZXJcclxuXHJcbmZ1bmN0aW9uIHVzZUZvY3VzKCk6IFthbnksIGFueV0ge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==