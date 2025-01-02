import { Meta } from "@solidjs/meta";

/**
 * <meta name='description'         content='···'>
 * <meta property='og:description'  content='···'>
 * <meta name='twitter:description' content='···'>
 */
interface DescriptionMetaProps {
	content: string;
}

export default function DescriptionMeta({ content }: DescriptionMetaProps) {
	return (
		<>
			<Meta
				name="description"
				content={content}
			/>
			<Meta
				property="og:description"
				content={content}
			/>
			<Meta
				name="twitter:description"
				content={content}
			/>
		</>
	);
}
