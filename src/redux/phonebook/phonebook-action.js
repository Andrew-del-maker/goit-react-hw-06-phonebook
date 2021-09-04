import shortid from "shortid"
import { createAction } from "@reduxjs/toolkit"

const addContact = createAction('contact/add', (name, number) => ({
    payload: {
      id: shortid(),
      name,
      number, 
    }
}))

const deleteContact = createAction('contact/remove')

const changeFilter = createAction('contact/find');

export { addContact, deleteContact, changeFilter };