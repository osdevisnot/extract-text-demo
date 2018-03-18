console.log('this is app.js')

setTimeout(() => {
    import('./a.css').then(name => {
        console.log('loaded a.css in browser');
    })
}, 5000);

setTimeout(() => {
    import('./b.css').then(name => {
      console.log('loaded b.css in browser');
    })
}, 10000)

setTimeout(() => {
    import('./c.css').then(_ => {
      console.log('loaded c.css in browser')
    })
}, 15000)



