import { consola } from 'consola';
import { prepareOptions } from './options';
import { prepareResources } from './resources';

const timeStart = new Date().getTime();

consola.start('Preparing code...');

prepareOptions();
prepareResources();

process.on('exit', function () {
  consola.success(
    `Finished preparing code in ${(
      (new Date().getTime() - timeStart) /
      1000
    ).toFixed(2)} seconds`,
  );
});
