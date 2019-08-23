const Purgecss = require('purgecss')

exports.handler = function(event, context, callback) {
  const purgeCss = new Purgecss({
    content: ['**/*.html'],
    css: ['**/*.css']
  })
  const result = purgeCss.purge()

  callback(null, {
    statusCode: 200,
    body: result
  });
}