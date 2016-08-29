'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _maskMask = require('../mask/Mask');

var _maskMask2 = _interopRequireDefault(_maskMask);

var ActionSheet = (function (_React$Component) {
  _inherits(ActionSheet, _React$Component);

  function ActionSheet() {
    _classCallCheck(this, ActionSheet);

    _get(Object.getPrototypeOf(ActionSheet.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ActionSheet, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var show = _props.show;
      var children = _props.children;
      var onRequestClose = _props.onRequestClose;

      var container = (0, _classnames2['default'])({
        'f-actionSheet': true,
        'f-actionSheet-show': show,
        'f-actionSheet-hidden': !show
      });

      return _react2['default'].createElement(
        'div',
        { className: container },
        _react2['default'].createElement(_maskMask2['default'], {
          show: show,
          transparent: false,
          conceal: onRequestClose
        }),
        _react2['default'].createElement(
          'div',
          { className: 'f-actionSheet-list' },
          children
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      show: _react2['default'].PropTypes.bool,
      onRequestClose: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      show: false,
      onRequestClose: null
    },
    enumerable: true
  }]);

  return ActionSheet;
})(_react2['default'].Component);

exports['default'] = ActionSheet;
module.exports = exports['default'];