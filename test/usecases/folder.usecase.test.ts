import { test, expect, jest } from 'bun:test';
import { showAllFolder, showFolderById } from '../../src/usecases/folder.usecase';

test('should show all folders', async () => {
    const result = await showAllFolder();
    expect(Array.isArray(result)).toBe(true);
});

test('should show folder by id', async () => {
    const resultFolder = await showAllFolder();
    const folderId = resultFolder[0].id;
    const result = await showFolderById(folderId);
    expect(result).toBeDefined();
});

test('should return null for non-existent folder id', async () => {
    const nonExistentId = -1;
    const result = await showFolderById(nonExistentId);
    expect(result.status).toEqual(false);
});