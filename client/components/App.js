import React from "react"
import axios from 'axios';
import AuthorList from './AuthorList'
import BookList from './BookList'
//import any sub-components

export default class App extends React.Component {
	//constructor to initialize state
	constructor(){
		super()
		this.state = {
			authors:[],
			books:[],
			selectedAuthorId:0
		}

		this.selectAuthor = this.selectAuthor.bind(this);
	}

	async componentDidMount(){
		window.addEventListener('hashchange',async ()=>{
			const id = window.location.hash.slice(1);
			this.selectAuthor(id)
		})
		if(window.location.hash){
			const id = window.location.hash.slice(1);
			this.selectAuthor(id)
		}
		const response = await axios.get('/api/authors');
		this.setState({authors:response.data})

	}
	//any lifecycle methods
	//any custom methods
	//render

	async selectAuthor(id){
		const {data} = await axios.get(`/author/${id}`)
		this.setState({selectedAuthorId: id,books:data})
	}


	render() {
		return(
			<ul>
			{this.state.selectedAuthorId ===0 ? <AuthorList authors = {this.state.authors} selectAuthor = {this.selectAuthor}/> :<BookList books = {this.state.books} selectAuthor = {this.selectAuthor}/>}
			</ul>
		)
	}
}
