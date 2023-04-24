// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var contact_pb = require('./contact_pb.js');

function serialize_generated_Contact(arg) {
  if (!(arg instanceof contact_pb.Contact)) {
    throw new Error('Expected argument of type generated.Contact');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_generated_Contact(buffer_arg) {
  return contact_pb.Contact.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_generated_ContactId(arg) {
  if (!(arg instanceof contact_pb.ContactId)) {
    throw new Error('Expected argument of type generated.ContactId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_generated_ContactId(buffer_arg) {
  return contact_pb.ContactId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_generated_DeleteResponse(arg) {
  if (!(arg instanceof contact_pb.DeleteResponse)) {
    throw new Error('Expected argument of type generated.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_generated_DeleteResponse(buffer_arg) {
  return contact_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContactServiceService = exports.ContactServiceService = {
  createContact: {
    path: '/generated.ContactService/CreateContact',
    requestStream: false,
    responseStream: false,
    requestType: contact_pb.Contact,
    responseType: contact_pb.Contact,
    requestSerialize: serialize_generated_Contact,
    requestDeserialize: deserialize_generated_Contact,
    responseSerialize: serialize_generated_Contact,
    responseDeserialize: deserialize_generated_Contact,
  },
  getContact: {
    path: '/generated.ContactService/GetContact',
    requestStream: false,
    responseStream: false,
    requestType: contact_pb.ContactId,
    responseType: contact_pb.Contact,
    requestSerialize: serialize_generated_ContactId,
    requestDeserialize: deserialize_generated_ContactId,
    responseSerialize: serialize_generated_Contact,
    responseDeserialize: deserialize_generated_Contact,
  },
  updateContact: {
    path: '/generated.ContactService/UpdateContact',
    requestStream: false,
    responseStream: false,
    requestType: contact_pb.Contact,
    responseType: contact_pb.Contact,
    requestSerialize: serialize_generated_Contact,
    requestDeserialize: deserialize_generated_Contact,
    responseSerialize: serialize_generated_Contact,
    responseDeserialize: deserialize_generated_Contact,
  },
  deleteContact: {
    path: '/generated.ContactService/DeleteContact',
    requestStream: false,
    responseStream: false,
    requestType: contact_pb.ContactId,
    responseType: contact_pb.DeleteResponse,
    requestSerialize: serialize_generated_ContactId,
    requestDeserialize: deserialize_generated_ContactId,
    responseSerialize: serialize_generated_DeleteResponse,
    responseDeserialize: deserialize_generated_DeleteResponse,
  },
};

exports.ContactServiceClient = grpc.makeGenericClientConstructor(ContactServiceService);
