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
    let editor = atom.workspace.getActiveTextEditor()
    if (!editor) {return}
    let editorView = atom.views.getView(editor)
    this.clearAndCenter()
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel")
  },

  clearAndCenter() {
    let editor = atom.workspace.getActiveTextEditor()
    if (!editor) {return}
    let editorView = atom.views.getView(editor)
    atom.commands.dispatch(editorView, "hydrogen:clear-results")
    editor.scrollToCursorPosition()
  },

  recalculateAll() {
    let editor = atom.workspace.getActiveTextEditor()
    if (!editor) {return}
    let editorView = atom.views.getView(editor)
    this.clearAndRestart()
    atom.commands.dispatch( editorView, "hydrogen:run-all")
  },

  recalculateAllAbove() {
    let editor = atom.workspace.getActiveTextEditor()
    if (!editor) {return}
    let editorView = atom.views.getView(editor)
    this.clearAndCenter()
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel")
    atom.commands.dispatch(editorView, "hydrogen:run-all-above")
  },

  runAllInline() {
    let editor = atom.workspace.getActiveTextEditor()
    if (!editor) {return}
    let editorView = atom.views.getView(editor)
    let lastRow = editor.getLastBufferRow()
    let currPos = editor.getCursorBufferPosition()
    editor.setCursorBufferPosition([0,0])
    while (true) {
      let currRow = editor.getCursorBufferPosition().row
      if (currRow<lastRow) {
        atom.commands.dispatch( editorView, "hydrogen:run-and-move-down")
        if (editor.getCursorBufferPosition().row==currRow) {
          editor.moveDown()
        }
      } else if (currRow==lastRow) {
        if (editor.lineTextForBufferRow(lastRow)!=='') {
          atom.commands.dispatch( editorView, "hydrogen:run")
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
    let editor = atom.workspace.getActiveTextEditor()
    if (!editor) {return}
    let editorView = atom.views.getView(editor)
    this.clearAndCenter()
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel")
    this.runAllInline()
  },

  runAllAboveInline() {
    let editor = atom.workspace.getActiveTextEditor()
    if (!editor) {return}
    let editorView = atom.views.getView(editor)
    let lastCur = editor.getCursorBufferPosition()
    let lastRow = lastCur.row
    editor.setCursorBufferPosition([0,0])
    while (true) {
      let currRow = editor.getCursorBufferPosition().row
      if (currRow<lastRow) {
        atom.commands.dispatch( editorView, "hydrogen:run-and-move-down")
        if (editor.getCursorBufferPosition().row==currRow) {
          editor.moveDown()
        }
      } else if (currRow==lastRow) {
        if (editor.lineTextForBufferRow(lastRow)!=='') {
          atom.commands.dispatch( editorView, "hydrogen:run")
        }
        break
      } else {
        break
      }
    }
    editor.setCursorBufferPosition(lastCur)
  },

  recalculateAllAboveInline() {
    let editor = atom.workspace.getActiveTextEditor()
    if (!editor) {return}
    let editorView = atom.views.getView(editor)
    this.clearAndCenter()
    atom.commands.dispatch(editorView, "hydrogen:restart-kernel")
    this.runAllAboveInline()
  },

  runAllBelowInline() {
    let editor = atom.workspace.getActiveTextEditor()
    if (!editor) {return}
    let editorView = atom.views.getView(editor)
    let lastRow = editor.getLastBufferRow()
    let currPos = editor.getCursorBufferPosition()
    while (true) {
      let currRow = editor.getCursorBufferPosition().row
      if (currRow<lastRow) {
        atom.commands.dispatch(editorView, "hydrogen:run-and-move-down")
        if (editor.getCursorBufferPosition().row==currRow) {
          editor.moveDown()
        }
      } else if (currRow==lastRow) {
        if (editor.lineTextForBufferRow(lastRow)!=='') {
          atom.commands.dispatch(editorView, "hydrogen:run")
        }
        break
      } else {
        break
      }
    }
    editor.setCursorBufferPosition(currPos)
    editor.scrollToBufferPosition(currPos, {center:true})
  },

}
