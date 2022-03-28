export class FileNotFoundError extends Error {
  constructor () {
    super('This file does not exist.')
    this.name = 'FileNotFoundError'
  }
}
