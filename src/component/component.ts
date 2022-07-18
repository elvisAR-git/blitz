import { Dom } from './../dom/dom';
export class Component {
    name: string;
    container: HTMLElement;
    data: any;
    constructor(name: string) {
        this.name = name
        this.container = Dom.createElement("div")
        this.container.classList.add(name)
    }

    async render() {
        this._render()

        return Promise.resolve(this.container)
    }


    unmount() {
        this.container.remove()
    }

    setData(data: any) {
        this.data = data
    }

    private _render() {
        if (this.data) this.data.forEach((data: any) => {
            let element = Dom.createElement('div')
            let keys = Object.keys(data)
            keys.forEach((key: string) => {
                let value = data[key]
                let text = Dom.createElement('span')
                text.innerText = key + ": " + value
                element.appendChild(text)
            })

            this.container.appendChild(element)
        });


    }
}