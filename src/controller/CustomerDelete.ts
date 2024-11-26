import { Request, Response } from "express";
import { CustomerRepository } from "../repository/CustomerRepository";
import { Customer } from "../model/Customer";

export class CustomerDelete {

    constructor(readonly repository: CustomerRepository) {
    }

    async execute(request: Request, response: Response) {
        const { document } = request.body
        if (await this.repository.delete(document))
            response.status(200).json('Customer deleted with succeed.')
        response.status(404).json('Customer not founded.')
    }
}