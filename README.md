# Eleventy boilerplate for Visual Framework 2.0

This allows you to use the [11ty](https://www.11ty.io) static site generator
with direct access to Visual Framework 2.0 components.

## Cloning this repo

You can clone the files to your project by:

- `curl https://registry.npmjs.org/\@visual-framework/vf-boilerplate-eleventy/-/vf-boilerplate-eleventy-2.0.0-alpha.1.tgz  -o vf-boilerplate-eleventy.tgz`
- `tar -xzf vf-boilerplate-eleventy.tgz`
- `cd package`
- `mv * ..`
- `cd ..`

## Local development

You'll need to [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then:

1. If you don't have `yarn`, install it
   - https://yarnpkg.com/lang/en/docs/install/
2. Install all the things
   - `yarn install`
3. Generate the site in `/build`
   - `gulp dev` renders and serves
   - `gulp build` build static assets

## Adding Visual Framework components

To add a component you can use npm/Yarn or install it manually.

### By package

- installation: `yarn add @visual-framework/vf-logo`
- updating components: `yarn upgrade-interactive --latest`
  - alias: `npm run update-components`

### Manual installation for customisation

1. Download a pattern
2. Copy it to `./src/components/vf-component-name`

In either case you'll need to re-run `npm run-script dev` to access the pattern.

## Footnotes

- Why `yarn` and not `npm`?
  For the particular structure of the Visual Framework components, Yarn is considerably
  faster at installing and does so more efficiently (about half the total file size). You'll
  also be able to use `yarn upgrade-interactive --latest`, which makes it easier to update
  VF components.
