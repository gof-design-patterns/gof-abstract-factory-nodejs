![npm](https://badgen.net/npm/v/ts-standard)
[![License](https://badgen.net/github/license/standard/ts-standard)](https://github.com/gof-design-patterns/gof-abstract-factory-nodejs/edit/main/LICENSE)
[![TS-Standard - Typescript Standard Style Guide](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/gof-design-patterns/gof-abstract-factory-nodejs)

# Abstract Factory

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

The first thing the Abstract Factory pattern suggests is to explicitly declare interfaces for each distinct product of the product family (e.g., storage, database or virtual machine). Then you can make all variants of products follow those interfaces. For example, all storage variants can implement the Storage interface; all virtual machine variants can implement the VirtualMachine interface, and so on.

[Diagram-1]

The next move is to declare the Abstract Factory—an interface with a list of creation methods for all products that are part of the product family (for example, createStorage, createVirtualMachine and createDatabase). These methods must return abstract product types represented by the interfaces we extracted previously: Storage, VirtualMachine, Database and so on.

Now, how about the product variants? For each variant of a product family, we create a separate factory class based on the AbstractFactory interface. A factory is a class that returns products of a particular kind. For example, the AwsCloud can only create AwsStorage, AwsDatabase and AwsVirtualMachine objects.

The code that uses the factory method (**runLogic**) doesn’t see a difference between the actual products returned by various subclasses. The **runLogic** treats all the products as abstract **Cloud**. The **runLogic** knows that all **Cloud** objects are supposed to have the **createStorage**, **createDatabase** and **createVirtualMachine** methods, but exactly how it works isn’t important to the **runLogic**.

Say the client wants a factory to produce a storage. The client doesn’t have to be aware of the factory’s class, nor does it matter what kind of storage it gets. Whether it’s a Modern model or a AWS storage, the client must treat all storages in the same manner, using the abstract Storage interface. With this approach, the only thing that the client knows about the storage is that it implements the upload method in some way. Also, whichever variant of the storage is returned, it’ll always match the type of database or virtual machine table produced by the same factory object.

This project was based on the article: Abstract Factory from Refactory Guru, [click here](https://refactoring.guru/design-patterns/abstract-factory) to see the source.

## 🧙 Why

The main file is `src/main/app.ts`, this file has three methods: `main()` that call `bootstrap()` and `runLogic()`.

`bootstrap()` method assigns the class' attribute `private cloud: Cloud` with one **Cloud** depending of `const TYPE_CLOUD`.

For example, `runLogic()` can call the method `createStorage().upload(path)` of the assigned cloud.

## ⌨️ Basic Usage

```sh
npm install
npm start
```

## 📜 Run tests

```sh
npm test
```

## 📋 Contributing Guide

I welcome all pull requests. Please make sure you add appropriate test cases for any features
added. Before opening a PR please make sure to run the following scripts:

- `npm run lint` checks for code errors and format according to [gof-abstract-factory-nodejs](https://github.com/gof-design-patterns/gof-abstract-factory-nodejs)
- `npm test` make sure all tests pass
- `npm test -- --coverage` make sure the coverage has not decreased from current master

