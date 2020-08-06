const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(express.static(path.join(__dirname, 'public')))

app.all(
  '*',
  (() => {
    const allowHeaders = ['token', 'Content-Type'].join(',')
    const allowMethods = ['POST', 'GET', 'HEAD', 'OPTIONS'].join(',')
    const allowMaxAge = 60 * 60
    return (req, res, next) => {
      res.header('Access-Control-Allow-Origin', req.headers.origin)
      res.header('Access-Control-Allow-Headers', allowHeaders)
      res.header('Access-Control-Allow-Methods', allowMethods)
      res.header('Access-Control-Allow-Max-Age', allowMaxAge)

      if (req.method.toLowerCase() === 'options') res.sendStatus(200)
      else next()
    }
  })()
)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next()
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
