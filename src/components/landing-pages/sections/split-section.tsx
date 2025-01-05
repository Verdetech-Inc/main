import { JSX, Show } from "solid-js";
import Kicker from "~/components/common/kicker";
import Header from "~/components/common/header";

interface SplitSectionProps {
	title: string;
	content: string;
	kicker?: string;
	additionalMainContent?: JSX.Element;
	subContent?: JSX.Element;
	direction?: "left" | "right";
}

interface ContentProps {
	kicker?: string;
	title: string;
	content: string;
	additionalMainContent?: JSX.Element;
	subContent?: JSX.Element;
	reverse?: boolean;
}

function Content({
	kicker,
	title,
	content,
	additionalMainContent,
	subContent,
	reverse,
}: ContentProps) {
	return (
		<div
			class={`flex flex-col ${
				reverse ? "md:flex-row-reverse" : "md:flex-row"
			} gap-[12px] items-center justify-center`}
		>
			{subContent}
			<div class="max-w-[600px] md:w-[75ch] text-dark flex flex-col gap-[12px] md:gap-[24px]">
				<Header
					title={title}
					height="h2"
				/>
				<Show when={kicker}>
					<Kicker text={kicker} />
				</Show>
				<p>{content}</p>
				{additionalMainContent}
			</div>
		</div>
	);
}

export default function SplitSection(props: SplitSectionProps) {
	return (
		<div class="flex flex-col md:flex-row gap-[12px] items-center justify-center text-light p-[24px]">
			<Show when={props.direction === "left"}>
				<Content
					kicker={props.kicker}
					title={props.title}
					content={props.content}
					additionalMainContent={props.additionalMainContent}
					subContent={props.subContent}
				/>
			</Show>
			<Show when={props.direction === "right"}>
				<Content
					kicker={props.kicker}
					title={props.title}
					content={props.content}
					additionalMainContent={props.additionalMainContent}
					subContent={props.subContent}
					reverse
				/>
			</Show>
		</div>
	);
}
