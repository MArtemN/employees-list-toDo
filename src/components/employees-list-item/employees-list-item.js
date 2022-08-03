import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component{
	constructor (props) {
		super(props)

		this.state = {
			salary: this.props.salary
		}
	}

	onChange = (e) => {
		const currentSalary = parseInt(e.target.value);

		this.setState({
			salary: currentSalary
		});

		this.props.onChangeSalary(this.props.id, currentSalary);
	}

	render() {
		const {name, onDelete, increase, rise, onToggleProp} = this.props;
		const incr = increase ? ' increase' : '';
		const ris = rise ? ' like' : '';

		return (
			<li className={"list-group-item d-flex justify-content-between" + incr + ris}>
				<span onClick={onToggleProp} className="list-group-item-label" data-toggle='rise'>{name}</span>
				<input
					type="text"
					className="list-group-item-input"
					defaultValue={this.state.salary + '$'}
					onChange={this.onChange}/>
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
							className="btn-cookie btn-sm "
							onClick={onToggleProp}
							data-toggle='increase'>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
							className="btn-trash btn-sm "
							onClick={onDelete}>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}
}

export default EmployeesListItem;