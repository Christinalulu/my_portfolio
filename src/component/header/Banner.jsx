import img from "../../images/img.png";

function Banner() {
	return (
		<>
			<div
				id='header'
				className=' bg-slate-400 flex'>
				<div className=" m-10">
					<h1 className=' text-center text-2xl '>Hello Christina here</h1>
					<h2 className=' text-center text-lg'>Nice to meet you👋🏼</h2>

					<p className='text-center min-w-0'>
						I'm a Front-end developer with a passion for crafting visually appealing
						and user-friendly websites and applications. With a keen eye for design
						and a knack for turning creative concepts into interactive digital
						experiences. As front-end developer, I possesses a deep undersatind of
						HTML, CSS and JavaScript and more.{" "}
					</p>
				</div>
            

				<div className="">
					<img
						src={img}
						alt='profile image'
					/>
				</div>
			</div>
		</>
	);
}

export default Banner;
