import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'dsa-tracker-notes-v1';

function load() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

export default function useNotes() {
    const [notes, setNotes] = useState(load);

    useEffect(() => {
        try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
        } catch {}
    }, [notes]);

    const updateNote = useCallback((id, patch) => {
        setNotes((prev) => {
        const entry = { text: '', code: '', lang: 'python', ...prev[id], ...patch };
        const next = { ...prev };
        if (!entry.text.trim() && !entry.code.trim()) delete next[id];
        else next[id] = entry;
        return next;
        });
    }, []);

    return { notes, updateNote };
}