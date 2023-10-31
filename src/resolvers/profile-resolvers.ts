import { ExpressContext } from "apollo-server-express";
import { GraphQLUpload } from 'graphql-upload'
import fs from 'fs'
import path from 'path'
import { ReadStream } from 'fs';
import { FileUpload, FileUploadResponse } from './types'; 
// import throwCustomError,{ ErrorTypes } from '../error/error'; 
import { ErrorTypes, MyError } from '../error/error'; 


const profileResolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    addPhoto: async (parents: any, { file }: any) => {
        const {createReadStream,filename,mimetype} = await file;
        
        
        const location = path.join(__dirname,`../../src/public/images/${filename}`);
        const myFile = createReadStream();
        await myFile.pipe(fs.createWriteStream(location))
      
      return {
        filename:`http://localhost:2000/images/${filename}`
      };
    },
    multipleUpload: async (
      parents: any,
      { files }: { files: Promise<FileUpload>[] }
    ): Promise<FileUploadResponse[]> => {
     
      
      const uploads = await Promise.all(
        files.map(async (filePromise): Promise<FileUploadResponse> => {
          
          const file: FileUpload = await filePromise;
          console.log("file");
          console.log(file);
          const { createReadStream, filename, mimetype }: FileUpload = file;

          const stream: ReadStream = createReadStream();
          const location = path.join(__dirname,`../../src/public/images/${filename}`);

          await new Promise<void>((resolve, reject) =>
            stream
              .pipe(fs.createWriteStream(location))
              .on('finish', resolve)
              .on('error', reject)
          );

          return { filename, mimetype };
        })
      );

      return uploads;
  },
  },
};

export { profileResolvers };

