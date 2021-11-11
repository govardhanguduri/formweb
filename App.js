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
  }

  onAddContact = event => {
    event.preventDefault()
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

  render() {
    const {name, Email, contactsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
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
            <button type="submit" className="button">
              Submit
            </button>
          </form>
          <table>
            <thead>
              <tr>
                <th className="num">No</th>
                <th className="name">Name</th>
                <th className="email">Email</th>
                {/*<th className="delete">Delete</th>
                <th className="edit">Edit</th>*/}
              </tr>
            </thead>
            <tbody>
              <tr>               
              </tr>
            </tbody>
          </table>
          {contactsList.map((eachContact,index, deleteContact) => (
            <ContactItem
              key={eachContact.id}
              contactDetails={eachContact}
              index={index}
              deleteContact={this.deleteContact}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App