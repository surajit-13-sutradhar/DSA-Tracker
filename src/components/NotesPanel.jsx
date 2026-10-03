import EditorModule from 'react-simple-code-editor';
import { LANGUAGES, highlight } from './languages.js';

export default function NotesPanel({ note, onChange }) {
  const { text = '', code = '', lang = 'python' } = note || {};
  const Editor = EditorModule.default ?? EditorModule;
  return (
    <div className="notes">
      <label className="notes-label">Notes</label>
      <textarea
        className="notes-text"
        rows={3}
        placeholder="Approach, edge cases, complexity, what tripped you up…"
        value={text}
        onChange={(e) => onChange({ text: e.target.value })}
      />

      <div className="notes-code-head">
        <label className="notes-label">Code</label>
        <select value={lang} onChange={(e) => onChange({ lang: e.target.value })}>
          {LANGUAGES.map((l) => (
            <option key={l.value} value={l.value}>{l.label}</option>
          ))}
        </select>
      </div>
      <div className="notes-code">
        <Editor
          value={code}
          onValueChange={(c) => onChange({ code: c })}
          highlight={(c) => highlight(c, lang)}
          padding={12}
          tabSize={4}
          insertSpaces
          placeholder="Paste or write your solution…"
          textareaClassName="notes-code-input"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, minHeight: 90 }}
        />
      </div>
    </div>
  );
}