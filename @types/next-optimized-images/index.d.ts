declare module "*.png" {
  const url: string;
  export default url;
}

declare module "*.png?webp" {
  const url: string;
  export default url;
}

declare module "*.png?inline" {
  const url: string;
  export default url;
}

declare module "*.png?url" {
  const url: string;
  export default url;
}

declare module "*.png?original" {
  const url: string;
  export default url;
}

declare module "*.png?lqip" {
  const url: string;
  export default url;
}

declare module "*.png?lqip-colors" {
  const colors: string[];
  export default colors;
}

// ---------------------------------------------------------------------------

declare module "*.jpg" {
  const url: string;
  export default url;
}

declare module "*.jpg?webp" {
  const url: string;
  export default url;
}

declare module "*.jpg?inline" {
  const url: string;
  export default url;
}

declare module "*.jpg?url" {
  const url: string;
  export default url;
}

declare module "*.jpg?original" {
  const url: string;
  export default url;
}

declare module "*.jpg?lqip" {
  const url: string;
  export default url;
}

declare module "*.jpg?lqip-colors" {
  const colors: string[];
  export default colors;
}

// ---------------------------------------------------------------------------

declare module "*.jpeg" {
  const url: string;
  export default url;
}

declare module "*.jepg?webp" {
  const url: string;
  export default url;
}

declare module "*.jpeg?inline" {
  const url: string;
  export default url;
}

declare module "*.jpeg?url" {
  const url: string;
  export default url;
}

declare module "*.jpeg?original" {
  const url: string;
  export default url;
}

declare module "*.jpeg?lqip" {
  const url: string;
  export default url;
}

declare module "*.jpeg?lqip-colors" {
  const colors: string[];
  export default colors;
}

// ---------------------------------------------------------------------------

declare module "*.webp" {
  const url: string;
  export default url;
}

declare module "*.webp?inline" {
  const url: string;
  export default url;
}

declare module "*.webp?url" {
  const url: string;
  export default url;
}

declare module "*.webp?original" {
  const url: string;
  export default url;
}

declare module "*.webp?lqip" {
  const url: string;
  export default url;
}

declare module "*.webp?lqip-colors" {
  const colors: string[];
  export default colors;
}

// ---------------------------------------------------------------------------

declare module "*.svg" {
  const url: string;
  export default url;
}

declare module "*.svg?webp" {
  const url: string;
  export default url;
}

declare module "*.svg?inline" {
  const url: string;
  export default url;
}

declare module "*.svg?url" {
  const url: string;
  export default url;
}

declare module "*.svg?original" {
  const url: string;
  export default url;
}

declare module "*.svg?lqip" {
  const url: string;
  export default url;
}

declare module "*.svg?lqip-colors" {
  const colors: string[];
  export default colors;
}

declare module "*.svg?include" {
  const content: string;
  export default content;
}

declare module "*.svg?sprite" {
  export interface ISpriteSymbol {
    id: string;
    viewBox: string;
    content: string;
  }
  const svgComponent: ISpriteSymbol &
    React.ComponentType<React.SVGProps<SVGElement>>;
  export default svgComponent;
}

// ---------------------------------------------------------------------------

declare module "*.gif" {
  const url: string;
  export default url;
}

declare module "*.gif?webp" {
  const url: string;
  export default url;
}

declare module "*.gif?inline" {
  const url: string;
  export default url;
}

declare module "*.gif?url" {
  const url: string;
  export default url;
}

declare module "*.gif?original" {
  const url: string;
  export default url;
}

declare module "*.gif?lqip" {
  const url: string;
  export default url;
}

declare module "*.gif?lqip-colors" {
  const colors: string[];
  export default colors;
}
