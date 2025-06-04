import api from '../config/axios.config';

export const getAllFolder = async (): Promise<any> => {
  const res = await api.get('/v1/folder');
  return res.data.data;
};

export const getFolderById = async (id: number): Promise<any> => {
  const res = await api.get('/v1/folder/'+ id);
  return res.data.data;
};