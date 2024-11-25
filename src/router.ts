import { Request, Response, Router } from "express"
import { CustomerRepositoryInMemory } from "./infra/repository/memory/CustomerRepositoryInMemory"
import { CustomerCreate } from "./controller/CustomerCreate"
import { CustomerList } from "./controller/CustomerList"

const router = Router()

const repository = new CustomerRepositoryInMemory()
const customerCreate = new CustomerCreate(repository)
const customerList = new CustomerList(repository)

router.post('/customer', (request: Request, response: Response) => {
    customerCreate.execute(request, response)
})

router.get('/customer-list', (request: Request, response: Response) => {
    customerList.execute(request, response)
})

export { router }