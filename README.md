# SORD
Microscopic replacement for `document.querySelector` and `document.querySelectorAll`.

Only about 200 bytes uncompressed.

### Install
`npm i sord`

### Usage
```javascript
// From module
var s = require('sord')

// Find HTML element
s('#app')

// Find element inside el
s(el, 'input')

// Use callback instead of querySelectorAll
s('p', el => el.textContent = 'hello')

// Callback with root, default root is document.body
s(document, 'p', (el, root) => {
  el.textContent = 'hello'
  root.style.opacity = 0.5
})
```
ISC licensed. Enjoy!
