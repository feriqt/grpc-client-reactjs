import logo from './logo.svg';
import './App.css';
import { grpc } from "@improbable-eng/grpc-web";
import * as grpc_web from 'grpc-web';
// import { NotificationService } from "../grpc/generated/notification-lab_pb_service"; // Replace with the actual path to your generated service file
// import { Empty, NotificationResponse, StreamingNotification } from "../grpc/generated/notification-lab_pb"; // Replace with the actual path to your generated request and response message files

import { ContactServiceClient, ContactService } from "./grpc/generated/contact_pb_service"
import { StreamServiceClient } from "./grpc/generated/stream_pb_service"
import { Empty } from "./grpc/generated/stream_pb"
import { Contact, ContactId, CreateContactRequest, DeleteResponse } from "./grpc/generated/contact_pb"
import { useEffect, useState } from 'react';  

function App() {
  
// grpc.web = {...grpc_web};

// const myTransport = grpc.CrossBrowserHttpTransport({ withCredentials: false });

// // Specify the default transport before any requests are made. 
// grpc.setDefaultTransport(myTransport);

// const client = new StreamServiceClient("http://192.168.100.223:50051",myTransport); 
// // client.serviceHost = "http://192.168.100.223:50051"
// // Initiate the streaming request with an empty request message
// const stream = client.streamData(new Empty(), null, (err, response) => {
//   if (err) {
//     console.error('Error while streaming data:', err);
//     // Handle the error as needed
//   } else {
//     onStreamData(response); // Call the callback function to handle the response
//   }
// });

// const onStreamData = (response) => {
//   const data = response.getData(); // Get the data from the response
//   console.log('Received data:', data);
//   // Process the data as needed
// };
// // console.log(stream)
// // client.streamData(new Empty());
// // Add event listeners to handle responses and stream status
// stream.on('data', response => {
//   // Handle incoming data response
//   console.log('Received DataResponse:', response.toObject());
// });

// stream.on('status', status => {
//   // Handle stream status
// });

// stream.on('end', end => {
//   // Handle end of stream
// });

// const client = grpc.client(ContactService.CreateContact, {
//   host: "http://localhost:9100",
//   transport: myTransport
// });

  // const contactService = new ContactServiceClient('http://localhost:50051', null, null);

  // // Create a contact
  // const createContact = (contact, callback) => {
  //   const request = new CreateContactRequest();
  //   request.setName = "feri"
  //   request.setNumber = "12345"
  //   request.setId = 0

  //   const metadata = { 'Content-Type': 'application/grpc-web-text' }; 

 

  //   grpc.unary(contactService.createContact, {
  //     metadata,
  //     host: 'https://your-backend-server.com',
  //     onEnd: (res) => {
  //       if (res.status === grpc.Code.OK && res.message) {
  //         const createdContact = res.message.toObject();
  //         callback(null, createdContact);
  //       } else {
  //         callback(new Error(`Failed to create contact: ${res.status}`));
  //       }
  //     },
  //   });
  // };

  // Get a contact
  // const getContact = (contactId, callback) => {
  //   const request = new GetContactRequest();
  //   request.setContactId(contactId);

  //   const metadata = { 'Content-Type': 'application/grpc-web-text' };
  //   const getRequest = createUnaryRequest(ContactService.GetContact, request);

  //   grpc.unary(getRequest, {
  //     metadata,
  //     host: 'https://your-backend-server.com',
  //     onEnd: (res) => {
  //       if (res.status === grpc.Code.OK && res.message) {
  //         const contact = res.message.toObject();
  //         callback(null, contact);
  //       } else {
  //         callback(new Error(`Failed to get contact: ${res.status}`));
  //       }
  //     },
  //   });
  // };

  // // Update a contact
  // const updateContact = (contact, callback) => {
  //   const request = new UpdateContactRequest();
  //   request.setContact(contact);

  //   const metadata = { 'Content-Type': 'application/grpc-web-text' };
  //   const updateRequest = createUnaryRequest(ContactService.UpdateContact, request);

  //   grpc.unary(updateRequest, {
  //     metadata,
  //     host: 'https://your-backend-server.com',
  //     onEnd: (res) => {
  //       if (res.status === grpc.Code.OK && res.message) {
  //         const updatedContact = res.message.toObject();
  //         callback(null, updatedContact);
  //       } else {
  //         callback(new Error(`Failed to update contact: ${res.status}`));
  //       }
  //     },
  //   });
  // };

  // // Delete a contact
  const deleteContact = (contactId, callback) => { 

    // const metadata = { 'Content-Type': 'application/grpc-web-text' };
    // const deleteRequest = createUnaryRequest(ContactService.DeleteContact, contactId);

   grpc.unary(contactId, {
      // metadata,
      host: 'http://localhost:50051',
      onEnd: (res) => {
        if (res.status === grpc.Code.OK && res.message) {
          const response = res.message.toObject();
          callback(null, response);
        } else {
          callback(new Error(`Failed to delete contact: ${res.status}`));
        }
      },
    });
  };

  // Example usage
  // Create a new contact
  // const newContact = new Contact();
  // newContact.setName('John Doe');
  // newContact.setNumber('+1234567890');
  // newContact.setId(1);

  // createContact(newContact, (error, createdContact) => {
  //   if (error) {
  //     console.error('Failed to create contact:', error);
  //   } else {
  //     console.log('Contact created:', createdContact);
  //   }
  // });

  // Get an existing contact
  // const contactId = new ContactId();
  // contactId.setId(1);

  // getContact(contactId, (error, contact) => {
  //   if (error) {
  //     console.error('Failed to get contact:', error);
  //   } else {
  //     console.log('Contact:', contact);
  //   }
  // });

  // // Update an existing contact
  // const updatedContact = new Contact();
  // updatedContact.setName('Jane Smith');
  // updatedContact.setNumber('+9876543210');
  // updatedContact.setId(1);

  // updateContact(updatedContact, (error, updatedContact) => {
  //   if (error) {
  //     console.error('Failed to update contact:', error);
  //   } else {
  //     console.log('Contact updated:', updatedContact);
  //   }
  // });

  // // Delete an existing contact
  // const contactToDeleteId = new ContactId();
  // contactToDeleteId.setId(1);

  // deleteContact(contactToDeleteId, (error, response) => {
  //   if (error) {
  //     console.error('Failed to delete contact:', error);
  //   } else {
  //     console.log('Contact deleted:', response);
  //   }
  // });


  // function trys() {

  //   // const request = new Empty();
  //   // const request = new StreamingNotification();

  //   grpc.invoke(NotificationService.ListenForNotifications, {
  //     // request: request,
  //     host: "http://localhost:50051", // Replace with the URL of your gRPC server
  //     onMessage: (response) => {
  //       // Handle the incoming response
  //       const responseData = response.toObject(); // Convert the response to a JavaScript object
  //       console.log("Received gRPC response:", responseData);
  //       // Do something with the response data
  //     },
  //     onEnd: (status) => {
  //       // Handle the end of the gRPC call
  //       console.log("gRPC call ended with status:", status);
  //       // Do something with the status
  //     },
  //   });
  // }
  // useEffect(() => {
  //   // stream()
  //   var x= client.streamData(new Empty());
  //   console.log(x)
  // //   const newContact = new Contact();
  // //   newContact.setName('John Doe');
  // //   newContact.setNumber('+1234567890');
  // //   newContact.setId(1);

  // //   createContact(newContact, (error, createdContact) => {
  // //     if (error) {
  // //       console.error('Failed to create contact:', error);
  // //     } else {
  // //       console.log('Contact created:', createdContact);
  // //     }
  // //   });
  // }, []);
const myTransport = grpc.CrossBrowserHttpTransport({ withCredentials: false });
grpc.setDefaultTransport(myTransport);

  // console.log(x)


  const [contact,setContact] = useState() 

useEffect(() => {
  // // Delete an existing contact
    var contactToDeleteId = new ContactId();
    contactToDeleteId.setId("999");  
    const metadata = { 'Content-Type': 'application/grpc-web' }; 
    const x  = grpc.unary(ContactService.DeleteContact, {
      metadata : metadata,
      request: contactToDeleteId, 
      host: "http://localhost:50051",
      transport: myTransport,
      
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        // console.log(res)
        // console.log(statusMessage)
        // console.log(headers)
        // console.log(message)
        // console.log(trailers)
        if (status === grpc.Code.OK && message) {
          setContact(message.toObject);
          console.log("all ok. got contact: ", message.toObject());
          x.close()
        }
      }
    });
    
}, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <div onClick={stream}>xxx</div> */}
      </header>
    </div>
  );
}

export default App;
