import { Document } from "./Document";
import { Cnpj } from "./document/Cnpj";
import { Cpf } from "./document/Cpf";

export class DocumentFactory {

    static create(value: string): Document {
        if (Cpf.isValid(value))
            return new Cpf(value)

        if (Cnpj.isValid(value))
            return new Cnpj(value)

        throw new Error(`Value not is document valid: ${value}`)
    }
}