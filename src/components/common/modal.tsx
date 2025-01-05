import { Show } from "solid-js";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children?: any;
};

export function Modal(props: ModalProps) {
	const handleOverlayClick = (e: MouseEvent) => {
		// Only close if the user clicked on the overlay itself
		if (e.target === e.currentTarget) {
			props.onClose();
		}
	};

	return (
		<Show when={props.isOpen}>
			{/* Overlay */}
			<div
				onClick={handleOverlayClick}
				class="fixed bg-dark bg-opacity-50 inset-0 flex items-center justify-center z-50"
			>
				{/* Modal content container (clicks here won't close the modal) */}
				<div
					onClick={(e) => e.stopPropagation()}
					class="bg-white p-[24px] rounded-md shadow-md max-w-[600px] w-full"
				>
					<h2 class="text-3xl font-[800] mb-[24px]">
						{props.title ?? "Modal Title"}
					</h2>
					<div>{props.children}</div>
				</div>
			</div>
		</Show>
	);
}
