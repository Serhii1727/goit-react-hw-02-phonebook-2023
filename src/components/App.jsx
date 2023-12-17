import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('Hello');
  };

  render() {
    const id = nanoid();
    console.log(id);
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <button className={css.button}>Add contact</button>
        </form>
        <h1 className={css.title}>Contacts</h1>
      </div>
    );
  }
}
