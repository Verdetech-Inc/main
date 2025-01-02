import { Show } from "solid-js";

interface HeaderProps {
	title: string;
	height: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Header({ title, height }: HeaderProps) {
	return (
		<>
			<Show when={height === "h1"}>
				<h1 class="text-2xl md:text-[24px] md:leading-[33px] font-900]">
					{title}
				</h1>
			</Show>
			<Show when={height === "h2"}>
				<h2 class="text-2xl md:text-[24px] md:leading-[33px] font-900">
					{title}
				</h2>
			</Show>
			<Show when={height === "h3"}>
				<h3 class="text-4xl md:text-[48px] font-[900] md:leading-[65px]">
					{title}
				</h3>
			</Show>
			<Show when={height === "h4"}>
				<h4>{title}</h4>
			</Show>
			<Show when={height === "h5"}>
				<h5>{title}</h5>
			</Show>
			<Show when={height === "h6"}>
				<h6>{title}</h6>
			</Show>
		</>
	);
}
