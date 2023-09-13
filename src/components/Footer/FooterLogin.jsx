import { Link as Anchor } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function FooterLogin( {style}) {
  return (
    <>
        <Anchor to="/auth/login" className={style}>
            Login
        </Anchor>
    </>
  );
}
