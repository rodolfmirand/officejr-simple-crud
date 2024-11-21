import { Request, Response } from "express";
import { CustomerRepository } from "../repository/CustomerRepository";
import { Customer } from "../model/Customer";

export class CustomerCreate {

    constructor(readonly repository: CustomerRepository) {
    }

    async execute(request: Request, response: Response) {
        const { name, document, email, password } = request.body
        const customer = Customer.create(name, document, email, password)
        await this.repository.save(customer)
        response.status(200).json({customer})
    }
}