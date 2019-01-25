declare module "svg-sprite-loader/runtime/sprite.build" {
  interface ISprite {
    stringify(): string;
  }

  const sprite: ISprite;

  export default sprite;
}
