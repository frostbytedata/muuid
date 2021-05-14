# muuid
Memorable UUID generator written in JS with up to *10.5 Billion* possible combinations.

## Installation
```shell 
npm install muuid --save
```
## Usage

Code:
```js
const muuid = require('muuid')

const muuids = muuid({
  quantity: 10
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

## Config Options

