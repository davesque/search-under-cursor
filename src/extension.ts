import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.searchUnderCursor', () => {
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		let wordRange = editor.document.getWordRangeAtPosition(editor.selection.start);
		if (!wordRange) {
			return;
		}

		let wordText = editor.document.getText(wordRange);

		vscode.commands.executeCommand('workbench.action.findInFiles', {
			query: wordText,
			triggerSearch: true,
			matchWholeWord: true,
			isCaseSensitive: true,
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
