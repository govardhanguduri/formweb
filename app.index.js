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

  deleteContact = id => {
    const {contactsList} = this.state
    const updatedContactsList= contactsList.filter(eachContact => id !== eachContact.id,)

    this.setState({
      contactsList: updatedContactsList,
    })
  }

  onChangeEmail = event => {
    this.setState({Email: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, Email, contactsList} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Details</h1>
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
              </tr>
            </thead>
            <tbody>
              <tr>               
              </tr>
            </tbody>
          </table>    
          {contactsList.map((eachContact,index) => (
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
















////////////////////////

import './index.css'

//const ContactItem = ({contactDetails,   index}) => {
  const {name, Email,  } = contactDetails

  /*const onDeleteContact = () => {
    deleteContact(id)
  }*/


  return (
    <li type="1" className="table-row">
        <div className="table-cell serial-column">
        <p>{index+1}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell email-column">
        <p className="mobile-no-value">{Email}</p>
      </div>
      <div>
        {/*<button
            className="deletebutton"
            type="button"
            onClick={onDeleteContact}
            testid="delete"
            >
            <img
                className="delete"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
            />
            </button>*/}
        </div>
    </li>
  )
}

export default ContactItem


///////////////////////////////////////////////////



{/*
.table-row {
  display: flex;
  list-style-type: none;
  border-left: 2px solid #0d0f11;
  border-bottom: 2px solid #000000;
  border-right: 2px solid #000000;
}

.table-cell {
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 30px;
  display: flex;
  align-items: center;
}

.table-cell-serial-column {
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 10%;
  display: flex;
  text-align: center;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
}


.deletebutton {
  background-color: #ffffff;
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
}

.delete {
  height: 20px;
  width: 20px;
}

.table,th, td {
  border: 2px solid black;
  height: 50px;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 15px;
}

.name-column {
  width: 33%;
  text-transform: capitalize;
}

.serial-column {
    width: 20%;
}

.email-column {
  flex-grow: 1;
}

.email-value {
  flex-grow: 1;
}

///////////////////////////////////



* {
  box-sizing: border-box;
}

.app-container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.responsive-container {
  width: 80%;
  max-width: 1140px;
}

.heading {
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  margin-top: 96px;
  margin-bottom: 32px;
}

.contact-form-container {
  display: flex;
}

@media screen and (max-width: 575px) {
  .contact-form-container {
    flex-direction: column;
  }
}

.table,th,td{
  border: 2px solid black;
  height: 50px;
}

.num{
  width: 12.8%;
}

.name{
  width: 35.7%;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 15px;
}

.input {
  color: #1e293b;
  font-family: 'Roboto';
  border: 2px solid #000000;
  border-radius: 1px;
  width: 28%;
  height: 48px;
  padding-left: 16px;
  margin-right: 15px;
  outline: none;
  margin-bottom: 10px;
  flex-grow: 1;
  max-width: 320px;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  -ms-border-radius: 1px;
  -o-border-radius: 1px;
}

@media screen and (max-width: 575px) {
  .input {
    width: 280px;
  }
}

.button {
  background-color: #000000;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
}

@media screen and (max-width: 575px) {
  .button {
    width: 200px;
  }
}

.contacts-table {
  padding-left: 0;
  margin-top: 48px;
}

.table-header {
  display: flex;
  background-color: #f1f5f9;
  list-style-type: none;
  border: 2px solid #000000;
}

.table-header-cell {
  color: #000;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 32px;
}


.name-column {
  width: 33%;
  border-right: none;
}

.serial-column {
  width: 10%;
  border-right: none;
  text-align: center;
}

.separator {
  margin: 0;
  border: 1px solid #00050a;
}

.input capitalize {
  text-transform: capitalize;
}

*/}
