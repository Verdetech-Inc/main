import { Show } from "solid-js";

interface ButtonProps {
	onClick?: () => void;
	href?: string;
	children: any;
	type: "main" | "secondary";
	isDisabled?: boolean;
}

export default function Button({
	onClick,
	href,
	children,
	type,
	isDisabled,
}: ButtonProps) {
	return (
		<>
			<Show when={href !== undefined && type === "main" && !isDisabled}>
				<a
					href={href}
					class="bg-dark text-light py-2 px-4 rounded hover:shadow-md flex flex-row items-center"
				>
					{children}
				</a>
			</Show>
			<Show when={href !== undefined && type === "main" && isDisabled}>
				<a class="bg-dark text-light py-2 px-4 rounded hover:shadow-md opacity-50">
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
