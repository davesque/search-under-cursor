import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.searchUnderCursor', () => {
		// Get the current editor
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			console.log('No active editor!');
			return;
		}

		// Get word under cursor position
		let wordRange = editor.document.getWordRangeAtPosition(editor.selection.start);
		if (!wordRange) {
			console.log('No word under the cursor!');
			return;
		}

		// Get word text
		let wordText = editor.document.getText(wordRange);

		// Initiate search
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
