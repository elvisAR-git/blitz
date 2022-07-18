export class BehaviourSubject {
    name: string;
    private callbacks: Function[];
    private object: any;

    constructor(name: string) {
        this.name = name
        this.callbacks = []
        this.object = undefined
    }

    subscribe(next: Function) {

        this.callbacks.push(next)
        next(this.object)
        return Promise.resolve(this.data)
    }

    unsubscribe(next: Function) {
        this.callbacks = this.callbacks.filter(callback => callback != next)
    }


    private publish() {
        this.callbacks.forEach(callback => {
            callback(this.data)
        });
    }


    sink(data: any) {
        this.object = data
        this.publish()
    }

    private asObservable(): Promise<any> {
        return Promise.resolve(this.data)
    }

    promisify() {
        return new Promise((resolve, reject) => {
            this.subscribe(resolve)
        })
    }

    get data() {
        return this.object
    }
}