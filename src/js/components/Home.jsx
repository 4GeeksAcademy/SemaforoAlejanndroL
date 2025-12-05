
import React, { useState, useEffect } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [currentLight, setCurrentLight] = useState("");

	useEffect(() => {
		if (currentLight === "🔴"){
		console.log("No puedes pasar");}
		else if (currentLight === "🟠"){
			console.log("Precaución");}
			else console.log("Puedes pasar")
	}, [currentLight]);

	return (
		<div className="text-center container">
			
			<br></br>
			<h2 class="red-light" onClick={() => setCurrentLight("🔴")}style={{ filter: currentLight === "🔴" ? "drop-shadow(0 0 15px red)" : "none" }}>🔴</h2>
			<h3 class="orange-light" onClick={() => setCurrentLight("🟠")}style={{ filter: currentLight === "🟠" ? "drop-shadow(0 0 15px orange)" : "none" }}>🟠</h3>
			<h4 class="green-light" onClick={() => setCurrentLight("🟢")}	style={{ filter: currentLight === "🟢" ? "drop-shadow(0 0 15px green)" : "none" }}>🟢</h4>
		</div>
	)
};
export default Home;
