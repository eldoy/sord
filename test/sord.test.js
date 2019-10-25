const s = require('../index.js')

describe('sord', () => {
  it('should return falsy if not found', async () => {
    document.body.innerHTML = '<div id="app"></div>'
    expect(!!s('#hello')).toBe(false)
  })

  it('should get the first one', async () => {
    document.body.innerHTML = '<div id="app"></div>'
    expect(s('#app').outerHTML).toBe('<div id="app"></div>')
  })

  it('should get the first one from root', async () => {
    document.body.innerHTML = '<div id="app"><span>Hello</span></div>'
    var root = s('#app')
    expect(s(root, 'span').innerHTML).toBe('Hello')
  })

  it('should get the first one and loop the rest', async () => {
    document.body.innerHTML = '<div id="app"><ul><li>Hello</li><li>Hello</li></ul></div>'
    s('li', el => el.textContent = 'Bye')
    expect(document.querySelectorAll('li')[0].innerHTML).toBe('Bye')
    expect(document.querySelectorAll('li')[1].innerHTML).toBe('Bye')
  })

  it('should get the first one and loop the rest with root', async () => {
    document.body.innerHTML = '<div id="app"><ul><li>Hello</li><li>Hello</li></ul></div>'
    var root = s('#app')
    s(root, 'li', el => el.textContent = 'Bye')
    expect(document.querySelectorAll('li')[0].innerHTML).toBe('Bye')
    expect(document.querySelectorAll('li')[1].innerHTML).toBe('Bye')
  })
})
