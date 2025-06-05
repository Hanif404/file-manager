import { getAllFolder, getFolderById } from '../infrastructure/folder.api';

export const showAllFolder = async () => {
  const res = await getAllFolder();
  return res.data;
};

export const showFolderById = async (id: number) => {
  try {
    const res = await getFolderById(id);
    return res.data;
  } catch (error: any) {
    if (error.response?.data) {
      return error.response.data;
    }
    return { error: error.message || 'An error occurred' };
  }
};