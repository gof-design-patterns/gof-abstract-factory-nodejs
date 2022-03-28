import { FileNotFoundError } from '../../errors/file-not-found-error'
import { GoogleCloud, GoogleDatabase, GoogleStorage, GoogleVirtualMachine } from './google-cloud'
import { Cloud } from '../../protocols'
import { ForbiddendError } from '../../errors'

interface SutTypes {
  sut: GoogleCloud
}

const makeSut = (): SutTypes => {
  const sut: Cloud = new GoogleCloud()
  return { sut }
}

describe('Google Cloud', () => {
  test('Should return an object of type Cloud', () => {
    const { sut } = makeSut()
    expect(sut).toBeInstanceOf(Cloud)
  })

  test('Should return an object of type GoogleDatabase', () => {
    const { sut } = makeSut()
    expect(sut.createDatabase()).toBeInstanceOf(GoogleDatabase)
  })

  test('Should return an object of type GoogleStorage', () => {
    const { sut } = makeSut()
    expect(sut.createStorage()).toBeInstanceOf(GoogleStorage)
  })

  test('Should return an object of type GoogleVirtualMachine', () => {
    const { sut } = makeSut()
    expect(sut.createVirtualMachine()).toBeInstanceOf(GoogleVirtualMachine)
  })

  test('Should return true if the upload was successful', () => {
    const { sut } = makeSut()
    jest.spyOn(console, 'log')
    sut.createStorage().upload('./describe')
    expect(console.log).toHaveBeenCalled()
  })

  test('Should return FileNotFoundError if the path is void', () => {
    const { sut } = makeSut()
    expect(() => sut.createStorage().upload('')).toThrow(FileNotFoundError)
  })

  test('Should return true if the vm was started', () => {
    const { sut } = makeSut()
    jest.spyOn(console, 'log')
    sut.createVirtualMachine().start()
    expect(console.log).toHaveBeenCalled()
  })

  test('Should return true if the table was created', () => {
    const { sut } = makeSut()
    jest.spyOn(console, 'log')
    sut.createDatabase().createTable('TABLE_NAME')
    expect(console.log).toHaveBeenCalled()
  })

  test('Should return ForbiddendError if the name is void', () => {
    const { sut } = makeSut()
    expect(() => sut.createDatabase().createTable('')).toThrow(ForbiddendError)
  })
})
