<h1 align="center">Welcome to @frostbytedata/muuid 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@frostbytedata/muuid" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@frostbytedata/muuid.svg">
  </a>
  <a href="https://github.com/frostbytedata/muuid#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/frostbytedata/muuid/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/frostbytedata/muuid/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/frostbytedata/@frostbytedata/muuid" />
  </a>
</p>

> Memorable UUID generator written in JS with up to 10.5 Billion possible combinations.

### 🏠 [Homepage](https://github.com/frostbytedata/muuid#readme)


## Installation
```shell 
npm install muuid --save
```
---
## Usage

Code:
```js
const muuid = require('muuid')

const muuids = muuid({
  quantity: 10,
  format: ['adjective', 'color', 'verb', 'noun', 'number']
})

console.info(muuids)
```
Outputs:

```js
[
  'beautiful-midnight-blue-tiptoeing-fisher-65',
  'courageous-black-kissing-wren-29',
  'energetic-lavender-believing-moose-27',
  'lovely-steel-blue-fiending-axolotl-71',
  'determined-black-leading-angelfish-37',
  'glamorous-aquamarine-trotting-grasshopper-38',
  'blushing-magenta-boolin-camel-34',
  'bright-deep-pink-weaving-steer-23',
  'pleasant-rose-helping-macaque-42',
  'bewildered-goldenrod-crawling-coyote-93'
]
```
---
## Config Options

`format` An array of strings that 
determines how the muuid will be structured. 
The order of types is used when the id is generated. 
It can take the following format types:
```js
['adjective', 'color', 'verb', 'noun', 'number']
```

`quantity` How many ids you want to batch generate at a single time.

---

## Run tests

```sh
npm run test
```
---
## Author

👤 **Parker Lawson**

* Website: http://frostbytedata.com
* Github: [@frostbytedata](https://github.com/frostbytedata)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/frostbytedata/muuid/issues). You can also take a look at the [contributing guide](https://github.com/frostbytedata/muuid/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Parker Lawson](https://github.com/frostbytedata).<br />
This project is [MIT](https://github.com/frostbytedata/muuid/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_