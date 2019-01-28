import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript
} from "next/document";
import sprite from "svg-sprite-loader/runtime/sprite.build";

interface IProps {
  spriteContent: string;
}

export default class MyDocument extends Document<IProps> {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const spriteContent = sprite.stringify();
    return { spriteContent, ...initialProps };
  }

  public render() {
    const { spriteContent } = this.props;
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
