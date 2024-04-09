import { useState } from "react";
export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }

      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});
      const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
    
    return (
      <section className="contact" id="connect">
      <Container>
        </Container>
</section>
    )
}