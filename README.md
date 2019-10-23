# html-inline-css-loader

This is a webpack loader that inlines or embeds CSS within HTML using `inline-css` and `juice`.

``` javascript
rules: [
  {
    test: /\.html$/,
    use: [
      { loader: 'file-loader' },
      { loader: 'html-inline-css-loader' }
    ]
  }
]
```

### Roadmap

- `cpselvis/inline-html-loader`
- `hxfdarling/html-inline-assets-loader`
