import React, {Component} from 'react'
import InputData from './input'
import ListItem from './itemList'
import TodoTitle from './todoTitle'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            items: [{text:"Great", key: 1}, {text:"Good", key: 2}, {text:"Excellent", key: 3}],
            currentItem: {
                text: '',
                key: ''
            }
        }
    }
    InputHandler = (e) => {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        });
        console.log(this.state)
    } 

    AddItem = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text!==""){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: "",
                    key: "",
                }
            })
        }
        console.log(this.state.items);
    }

    DeleteItem = (key) => {
        const filterItems = this.state.items.filter(item => item.key!==key)
        this.setState({items: filterItems})
    }

    UpdateItem = (text, key) => {
       const items = this.state.items;
       items.map(item => {
           if(item.key===key){
               item.text = text;
           }
       })
       this.setState({items: items});
    }

    render(){
        return(
            <div className="container-fluid todo-app">
            <TodoTitle title="Todo List" />
            <InputData handle="Write something" inputValue={this.state.currentItem.text} inputHandle={this.InputHandler} addItem={this.AddItem} />
            <ListItem items={this.state.items} deleteItem={this.DeleteItem} updateItem={this.UpdateItem} />
            </div>
        
        );
    }
}

export default Todo;