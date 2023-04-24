// package: stream
// file: stream.proto

import * as stream_pb from "./stream_pb";
import {grpc} from "@improbable-eng/grpc-web";

type StreamServiceStreamData = {
  readonly methodName: string;
  readonly service: typeof StreamService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof stream_pb.Empty;
  readonly responseType: typeof stream_pb.DataResponse;
};

export class StreamService {
  static readonly serviceName: string;
  static readonly StreamData: StreamServiceStreamData;
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

export class StreamServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  streamData(metadata?: grpc.Metadata): BidirectionalStream<stream_pb.Empty, stream_pb.DataResponse>;
}

