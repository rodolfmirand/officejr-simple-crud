import { Document } from "./Document";
import { DocumentFactory } from "./DocumentFactory";
import { Uuid } from "./Uuid";

export class Customer {
    private id!: Uuid;
    private name!: string;
    private document!: Document;
    private email!: string;
    private password!: string;

    constructor(id: Uuid, name: string, document: Document, email: string, password: string){
        this.id = id
        this.name = name
        this.document = document
        this.email = email
        this.password = password
    }

    static create(id: string, name: string, document: string, email: string, password: string): Customer{
        const uuid = new Uuid(id)
        const documentInstance = DocumentFactory.create(document)

        return new Customer(uuid, name, documentInstance, email, password)
    }
}