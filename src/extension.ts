import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "activeEditorInfo.languageId",
    () => {
      return vscode.window.activeTextEditor?.document.languageId || null;
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
