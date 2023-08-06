import Header from "../components/Header/Header";

export default function HeaderLayout({children}) {
  return (
    <>
        <Header/>
        {children}
      
    </>
  );
}
