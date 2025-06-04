export interface Folder {
  id: number;
  name: string;
  createdAt: Date;
  children: Folder[];
  files: File[];
}