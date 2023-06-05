# hydrogen-run

<p align="center">
  <a href="https://github.com/bacadra/atom-hydrogen-run/tags">
  <img src="https://img.shields.io/github/v/tag/bacadra/atom-hydrogen-run?style=for-the-badge&label=Latest&color=blue" alt="Latest">
  </a>
  <a href="https://github.com/bacadra/atom-hydrogen-run/issues">
  <img src="https://img.shields.io/github/issues-raw/bacadra/atom-hydrogen-run?style=for-the-badge&color=blue" alt="OpenIssues">
  </a>
  <a href="https://github.com/bacadra/atom-hydrogen-run/blob/master/package.json">
  <img src="https://img.shields.io/github/languages/top/bacadra/atom-hydrogen-run?style=for-the-badge&color=blue" alt="Language">
  </a>
  <a href="https://github.com/bacadra/atom-hydrogen-run/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/bacadra/atom-hydrogen-run?style=for-the-badge&color=blue" alt="Licence">
  </a>
</p>

![hydrogen-run](https://github.com/bacadra/hydrogen-run/blob/master/assets/hydrogen-run.gif?raw=true)

The package extends the available methods to computing with [hydrogen](https://github.com/nteract/hydrogen).

## Installation

### Atom Text Editor

The official Atom packages store has been [disabled](https://github.blog/2022-06-08-sunsetting-atom/). To get latest version run the shell command

    apm install bacadra/atom-hydrogen-run

and obtain the package directly from Github repository.

### Pulsar Text Editor

The package has compability with [Pulsar](https://pulsar-edit.dev/) and can be install

    ppm install bacadra/atom-hydrogen-run

or directly [hydrogen-run](https://web.pulsar-edit.dev/packages/hydrogen-run) from Pulsar package store.

## New concepts

The package introduce two new concepts of evaluation:

* `recalculate`: clear result + restart kernel + run calculation,
* `inline`: computing go one breakpoint after one (instead of pushing all text to python interpreter instantly), this way you got result next to breakpoints. Inline methods inherit all limitations of hydrogen package, e.g. in python the block `if ... else ...` need to be extended, but it's not.

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

# Contributing [🍺](https://www.buymeacoffee.com/asiloisad)

If you have ideas on how to improve the package, see bugs or want to support new features - feel free to share it via GitHub.

See my other packages for Atom & Pulsar Text Editors:
<p align="center">
<a href="https://github.com/bacadra/atom-autocomplete-sofistik"><img src="https://img.shields.io/github/v/tag/bacadra/atom-autocomplete-sofistik?style=for-the-badge&label=autocomplete-sofistik&color=blue" alt="autocomplete-sofistik">
<a href="https://github.com/bacadra/atom-bib-finder"><img src="https://img.shields.io/github/v/tag/bacadra/atom-bib-finder?style=for-the-badge&label=bib-finder&color=blue" alt="bib-finder">
<a href="https://github.com/bacadra/atom-hydrogen-run"><img src="https://img.shields.io/github/v/tag/bacadra/atom-hydrogen-run?style=for-the-badge&label=hydrogen-run&color=blue" alt="hydrogen-run">
<a href="https://github.com/bacadra/atom-image-paste"><img src="https://img.shields.io/github/v/tag/bacadra/atom-image-paste?style=for-the-badge&label=image-paste&color=blue" alt="image-paste">
<a href="https://github.com/bacadra/atom-language-latex"><img src="https://img.shields.io/github/v/tag/bacadra/atom-language-latex?style=for-the-badge&label=language-latex&color=blue" alt="language-latex">
<a href="https://github.com/bacadra/atom-language-sofistik"><img src="https://img.shields.io/github/v/tag/bacadra/atom-language-sofistik?style=for-the-badge&label=language-sofistik&color=blue" alt="language-sofistik">
<a href="https://github.com/bacadra/atom-linter-ruff"><img src="https://img.shields.io/github/v/tag/bacadra/atom-linter-ruff?style=for-the-badge&label=linter-ruff&color=blue" alt="linter-ruff">
<a href="https://github.com/bacadra/atom-linter-sofistik"><img src="https://img.shields.io/github/v/tag/bacadra/atom-linter-sofistik?style=for-the-badge&label=linter-sofistik&color=blue" alt="linter-sofistik">
<a href="https://github.com/bacadra/atom-navigation-panel"><img src="https://img.shields.io/github/v/tag/bacadra/atom-navigation-panel?style=for-the-badge&label=navigation-panel&color=blue" alt="navigation-panel">
<a href="https://github.com/bacadra/atom-open-external"><img src="https://img.shields.io/github/v/tag/bacadra/atom-open-external?style=for-the-badge&label=open-external&color=blue" alt="open-external">
<a href="https://github.com/bacadra/atom-pdf-viewer"><img src="https://img.shields.io/github/v/tag/bacadra/atom-pdf-viewer?style=for-the-badge&label=pdf-viewer&color=blue" alt="pdf-viewer">
<a href="https://github.com/bacadra/atom-project-files"><img src="https://img.shields.io/github/v/tag/bacadra/atom-project-files?style=for-the-badge&label=project-files&color=blue" alt="project-files">
<a href="https://github.com/bacadra/atom-regex-aligner"><img src="https://img.shields.io/github/v/tag/bacadra/atom-regex-aligner?style=for-the-badge&label=regex-aligner&color=blue" alt="regex-aligner">
<a href="https://github.com/bacadra/atom-sofistik-tools"><img src="https://img.shields.io/github/v/tag/bacadra/atom-sofistik-tools?style=for-the-badge&label=sofistik-tools&color=blue" alt="sofistik-tools">
<a href="https://github.com/bacadra/atom-super-select"><img src="https://img.shields.io/github/v/tag/bacadra/atom-super-select?style=for-the-badge&label=super-select&color=blue" alt="super-select">
<a href="https://github.com/bacadra/atom-word-map"><img src="https://img.shields.io/github/v/tag/bacadra/atom-word-map?style=for-the-badge&label=word-map&color=blue" alt="word-map">
</p>
