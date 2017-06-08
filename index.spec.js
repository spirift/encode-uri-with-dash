const funcs = require('./index');

describe(`encodeURICompWithDash`, () => {
  it(`should return a string where spaces are replaced with dashes`, () => {
    expect(funcs.encodeURICompWithDash('mock string')).toEqual('mock-string')
  })
})

describe(`encodeURIWithDash`, () => {
  it(`should return a string where spaces are replaced with dashes`, () => {
    expect(funcs.encodeURIWithDash('mock string')).toEqual('mock-string')
  })
})
