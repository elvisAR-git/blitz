import { User } from "../models/user.model"

export class StateModel {

    [key: string]: any;


    users: User[]
    name: string
    companies: any[]
    blogs: any[]

    constructor() {
        this.users = []
        this.name = "appModel"
        this.companies = []
        this.blogs = []
    }

}