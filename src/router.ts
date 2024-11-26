import { Request, Response, Router } from "express"
// import { CustomerRepositoryInMemory } from "./infra/repository/memory/CustomerRepositoryInMemory"
import { CustomerCreate } from "./controller/CustomerCreate"
import { CustomerList } from "./controller/CustomerList"
import { CustomerRepositoryDatabase } from "./infra/repository/database/CustomerRepositoryDatabase"
import { CustomerLogin } from "./controller/CustomerLogin"

const router = Router()

// let repository = new CustomerRepositoryInMemory()
let repository = new CustomerRepositoryDatabase()
const customerCreate = new CustomerCreate(repository)
const customerList = new CustomerList(repository)
const customerLogin = new CustomerLogin(repository)

router.post('/customer', (request: Request, response: Response) => {
    customerCreate.execute(request, response)
})

router.get('/customer-list', (request: Request, response: Response) => {
    customerList.execute(request, response)
})

router.post('/login', (request: Request, response: Response) => {
    customerLogin.execute(request, response)
})

export { router }