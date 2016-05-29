var hyphenateStyleName = require('hyphenate-style-name')

var unitlessProperties = {
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}

var prefixedUnitlessProperties = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  order: true,
  lineClamp: true
}

var prefixes = ['Webkit', 'ms', 'Moz', 'O']

function getPrefixedKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.slice(1)
}

// add all prefixed properties to the unitless properties
Object.keys(prefixedUnitlessProperties).forEach(function(property) {
  unitlessProperties[property] = true

  prefixes.forEach(function(prefix) {
    unitlessProperties[getPrefixedKey(prefix, property)] = true
  })
})

// add all hypenated properties as well
Object.keys(unitlessProperties).forEach(function(property) {
  unitlessProperties[hyphenateStyleName(property)] = true
})

module.exports = function(property) {
  return unitlessProperties[property]
}
