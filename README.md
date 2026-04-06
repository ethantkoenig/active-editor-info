# active-editor-info

VSCode extension that provides commands returning various info about the active editor.

The motivating (and for now only) use case is to expose info about the active editor to Talon.

## Commands

### `activeEditorInfo.get`

Returns a JSON object with various info about the active editor (or `null` if
there is no active editor). The JSON object will be of the form:

```jsonc
{
    // Absolute path of the file.
    "absoluteFilePath": "...",
    // VSCode language ID of the file.
    "languageId": "...",
    // Path, relative to the root of the opened workspace. May be `null` if there is no workspace.
    "relativeFilePath": "...",
    // Array of selections in the active editor. The first selection is the "primary" one.
    //
    // Modeled after https://code.visualstudio.com/api/references/vscode-api#Selection.
    "selections": [
        {
            "anchor": { "line": N, "column": M },  // zero-indexed
            "cursor": { "line": N, "column": M },  // zero-indexed
            "isReversed": false
        }
    ],
    // Array of visible ranges in the active editor.
    //
    // Modeled after https://code.visualstudio.com/api/references/vscode-api#Range.
    "visibleRanges": [
        {
            "start": { "line": N, "column": M },  // zero-indexed
            "end": { "line": N, "column": M }     // zero-indexed
        }
    ]
}
```
