# hydrogen-run

A superset of commands to improve hydrogen workflow.

![demo](https://github.com/asiloisad/pulsar-hydrogen-run/blob/master/assets/demo.gif?raw=true)

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

- `hydrogen:run-all`: <kbd>F5</kbd> push all text in single run,
- `hydrogen-run:recalculate-all`: <kbd>Alt+F5</kbd> clear results, reset kernel and push all text in single run,
- `hydrogen:run-all-above`: <kbd>Shift+F5</kbd> push above text in single run,
- `hydrogen-run:recalculate-all-above`: <kbd>Ctrl+F5</kbd> clear results, reset kernel and push above text in single run,
- `hydrogen-run:run-all-inline`: <kbd>F6</kbd> push all text in multiple runs,
- `hydrogen-run:recalculate-all-inline`: <kbd>Alt+F6</kbd> clear results, reset kernel and push all text in multiple runs,
- `hydrogen-run:run-all-above-inline`: <kbd>Shift+F6</kbd> push above text in multiple runs,
- `hydrogen-run:recalculate-all-above-inline`: <kbd>Ctrl+F6</kbd> clear results, reset kernel and push above text in multiple runs,
- `hydrogen:run`: <kbd>F7</kbd> run single statement in single run,
- `hydrogen:run-cell`: <kbd>Ctrl+F7</kbd> run cell in single run,
- `hydrogen:clear-and-center`: <kbd>Alt+F7</kbd> clear results and scroll text editor to cursor,
- `hydrogen:interrupt-kernel`: <kbd>Shift+F7</kbd> interrupt kernel,
- `hydrogen:run-and-move-down`: <kbd>F8</kbd> run single statement and go to next statement,
- `hydrogen:run-cell-and-move-down`: <kbd>Ctrl+F8</kbd> run single cell and go to next cell,
- `hydrogen-run:clear-and-restart`: <kbd>Alt+F8</kbd> clear results and restart kernel,
- `hydrogen:shutdown-kernel`: <kbd>Shift+F8</kbd> shutdown kernel,
- `hydrogen:toggle-inspector`: <kbd>F9</kbd> toggle inspector pane.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
