import { AiOutlinePhone } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';

import {
  Box,
  Btn,
  ContactName,
  ContactNumber,
  List,
} from './ContactList.styled';
import { deleteContacts, fetchContacts } from 'redux/operetions/operetions';
import { useDispatch, useSelector } from 'react-redux';
import Massege from 'components/Massege';
import {
  selectOperetion,
  selectVisibleContacts,
} from 'redux/selector/selectors';
import { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ContactList = () => {
  const svgStylePhon = { fill: '#006400', marginRight: '10px', width: '10%' };
  const svgStyleUser = { fill: '#ffffff', marginLeft: '8px' };
  const contacts = useSelector(selectVisibleContacts);
  const operetion = useSelector(selectOperetion);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts?.length > 0 ? (
        <Box>
          {contacts?.map(({ id, name, number }) => (
            <List key={id}>
              <AiOutlinePhone style={svgStylePhon} size={20}></AiOutlinePhone>
              <ContactName>{name}</ContactName>
              <ContactNumber>{number}</ContactNumber>
              <>
                <Btn
                  sx={{ width: '30%' }}
                  variant='contained'
                  size='small'
                  type='button'
                  onClick={e => {
                    toast.warning('The contact has been deleted!');
                    dispatch(deleteContacts(id));
                  }}
                >
                  {operetion === id ? (
                    <Audio
                      height='24.4'
                      width='40'
                      color='#ffffff'
                      ariaLabel='audio-loading'
                      wrapperClass='wrapper-class'
                      visible={true}
                    />
                  ) : (
                    <>
                      Delete <FaTrashAlt style={svgStyleUser} size={15} />
                    </>
                  )}
                </Btn>
              </>
            </List>
          ))}
        </Box>
      ) : (
        <Massege>No Massege</Massege>
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default ContactList;
