import { StateModel } from "./state.model"
import { Subject } from "../subject"

export class State extends Subject {
    model: StateModel
    stateObserver: Subject
    private observers: Subject[]

    constructor(bank: StateModel) {
        super(bank.name)
        this.model = bank
        this.stateObserver = new Subject(this.model.name)
        this.observers = []

        this.createObservers()
    }


    selectSnapshot(prop: string) {
        let d = this.resolveObserver(prop)
        return d?.data
    }



    select(prop: string) {
        return this.resolveObserver(prop)
    }



    private resolveObserver(prop: string) {
        let observer = this.observers.filter((ob) => {
            if (ob.name == prop) return ob
        })


        if (observer.length > 0) return observer[0]


    }


    private resolveBranch(name: string) {
        let keys = Object.keys(this.model)
        for (const key of keys) {
            if (key == name) {
                return this.model[key]
            }
        }
    }


    private createObservers() {
        let keys = Object.keys(this.model)
        for (const key of keys) {
            let o = new Subject(key);
            o.sink(this.model[key])
            this.observers.push(o)
        }

    }


    private publishTo(observer: string, data: any) {
        let subject = this.resolveObserver(observer)
        if (subject) subject.sink(data)
    }

    public mutate(data: any, branch: string) {

        if (this.resolveBranch(branch)) {
            this.model[branch] = data
            this.publishTo(branch, data)
            this.sink(this.model)
        }
    }


}