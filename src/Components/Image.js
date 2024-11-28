import React from "react";
import { product } from "../products";

const Image = () => {
	return (
		<div>
			<img src={product.image} alt='macbook' />
		</div>
	);
};

export default Image;
