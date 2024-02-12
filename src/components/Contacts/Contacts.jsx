import { Container } from 'components/App.styled';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactsForm/ContactsForm';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import Title from 'components/Title/Title';
import { useSelector } from 'react-redux';
import { selectError, selectOperetion } from 'redux/selector/selectors';

const Contacts = () => {
  const operetion = useSelector(selectOperetion);
  const error = useSelector(selectError);
  return (
    <div>
      <Container>
        <ContactForm />
        {error && <ErrorCard />}
        <div>
          <Title title="Contacts"></Title>
          <Filter />
          {operetion === 'fatch' && <Loader />}
          <ContactList />
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
