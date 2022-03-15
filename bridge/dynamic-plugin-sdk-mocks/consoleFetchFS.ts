import { ConsoleFetch } from '@openshift-console/dynamic-plugin-sdk';
import fs from 'fs';
import bufferToResponse from './bufferToResponse';

// A promise version of fs.readFile() that return a url response.
const readFileAsync = function(filename: string) {
  return new Promise<Response>(function(resolve, reject) {
      fs.readFile(filename, function(err, data){
          if (err) 
              reject(err); 
          else 
              resolve(bufferToResponse(data));
      });
  });
};

export const consoleFetchFS: ConsoleFetch = async (url: string) => {
  return readFileAsync(`public${url}`);
};

export default consoleFetchFS;
