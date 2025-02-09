import {CSSProperties} from "react";

export interface CustomCSSProperties extends CSSProperties {
  '--mobile-image-url'?: string;
  '--image-url'?: string;
}