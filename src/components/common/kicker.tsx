import { JSX } from "solid-js";

interface KickerProps {
	text?: string;
	element?: JSX.Element;
}

export default function Kicker({ text }: KickerProps) {
	return (
		<div class="flex gap-[12px] px-[12px] py-[6px] rounded-[6px] text-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] max-w-[fit-content]">
			<p>{text}</p>
		</div>
	);
}
