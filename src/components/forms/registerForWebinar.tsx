import { createEffect, createSignal, Show } from "solid-js";
import Button from "../common/button";
import { Modal } from "../common/modal";

interface RegisterForWebinarProps {}

export default function RegisterForWebinarForm(props: RegisterForWebinarProps) {
	const [email, setEmail] = createSignal<string>("");
	const [isEmailValid, setIsEmailValid] = createSignal<boolean>(false);
	const [isModalOpen, setIsModalOpen] = createSignal<boolean>(false);

	const currentMonth = new Date().getMonth();
	const getCurrentMonthString = () => {
		switch (currentMonth) {
			case 1:
				"January";
				break;
			case 2:
				"February";
				break;
			case 3:
				"March";
				break;
			case 4:
				"April";
				break;
			case 5:
				"May";
				break;
			case 6:
				"June";
				break;
			case 7:
				"July";
				break;
			case 8:
				"August";
				break;
			case 9:
				"September";
				break;
			case 10:
				"October";
				break;
			case 11:
				"November";
				break;
			case 12:
				"December";
				break;
		}
	};

	const getFullYear = () => new Date().getFullYear();

	const getMagicLink = () => {
		return `https://magic.beehiiv.com/v1/4fdad55f-99df-476f-a658-da5bade7965a?email=${email()}&redirect_to=https%3A%2F%2Fverdetech.io&utm_source=io-ai-webinar&utm_campaign=${getCurrentMonthString()}-${getFullYear()}`;
	};

	const validateEmail = () => {
		return email().includes("@") && email().includes(".") && email().length > 5;
	};

	createEffect(() => {
		setIsEmailValid(validateEmail());
	});

	return (
		<div class="flex flex-col md:flex-row gap-[12px] bg-[#5D7895] p-[24px]">
			<input
				type="email"
				placeholder="Email"
				class="p-[12px] rounded-md shadow-md bg-white w-full"
				onInput={(e: any) => setEmail(e.target.value)}
			/>

			<Show when={isEmailValid()}>
				<button
					onClick={() => setIsModalOpen(true)}
					class="bg-[#BEFB94] text-[#293241] font-[800] py-2 px-4 rounded hover:shadow-md"
				>
					Register
				</button>
			</Show>
			<Show when={!isEmailValid()}>
				<button
					class="bg-[#BEFB94] text-[#293241] font-[800] py-2 px-4 rounded opacity-90"
					disabled
				>
					Register
				</button>
			</Show>
			<Modal
				isOpen={isModalOpen()}
				onClose={() => setIsModalOpen(false)}
				title="Register for Webinar"
			>
				<div class="flex flex-col gap-[12px]">
					<p>
						You are about to subscribe to "Good At The Computer," the official
						Verdetech Newsletter. This newsletter will give updates regarding
						webinar activities, including announcements, cancellations, replays,
						and teasers of upcoming topic discussions.
					</p>
					<a
						href={getMagicLink()}
						class="p-[12px] bg-dark text-light text-center font-[800]"
					>
						Subscribe
					</a>
				</div>
			</Modal>
		</div>
	);
}
