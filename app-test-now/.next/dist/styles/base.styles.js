'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Button = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tbackground: ', ';\n\tcolor: ', ';\n\n\tfont-size: 1em;\n\tmargin: 1em;\n\tpadding: 0.25em 1em;\n\tborder: 2px solid palevioletred;\n\tborder-radius: 3px;\n'], ['\n\tbackground: ', ';\n\tcolor: ', ';\n\n\tfont-size: 1em;\n\tmargin: 1em;\n\tpadding: 0.25em 1em;\n\tborder: 2px solid palevioletred;\n\tborder-radius: 3px;\n']);

var Button = exports.Button = _styledComponents2.default.button(_templateObject, function (props) {
	return props.primary ? 'palevioletred' : 'white';
}, function (props) {
	return props.primary ? 'white' : 'palevioletred';
});