import Image from "next/image";
const banner = () => {
	return (
		<div className="relative z-50 w-full">
			{/* Desktop */}
			<Image
				src="/images/4th-banner-D.png"
				width={1920}
				height={60}
				alt="Fourth of July hours banner"
				className="hidden md:block w-full h-auto"
				priority
			/>

			{/* Mobile */}
			<Image
				src="/images/4th-banner-M.png"
				width={768}
				height={200}
				alt="Fourth of July hours banner"
				className="block md:hidden w-full h-auto"
				priority
			/>
		</div>
	);
};

export default banner;
