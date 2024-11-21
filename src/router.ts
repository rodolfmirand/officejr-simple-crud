import { Request, Response, Router } from "express"
import { CustomerRepositoryInMemory } from "./infra/repository/memory/CustomerRepositoryInMemory"
import { CustomerCreate } from "./controller/CustomerCreate"

const router = Router()

const repository = new CustomerRepositoryInMemory()
const customerCreate = new CustomerCreate(repository)

router.post('/customer', (request: Request, response: Response) => {
    customerCreate.execute(request, response)
})

export { router }