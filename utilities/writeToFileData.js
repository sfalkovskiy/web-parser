import { stringify } from 'csv-stringify';
import { writeFileSync } from 'fs';
import { FILE_NAME } from './constants.js';

const writeToFileData = (data) => {
  stringify(data, (_, output) => {
    writeFileSync(FILE_NAME, output);
  });
};

export default writeToFileData;
