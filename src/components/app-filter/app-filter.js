import './app-filter.css';

const AppFilter = (props) => {
	const buttonsData = [
		{name: 'all', label: 'Все папужики'},
		{name: 'rise', label: 'На повышение'},
		{name: 'salary', label: 'З/П больше 1000$'},
	];

	const buttons = buttonsData.map(({name, label}) => {
		return (
			<button
				className={props.filterName === name ? 'btn btn-light' : 'btn btn-outline-light'}
				type='button'
				key={name}
				onClick={() => props.onUpdateFilter(name)}>
				{label}
			</button>
		);
	});

	return (
		<div className='btn-group'>
			{buttons}
		</div>
	)
}

export default AppFilter;