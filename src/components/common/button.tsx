import { Show } from "solid-js";

interface ButtonProps {
	onClick?: () => void;
	href?: string;
	children: any;
	type: "main" | "secondary";
}

export default function Button({ onClick, href, children, type }: ButtonProps) {
	return (
		<>
			<Show when={href !== undefined && type === "main"}>
				<a
					href={href}
					class="bg-dark text-light py-2 px-4 rounded hover:shadow-md"
				>
					{children}
				</a>
			</Show>
			<Show when={href !== undefined && type === "secondary"}>
				<a
					href={href}
					class="bg-light text-dark py-2 px-4 rounded border border-dark hover:shadow-md"
				>
					{children}
				</a>
			</Show>
			<Show when={href === undefined && type === "main"}>
				<button
					onClick={onClick}
					class="bg-dark text-light py-2 px-4 rounded hover:shadow-md"
				>
					{children}
				</button>
			</Show>
			<Show when={href === undefined && type === "secondary"}>
				<button
					onClick={onClick}
					class="bg-light text-dark py-2 px-4 rounded border border-dark hover:shadow-md"
				>
					{children}
				</button>
			</Show>
		</>
	);
}
