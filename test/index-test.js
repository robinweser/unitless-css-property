var isUnitlessCSSProperty = require('../modules')
var expect = require('chai').expect

describe('Checking for unitless CSS properties', function() {
  it('should return true for unitless properties', function() {
    expect(isUnitlessCSSProperty('fontWeight')).to.eql(true)
    expect(isUnitlessCSSProperty('flex')).to.eql(true)
    expect(isUnitlessCSSProperty('gridColumn')).to.eql(true)
  })

  it('should return true for hypenated unitless properties', function() {
    expect(isUnitlessCSSProperty('font-weight')).to.eql(true)
    expect(isUnitlessCSSProperty('grid-column')).to.eql(true)
  })

  it('should return true for prefixed unitless properties', function() {
    expect(isUnitlessCSSProperty('WebkitFlex')).to.eql(true)
    expect(isUnitlessCSSProperty('msFlex')).to.eql(true)
    expect(isUnitlessCSSProperty('WebkitColumnCount')).to.eql(true)
    expect(isUnitlessCSSProperty('msColumnCount')).to.eql(true)
  })

  it('should return true for hypenated prefixed unitless properties', function() {
    expect(isUnitlessCSSProperty('-webkit-flex')).to.eql(true)
    expect(isUnitlessCSSProperty('-ms-flex')).to.eql(true)
    expect(isUnitlessCSSProperty('-webkit-column-count')).to.eql(true)
    expect(isUnitlessCSSProperty('-ms-column-count')).to.eql(true)
  })

  it('should equal false for other properties', function() {
    expect(isUnitlessCSSProperty('fontSize') === true).to.eql(false)
    expect(isUnitlessCSSProperty('font-size') === true).to.eql(false)
    expect(isUnitlessCSSProperty('-webkit-border-radius') === true).to.eql(false)
    expect(isUnitlessCSSProperty('-ms-border-radius') === true).to.eql(false)
    expect(isUnitlessCSSProperty('WebkitBorderRadius') === true).to.eql(false)
    expect(isUnitlessCSSProperty('msBorderRadius') === true).to.eql(false)
  })
})
