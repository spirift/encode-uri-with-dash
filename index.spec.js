const funcs = require('./index');

describe(`encodeURICompWithDash`, () => {
  it(`should return a string where spaces are replaced with dashes`, () => {
    expect(funcs.encodeURICompWithDash('mock string')).toEqual('mock-string')
  })

  it(`should replace all spaces`, () => {
    expect(funcs.encodeURICompWithDash('mock string with many spaces')).toEqual('mock-string-with-many-spaces')
  })
})

describe(`encodeURIWithDash`, () => {
  it(`should return a string where spaces are replaced with dashes`, () => {
    expect(funcs.encodeURIWithDash('mock string')).toEqual('mock-string')
  })

  it(`should replace all spaces`, () => {
    expect(funcs.encodeURICompWithDash('mock string with many spaces')).toEqual('mock-string-with-many-spaces')
  })
})
