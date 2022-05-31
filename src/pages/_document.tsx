import Document, { 
    Html, 
    Head, 
    Main, 
    NextScript
} from 'next/document';

export default class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2? family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}