import { useSelector } from 'react-redux';
import { ErrorInfo, ErrorTitle } from './ErrorCard.styled';
import { selectError } from 'redux/selector/selectors';

const ErrorCard = () => {
  const error = useSelector(selectError);

  return (
    <>
      <ErrorTitle>Error</ErrorTitle>
      {error && <ErrorInfo>{error}</ErrorInfo>}
    </>
  );
};

export default ErrorCard;
