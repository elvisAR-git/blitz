import { Blog } from './models/blog.model';
import { App } from './state/state.adapter';
import { User } from './models/user.model';
import { Dom } from './dom/dom';
import { Main } from './components/main';

let state = new App();


let dom = new Dom();
let main = new Main('main');


let callBackFn = (data: User[]) => {
    if (data) main.data = data
}


state.select('users').subscribe(callBackFn);



let alan = new User('alan', 'alan@mail.com', '12345')

let blog: Blog = {
    id: 1,
    title: 'title',
    content: 'content',
    user: alan,
    createdAt: new Date(),
    updatedAt: new Date()
}

state.addUser(alan)

state.addUser(alan)
state.addBlog(blog)



dom.addComponent(main);


