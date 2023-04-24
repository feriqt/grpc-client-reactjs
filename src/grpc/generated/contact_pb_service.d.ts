// package: generated
// file: contact.proto

import * as contact_pb from "./contact_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ContactServiceCreateContact = {
  readonly methodName: string;
  readonly service: typeof ContactService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof contact_pb.Contact;
  readonly responseType: typeof contact_pb.Contact;
};

type ContactServiceGetContact = {
  readonly methodName: string;
  readonly service: typeof ContactService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof contact_pb.ContactId;
  readonly responseType: typeof contact_pb.Contact;
};

type ContactServiceUpdateContact = {
  readonly methodName: string;
  readonly service: typeof ContactService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof contact_pb.Contact;
  readonly responseType: typeof contact_pb.Contact;
};

type ContactServiceDeleteContact = {
  readonly methodName: string;
  readonly service: typeof ContactService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof contact_pb.ContactId;
  readonly responseType: typeof contact_pb.DeleteResponse;
};

export class ContactService {
  static readonly serviceName: string;
  static readonly CreateContact: ContactServiceCreateContact;
  static readonly GetContact: ContactServiceGetContact;
  static readonly UpdateContact: ContactServiceUpdateContact;
  static readonly DeleteContact: ContactServiceDeleteContact;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ContactServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createContact(
    requestMessage: contact_pb.Contact,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: contact_pb.Contact|null) => void
  ): UnaryResponse;
  createContact(
    requestMessage: contact_pb.Contact,
    callback: (error: ServiceError|null, responseMessage: contact_pb.Contact|null) => void
  ): UnaryResponse;
  getContact(
    requestMessage: contact_pb.ContactId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: contact_pb.Contact|null) => void
  ): UnaryResponse;
  getContact(
    requestMessage: contact_pb.ContactId,
    callback: (error: ServiceError|null, responseMessage: contact_pb.Contact|null) => void
  ): UnaryResponse;
  updateContact(
    requestMessage: contact_pb.Contact,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: contact_pb.Contact|null) => void
  ): UnaryResponse;
  updateContact(
    requestMessage: contact_pb.Contact,
    callback: (error: ServiceError|null, responseMessage: contact_pb.Contact|null) => void
  ): UnaryResponse;
  deleteContact(
    requestMessage: contact_pb.ContactId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: contact_pb.DeleteResponse|null) => void
  ): UnaryResponse;
  deleteContact(
    requestMessage: contact_pb.ContactId,
    callback: (error: ServiceError|null, responseMessage: contact_pb.DeleteResponse|null) => void
  ): UnaryResponse;
}

