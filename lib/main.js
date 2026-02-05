const { CompositeDisposable, Disposable } = require("atom");

/**
 * Hydrogen Run Package
 * Provides additional execution commands for Hydrogen kernel integration.
 * Supports various modes of running code cells inline.
 */
module.exports = {
  /**
   * Activates the package and registers execution commands.
   */
  activate() {
    this.disposables = new CompositeDisposable();
    this.disposables.add(
      atom.commands.add("atom-text-editor:not([mini])", {
        "hydrogen-run:clear-and-restart": () => this.clearAndRestart(),
        "hydrogen-run:clear-and-center": () => this.clearAndCenter(),
        "hydrogen-run:recalculate-all": () => this.recalculateAll(),
        "hydrogen-run:recalculate-all-above": () => this.recalculateAllAbove(),
        "hydrogen-run:run-all-inline": () => this.runAllInline(),
        "hydrogen-run:recalculate-all-inline": () =>
          this.recalculateAllInline(),
        "hydrogen-run:run-all-above-inline": () => this.runAllAboveInline(),
        "hydrogen-run:run-all-below-inline": () => this.runAllBelowInline(),
        "hydrogen-run:recalculate-all-above-inline": () =>
          this.recalculateAllAboveInline(),
      })
    );
    this.hydrogen = false; // initialize
  },

  /**
   * Deactivates the package and disposes resources.
   */
  deactivate() {
    this.disposables.dispose();
  },

  /**
   * Consumes the Hydrogen kernel service.
   * @param {Object} hydrogen - The Hydrogen service object
   * @returns {Disposable} Disposable to unregister the service
   */
  consumeHydrogen(hydrogen) {
    this.hydrogen = hydrogen;
    return new Disposable(() => {
      this.hydrogen = false;
    });
  },

  /**
   * Gets the active Hydrogen kernel.
   * @returns {Object|boolean} The active kernel or false if unavailable
   */
  getHydrogenKernel() {
    try {
      return this.hydrogen.getActiveKernel();
    } catch (error) {
      atom.notifications.addError("Hydrogen kernel is not available");
      return false;
    }
  },

  /**
   * Clears results and restarts the Hydrogen kernel.
   */
  clearAndRestart() {
    let kernel = this.getHydrogenKernel();
    if (!kernel) {
      return;
    }
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    let editorView = atom.views.getView(editor);
    this.clearAndCenter();
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel");
  },

  /**
   * Clears results and centers the view on the cursor.
   */
  clearAndCenter() {
    let kernel = this.getHydrogenKernel();
    if (!kernel) {
      return;
    }
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    let editorView = atom.views.getView(editor);
    atom.commands.dispatch(editorView, "hydrogen:clear-results");
    editor.scrollToCursorPosition();
  },

  /**
   * Restarts kernel and runs all code cells.
   */
  recalculateAll() {
    let kernel = this.getHydrogenKernel();
    if (!kernel) {
      return;
    }
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    let editorView = atom.views.getView(editor);
    this.clearAndRestart();
    atom.commands.dispatch(editorView, "hydrogen:run-all");
  },

  /**
   * Restarts kernel and runs all code cells above the cursor.
   */
  recalculateAllAbove() {
    let kernel = this.getHydrogenKernel();
    if (!kernel) {
      return;
    }
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    let editorView = atom.views.getView(editor);
    this.clearAndCenter();
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel");
    atom.commands.dispatch(editorView, "hydrogen:run-all-above");
  },

  /**
   * Runs all code cells inline, one by one from the beginning.
   */
  runAllInline() {
    let kernel = this.getHydrogenKernel();
    if (!kernel) {
      return;
    }
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    let editorView = atom.views.getView(editor);
    let lastRow = editor.getLastBufferRow();
    let currPos = editor.getCursorBufferPosition();
    editor.setCursorBufferPosition([0, 0]);
    for (;;) {
      let currRow = editor.getCursorBufferPosition().row;
      if (currRow < lastRow) {
        atom.commands.dispatch(editorView, "hydrogen:run-and-move-down");
        if (editor.getCursorBufferPosition().row === currRow) {
          editor.moveDown();
        }
      } else if (currRow === lastRow) {
        if (editor.lineTextForBufferRow(lastRow) !== "") {
          atom.commands.dispatch(editorView, "hydrogen:run");
        }
        break;
      } else {
        break;
      }
    }
    editor.setCursorBufferPosition(currPos, { autoscroll: false });
    editor.scrollToBufferPosition(currPos, { center: true });
  },

  /**
   * Restarts kernel and runs all code cells inline.
   */
  recalculateAllInline() {
    let kernel = this.getHydrogenKernel();
    if (!kernel) {
      return;
    }
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    let editorView = atom.views.getView(editor);
    this.clearAndCenter();
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel");
    this.runAllInline();
  },

  /**
   * Runs all code cells above and including the cursor inline.
   */
  runAllAboveInline() {
    let kernel = this.getHydrogenKernel();
    if (!kernel) {
      return;
    }
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    let editorView = atom.views.getView(editor);
    let lastCur = editor.getCursorBufferPosition();
    let lastRow = lastCur.row;
    editor.setCursorBufferPosition([0, 0]);
    for (;;) {
      let currRow = editor.getCursorBufferPosition().row;
      if (currRow < lastRow) {
        atom.commands.dispatch(editorView, "hydrogen:run-and-move-down");
        if (editor.getCursorBufferPosition().row === currRow) {
          editor.moveDown();
        }
      } else if (currRow === lastRow) {
        if (editor.lineTextForBufferRow(lastRow) !== "") {
          atom.commands.dispatch(editorView, "hydrogen:run");
        }
        break;
      } else {
        break;
      }
    }
    editor.setCursorBufferPosition(lastCur);
  },

  /**
   * Restarts kernel and runs all code cells above the cursor inline.
   */
  recalculateAllAboveInline() {
    let kernel = this.getHydrogenKernel();
    if (!kernel) {
      return;
    }
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    let editorView = atom.views.getView(editor);
    this.clearAndCenter();
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel");
    this.runAllAboveInline();
  },

  /**
   * Runs all code cells from cursor to end of file inline.
   */
  runAllBelowInline() {
    let kernel = this.getHydrogenKernel();
    if (!kernel) {
      return;
    }
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
      return;
    }
    let editorView = atom.views.getView(editor);
    let lastRow = editor.getLastBufferRow();
    let currPos = editor.getCursorBufferPosition();
    for (;;) {
      let currRow = editor.getCursorBufferPosition().row;
      if (currRow < lastRow) {
        atom.commands.dispatch(editorView, "hydrogen:run-and-move-down");
        if (editor.getCursorBufferPosition().row === currRow) {
          editor.moveDown();
        }
      } else if (currRow === lastRow) {
        if (editor.lineTextForBufferRow(lastRow) !== "") {
          atom.commands.dispatch(editorView, "hydrogen:run");
        }
        break;
      } else {
        break;
      }
    }
    editor.setCursorBufferPosition(currPos);
    editor.scrollToBufferPosition(currPos, { center: true });
  },
};
