import { Storage, VirtualMachine, Database } from './'

export abstract class Cloud {
  public abstract createStorage (): Storage
  public abstract createVirtualMachine (): VirtualMachine
  public abstract createDatabase (): Database
}
