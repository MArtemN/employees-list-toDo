import './app-info.css';

const AppInfoJs = ({data}) => {
	const employeesCount = data.length;
	const increaseCount = data.filter(item => item.increase).length;

	return (
		<div className='app-info'>
			<h1>Учет папужиков в компании Matyukhin inc.</h1>
			<h2>Общее число папужиков: {employeesCount}</h2>
			<h2>Премию получат: {increaseCount}</h2>
		</div>
	);
};

export default AppInfoJs;