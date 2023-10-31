// types.ts
import { ReadStream } from 'fs';
export interface FileUpload {
    createReadStream: () => ReadStream;
    filename: string;
    mimetype: string;
    encoding: string;
  }
  
  export interface FileUploadResponse {
    filename: string;
    mimetype: string;
  }
  