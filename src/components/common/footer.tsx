import { Show, For } from "solid-js";

interface FooterProps {
	sitename: string;
	email?: string;
	socials?: {
		name: string;
		link: string;
	}[];
}

export default function Footer(props: FooterProps) {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<div class="flex flex-col gap-[12px] items-center justify-center bg-dark text-light p-[48px]">
				<p>
					© {props.sitename} {currentYear}
				</p>
				<Show when={props.email !== undefined}>
					<p>{props.email}</p>
				</Show>
				<Show when={props.socials !== undefined}>
					<div class="flex gap-[12px]">
						<For each={props.socials}>
							{(social) => (
								<a
									href={social.link}
									class="underline"
								>
									{social.name}
								</a>
							)}
						</For>
					</div>
				</Show>
			</div>
		</>
	);
}
