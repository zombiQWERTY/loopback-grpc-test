import {TestApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {TestApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new TestApplication(options);
  await app.boot();
  await app.start();

  console.log('launched');

  return app;
}
