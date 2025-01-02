import { Title, Meta } from "@solidjs/meta";

/**
 * <title>···</title>
 * <meta property='og:title'  content='···'>
 * <meta name='twitter:title' content='···'>
 * <meta property='og:type' content='website'>
 * <meta name='format-detection' content='telephone=no'>
 */

interface TitleProps {
	title: string;
}

export default function TitleMeta(props: TitleProps) {
	return (
		<>
			<Title>{props.title}</Title>
			<Meta
				property="og:title"
				content={props.title}
			/>
			<Meta
				name="twitter:title"
				content={props.title}
			/>
			<Meta
				property="og:type"
				content="website"
			/>
			<Meta
				name="format-detection"
				content="telephone=no"
			/>
		</>
	);
}
