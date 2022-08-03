import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item'

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

	let elements = [];

	if (data.length > 0) {
		elements = data.map(item => {
			const {id, ...itemsProps} = item;
			return (
				<EmployeesListItem
					key={id}
					{...itemsProps}
					id={id}
					onDelete={() => onDelete(id)}
					onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
					onChangeSalary={onChangeSalary}/>
			)
		});
	} else {
		elements = <li className="list-group-item d-flex justify-content-between">К сожалению, ничего не найдено!</li>;
	}

	return (
		<ul className='app-list list-group'>
			{elements}
		</ul>
	)
}

export default EmployeesList;