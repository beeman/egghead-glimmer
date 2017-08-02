import Component, { tracked } from '@glimmer/component';

export default class MyComponent extends Component {

  @tracked content = 'This is my Content!'

  @tracked items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ]

  updateContent() {
    this.content = Date.now().toString()
    this.items = [ ...this.items, this.content ]
  }

  constructor(options){
    super(options)
    setInterval(() => this.updateContent(), 1000)
  }

};
