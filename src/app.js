console.log('this is app.js')
import('./a.css').then(name => {
  console.log('now load the css in browser', name)
})
import('./b.css')
import('./c.css')
