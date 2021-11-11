import './index.css'

const ContactItem = ({contactDetails, deleteContact, index}) => {
  const {name, Email, id  } = contactDetails

  const onDeleteContact = () => {
    deleteContact(id)
  }

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
      <div className="table-cell Email-column">
        <p className="Email-no-value">{Email}</p>
        <div className="deletecontainer">
          <button 
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
          </button>
        </div>
      </div>
    </li>
  )
}

export default ContactItem