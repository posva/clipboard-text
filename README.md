# clipboard-text [![Build Status](https://github.com/posva/clipboard-text/workflows/test/badge.svg)](https://github.com/posva/pinia/actions/workflows/test.yml) [![npm package](https://badgen.net/npm/v/clipboard-text)](https://www.npmjs.com/package/clipboard-text)

> Simple and small copy-text-to-the-clipboard-utility with IE11 support

## Installation

```sh
npm install clipboard-text
```

## Usage

```js
import copy from 'clipboard-text'

button.addEventListener('click', () => {
  copy('Hi there')
})
```

## API

### copy(text: string, parentElement?: Element): boolean

Copy `text` to the clipboard.

If the event triggering the `copy` functions comes from an element with a focus
trap, like a Modal, you will need to provide a `parentElement`. By default,
`parentElement` is set to `body`.

Returns a boolean of whether it succeeded to copy the text.

Must be called in response to a user gesture event, like click or keyup.

## Related

- [copy-text-to-clipboard](https://github.com/sindresorhus/copy-text-to-clipboard) -
  Original package with no support for IE and no support for focus traps

## License

[MIT](http://opensource.org/licenses/MIT)
