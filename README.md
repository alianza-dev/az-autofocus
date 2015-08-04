# az-autofocus

Status:
[![npm version](https://img.shields.io/npm/v/az-autofocus.svg?style=flat-square)](https://www.npmjs.org/package/az-autofocus)
[![npm downloads](https://img.shields.io/npm/dm/az-autofocus.svg?style=flat-square)](http://npm-stat.com/charts.html?package=az-autofocus&from=2015-06-01)
[![Build Status](https://snap-ci.com/alianza-dev/az-autofocus/branch/master/build_image)](https://snap-ci.com/alianza-dev/az-autofocus/branch/master)
[![Code Coverage](https://img.shields.io/codecov/c/github/alianza-dev/az-autofocus.svg?style=flat-square)](https://codecov.io/github/alianza-dev/az-autofocus)

az-autofocus is a directive that allows you to more easily control focus for specific elements.

[Demo](https://jsbin.com/cijozu/edit?html,js,console,output)

## Installation

```
npm install -S az-autofocus
```

## Usage:

Depend on the module

```javascript
angular.module('yourModule', ['azAutofocus']);
```

Use it

```html
<input placeholder="Type 'foo'" ng-model="first">
<input placeholder="Type 'bar'" ng-model="second" az-autofocus="{{first === 'foo' && second !== 'bar'}}" refocus focus-wait="250">
```

## LICENSE

MIT

## Code of Conduct

[Contributor Covenant](http://contributor-covenant.org)
