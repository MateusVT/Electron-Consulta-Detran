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
    xs: 12,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], null, "Nenhum cliente cadastrado!")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ydW5uZXIvUnVubmVyLnRzeCJdLCJuYW1lcyI6WyJSdW5uZXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImNhcHRjaGFSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImNhcHRjaGEiLCJzZXRDYXB0Y2hhIiwiaW1hZ2VVUkwiLCJzZXRJbWFnZVVSTCIsImNhcHRjaGFDb29raWUiLCJzZXRDYXB0Y2hhQ29va2llIiwiY2xpZW50cyIsInNldENsaWVudHMiLCJjb3VudGVyIiwic2V0Q291bnRlciIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwidXNlRWZmZWN0Iiwic2VuZFJlcXVlc3RCeUlQQyIsInVzZXJfaWQiLCJ1c2VyIiwiX2lkIiwidGhlbiIsImZldGNoRGF0YSIsImdlbmVyYXRlQ2FwdGNoYSIsImN1cnJlbnQiLCJmb2N1cyIsInJlc3BvbnNlIiwiYmFzZSIsIkJ1ZmZlciIsImRhdGEiLCJ0b1N0cmluZyIsImNvb2tpZSIsImRvTG9naW4iLCJjb29raWVzIiwiY2xpZW50IiwiaW5jbHVkZXMiLCJkb20iLCJkb2MiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJjbmhTdGF0dXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY25oRGF0YSIsImNsaWVudF9pZCIsImNuaFNpdHVhdGlvbiIsImNoaWxkcmVuIiwiaW5uZXJIVE1MIiwiY25oT3ZlcnNpZ2h0IiwidXBkYXRlZEF0Iiwibm93TG9jYWxlIiwiZm9ybWF0IiwiaW5mcmFjdGlvbnMiLCJxdHlJbmZyYWN0aW9ucyIsImxlbmd0aCIsImluZnJhY3Rpb25zRE9NVGl0bGVzIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yIiwic2hpZnQiLCJpbmZyYWN0aW9uc0RPTUluZm9zIiwiaSIsImluZnJhY3Rpb25faWQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJ0cmltIiwiaW5mcmFjdGlvbl9zaXR1YXRpb24iLCJjcmVhdGVfYXQiLCJpbmZyYWN0aW9uX2RlYWRsaW5lIiwicHVzaCIsInNhdmVDbmhJbmZvcyIsImNuaEluZm9zIiwiaGFuZGxlQ291bnRlckZvcndhcmQiLCJoYW5kbGVDb3VudGVyQmFja3dhcmQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRXhlY3V0ZSIsImJ1dHRvblN0YXR1cyIsImtleVVwSGFuZGxlciIsImtleSIsImtleUNvZGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJuYW1lIiwibWluV2lkdGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5SaWdodCIsInVzZUZvY3VzIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFFakIsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyx5REFBRCxDQUExQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsbUVBQVUsRUFBMUI7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLENBQW1CLElBQW5CLENBQXpCOztBQUppQixrQkFPYUMsc0RBQVEsQ0FBQyxFQUFELENBUHJCO0FBQUE7QUFBQSxNQU9WQyxPQVBVO0FBQUEsTUFPREMsVUFQQzs7QUFBQSxtQkFRZUYsc0RBQVEsQ0FBQyxFQUFELENBUnZCO0FBQUE7QUFBQSxNQVFWRyxRQVJVO0FBQUEsTUFRQUMsV0FSQTs7QUFBQSxtQkFTeUJKLHNEQUFRLENBQUMsRUFBRCxDQVRqQztBQUFBO0FBQUEsTUFTVkssYUFUVTtBQUFBLE1BU0tDLGdCQVRMOztBQUFBLG1CQVVhTixzREFBUSxDQUFXLEVBQVgsQ0FWckI7QUFBQTtBQUFBLE1BVVZPLE9BVlU7QUFBQSxNQVVEQyxVQVZD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QUFFaEUsVUFBakY7QUFBNkYsV0FBTyxFQUFFOEQ7QUFBdEcsS0FBdUhDLFlBQVksRUFBbkksQ0FESixDQURKLENBdENtQixlQTJDbkIsc0VBM0NtQixlQTRDbkIsMkRBQUMsOENBQUQscUJBQ0ksMkRBQUMsOENBQUQscUJBQ0ksMkRBQUMsaURBQUQ7QUFBUSxRQUFJLEVBQUMsSUFBYjtBQUFrQixTQUFLLEVBQUMsUUFBeEI7QUFBaUMsWUFBUSxFQUFFL0QsVUFBM0M7QUFBdUQsU0FBSyxFQUFFO0FBQUU2RSxpQkFBVyxFQUFDO0FBQWQsS0FBOUQ7QUFBcUYsV0FBTyxFQUFFbEI7QUFBOUYsS0FBdUgsYUFBdkgsQ0FESixlQUVJLDJEQUFDLGlEQUFEO0FBQVEsUUFBSSxFQUFDLElBQWI7QUFBa0IsU0FBSyxFQUFDLFFBQXhCO0FBQWlDLFlBQVEsRUFBRTNELFVBQTNDO0FBQXVELFdBQU8sRUFBRTBEO0FBQWhFLEtBQXdGLFlBQXhGLENBRkosQ0FESixDQTVDbUIsQ0FEM0IsRUFxREs5RCxPQUFPLENBQUMyQyxNQUFSLElBQWtCLENBQWxCLGlCQUF1QiwyREFBQyw4Q0FBRCxxQkFDcEIsMkRBQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLFNBQUssRUFBRTtBQUFFZ0MsZUFBUyxFQUFFO0FBQWI7QUFBcEIsa0JBQ0ksMkRBQUMsZ0RBQUQscUNBREosQ0FEb0IsQ0FyRDVCLENBSEosQ0FESjtBQW1FSCxDQXRNRDs7Y0FBTTFGLE07VUFHY0ssMkQ7OztlQXFNTEwsTTtBQUFBOztBQUVmLFNBQVNpRyxRQUFULEdBQWdDO0FBQzVCLFFBQU0sSUFBSUMsS0FBSixDQUFVLDJCQUFWLENBQU47QUFDSDs7Ozs7Ozs7Ozs7MEJBNU1LbEcsTTswQkEwTUdpRyxRIiwiZmlsZSI6Im1haW5fd2luZG93LmI2ODljZjBmYWFiZjgwZGNhMzNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAsIENvbCwgQ29udGFpbmVyLCBJbnB1dCwgTGFiZWwsIE1lZGlhLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBzZW5kUmVxdWVzdEJ5SVBDIH0gZnJvbSAnLi4vLi4vbWFpbi9pcGNDb25uZWN0b3InO1xyXG5pbXBvcnQgeyBDbGllbnQsIERldHJhbkluZm9zLCBJbmZyYWN0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvVHlwZXMnO1xyXG5pbXBvcnQgeyBub3dMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlscy9Nb21lbnQnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29tcG9uZW50Q29udGV4dCc7XHJcblxyXG5cclxuY29uc3QgUnVubmVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gICAgY29uc3QgY2FwdGNoYVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2NhcHRjaGEsIHNldENhcHRjaGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaW1hZ2VVUkwsIHNldEltYWdlVVJMXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NhcHRjaGFDb29raWUsIHNldENhcHRjaGFDb29raWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2xpZW50cywgc2V0Q2xpZW50c10gPSB1c2VTdGF0ZTxDbGllbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbcHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2b2lkIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgICAgICAgYXdhaXQgc2VuZFJlcXVlc3RCeUlQQyhcImZpbmQtY2xpZW50c1wiLCB7IHVzZXJfaWQ6IGNvbnRleHQudXNlcj8uX2lkIH0pLnRoZW4oKGNsaWVudHM6IENsaWVudFtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDbGllbnRzKGNsaWVudHMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSgpO1xyXG4gICAgICAgIGdlbmVyYXRlQ2FwdGNoYSgpXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2FwdGNoYVJlZi5jdXJyZW50Py5mb2N1cygpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlQ2FwdGNoYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBzZW5kUmVxdWVzdEJ5SVBDKFwiY2FwdGNoYVwiKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZSA9IGBkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCR7bmV3IEJ1ZmZlcihyZXNwb25zZS5kYXRhLCAnYmluYXJ5JykudG9TdHJpbmcoJ2Jhc2U2NCcpfWBcclxuICAgICAgICAgICAgc2V0SW1hZ2VVUkwoYmFzZSlcclxuICAgICAgICAgICAgc2V0Q2FwdGNoYUNvb2tpZShyZXNwb25zZS5jb29raWUpXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZG9Mb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgc2VuZFJlcXVlc3RCeUlQQyhcImxvZ2luXCIsIHsgY2FwdGNoYTogY2FwdGNoYSwgY29va2llczogY2FwdGNoYUNvb2tpZSwgY2xpZW50OiBjbGllbnRzW2NvdW50ZXJdIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5pbmNsdWRlcyhcIk5vbWU6XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb206IHN0cmluZyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZG9tLCBcInRleHQvaHRtbFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNuaFN0YXR1cyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKFwiI2V4dHJhdG9fY29uZHV0b3Jfc2l0dWFjYW9jbmhcIilcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNuaERhdGE6IERldHJhbkluZm9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IGNvbnRleHQudXNlciEuX2lkISxcclxuICAgICAgICAgICAgICAgICAgICBjbGllbnRfaWQ6IGNsaWVudHNbY291bnRlcl0uX2lkISxcclxuICAgICAgICAgICAgICAgICAgICBjbmhTaXR1YXRpb246IGNuaFN0YXR1c1swXS5jaGlsZHJlblsxXS5pbm5lckhUTUwsXHJcbiAgICAgICAgICAgICAgICAgICAgY25oT3ZlcnNpZ2h0OiBjbmhTdGF0dXNbMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uaW5uZXJIVE1MLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRBdDogbm93TG9jYWxlKCkuZm9ybWF0KFwiTCBbw6BzXSBMVFwiKSxcclxuICAgICAgICAgICAgICAgICAgICBpbmZyYWN0aW9uczogW11cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdHlJbmZyYWN0aW9ucyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbaWQqPVwibW9kYWwtc3VzcGVuc29lcy1pbmZyYWNvZXNfXCJdJykubGVuZ3RoXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5mcmFjdGlvbnNET01UaXRsZXMgPSBBcnJheS5mcm9tKGRvYy5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtc3VzcGVuc29lc1wiKT8ucXVlcnlTZWxlY3RvcignI3RhYmxlLWV4cGFuZGFibGUnKT8uY2hpbGRyZW5bMF0ucXVlcnlTZWxlY3RvckFsbChcInRyOm5vdCguZXhwYW5kZWQtcm93KVwiKSB8fCBbXSlcclxuICAgICAgICAgICAgICAgIGluZnJhY3Rpb25zRE9NVGl0bGVzLnNoaWZ0KClcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZyYWN0aW9uc0RPTUluZm9zID0gQXJyYXkuZnJvbShkb2MuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXN1c3BlbnNvZXNcIik/LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZS1leHBhbmRhYmxlJyk/LmNoaWxkcmVuWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwYW5kZWQtcm93XCIpIHx8IFtdKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmZyYWN0aW9uc0RPTVRpdGxlcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF0eUluZnJhY3Rpb25zOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5mcmFjdGlvbl9pZCA9IGluZnJhY3Rpb25zRE9NVGl0bGVzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJodWVcIilbMF0udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZyYWN0aW9uX3NpdHVhdGlvbiA9IGluZnJhY3Rpb25zRE9NVGl0bGVzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZXh0LXJpZ2h0XCIpWzBdLnRleHRDb250ZW50IHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZV9hdCA9IGluZnJhY3Rpb25zRE9NSW5mb3NbaV0ucXVlcnlTZWxlY3RvckFsbChcImZpZWxkc2V0XCIpWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5mcmFjdGlvbl9kZWFkbGluZSA9IGluZnJhY3Rpb25zRE9NSW5mb3NbaV0ucXVlcnlTZWxlY3RvckFsbChcImZpZWxkc2V0XCIpWzBdLmNoaWxkcmVuWzddLmNoaWxkcmVuWzFdLnRleHRDb250ZW50IHx8IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY25oRGF0YS5pbmZyYWN0aW9ucy5wdXNoKHsgaW5mcmFjdGlvbl9pZDogaW5mcmFjdGlvbl9pZCwgaW5mcmFjdGlvbl9zaXR1YXRpb246IGluZnJhY3Rpb25fc2l0dWF0aW9uLCBjcmVhdGVfYXQ6IGNyZWF0ZV9hdCwgaW5mcmFjdGlvbl9kZWFkbGluZTogaW5mcmFjdGlvbl9kZWFkbGluZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjbmhEYXRhXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2F2ZUNuaEluZm9zID0gYXN5bmMgKGNuaEluZm9zOiBEZXRyYW5JbmZvcykgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNlbmRSZXF1ZXN0QnlJUEMoXCJzYXZlLWNuaC1pbmZvc1wiLCBjbmhJbmZvcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZUNvdW50ZXJGb3J3YXJkKClcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb3VudGVyRm9yd2FyZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY291bnRlciA9PSBjbGllbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgc2V0Q291bnRlcigwKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENvdW50ZXIoY291bnRlciArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb3VudGVyQmFja3dhcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY291bnRlcilcclxuICAgICAgICBpZiAoY291bnRlciA9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldENvdW50ZXIoY2xpZW50cy5sZW5ndGggLSAxKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENvdW50ZXIoY291bnRlciAtIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRXhlY3V0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRQcm9jZXNzaW5nKHRydWUpXHJcbiAgICAgICAgY29uc3QgY25oRGF0YTogRGV0cmFuSW5mb3MgfCBudWxsID0gYXdhaXQgZG9Mb2dpbigpXHJcbiAgICAgICAgaWYgKCFjbmhEYXRhKSB7XHJcbiAgICAgICAgICAgIHNldENhcHRjaGEoXCJcIilcclxuICAgICAgICAgICAgYXdhaXQgZ2VuZXJhdGVDYXB0Y2hhKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNhdmVDbmhJbmZvcyhjbmhEYXRhKVxyXG4gICAgICAgICAgICBzZXRDYXB0Y2hhKFwiXCIpXHJcbiAgICAgICAgICAgIGF3YWl0IGdlbmVyYXRlQ2FwdGNoYSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFByb2Nlc3NpbmcoZmFsc2UpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvblN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGNvdW50ZXIpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW5pY2lhclwiXHJcbiAgICAgICAgICAgIGNhc2UgY2xpZW50cy5sZW5ndGggLSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRW5jZXJyYXJcIlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHLDs3hpbW9cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gKGtleTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGtleS5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUV4ZWN1dGUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIG91dGxpbmUgc2l6ZT1cInNtXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiIH19IG9uQ2xpY2s9eygpID0+IHsgaGlzdG9yeS5wdXNoKFwiL21lbnVcIikgfX0+Vm9sdGFyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgcGFkZGluZzogXCI1MHB4XCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19IGtleT1cImNhcHRjaGFcIiA+XHJcbiAgICAgICAgICAgICAgICB7Y2xpZW50cy5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD57YFByb2dyZXNzbzogJHtjb3VudGVyICsgMX0vJHtjbGllbnRzLmxlbmd0aH1gfTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+e2BDbGllbnRlOiAke2NsaWVudHNbY291bnRlcl0ubmFtZX1gfTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgdmVydGljYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYSBzdHlsZT17eyBtaW5XaWR0aDogXCIxMjhweFwiIH19IG9iamVjdCBzcmM9e2ltYWdlVVJMfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGhlaWdodDogXCIxMHB4XCIgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwiY2FwdGNoYVwiIGlkPVwiY2FwdGNoYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e2tleVVwSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyUmVmPXtjYXB0Y2hhUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvY2Vzc2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhcHRjaGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRDYXB0Y2hhKGUudGFyZ2V0LnZhbHVlKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBvIGNhcHRjaGFcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBoZWlnaHQ6IFwiMTBweFwiIH19Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9jZXNzaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2Nlc3NhbmRvIDxTcGlubmVyIHNpemU9XCJzbVwiIGNvbG9yPVwicHJpbWFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInByaW1hcnlcIiBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IGRpc2FibGVkPXtwcm9jZXNzaW5nfSBvbkNsaWNrPXtoYW5kbGVFeGVjdXRlfSA+e2J1dHRvblN0YXR1cygpfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBjb2xvcj1cImRhbmdlclwiIGRpc2FibGVkPXtwcm9jZXNzaW5nfSBzdHlsZT17eyBtYXJnaW5SaWdodDpcIjIwcHhcIn19IG9uQ2xpY2s9e2hhbmRsZUNvdW50ZXJCYWNrd2FyZH0gPntcIjwtIFJldG9ybmFyXCJ9PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIGNvbG9yPVwiZGFuZ2VyXCIgZGlzYWJsZWQ9e3Byb2Nlc3Npbmd9IG9uQ2xpY2s9e2hhbmRsZUNvdW50ZXJGb3J3YXJkfSA+e1wiQXZhbsOnYXIgLT5cIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtjbGllbnRzLmxlbmd0aCA9PSAwICYmIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPk5lbmh1bSBjbGllbnRlIGNhZGFzdHJhZG8hPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93Pn1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSdW5uZXJcclxuXHJcbmZ1bmN0aW9uIHVzZUZvY3VzKCk6IFthbnksIGFueV0ge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==