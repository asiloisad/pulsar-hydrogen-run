# hydrogen-run

## Introduction

The package extends the available methods to computing with [hydrogen](https://atom.io/packages/hydrogen). The scope include:

* `hydrogen-run:clear-and-restart`
* `hydrogen-run:recalculate-all`
* `hydrogen-run:recalculate-all-above`
* `hydrogen-run:run-all-inline`
* `hydrogen-run:recalculate-all-inline`
* `hydrogen-run:run-all-above-inline`
* `hydrogen-run:run-all-below-inline`
* `hydrogen-run:recalculate-all-above-inline`

Explanation of new concepts:

* `recalculate` -- clear result + restart kernel + run calculation
* `inline` -- computing go one breakpoint after one (instead of pushing all text to python interpreter instatly), this way you got result next to breakpoints. Inline methods inherit all limitations of hydrogen package, e.g. in python scope breakpoint need to be extend for full statment, but it's not.

![inline-gif](ppt-1.gif)

## Keymap

The important is package introduce complete keymap to use hydrogen. All shortcuts are defined in `atom-text-editor:not([mini])` scope.

* run/recalculate all/above text
```
'f5'          : 'hydrogen:run-all'
'alt-f5'      : 'hydrogen-run:recalculate-all'
'shift-f5'    : 'hydrogen:run-all-above'
'ctrl-f5'     : 'hydrogen-run:recalculate-all-above'
```

* inline run/recalculate all/above text
```
'f6'          : 'hydrogen-run:run-all-inline'
'alt-f6'      : 'hydrogen-run:recalculate-all-inline'
'shift-f6'    : 'hydrogen-run:run-all-above-inline'
'ctrl-f6'     : 'hydrogen-run:recalculate-all-above-inline'
```

* run breakpoint/cell + clear/interrupt
```
'f7'          : 'hydrogen:run'
'ctrl-f7'     : 'hydrogen:run-cell'

'alt-f7'      : 'hydrogen:clear-results'
'shift-f7'    : 'hydrogen:interrupt-kernel'
```

* run breakpoint/cell and move down + restart/shutdown
```
'f8'          : 'hydrogen:run-and-move-down'
'ctrl-f8'     : 'hydrogen:run-cell-and-move-down'

'alt-f8'      : 'hydrogen-run:clear-and-restart'
'shift-f8'    : 'hydrogen:shutdown-kernel'
```

* additional
```
'f9'          : 'hydrogen:toggle-inspector'
```

## See another bacadra packages...

* [bacadra-atom](https://github.com/bacadra/bacadra-atom)
* [bib-finder](https://github.com/bacadra/bib-finder)
* [fold-section](https://github.com/bacadra/fold-section)
* [hydrogen-run](https://github.com/bacadra/hydrogen-run)
* [language-bacadra](https://github.com/bacadra/language-bacadra)
* [language-sofistik](https://github.com/bacadra/language-sofistik)
* [navigation-pane](https://github.com/bacadra/navigation-pane)
* [sofistik-atom](https://github.com/bacadra/sofistik-atom)
* [word-map](https://github.com/bacadra/word-map)
