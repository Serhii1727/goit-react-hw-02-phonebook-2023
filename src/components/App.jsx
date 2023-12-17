import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChangeInput = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, number: this.state.number, id: nanoid() },
      ],
    }));

    this.resetInputForm();
  };

  resetInputForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, contacts } = this.state;

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>
            <span>Name</span>
            <input
              onChange={this.handleChangeInput}
              className={css.input}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <input
              onChange={this.handleChangeInput}
              className={css.input}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
        <h1 className={css.title}>Contacts</h1>
        {contacts.length >= 0 && (
          <ul>
            {contacts.map(contact => {
              return (
                <li key={contact.id}>
                  <span>{contact.name}</span>
                  <span>{contact.number}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
