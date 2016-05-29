# Unitless CSS Property

<img alt="TravisCI" src="https://travis-ci.org/rofrischmann/unitless-css-property.svg?branch=master">
<a href="https://codeclimate.com/github/rofrischmann/unitless-css-property/coverage"><img alt="Test Coverage" src="https://codeclimate.com/github/rofrischmann/unitless-css-property/badges/coverage.svg"></a>
<a href="https://codeclimate.com/github/rofrischmann/unitless-css-property"><img alt="Code Climate" src="https://codeclimate.com/github/rofrischmann/unitless-css-property/badges/gpa.svg"></a>

Provides a simple helper to check for unitless CSS property names. <br>
It also checks for prefixed and hyphenated property names.

## Installation
```sh
npm i --save unitless-css-property
```
## Usage

```javascript
import isUnitlessCSSProperty from 'unitless-css-property'

// basic property
isUnitlessCSSProperty('lineHeight') // => true
// prefixed property
isUnitlessCSSProperty('WebkitFlex') // => true
// hypenated property
isUnitlessCSSProperty('line-height') // => true
// prefixed and hypenated property
isUnitlessCSSProperty('-webkit-flex') // => true


isUnitlessCSSProperty('width') // => false
```

## License
Licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).
