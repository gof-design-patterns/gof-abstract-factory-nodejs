export class ForbiddendError extends Error {
  constructor () {
    super('You do not have permission to do this task.')
    this.name = 'ForbiddendError'
  }
}
