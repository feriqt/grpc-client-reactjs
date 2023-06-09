/**
 * @fileoverview gRPC-Web generated client stub for generated
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v4.22.3
// source: contact.proto


/* eslint-disable */
// @ts-nocheck


goog.provide('proto.generated.ContactServiceClient');
goog.provide('proto.generated.ContactServicePromiseClient');

goog.require('grpc.web.MethodDescriptor');
goog.require('grpc.web.MethodType');
goog.require('grpc.web.GrpcWebClientBase');
goog.require('grpc.web.AbstractClientBase');
goog.require('grpc.web.ClientReadableStream');
goog.require('grpc.web.RpcError');
goog.require('proto.generated.Contact');
goog.require('proto.generated.ContactId');
goog.require('proto.generated.DeleteResponse');

goog.requireType('grpc.web.ClientOptions');



goog.scope(function() {

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.generated.ContactServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.generated.ContactServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.generated.Contact,
 *   !proto.generated.Contact>}
 */
const methodDescriptor_ContactService_CreateContact = new grpc.web.MethodDescriptor(
  '/generated.ContactService/CreateContact',
  grpc.web.MethodType.UNARY,
  proto.generated.Contact,
  proto.generated.Contact,
  /**
   * @param {!proto.generated.Contact} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.generated.Contact.deserializeBinary
);


/**
 * @param {!proto.generated.Contact} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.generated.Contact)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.generated.Contact>|undefined}
 *     The XHR Node Readable Stream
 */
proto.generated.ContactServiceClient.prototype.createContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/generated.ContactService/CreateContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_CreateContact,
      callback);
};


/**
 * @param {!proto.generated.Contact} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.generated.Contact>}
 *     Promise that resolves to the response
 */
proto.generated.ContactServicePromiseClient.prototype.createContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/generated.ContactService/CreateContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_CreateContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.generated.ContactId,
 *   !proto.generated.Contact>}
 */
const methodDescriptor_ContactService_GetContact = new grpc.web.MethodDescriptor(
  '/generated.ContactService/GetContact',
  grpc.web.MethodType.UNARY,
  proto.generated.ContactId,
  proto.generated.Contact,
  /**
   * @param {!proto.generated.ContactId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.generated.Contact.deserializeBinary
);


/**
 * @param {!proto.generated.ContactId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.generated.Contact)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.generated.Contact>|undefined}
 *     The XHR Node Readable Stream
 */
proto.generated.ContactServiceClient.prototype.getContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/generated.ContactService/GetContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetContact,
      callback);
};


/**
 * @param {!proto.generated.ContactId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.generated.Contact>}
 *     Promise that resolves to the response
 */
proto.generated.ContactServicePromiseClient.prototype.getContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/generated.ContactService/GetContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_GetContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.generated.Contact,
 *   !proto.generated.Contact>}
 */
const methodDescriptor_ContactService_UpdateContact = new grpc.web.MethodDescriptor(
  '/generated.ContactService/UpdateContact',
  grpc.web.MethodType.UNARY,
  proto.generated.Contact,
  proto.generated.Contact,
  /**
   * @param {!proto.generated.Contact} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.generated.Contact.deserializeBinary
);


/**
 * @param {!proto.generated.Contact} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.generated.Contact)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.generated.Contact>|undefined}
 *     The XHR Node Readable Stream
 */
proto.generated.ContactServiceClient.prototype.updateContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/generated.ContactService/UpdateContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_UpdateContact,
      callback);
};


/**
 * @param {!proto.generated.Contact} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.generated.Contact>}
 *     Promise that resolves to the response
 */
proto.generated.ContactServicePromiseClient.prototype.updateContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/generated.ContactService/UpdateContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_UpdateContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.generated.ContactId,
 *   !proto.generated.DeleteResponse>}
 */
const methodDescriptor_ContactService_DeleteContact = new grpc.web.MethodDescriptor(
  '/generated.ContactService/DeleteContact',
  grpc.web.MethodType.UNARY,
  proto.generated.ContactId,
  proto.generated.DeleteResponse,
  /**
   * @param {!proto.generated.ContactId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.generated.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.generated.ContactId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.generated.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.generated.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.generated.ContactServiceClient.prototype.deleteContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/generated.ContactService/DeleteContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_DeleteContact,
      callback);
};


/**
 * @param {!proto.generated.ContactId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.generated.DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.generated.ContactServicePromiseClient.prototype.deleteContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/generated.ContactService/DeleteContact',
      request,
      metadata || {},
      methodDescriptor_ContactService_DeleteContact);
};


}); // goog.scope

