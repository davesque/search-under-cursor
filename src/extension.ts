import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.searchUnderCursor', async () => {
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		let wordRange = editor.document.getWordRangeAtPosition(editor.selection.start);
		if (!wordRange) {
			return;
		}

		let config = await vscode.workspace.getConfiguration('searchUnderCursor');
		if (!config) {
			return;
		}

		let wordText = editor.document.getText(wordRange);

		vscode.commands.executeCommand('workbench.action.findInFiles', {
			query: wordText,
			triggerSearch: true,
			matchWholeWord: config.get<boolean>('matchWholeWord'),
			isCaseSensitive: config.get<boolean>('isCaseSensitive'),
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
