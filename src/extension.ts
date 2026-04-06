import { relative } from "path";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "activeEditorInfo.get",
      () => {
        const activeTextEditor = vscode.window.activeTextEditor;
        if (!activeTextEditor) {
          return null;
        }
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(activeTextEditor.document.uri);
        return {
          absoluteFilePath: activeTextEditor.document.fileName,
          languageId: activeTextEditor.document.languageId,
          relativeFilePath: workspaceFolder
            ? relative(workspaceFolder.uri.fsPath, activeTextEditor.document.fileName)
            : null,
          selections: activeTextEditor.selections.map(selectionToObject),
          visibleRanges: activeTextEditor.visibleRanges.map((range) => ({
            start: positionToObject(range.start), end: positionToObject(range.end)
          }))
        };
      }
    )
  );
}

function selectionToObject(selection: vscode.Selection) {
  return {
    anchor: positionToObject(selection.anchor),
    cursor: positionToObject(selection.active),
    isReversed: selection.isReversed
  };
}

function positionToObject(position: vscode.Position) {
  return { column: position.character, line: position.line };
}

export function deactivate() { }
