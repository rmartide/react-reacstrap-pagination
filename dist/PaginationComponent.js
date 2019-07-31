"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PaginationComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PaginationComponent, _Component);

  function PaginationComponent(_props) {
    var _this;

    _classCallCheck(this, PaginationComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PaginationComponent).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "getNumberOfPages", function (props) {
      var auxPages = props.totalItems / props.pageSize;
      var pages = parseInt(auxPages, 10);
      pages += pages !== auxPages ? 1 : 0;
      return pages;
    });

    _defineProperty(_assertThisInitialized(_this), "paginationItems", function () {
      var items = [];
      _this.lastPaginationNumber = _this.getLastPaginationNumber();
      items.push(_this.firstOrLastPagItem(_this.props.firstPageText, 1));
      items.push(_this.nextOrPreviousPagItem(_this.props.previousPageText, 1, "l"));

      for (var i = _this.state.firstPaginationNumber; i <= _this.lastPaginationNumber; i++) {
        items.push(_this.numberedPagItem(i));
      }

      items.push(_this.nextOrPreviousPagItem(_this.props.nextPageText, _this.pages, "r"));
      items.push(_this.firstOrLastPagItem(_this.props.lastPageText, _this.pages));
      return items;
    });

    _defineProperty(_assertThisInitialized(_this), "getLastPaginationNumber", function () {
      var minNumberPages = Math.min(_this.pages, _this.props.maxPaginationNumbers);
      return _this.state.firstPaginationNumber + minNumberPages - 1;
    });

    _defineProperty(_assertThisInitialized(_this), "numberedPagItem", function (i) {
      return _react.default.createElement(_reactstrap.PaginationItem, {
        key: i,
        id: "pagebutton".concat(i),
        active: _this.state.activePage === i,
        onClick: _this.handleClick
      }, _react.default.createElement(_reactstrap.PaginationLink, {
        style: {
          minWidth: "43.5px"
        }
      }, i));
    });

    _defineProperty(_assertThisInitialized(_this), "nextOrPreviousPagItem", function (name, page, direction) {
      return _react.default.createElement(_reactstrap.PaginationItem, {
        key: name,
        disabled: _this.state.activePage === page,
        onClick: function onClick(e) {
          return _this.handleSelectNextOrPrevious(direction);
        }
      }, _react.default.createElement(_reactstrap.PaginationLink, null, name));
    });

    _defineProperty(_assertThisInitialized(_this), "firstOrLastPagItem", function (name, page) {
      var event = {
        currentTarget: {
          getAttribute: function getAttribute() {
            return "pagebutton".concat(page);
          }
        }
      };
      return _react.default.createElement(_reactstrap.PaginationItem, {
        key: name,
        disabled: _this.state.activePage === page,
        onClick: function onClick() {
          return _this.handleClick(event);
        }
      }, _react.default.createElement(_reactstrap.PaginationLink, null, name));
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var newActivePage = parseInt(event.currentTarget.getAttribute("id").split("pagebutton").pop(), 10);

      _this.setState({
        activePage: newActivePage
      });

      _this.handlePaginationNumber(newActivePage);

      _this.props.onSelect(newActivePage);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectNextOrPrevious", function (direction) {
      var activePage = _this.state.activePage;
      if (direction === "r" && activePage === _this.pages || direction === "l" && activePage === 1) return;
      var newActivePage = direction === "r" ? activePage + 1 : activePage - 1;

      _this.setState({
        activePage: newActivePage
      });

      _this.handlePaginationNumber(newActivePage);

      _this.props.onSelect(newActivePage);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePaginationNumber", function (activePage) {
      var distance = Math.floor(_this.props.maxPaginationNumbers / 2);
      var newFPNumber = activePage - distance;
      var newLPNumber = activePage + distance;

      if (newFPNumber <= distance) {
        if (_this.state.firstPaginationNumber !== 1) {
          _this.setState({
            firstPaginationNumber: 1
          });
        }
      } else if (newLPNumber <= _this.pages) {
        _this.setState({
          firstPaginationNumber: newFPNumber
        });
      } else if (newLPNumber >= _this.pages) {
        _this.setState({
          firstPaginationNumber: _this.pages - _this.props.maxPaginationNumbers + 1
        });
      }
    });

    _this.state = {
      activePage: _this.props.activePage,
      firstPaginationNumber: 1
    };
    _this.pages = _this.getNumberOfPages(_this.props);
    return _this;
  }

  _createClass(PaginationComponent, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.pages = this.getNumberOfPages(props);
      this.setState({
        activePage: props.activePage
      });
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactstrap.Pagination, null, this.paginationItems());
    }
  }]);

  return PaginationComponent;
}(_react.Component);

PaginationComponent.propTypes = {
  totalItems: _propTypes.default.number.isRequired,
  pageSize: _propTypes.default.number.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  maxPaginationNumbers: _propTypes.default.number,
  activePage: _propTypes.default.number,
  firstPageText: _propTypes.default.string,
  previousPageText: _propTypes.default.string,
  nextPageText: _propTypes.default.string,
  lastPageText: _propTypes.default.string
};
PaginationComponent.defaultProps = {
  maxPaginationNumbers: 5,
  activePage: 1,
  firstPageText: "First",
  previousPageText: "Previous",
  nextPageText: "Next",
  lastPageText: "Last"
};
var _default = PaginationComponent;
exports.default = _default;