import { test, expect } from 'bun:test';
import { getAllFolder, getFolderById } from '../../src/infrastructure/folder.api';

test("integration api - getAllFolder", async () => {
    const response = await getAllFolder();
    expect(response.status).toEqual(true);
});

test("integration api - getFolderById", async () => {
    const result = await getAllFolder();

    const response = await getFolderById(result.data[0].id);
    expect(response.status).toEqual(true);
});