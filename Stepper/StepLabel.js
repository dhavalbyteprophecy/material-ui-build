'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkCircle = require('../svg-icons/action/check-circle');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(_ref, _ref2) {
  var active = _ref.active;
  var completed = _ref.completed;
  var disabled = _ref.disabled;
  var muiTheme = _ref2.muiTheme;
  var stepper = _ref2.stepper;
  var _muiTheme$stepper = muiTheme.stepper;
  var textColor = _muiTheme$stepper.textColor;
  var disabledTextColor = _muiTheme$stepper.disabledTextColor;
  var iconColor = _muiTheme$stepper.iconColor;
  var inactiveIconColor = _muiTheme$stepper.inactiveIconColor;
  var orientation = stepper.orientation;


  var styles = {
    root: {
      height: orientation === 'horizontal' ? 72 : 64,
      color: textColor,
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      paddingLeft: 14,
      paddingRight: 14
    },
    icon: {
      color: iconColor,
      display: 'block',
      fontSize: 24,
      width: 24,
      height: 24
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 8,
      width: 24
    }
  };

  if (active) {
    styles.root.fontWeight = 500;
  }

  if (!completed && !active) {
    styles.icon.color = inactiveIconColor;
  }

  if (disabled) {
    styles.icon.color = inactiveIconColor;
    styles.root.color = disabledTextColor;
    styles.root.cursor = 'not-allowed';
  }

  return styles;
};

var StepLabel = function (_Component) {
  (0, _inherits3.default)(StepLabel, _Component);

  function StepLabel() {
    (0, _classCallCheck3.default)(this, StepLabel);
    return (0, _possibleConstructorReturn3.default)(this, (StepLabel.__proto__ || (0, _getPrototypeOf2.default)(StepLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(StepLabel, [{
    key: 'renderIcon',
    value: function renderIcon(completed, icon, styles) {
      var iconType = typeof icon === 'undefined' ? 'undefined' : (0, _typeof3.default)(icon);

      if (iconType === 'number' || iconType === 'string') {
        if (completed) {
          return _react2.default.createElement(_checkCircle2.default, {
            color: styles.icon.color,
            style: styles.icon
          });
        }

        return _react2.default.createElement(
          _SvgIcon2.default,
          { color: styles.icon.color, style: styles.icon },
          _react2.default.createElement('circle', { cx: '12', cy: '12', r: '10' }),
          _react2.default.createElement(
            'text',
            {
              x: '12',
              y: '16',
              textAnchor: 'middle',
              fontSize: '12',
              fill: '#fff'
            },
            icon
          )
        );
      }

      return icon;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var active = _props.active;
      var children = _props.children;
      var completed = _props.completed;
      var userIcon = _props.icon;
      var last = _props.last;
      var style = _props.style;
      var other = (0, _objectWithoutProperties3.default)(_props, ['active', 'children', 'completed', 'icon', 'last', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var icon = this.renderIcon(completed, userIcon, styles);

      return _react2.default.createElement(
        'span',
        (0, _extends3.default)({ style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }, other),
        icon && _react2.default.createElement(
          'span',
          { style: prepareStyles(styles.iconContainer) },
          icon
        ),
        children
      );
    }
  }]);
  return StepLabel;
}(_react.Component);

StepLabel.muiName = 'StepLabel';
StepLabel.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired,
  stepper: _react.PropTypes.object
};
process.env.NODE_ENV !== "production" ? StepLabel.propTypes = {
  /**
   * Sets active styling. Overrides disabled coloring.
   */
  active: _react.PropTypes.bool,
  /**
   * The label text node
   */
  children: _react.PropTypes.node,
  /**
   * Sets completed styling. Overrides disabled coloring.
   */
  completed: _react.PropTypes.bool,
  /**
   * Sets disabled styling.
   */
  disabled: _react.PropTypes.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string, _react.PropTypes.number]),
  /**
   * @ignore
   */
  last: _react.PropTypes.bool,
  /**
   * Override the inline-style of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = StepLabel;