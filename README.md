# Compare

Primitive set of functions to compare boolean, string, or number.

## Installation

```sh
npm install @idlework/compare --save
yarn add @idlework/compare
```

## Usage

```javascript
import {
  equal,
  greaterThan,
  greaterThanOrEqual,
  lessThan,
  lessThanOrEqual,
} from "@idlework/compare"
// or
import * as compare from "@idlework/compare"
// or
const {
  equal,
  greaterThan,
  greaterThanOrEqual,
  lessThan,
  lessThanOrEqual,
} = require("@idlework/compare")
// or
const compare = require("@idlework/compare")

// supported types for equal are boolean, string, number, object, and array.
const isEqual = equal(true, true)
const isEqual = equal("a", "a")
const isEqual = equal(1, 1)
const isEqual = equal(obj, obj)
const isEqual = equal(arr, arr)

// other compare functions, these work best with boolean, string, and number.
const isGreaterThan = greaterThan(2, 1)
const isGreaterThanOrEqual = greaterThanOrEqual(2, 1)
const isLessThan = lessThan(2, 1)
const isLesserThanOrEqual = lessThanOrEqual(2, 1)
```

## Contributing

Issues are welcome. The best way to report a problem is to reproduce it with a code example.

Pull requests are welcome. If you want to change the API, it's better to discuss it using an issue ticket.

## License

Compare is [MIT licensed](./LICENSE).
