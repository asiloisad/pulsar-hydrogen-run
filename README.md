# hydrogen-run

A superset of commands to improve hydrogen workflow.

![demo](https://github.com/asiloisad/hydrogen-run/blob/master/assets/demo.gif?raw=true)

Consider to use [hydrogen-next](https://github.com/asiloisad/pulsar-hydrogen-next) or [jupyter-next](https://github.com/asiloisad/pulsar-jupyter-next) instead.

## Installation

To install `hydrogen-run` search for [hydrogen-run](https://web.pulsar-edit.dev/packages/hydrogen-run) in the Install pane of the Pulsar settings or run `ppm install hydrogen-run`. Alternatively, you can run `ppm install asiloisad/pulsar-hydrogen-run` to install a package directly from the GitHub repository.

Requires [hydrogen-next](https://web.pulsar-edit.dev/packages/hydrogen-next) or [hydrogen](https://github.com/nteract/hydrogen).

## New concepts

The package introduce two new concepts of evaluation:

- `recalculate`: clear result -> restart kernel -> run calculation,
- `inline`: calculation is going one breakpoint after one instead of pushing all text to python interpreter instantly. This way you got result next to breakpoints. Inline methods inherit all limitations of hydrogen package, e.g. in Python `if ... else ...` is broken.

## Commands

Commands available in `atom-text-editor:not([mini])`:

- `hydrogen:run-all`: (`F5`) push all text in single run,
- `hydrogen-run:recalculate-all`: (`Alt+F5`) clear results, reset kernel and push all text in single run,
- `hydrogen:run-all-above`: (`Shift+F5`) push above text in single run,
- `hydrogen-run:recalculate-all-above`: (`Ctrl+F5`) clear results, reset kernel and push above text in single run,
- `hydrogen-run:run-all-inline`: (`F6`) push all text in multiple runs,
- `hydrogen-run:recalculate-all-inline`: (`Alt+F6`) clear results, reset kernel and push all text in multiple runs,
- `hydrogen-run:run-all-above-inline`: (`Shift+F6`) push above text in multiple runs,
- `hydrogen-run:recalculate-all-above-inline`: (`Ctrl+F6`) clear results, reset kernel and push above text in multiple runs,
- `hydrogen:run`: (`F7`) run single statement in single run,
- `hydrogen:run-cell`: (`Ctrl+F7`) run cell in single run,
- `hydrogen:clear-and-center`: (`Alt+F7`) clear results and scroll text editor to cursor,
- `hydrogen:interrupt-kernel`: (`Shift+F7`) interrupt kernel,
- `hydrogen:run-and-move-down`: (`F8`) run single statement and go to next statement,
- `hydrogen:run-cell-and-move-down`: (`Ctrl+F8`) run single cell and go to next cell,
- `hydrogen-run:clear-and-restart`: (`Alt+F8`) clear results and restart kernel,
- `hydrogen:shutdown-kernel`: (`Shift+F8`) shutdown kernel,
- `hydrogen:toggle-inspector`: (`F9`) toggle inspector pane.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback's welcome!
