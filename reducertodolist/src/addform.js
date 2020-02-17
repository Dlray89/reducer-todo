import React,{ Component } from "react";

class addToDo extends Component {

    state ={
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state)
    }
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Add New To DO</label>
            <input type="text" onChange={this.handleChange}></input>
            </form>
        </div>
    )
}
}

export default addToDo;