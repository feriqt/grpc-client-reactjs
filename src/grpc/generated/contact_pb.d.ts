// package: generated
// file: contact.proto

import * as jspb from "google-protobuf";

export class Contact extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getNumber(): string;
  setNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contact.AsObject;
  static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contact;
  static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
  export type AsObject = {
    id: string,
    name: string,
    number: string,
  }
}

export class CreateContactRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNumber(): string;
  setNumber(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContactRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContactRequest): CreateContactRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateContactRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContactRequest;
  static deserializeBinaryFromReader(message: CreateContactRequest, reader: jspb.BinaryReader): CreateContactRequest;
}

export namespace CreateContactRequest {
  export type AsObject = {
    name: string,
    number: string,
    id: number,
  }
}

export class ContactId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactId.AsObject;
  static toObject(includeInstance: boolean, msg: ContactId): ContactId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactId;
  static deserializeBinaryFromReader(message: ContactId, reader: jspb.BinaryReader): ContactId;
}

export namespace ContactId {
  export type AsObject = {
    id: string,
  }
}

export class DeleteResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    success: boolean,
    message: string,
  }
}

