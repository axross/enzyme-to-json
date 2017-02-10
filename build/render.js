'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('./utils');

var renderChildToJson = function renderChildToJson(child) {
    if (!child) return null;

    if (child.type === 'root') {
        return renderChildToJson(child.children[0]);
    } else if (child.type === 'tag') {
        return {
            type: child.name,
            props: child.attribs,
            children: child.children && child.children.length ? (0, _utils.compact)(child.children.map(renderChildToJson)) : null,
            $$typeof: Symbol.for('react.test.json')
        };
    } else if (child.type === 'text') {
        return child.data;
    }
};

exports.default = function (wrapper) {
    return renderChildToJson(wrapper[0]);
};