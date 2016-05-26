# Unitless CSS Property

Provides a simple helper to check for unitless CSS property names. It also checks for prefixed property names.

# Usage
```sh
npm i --save unitless-css-property
```

```javascript
import isUnitlessCSSProperty from 'unitless-css-property'

isUnitlessCSSProperty('lineHeight') // => true
isUnitlessCSSProperty('WebkitFlex') // => true
isUnitlessCSSProperty('width') // => false
```
