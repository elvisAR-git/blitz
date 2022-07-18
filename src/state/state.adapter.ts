import { Blog } from './../models/blog.model';
import { User } from "../models/user.model"
import { State } from "./state"
import { StateModel } from "./state.model"
import { Subject } from "../subject"



export class App extends State {
    appModel: Subject
    constructor() {
        super(new StateModel())
        this.appModel = this.stateObserver
    }


    addUser(user: User) {
        let users = this.selectSnapshot('users')
        let newUsers = [user, ...users]
        this.mutate(newUsers, 'users')
    }

    removeUser(user: User) {
        let users = this.selectSnapshot('users') as User[]

        let newUsers = users.filter(u => user.username != u.username)

        this.mutate(newUsers, 'users')
    }


    addBlog(blog: Blog) {
        let blogs = this.selectSnapshot('blogs')
        let newBlogs = [blog, ...blogs]
        this.mutate(newBlogs, 'blogs')
    }

    removeBlog(blog: Blog) {
        let blogs = this.selectSnapshot('blogs') as Blog[]

        let newBlogs = blogs.filter(b => blog.id != b.id)

        this.mutate(newBlogs, 'blogs')
    }
}
