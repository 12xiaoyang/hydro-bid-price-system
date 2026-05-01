// js/src/state.js — 快照、撤销/重做
import { captureProjectState, restoreProjectState } from './persistence.js';

export const SNAPSHOT_MAX = 60;
export const _projectUndoStack = [];
export const _projectRedoStack = [];
export let _isRestoringSnapshot = false;

export function takeProjectSnapshot(label) { if (_isRestoringSnapshot) return; _projectUndoStack.push({ id: Date.now() + '_' + Math.random().toString(16).slice(2), label: label || '操作', createdAt: new Date().toISOString(), state: captureProjectState() }); while (_projectUndoStack.length > SNAPSHOT_MAX) _projectUndoStack.shift(); _projectRedoStack.length = 0; }

export function undoProjectSnapshot() { const snap = _projectUndoStack.pop(); if (!snap) { showToast('没有可撤销的操作'); return false; } _projectRedoStack.push({ id: Date.now() + '_' + Math.random().toString(16).slice(2), label: '重做点', createdAt: new Date().toISOString(), state: captureProjectState() }); restoreProjectState(snap.state, { silent: true }); showToast('已撤销：' + snap.label); return true; }

export function redoProjectSnapshot() { const snap = _projectRedoStack.pop(); if (!snap) { showToast('没有可重做的操作'); return false; } _projectUndoStack.push({ id: Date.now() + '_' + Math.random().toString(16).slice(2), label: '撤销点', createdAt: new Date().toISOString(), state: captureProjectState() }); restoreProjectState(snap.state, { silent: true }); showToast('已重做'); return true; }
