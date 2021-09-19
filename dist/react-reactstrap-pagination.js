(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('reactstrap'), require('prop-types'), require('memoize-one')) :
  typeof define === 'function' && define.amd ? define(['react', 'reactstrap', 'prop-types', 'memoize-one'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['react-reactstrap-pagination'] = factory(global.React, global.reactstrap, global.PropTypes, global.memoize));
}(this, (function (React, reactstrap, PropTypes, memoize) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var memoize__default = /*#__PURE__*/_interopDefaultLegacy(memoize);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var PaginationComponent = /*#__PURE__*/function (_PureComponent) {
    _inherits(PaginationComponent, _PureComponent);

    var _super = _createSuper(PaginationComponent);

    function PaginationComponent(_props) {
      var _this;

      _classCallCheck(this, PaginationComponent);

      _this = _super.call(this, _props);

      _defineProperty(_assertThisInitialized(_this), "getNumberOfPages", memoize__default['default'](function (props) {
        var auxPages = props.totalItems / props.pageSize;
        var pages = parseInt(auxPages, 10);
        pages += pages !== auxPages ? 1 : 0;
        return pages;
      }));

      _defineProperty(_assertThisInitialized(_this), "paginationItems", function () {
        if (_this.props.defaultActivePage !== _this.defaultActivePage) {
          _this.defaultActivePage = _this.props.defaultActivePage;
          _this.activePage = _this.defaultActivePage;
        }

        var pages = _this.getNumberOfPages(_this.props);

        var items = [];

        var _assertThisInitialize = _assertThisInitialized(_this),
            activePage = _assertThisInitialize.activePage;

        var _this$props = _this.props,
            firstPageText = _this$props.firstPageText,
            previousPageText = _this$props.previousPageText,
            nextPageText = _this$props.nextPageText,
            lastPageText = _this$props.lastPageText,
            hasFirstLastNavigation = _this$props.hasFirstLastNavigation,
            hasNextPreviousNavigation = _this$props.hasNextPreviousNavigation; // Since first and last PaginationNumber depend on activepage there's no reason to have them on the state
        // So we just make the calculations when we need them

        var firstPaginationNumber = _this.getFirstPaginationNumber(activePage, pages);

        var lastPaginationNumber = _this.getLastPaginationNumber(firstPaginationNumber, pages); // Elements first and previous


        hasFirstLastNavigation && items.push(_this.firstOrLastPagItem(firstPageText, 1));
        hasNextPreviousNavigation && items.push(_this.nextOrPreviousPagItem(previousPageText, 1, "l")); // Page numbers

        for (var i = firstPaginationNumber; i <= lastPaginationNumber; i++) {
          items.push(_this.numberedPagItem(i, activePage));
        } // Elements next and last


        hasNextPreviousNavigation && items.push(_this.nextOrPreviousPagItem(nextPageText, pages, "r"));
        hasFirstLastNavigation && items.push(_this.firstOrLastPagItem(lastPageText, pages));
        return items;
      });

      _defineProperty(_assertThisInitialized(_this), "getFirstPaginationNumber", function (activePage, pages) {
        var distance = Math.floor(_this.props.maxPaginationNumbers / 2);
        var newFPNumber = activePage - distance;
        var newLPNumber = activePage + distance;
        var result = 1;

        if (newFPNumber <= distance) {
          result = 1;
        } else if (newLPNumber <= pages) {
          result = newFPNumber;
        } else if (newLPNumber >= pages) {
          result = pages - _this.props.maxPaginationNumbers + 1;
        }

        return result;
      });

      _defineProperty(_assertThisInitialized(_this), "getLastPaginationNumber", function (firstPaginationNumber, pages) {
        var minNumberPages = Math.min(pages, _this.props.maxPaginationNumbers);
        return firstPaginationNumber + minNumberPages - 1;
      });

      _defineProperty(_assertThisInitialized(_this), "numberedPagItem", function (i, activePage) {
        var minWidth = "43.5px";

        if (_this.props.size === "lg") {
          minWidth = "71px";
        } else if (_this.props.size === "sm") {
          minWidth = "33px";
        }

        return /*#__PURE__*/React__default['default'].createElement(reactstrap.PaginationItem, {
          key: i,
          id: "pagebutton".concat(i),
          active: activePage === i,
          onClick: _this.handleClick
        }, /*#__PURE__*/React__default['default'].createElement(reactstrap.PaginationLink, {
          style: {
            minWidth: minWidth
          }
        }, i));
      });

      _defineProperty(_assertThisInitialized(_this), "nextOrPreviousPagItem", function (name, page, direction) {
        return /*#__PURE__*/React__default['default'].createElement(reactstrap.PaginationItem, {
          key: name,
          disabled: _this.activePage === page,
          onClick: function onClick(e) {
            return _this.handleSelectNextOrPrevious(direction);
          }
        }, /*#__PURE__*/React__default['default'].createElement(reactstrap.PaginationLink, null, name));
      });

      _defineProperty(_assertThisInitialized(_this), "firstOrLastPagItem", function (name, page) {
        var event = {
          currentTarget: {
            getAttribute: function getAttribute() {
              return "pagebutton".concat(page);
            }
          }
        };
        return /*#__PURE__*/React__default['default'].createElement(reactstrap.PaginationItem, {
          key: name,
          disabled: _this.activePage === page,
          onClick: function onClick() {
            return _this.handleClick(event);
          }
        }, /*#__PURE__*/React__default['default'].createElement(reactstrap.PaginationLink, null, name));
      });

      _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
        var newActivePage = parseInt(event.currentTarget.getAttribute("id").split("pagebutton").pop(), 10);

        _this.changePaginationState(newActivePage);
      });

      _defineProperty(_assertThisInitialized(_this), "handleSelectNextOrPrevious", function (direction) {
        var _assertThisInitialize2 = _assertThisInitialized(_this),
            activePage = _assertThisInitialize2.activePage,
            props = _assertThisInitialize2.props;

        var pages = _this.getNumberOfPages(props);

        if (direction === "r" && activePage === pages || direction === "l" && activePage === 1) return;
        var newActivePage = direction === "r" ? activePage + 1 : activePage - 1;

        _this.changePaginationState(newActivePage);
      });

      _defineProperty(_assertThisInitialized(_this), "changePaginationState", function (newActivePage) {
        _this.activePage = newActivePage;

        _this.setState({
          activePage: newActivePage
        });

        _this.props.onSelect(newActivePage);
      });

      _this.state = {
        activePage: _this.props.defaultActivePage
      };
      return _this;
    } // Since we want to not have to worry about when this changes and since it won't change much
    // Memoize will remember the last parameter and only execute when they change


    _createClass(PaginationComponent, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React__default['default'].createElement(reactstrap.Pagination, {
          size: this.props.size
        }, this.paginationItems());
      }
    }]);

    return PaginationComponent;
  }(React.PureComponent);

  PaginationComponent.propTypes = {
    totalItems: PropTypes__default['default'].number.isRequired,
    pageSize: PropTypes__default['default'].number.isRequired,
    onSelect: PropTypes__default['default'].func.isRequired,
    maxPaginationNumbers: PropTypes__default['default'].number,
    defaultActivePage: PropTypes__default['default'].number,
    firstPageText: PropTypes__default['default'].string,
    previousPageText: PropTypes__default['default'].string,
    nextPageText: PropTypes__default['default'].string,
    lastPageText: PropTypes__default['default'].string,
    size: PropTypes__default['default'].string,
    hasNextPreviousNavigation: PropTypes__default['default'].bool,
    hasFirstLastNavigation: PropTypes__default['default'].bool
  };
  PaginationComponent.defaultProps = {
    maxPaginationNumbers: 5,
    defaultActivePage: 1,
    firstPageText: "First",
    previousPageText: "Previous",
    nextPageText: "Next",
    lastPageText: "Last",
    hasNextPreviousNavigation: true,
    hasFirstLastNavigation: true
  };

  return PaginationComponent;

})));
