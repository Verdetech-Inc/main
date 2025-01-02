import { Link, Meta } from "@solidjs/meta";

interface UrlMetaProps {
	url: string;
}
export default function UrlMeta(props: UrlMetaProps) {
	const { url } = props;
	return (
		<>
			<Link
				rel="canonical"
				href={url}
			/>
			<Meta
				property="og:url"
				content={url}
			/>
			<Meta
				name="twitter:url"
				content={url}
			/>
		</>
	);
}
