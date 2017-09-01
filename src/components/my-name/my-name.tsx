import { Component, Prop } from '@stencil/core';

@Component({
  styleUrl: 'my-name.scss',
  tag: 'my-name'
})
export class MyName {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <p>
        Hello, my name is {this.first} {this.last}
      </p>
    );
  }
}
