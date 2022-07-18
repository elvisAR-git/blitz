import { Component } from './../component/component';
export class Dom {
    mainView: HTMLElement
    constructor() {
        this.mainView = document.getElementById("main-view")
        this.mainView.innerHTML = ""

    }
    public static createElement(tagName: string): HTMLElement {
        return document.createElement(tagName)
    }

    public async addComponent(component: Component) {
        this.mainView.appendChild(await component.render())
    }
}