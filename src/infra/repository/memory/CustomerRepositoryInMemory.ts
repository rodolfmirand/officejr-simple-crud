// import { Customer } from "../../../model/Customer";
// import { CustomerRepository } from "../../../repository/CustomerRepository";

// export class CustomerRepositoryInMemory implements CustomerRepository {

//     private customerCollection: Array<Customer>

//     constructor() {
//         this.customerCollection = []
//     }

//     async save(customer: Customer): Promise<void> {
//         this.customerCollection.push(customer)
//     }

//     async getAll(): Promise<Customer[]> {
//         return this.customerCollection
//     }
// }