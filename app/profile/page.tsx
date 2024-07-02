import About from '../components/About/About';
import Form from '../components/Form/Form';
import HeaderComponent from '../components/Header/Header';
import Interests from '../components/Interests/Interests';


export default function profilePage() {

  return (
    <>
      <HeaderComponent />
      <About />
      <Interests />
      <Form />

         {/* <Image
               src="/vercel.svg"
               alt="Vercel Logo"
               className={styles.vercelLogo}
               width={100}
               height={24}
               priority
             /> */}

    </>
  )
}
