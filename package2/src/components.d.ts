/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MySecondComponent {
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
    interface HTMLMySecondComponentElement extends Components.MySecondComponent, HTMLStencilElement {
    }
    var HTMLMySecondComponentElement: {
        prototype: HTMLMySecondComponentElement;
        new (): HTMLMySecondComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-second-component": HTMLMySecondComponentElement;
    }
}
declare namespace LocalJSX {
    interface MySecondComponent {
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
        "my-second-component": MySecondComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-second-component": LocalJSX.MySecondComponent & JSXBase.HTMLAttributes<HTMLMySecondComponentElement>;
        }
    }
}
