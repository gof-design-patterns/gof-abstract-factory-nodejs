import { FileNotFoundError } from './'

interface SutTypes {
  sut: FileNotFoundError
}

const makeSut = (): SutTypes => {
  const sut = new FileNotFoundError()
  return { sut }
}

describe('FileNotFoundError', () => {
  test('Should be a type of error', () => {
    const { sut } = makeSut()
    expect(sut).toBeInstanceOf(Error)
  })
  test('Should return a correct message', () => {
    const { sut } = makeSut()
    expect(sut.message).toEqual('This file does not exist.')
  })
})
