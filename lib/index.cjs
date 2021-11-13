let fs = require('fs')
let path = require('path')
let loaderUtils = require('loader-utils')
let validateOptions = require('schema-utils')
let inlineCss = require('inline-css')

let schema = {
  type: 'object',
  properties: { path: { type: 'string' }}
}

module.exports = function(source) {
  // Get and check options
  let options = loaderUtils.getOptions(this) || {}
  validateOptions(schema, options, 'html inline css loader')

  // Is cacheable
  this.cacheable && this.cacheable()
  let callback = this.async()

  // Define "path" to change where files are sourced. Fallback is the resources directory.
  let url = path.join("file://", process.cwd(), options.path || '', '/')
  if (typeof options.path == 'undefined') url = path.join("file://", this.context, '/')

  // Apply some transformations to the source...
  inlineCss(source, {
    url: url,
    removeLinkTags: false,
    preserveMediaQueries: true,
    ...options
  }).then(html => {
    callback(null, html)

  }).catch(err => {
    callback(new Error(err))
  })
}
