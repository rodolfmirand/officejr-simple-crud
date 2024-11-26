import { Request, Response } from "express";
import { CustomerRepository } from "../repository/CustomerRepository";
import { Customer } from "../model/Customer";

export class CustomerLogin {

    constructor(readonly repository: CustomerRepository) {
    }

    async execute(request: Request, response: Response) {
        const { email, password } = request.body
        if (await this.repository.login(email, password))
            response.status(200).json('The login has been succeeded.')
        response.status(401).json('Failed to login.')
    }
}