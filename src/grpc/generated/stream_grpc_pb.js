// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var stream_pb = require('./stream_pb.js');

function serialize_stream_DataResponse(arg) {
  if (!(arg instanceof stream_pb.DataResponse)) {
    throw new Error('Expected argument of type stream.DataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stream_DataResponse(buffer_arg) {
  return stream_pb.DataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stream_Empty(arg) {
  if (!(arg instanceof stream_pb.Empty)) {
    throw new Error('Expected argument of type stream.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stream_Empty(buffer_arg) {
  return stream_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var StreamServiceService = exports.StreamServiceService = {
  streamData: {
    path: '/stream.StreamService/StreamData',
    requestStream: true,
    responseStream: true,
    requestType: stream_pb.Empty,
    responseType: stream_pb.DataResponse,
    requestSerialize: serialize_stream_Empty,
    requestDeserialize: deserialize_stream_Empty,
    responseSerialize: serialize_stream_DataResponse,
    responseDeserialize: deserialize_stream_DataResponse,
  },
};

exports.StreamServiceClient = grpc.makeGenericClientConstructor(StreamServiceService);
