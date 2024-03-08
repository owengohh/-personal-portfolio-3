"use client"
import Navbar from "./Navbar";

const Header = () => {
	return (
		<header>
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div>
            <Navbar></Navbar>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
