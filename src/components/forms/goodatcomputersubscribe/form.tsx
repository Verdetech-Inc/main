import { createSignal, Show, createEffect } from "solid-js";

export default function SubscriptionForm() {
	const [email, setEmail] = createSignal<string>("");
	const [isEmailValid, setIsEmailValid] = createSignal<boolean>(false);
	const getMagicLink = () => {
		return `https://magic.beehiiv.com/v1/4fdad55f-99df-476f-a658-da5bade7965a?email=${email()}&redirect_to=https%3A%2F%2Fverdetech.io`;
	};

	const validateEmail = () => {
		return email().includes("@") && email().includes(".") && email().length > 5;
	};

	createEffect(() => {
		setIsEmailValid(validateEmail());
	});

	return (
		<div class="flex flex-col gap-[12px]">
			<input
				type="email"
				placeholder="Email"
				class="p-[12px] border border-dark"
				onInput={(e: any) => setEmail(e.target.value)}
			/>
			<Show when={isEmailValid()}>
				<a
					href={getMagicLink()}
					class="p-[12px] bg-dark text-light text-center"
				>
					Subscribe
				</a>
			</Show>
		</div>
	);
}
