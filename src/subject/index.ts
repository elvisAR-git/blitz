import { BehaviourSubject } from "./behaviour.subject";

export class Subject extends BehaviourSubject {
    constructor(name: string) {
        super(name)
    }

    asPromise(): Promise<any> {
        return this.promisify()
    }
}