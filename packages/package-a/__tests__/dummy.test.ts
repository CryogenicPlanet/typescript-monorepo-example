import dummyFunction from '../src/index'

describe('Dummy test', () => {
  it('Dummy test', () => {
    expect(dummyFunction).toBeDefined()
    const output = dummyFunction({ example: 'test' })
    expect(output).toMatchObject({ example: 'test' })
  })
})
