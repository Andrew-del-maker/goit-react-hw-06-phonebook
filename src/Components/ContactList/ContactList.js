import { connect } from 'react-redux';
import {deleteContact} from '../../redux/phonebook/phonebook-action'

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
          {contacts.map(({name,id,number}) =>
              <li key={id}>{name} {number}
                  <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
              </li>
            )}
    </ul>
)

  const getVisibleContacts = (filter, contacts) => {
    

    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  }

const mapStateToProps = state => {
    const { filter, contacts } = state.contacts;
    const visibleContacts = getVisibleContacts(filter, contacts);
    return {

        contacts: visibleContacts,
    }
};

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ContactList);