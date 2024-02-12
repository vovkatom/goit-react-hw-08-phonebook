import { BoxLoader, LoaderSpiner } from './Loader.styled';

const Loader = () => {
  return (
    <BoxLoader>
    
      <LoaderSpiner
        visible={true}
        color="#006400"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </BoxLoader>
  );
};

export default Loader;
