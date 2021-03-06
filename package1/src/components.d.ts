/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyFirstComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMyFirstComponentElement extends Components.MyFirstComponent, HTMLStencilElement {
    }
    var HTMLMyFirstComponentElement: {
        prototype: HTMLMyFirstComponentElement;
        new (): HTMLMyFirstComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-first-component": HTMLMyFirstComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyFirstComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "my-first-component": MyFirstComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-first-component": LocalJSX.MyFirstComponent & JSXBase.HTMLAttributes<HTMLMyFirstComponentElement>;
        }
    }
}
