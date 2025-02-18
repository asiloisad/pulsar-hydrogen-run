# hydrogen-run

A superset of commands to improve [hydrogen](https://github.com/nteract/hydrogen) workflow.

![demo](https://github.com/asiloisad/hydrogen-run/blob/master/assets/demo.gif?raw=true)

## Installation

To install `hydrogen-run` search for [hydrogen-run](https://web.pulsar-edit.dev/packages/hydrogen-run) in the Install pane of the Pulsar settings or run `ppm install hydrogen-run`. Alternatively, you can run `ppm install asiloisad/pulsar-hydrogen-run` to install a package directly from the Github repository.

## New concepts

The package introduce two new concepts of evaluation:

- `recalculate`: clear result -> restart kernel -> run calculation,
- `inline`: calculation is going one breakpoint after one instead of pushing all text to python interpreter instantly. This way you got result next to breakpoints. Inline methods inherit all limitations of hydrogen package, e.g. in Python `if ... else ...` is broken.

## List of commands

The commands have been assigned to the function keys with optional modifier keys. There are few method from [hydrogen](https://github.com/nteract/hydrogen) package which have been assigned too.

| Shorcut | Command | Description |
| -: | - | - |
| <div style="white-space:nowrap">`F5`      </div> | <div style="white-space:nowrap">`hydrogen:run-all`                         </div> | push all text in single run; standard method of Hydrogen |
| <div style="white-space:nowrap">`Alt-F5`  </div> | <div style="white-space:nowrap">`hydrogen-run:recalculate-all`             </div> | clear results, reset kernel and push all text in single run |
| <div style="white-space:nowrap">`Shift-F5`</div> | <div style="white-space:nowrap">`hydrogen:run-all-above`                   </div> | push above text in single run |
| <div style="white-space:nowrap">`Ctrl-F5` </div> | <div style="white-space:nowrap">`hydrogen-run:recalculate-all-above`       </div> | clear results, reset kernel and push above text in single run |
| <div style="white-space:nowrap">`F6`      </div> | <div style="white-space:nowrap">`hydrogen-run:run-all-inline`              </div> | push all text in multiple runs |
| <div style="white-space:nowrap">`Alt-F6`  </div> | <div style="white-space:nowrap">`hydrogen-run:recalculate-all-inline`      </div> | clear results, reset kernel and push all text in multiple runs |
| <div style="white-space:nowrap">`Shift-F6`</div> | <div style="white-space:nowrap">`hydrogen-run:run-all-above-inline`        </div> | push above text in multiple runs |
| <div style="white-space:nowrap">`Ctrl-F6` </div> | <div style="white-space:nowrap">`hydrogen-run:recalculate-all-above-inline`</div> | clear results, reset kernel and push above text in multiple runs  |
| <div style="white-space:nowrap">`F7`      </div> | <div style="white-space:nowrap">`hydrogen:run`                             </div> | run single statement in single run |
| <div style="white-space:nowrap">`Ctrl-F7` </div> | <div style="white-space:nowrap">`hydrogen:run-cell`                        </div> | run cell in single run |
| <div style="white-space:nowrap">`Alt-F7`  </div> | <div style="white-space:nowrap">`hydrogen:clear-and-center`                </div> | clear results and scroll text editor to cursor |
| <div style="white-space:nowrap">`Shift-F7`</div> | <div style="white-space:nowrap">`hydrogen:interrupt-kernel`                </div> | interrupt kernel |
| <div style="white-space:nowrap">`F8`      </div> | <div style="white-space:nowrap">`hydrogen:run-and-move-down`               </div> | run single statement and go to next statement |
| <div style="white-space:nowrap">`Ctrl-F8` </div> | <div style="white-space:nowrap">`hydrogen:run-cell-and-move-down`          </div> | run single cell and go to next cell |
| <div style="white-space:nowrap">`Alt-F8`  </div> | <div style="white-space:nowrap">`hydrogen-run:clear-and-restart`           </div> | clear results and restart kernel |
| <div style="white-space:nowrap">`Shift-F8`</div> | <div style="white-space:nowrap">`hydrogen:shutdown-kernel`                 </div> | shutdown kernel |
| <div style="white-space:nowrap">`F9`      </div> | <div style="white-space:nowrap">`hydrogen:toggle-inspector`                </div> | toggle inspector pane |

# Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback’s welcome!
