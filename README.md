# Eleventy boilerplate for Visual Framework 2.0

This allows you to use the [11ty](https://www.11ty.io) static site generator
with direct access to Visual Framework 2.0 components.

## Local development

You'll need to [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then:

1. Install all the npm moudles
   - `npm install`
   - `npm install eleventy -g`
2. Generate `/public`
   - `gulp dev` renders and serves
   - `gulp build` build static assets

## Adding Visual Framework components

To add a component you can use npm or install it manually.

### npm installation

- `npm i @visual-framework/vf-logo`

### Manual installation for customisation

1. Download a pattern
2. Copy it to `./src/components/vf-component-name`

In either case you'll need to re-run `npm run-script dev` to access the pattern.
