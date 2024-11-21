import { Document } from "./Document";
import { DocumentFactory } from "./DocumentFactory";
import { Uuid } from "./Uuid";

export class Customer {
    private id!: Uuid;
    private name!: string;
    private document!: Document;
    private email!: string;
    private password!: string;

    constructor(name: string, document: Document, email: string, password: string){
        this.id = Uuid.randomGenerator()
        this.name = name
        this.document = document
        this.email = email
        this.password = password
    }

    static create(name: string, document: string, email: string, password: string): Customer{
        const documentInstance = DocumentFactory.create(document)

        return new Customer(name, documentInstance, email, password)
    }
}