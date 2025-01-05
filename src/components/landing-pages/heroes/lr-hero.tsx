import { JSX } from "solid-js";
import Header from "~/components/common/header";
import Kicker from "~/components/common/kicker";

interface LRHeroProps {
	title: string;
	subtitle: string;
	kickerContent?: string;
	additionalLeftContent?: JSX.Element;
	rightContent: JSX.Element;
}

export default function LRHero(props: LRHeroProps) {
	return (
		<div class="flex flex-col md:flex-row md:p-[96px] gap-[12px] items-center justify-center text-dark p-[24px]">
			<div class="flex flex-col gap-[12px] w-full">
				{props.kickerContent && <Kicker text={props.kickerContent} />}
				<Header
					title={props.title}
					height="h3"
				/>
				<h2>{props.subtitle}</h2>
				{props.additionalLeftContent}
			</div>
			<div class="flex flex-col gap-[12px] w-full">{props.rightContent}</div>
		</div>
	);
}
