'use babel'

import { CompositeDisposable } from 'atom'

export default {

  activate (_state) {
    this.disposables = new CompositeDisposable()
    this.disposables.add(
      atom.commands.add('atom-text-editor', {
        'hydrogen-run:clear-and-restart': () => this.clearAndRestart(),
        'hydrogen-run:clear-and-center': () => this.clearAndCenter(),
        'hydrogen-run:recalculate-all': () => this.recalculateAll(),
        'hydrogen-run:recalculate-all-above': () => this.recalculateAllAbove(),
        'hydrogen-run:run-all-inline': () => this.runAllInline(),
        'hydrogen-run:recalculate-all-inline': () => this.recalculateAllInline(),
        'hydrogen-run:run-all-above-inline': () => this.runAllAboveInline(),
        'hydrogen-run:run-all-below-inline': () => this.runAllBelowInline(),
        'hydrogen-run:recalculate-all-above-inline': () => this.recalculateAllAboveInline(),
      })
    )
  },

  deactivate() {
    this.disposables.dispose()
  },

  clearAndRestart() {
    editor = atom.workspace.getActiveTextEditor();
    if (!editor) {return}
    editorView = atom.views.getView(editor);
    this.clearAndCenter()
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel");
  },

  clearAndCenter() {
    editor = atom.workspace.getActiveTextEditor();
    if (!editor) {return}
    editorView = atom.views.getView(editor);
    atom.commands.dispatch(editorView, "hydrogen:clear-results");
    editor.scrollToCursorPosition()
  },

  recalculateAll() {
    editor = atom.workspace.getActiveTextEditor();
    if (!editor) {return}
    editorView = atom.views.getView(editor);
    this.clearAndRestart();
    atom.commands.dispatch( editorView, "hydrogen:run-all");
  },

  recalculateAllAbove() {
    editor = atom.workspace.getActiveTextEditor();
    if (!editor) {return}
    editorView = atom.views.getView(editor);
    this.clearAndCenter()
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel");
    atom.commands.dispatch(editorView, "hydrogen:run-all-above");
  },

  runAllInline() {
    editor = atom.workspace.getActiveTextEditor();
    if (!editor) {return}
    editorView = atom.views.getView(editor);
    lastRow = editor.getLastBufferRow()
    currPos = editor.getCursorBufferPosition()
    editor.setCursorBufferPosition([0,0])
    while (true) {
      currRow = editor.getCursorBufferPosition().row
      if (currRow<lastRow) {
        atom.commands.dispatch( editorView, "hydrogen:run-and-move-down");
        if (editor.getCursorBufferPosition().row==currRow) {
          editor.moveDown()
        }
      } else if (currRow==lastRow) {
        if (editor.lineTextForBufferRow(lastRow)!=='') {
          atom.commands.dispatch( editorView, "hydrogen:run");
        }
        break
      } else {
        break
      }
    }
    editor.setCursorBufferPosition(currPos, {autoscroll:false})
    editor.scrollToBufferPosition(currPos, {center:true})
  },

  recalculateAllInline() {
    editor = atom.workspace.getActiveTextEditor();
    if (!editor) {return}
    editorView = atom.views.getView(editor);
    this.clearAndCenter()
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel");
    this.runAllInline();
  },

  runAllAboveInline() {
    editor = atom.workspace.getActiveTextEditor();
    if (!editor) {return}
    editorView = atom.views.getView(editor);
    lastCur = editor.getCursorBufferPosition()
    lastRow = lastCur.row
    editor.setCursorBufferPosition([0,0])
    while (true) {
      currRow = editor.getCursorBufferPosition().row
      if (currRow<lastRow) {
        atom.commands.dispatch( editorView, "hydrogen:run-and-move-down");
        if (editor.getCursorBufferPosition().row==currRow) {
          editor.moveDown()
        }
      } else if (currRow==lastRow) {
        if (editor.lineTextForBufferRow(lastRow)!=='') {
          atom.commands.dispatch( editorView, "hydrogen:run");
        }
        break
      } else {
        break
      }
    }
    editor.setCursorBufferPosition(lastCur)
  },

  recalculateAllAboveInline() {
    editor = atom.workspace.getActiveTextEditor();
    if (!editor) {return}
    editorView = atom.views.getView(editor);
    this.clearAndCenter()
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel");
  this.runAllAboveInline();
  },

  runAllBelowInline() {
    editor = atom.workspace.getActiveTextEditor();
    if (!editor) {return}
    editorView = atom.views.getView(editor);
    lastRow = editor.getLastBufferRow()
    currPos = editor.getCursorBufferPosition()
    while (true) {
      currRow = editor.getCursorBufferPosition().row
      if (currRow<lastRow) {
        atom.commands.dispatch(editorView, "hydrogen:run-and-move-down");
        if (editor.getCursorBufferPosition().row==currRow) {
          editor.moveDown()
        }
      } else if (currRow==lastRow) {
        if (editor.lineTextForBufferRow(lastRow)!=='') {
          atom.commands.dispatch(editorView, "hydrogen:run");
        }
        break
      } else {
        break
      }
    }
    editor.setCursorBufferPosition(currPos)
    editor.scrollToBufferPosition(currPos, {center:true})
  },

};
