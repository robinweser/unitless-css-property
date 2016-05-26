var unitlessProperties = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
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
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
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

var prefixes = ['Webkit', 'ms', 'Moz', 'O']

function getPrefixedKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.slice(1)
}

// add all prefixed properties as well
Object.keys(unitlessProperties).forEach(function(property) {
  prefixes.forEach(function(prefix) {
    unitlessProperties[getPrefixedKey(prefix, property)] = true
  })
})

module.exports = function(property) {
  return unitlessProperties[property]
}
