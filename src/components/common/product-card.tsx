import { Show, JSX } from "solid-js";
import Header from "./header";
import Button from "./button";

export interface ProductCardProps {
	image?: string;
	title: string;
	description: JSX.Element;
	link?: string;
}

export default function ProductCard({
	image,
	title,
	description,
	link,
}: ProductCardProps) {
	return (
		<div class="flex flex-col gap-[12px] items-center justify-center bg-light text-dark rounded-[24px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
			<Show when={image !== undefined}>
				<img
					src={image}
					alt={title}
				/>
			</Show>
			<div class="flex flex-col gap-[12px] items-center p-[24px] justify-center">
				<Header
					title={title}
					height="h3"
				/>
				{description}
				<Show when={link !== undefined}>
					<Button
						href={link}
						type="main"
					>
						View
					</Button>
				</Show>
			</div>
		</div>
	);
}
