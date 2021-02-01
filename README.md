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
* `inline` -- computing go one breakpoint after one (instead of pushing all text to python interpreter instantly), this way you got result next to breakpoints. Inline methods inherit all limitations of hydrogen package, e.g. in python the block `if ... else ...` need to be extended, but it's not.

  ![inline-gif](ppt-1.gif)


## Run/recalculate all/above text

```
'f5'          : 'hydrogen:run-all'
'alt-f5'      : 'hydrogen-run:recalculate-all'
'shift-f5'    : 'hydrogen:run-all-above'
'ctrl-f5'     : 'hydrogen-run:recalculate-all-above'
```


## Inline run/recalculate all/above text

```
'f6'          : 'hydrogen-run:run-all-inline'
'alt-f6'      : 'hydrogen-run:recalculate-all-inline'
'shift-f6'    : 'hydrogen-run:run-all-above-inline'
'ctrl-f6'     : 'hydrogen-run:recalculate-all-above-inline'
```


## Run breakpoint/cell + clear/interrupt

```
'f7'          : 'hydrogen:run'
'ctrl-f7'     : 'hydrogen:run-cell'
'alt-f7'      : 'hydrogen:clear-results'
'shift-f7'    : 'hydrogen:interrupt-kernel'
```


## Run breakpoint/cell and move down + restart/shutdown

```
'f8'          : 'hydrogen:run-and-move-down'
'ctrl-f8'     : 'hydrogen:run-cell-and-move-down'
'alt-f8'      : 'hydrogen-run:clear-and-restart'
'shift-f8'    : 'hydrogen:shutdown-kernel'
```


## Additional

```
'f9'          : 'hydrogen:toggle-inspector'
```
