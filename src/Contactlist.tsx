import * as React from 'react';
import Contact from "./Contact";
import { useState, useEffect } from 'react';


function Contactlist() {
    const [contacts, setContacts] = useState<any[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((response) => {
                setContacts(response);
                setError(null);
            })
                .catch(setError);
    }, []);

    if (error) return <p>An error occurred</p>

  return (
      
      <div className="App">
          {contacts.map(({ id, name, email, address, phone,website, company }) => (
              <Contact
                  key={id}
                  id={id}
                  name={name}
                  email={email}
                  street={address.street}
                  suite={address.suite}
                  city={address.city}
                  zipcode={address.zipcode}
                  phone={phone}
                  website={website}
                  company={company.name}
                  bs={company.bs}
                  catchPhrase={company.catchPhrase}
              />
          ))}
          </div>

  );
}

export default Contactlist;
