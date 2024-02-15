import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Form } from './ContactsForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/operetions/operetions';
import { selectContacts, selectOperetion } from 'redux/selector/selectors';
import { Audio } from 'react-loader-spinner';
import { Button, TextField } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function ContactForm () {
  const items = useSelector(selectContacts);
  const operetion = useSelector(selectOperetion);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const handlChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };
  const addContact = ({ name, number }) => {
    const newContact = { name, number };
    if (
      items.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContacts(newContact));
      toast.success('Сontact saved successfully!');
      reset();
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const iconStyles = { fill: '#FFFFFF', marginLeft: '10px' };
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        addContact({ name, number });
      }}
    >
      <TextField
        type='text'
        name='name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        size='small'
        margin='normal'
        fullWidth={true}
        value={name}
        onChange={handlChange}
        label='Name'
        placeholder='enter your name'
        variant='outlined'
      />
      <TextField
        type='tel'
        name='number'
        pattern='\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}'
        title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        required
        size='small'
        margin='normal'
        fullWidth={true}
        value={number}
        onChange={handlChange}
        onInput={e => {
          // Дозволяємо лише цифрові символи та деякі спеціальні символи
          e.target.value = e.target.value.replace(/[^0-9+\-()\s]/g, '');
        }}
        label='Number'
        placeholder='enter your phone'
        variant='outlined'
      />

      <Button
        sx={{
          marginTop: 1,
          width: '50%',
          marginBottom: 2,
          backgroundColor: 'green',
        }}
        type='submit'
        variant='contained'
      >
        {operetion === 'add' ? (
          <Audio
            height='24.4'
            width='100'
            color='#ffffff'
            ariaLabel='audio-loading'
            wrapperStyle={{}}
            wrapperClass='wrapper-class'
            visible={true}
          />
        ) : (
          <>
            Add contact
            <FaUserPlus style={iconStyles} size={20} />
          </>
        )}
      </Button>
      <ToastContainer autoClose={2000} />
    </Form>
  );
}

export default ContactForm;
