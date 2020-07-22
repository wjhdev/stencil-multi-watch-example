import { Component, Prop, h } from '@stencil/core';
import 'package1'

@Component({
  tag: 'my-second-component',
  styleUrl: 'my-component.css',
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return <my-first-component first={this.first} middle="(👋 Composed Here in <my-second-component>)" last={this.last} />
  }
}
