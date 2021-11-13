import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

const initialContactsList = [

]

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
    Email: '',
    updateEdit:[],
    editIndex: null,
  }

  onAddContact = event => {
    // event.preventDefault()
    const {name, Email} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      Email,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      name: '',
      Email: '',
    }))
  }

  onChangeEmail = event => {
    this.setState({Email: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  deleteContact = id => {
    const {contactsList} = this.state
    const updatedContactsList= contactsList.filter(eachContact => id !== eachContact.id,)

    this.setState({
      contactsList: updatedContactsList,
    })
  }

  onEditList = (name, email, index) => {
    this.setState({editIndex: index})
    console.log(name);
    this.setState({Email: email})
    this.setState({name: name})

  }

  updateData = () => {
    const temp = this.state.contactsList;
    temp[this.state.editIndex].name = this.state.name;
    temp[this.state.editIndex].Email = this.state.Email;
    this.setState({contactsList: temp});
    this.setState({editIndex: null});
    this.setState({name:''})
    this.setState({Email:''})
  }

  render() {
    const {name, Email, contactsList, editIndex} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container">
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Enter Name"
              type="text"
              pattern="[A-za-z\\s]*"
            />
            <input
              className="input"
              value={Email}
              type="email"
              onChange={this.onChangeEmail}
              placeholder="Enter Email"
            />
            {
              editIndex !== null ? 
                <button type="button" onClick={this.updateData} className="button">
                  Update
                </button>
            :
              <button onClick={this.onAddContact} type="button" className="button">
                Submit
              </button>

            }
            
          </form>
          <div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>  
            </tbody>
          </table>
           {contactsList.map((eachContact,index, deleteContact) => (
            <ContactItem
              key={eachContact.id}
              contactDetails={eachContact}
              index={index}
              deleteContact={this.deleteContact}
              onEditList={this.onEditList}
            />
          ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App