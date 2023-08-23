import React from "react";
import PropTypes from "prop-types";

//create your first component


const Contador = (props) => {
	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="container bg-dark d-flex justify-content-evenly align-items-center rounded">
						<div className="Logo fa-solid fa-clock border border-3 rounded py-4 px-3 my-2 fs-2 text-white"></div>
						<div className="annios border border-3 rounded p-4 my-2 fs-2 text-white">{props.annios}</div>
						<div className="meses border border-3 rounded p-4 my-2 fs-2 text-white">{props.meses}</div>
						<div className="semanas border border-3 rounded p-4 my-2 fs-2 text-white">{props.semanas}</div>
						<div className="dias border border-3 rounded p-4 my-2 fs-2 text-white">{props.dias}</div>
						<div className="horas border border-3 rounded p-4 my-2 fs-2 text-white">{props.horas}</div>
						<div className="minutos border border-3 rounded p-4 my-2 fs-2 text-white">{props.minutos}</div>
						<div className="segundos border border-3 rounded p-4 my-2 fs-2 text-white">{props.segundos}</div>
					</div>
				</div>
				<div className="row d-flex justify-content-center align-items-center">
					<div className="container bg-dark d-flex justify-content-around flex-fill align-items-center rounded">
						<div className="fa-solid fa-clock text-dark"></div>
						<div className="fa-solid fa-clock text-dark"></div>
						<div className="py-3 my-2 fs-6 text-white">AÑOS</div>
						<div className="py-3 my-2 fs-6 text-white">MESES</div>
						<div className="py-3 my-2 fs-6 text-white">SEMANAS</div>
						<div className="py-3 my-2 fs-6 text-white">DIAS</div>
						<div className="ps-2 py-3 my-2 fs-6 text-white">HORAS</div>
						<div className="py-3 my-2 fs-6 text-white">MINUTOS</div>
						<div className="py-3 my-2 fs-6 text-white">SEGUNDOS</div>

					</div>
				</div>

			</div>
		</>

	);
};

Contador.propTypes = {
	segundos: PropTypes.number,
	minutos: PropTypes.number,
	horas: PropTypes.number,
	dias: PropTypes.number,
	semanas: PropTypes.number,
	meses: PropTypes.number,
	annios: PropTypes.number
};


export default Contador;
