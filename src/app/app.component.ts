import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <button kendoButton (click)="onButtonClick()">My Button</button> `
})
export class AppComponent {
    public onButtonClick(): void {
        console.log('click');
        alert('Kendo Angular UI Button was clicked.');
    }
}
