import { Document } from "./Document";
import { DocumentFactory } from "./DocumentFactory";
import { Uuid } from "./Uuid";

export class Customer {
    private id!: Uuid;
    private name!: string;
    private document!: Document;
    private email!: string;
    private password!: string;

    constructor(id: Uuid, name: string, document: Document, email: string, password: string) {
        this.id = id
        this.name = name
        this.document = document
        this.email = email
        this.password = password
    }

    static create(name: string, document: string, email: string, password: string): Customer {
        const documentInstance = DocumentFactory.create(document)
        const id = Uuid.randomGenerator()
        return new Customer(id, name, documentInstance, email, password)
    }

    static createWithId(id: Uuid,  name: string, document: string, email: string, password: string): Customer {
        const documentInstance = DocumentFactory.create(document)
        return new Customer(id, name, documentInstance, email, password)
    }

    public getId(): Uuid {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getDocument(): Document {
        return this.document
    }

    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }
}