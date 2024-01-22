import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./orsys.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
								Orsys communication
							</div>
							<div className="work-subtitle">
								Fullstack developer
							</div>
							<div className="work-duration">
								01/05/2023 - Present
							</div>
						</div>

						<div className="work">
							<img
								src="./copag.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Copag</div>
							<div className="work-subtitle">
								Fullstack developer
							</div>
							<div className="work-duration">
								01/09/2022 - 01/05/2023
							</div>
						</div>
						<div className="work">
							<img
								src="./matious.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Matious digital</div>
							<div className="work-subtitle">
								Backend developer
							</div>
							<div className="work-duration">
								01/03/2022 - 01/07/2022
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
