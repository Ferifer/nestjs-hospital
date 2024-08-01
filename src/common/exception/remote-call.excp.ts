import { AxiosError } from 'axios';

export class RemoteCallException extends Error {
  constructor(
    readonly targetServiceName: string,
    readonly cause: Error | AxiosError,
  ) {
    super(`Error on calling service ${targetServiceName}`);
  }
}
