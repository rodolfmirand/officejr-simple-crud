import knex, { Knex } from "knex";
import { Customer } from "../../../model/Customer";
import { CustomerRepository } from "../../../repository/CustomerRepository";
import { config } from './config/KnexConfig'

export class CustomerRepositoryDatabase implements CustomerRepository {

    private connection: Knex

    constructor() {
        this.connection = knex(config)
    }

    async save(customer: Customer): Promise<void> {
        await this.connection('customer').insert({
            'id': customer.getId().getValue(),
            'name': customer.getName(),
            'document': customer.getDocument().getValue(),
            'email': customer.getEmail(),
            'password': customer.getPassword()
        })
    }

    async getAll(): Promise<Customer[]> {
        const customerCollection: Array<Customer> = []

        const customers = await this.connection('customer').select('*')

        for(let customer of customers){
            const id = customer['id']
            const name = customer['name']
            const document = customer['document']
            const email = customer['email']
            const password = customer['password']

            customerCollection.push(Customer.createWithId(id, name, document, email, password))
        }

        return customerCollection
    }
}