import {Component, View, bootstrap} from 'angular2/angular2';
// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: `<h1>Hello {{ name }}</h1>`
})
// Component controller
class App {
  constructor() {
      this.name = 'World';
  }
}

bootstrap(App);
