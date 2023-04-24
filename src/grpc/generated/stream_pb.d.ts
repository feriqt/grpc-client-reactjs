// package: stream
// file: stream.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class DataResponse extends jspb.Message {
  getNoRm(): string;
  setNoRm(value: string): void;

  getPendaftaranTId(): number;
  setPendaftaranTId(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getPasienKirimKeUnitLainTId(): number;
  setPasienKirimKeUnitLainTId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DataResponse): DataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataResponse;
  static deserializeBinaryFromReader(message: DataResponse, reader: jspb.BinaryReader): DataResponse;
}

export namespace DataResponse {
  export type AsObject = {
    noRm: string,
    pendaftaranTId: number,
    message: string,
    pasienKirimKeUnitLainTId: number,
  }
}

