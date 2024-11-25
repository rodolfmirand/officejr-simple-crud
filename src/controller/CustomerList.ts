import { Request, Response } from "express";
import { CustomerRepository } from "../repository/CustomerRepository";
import { Customer } from "../model/Customer";

export class CustomerList {

    constructor(readonly repository: CustomerRepository) {
    }

    async execute(request: Request, response: Response) {
        const customerCollection = await this.repository.getAll()        
        response.status(201).json(customerCollection)
    }
}