# search-under-cursor

Triggers "Find in Files" action with the word under the cursor.

## Usage

![](search-under-cursor.mov.gif)

To use, bind a key to the `extension.searchUnderCursor` action.  Or, execute
the "Search Under Cursor" action from the command palette.

You can add the following keybinding to `keybindings.json` to search for the current word if there is no text selected in the editor, or the current selection if there is:

```
{
    "key": "ctrl+shift+f",
    "command": "extension.searchUnderCursor",
    "when": "editorTextFocus && !editorHasSelection"
}
```

### Configuration

You can toggle case sensitivity and whole word matching by adding the following to your `settings.json`. Both settings are enabled by default.

```
{
    "searchUnderCursor.isCaseSensitive": false,
    "searchUnderCursor.matchWholeWord": false,
}
```