import { Component } from 'react'
import nextId from "react-id-generator";

import AppInfoJs from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

class App extends Component {
	constructor (props) {
		super(props)

		this.state = {
			data: [
				{name: 'Морти', salary: '800', increase: false, rise: false, id: nextId()},
				{name: 'Лимон', salary: '3000', increase: false, rise: false, id: nextId()},
				{name: 'Рик', salary: '5000', increase: false, rise: false, id: nextId()},
			],
			term: '',
			filterName: 'all'
		}
	}

	deleteItem = (id) => {
		this.setState(({data}) =>{
			return {
				data: data.filter(item => item.id !== id)
			};
		});
	}

	addItem = (name, salary) => {
		const newItem = {
			name: name,
			salary: salary,
			increase: false,
			id: nextId()
		};

		const newArr = [...this.state.data, newItem];

		this.setState(() => {
			return {
				data: newArr
			}
		});
	}

	onChangeSalary = (id, salary) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, salary: salary}
				}

				return item;
			})
		}));
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]};
				}
				return item;
			})
		}));
	}

	searchEmp = (items, term) => {
		if (term === '') {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		});
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	filterEmp = (items, filterName) => {
		if (filterName === 'all') {
			return items;
		}

		return items.filter(item => {
			if (filterName === 'salary') {
				return item[filterName] > 1000;
			}

			return item[filterName];
		});
	}

	onUpdateFilter = (filterName) => {
		this.setState({filterName});
	}

	render() {
		const visibleData = this.filterEmp(this.searchEmp(this.state.data, this.state.term), this.state.filterName);

		return (
			<div className="app">
				<AppInfoJs
					data={this.state.data}/>

				<div className="search-panel">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch}/>

					<AppFilter
						onUpdateFilter={this.onUpdateFilter}
						filterName={this.state.filterName}/>
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					onChangeSalary={this.onChangeSalary}/>

				<EmployeesAddForm
					onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;