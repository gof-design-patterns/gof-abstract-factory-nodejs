import { ForbiddendError } from '../../errors'
import { FileNotFoundError } from '../../errors/file-not-found-error'
import { Cloud, Storage, VirtualMachine, Database } from '../../protocols'

export class GoogleStorage implements Storage {
  public upload (path: string): boolean {
    console.log(`The file [${path}] was uploaded to [GOOGLE].`)
    if (path.trim().length === 0) throw new FileNotFoundError()

    return false
  }
}

export class GoogleVirtualMachine implements VirtualMachine {
  public start (): boolean {
    console.log('The vm  was started [GOOGLE].')
    return false
  }
}

export class GoogleDatabase implements Database {
  public createTable (name: string): boolean {
    console.log(`The table [${name}] was created [GOOGLE].`)
    if (name.trim().length === 0) throw new ForbiddendError()

    return false
  }
}

export class GoogleCloud extends Cloud {
  public createStorage (): Storage {
    return new GoogleStorage()
  }

  public createVirtualMachine (): VirtualMachine {
    return new GoogleVirtualMachine()
  }

  public createDatabase (): Database {
    return new GoogleDatabase()
  }
}
