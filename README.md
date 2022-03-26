# half
quick base frame
- https://pinkromeo18.github.io/half/half.js
- https://pinkromeo18.github.io/half/half.css
```css
@import url(https://pinkromeo18.github.io/half/half.css)
```

```js
import "https://pinkromeo18.github.io/use/use.js"
import {half} from "https://pinkromeo18.github.io/half/half.js"
var {$left,$right,$half}=half();

var el=fn.i3('<div class="debug"></div>');
fn.a2(el,$left)
fn.a2(el.cloneNode(),$right)

```
