import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import * as fs from 'fs'
import * as path from 'path'
import {GA_TRACKING_ID} from "../lib/analytics"

class InlineStylesHead extends Head {
	// getCssLinks() {
	// 	return this.__getInlineStyles()
	// }

	// __getInlineStyles() {
	// 	const { assetPrefix, files } = this.context
	// 	if (!files || files.length === 0) return null

	// 	return files
	// 		.filter((file) => /\.css$/.test(file))
	// 		.map((file) => (
	// 			<style
	// 				key={file}
	// 				nonce={this.props.nonce}
	// 				data-href={`${assetPrefix}/_next/${file}`}
	// 				dangerouslySetInnerHTML={{
	// 					__html: fs.readFileSync(path.join(process.cwd(), '.next', file), 'utf-8'),
	// 				}}
	// 			/>
	// 		))
	// }
}

export default class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>
				<InlineStylesHead>
					{/* <link
						rel="preload"
						href="/fonts/Inter-roman.var-latin.woff2?3.13"
						as="font"
						type="font/woff2"
						crossOrigin="true"
					/> */}
				</InlineStylesHead>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
