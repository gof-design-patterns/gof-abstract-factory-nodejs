export class CloudNotFoundError extends Error {
  constructor () {
    super('This cloud does not exist.')
    this.name = 'CloudNotFoundError'
  }
}
