// package: generated
// file: contact.proto

var contact_pb = require("./contact_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ContactService = (function () {
  function ContactService() {}
  ContactService.serviceName = "generated.ContactService";
  return ContactService;
}());

ContactService.CreateContact = {
  methodName: "CreateContact",
  service: ContactService,
  requestStream: false,
  responseStream: false,
  requestType: contact_pb.Contact,
  responseType: contact_pb.Contact
};

ContactService.GetContact = {
  methodName: "GetContact",
  service: ContactService,
  requestStream: false,
  responseStream: false,
  requestType: contact_pb.ContactId,
  responseType: contact_pb.Contact
};

ContactService.UpdateContact = {
  methodName: "UpdateContact",
  service: ContactService,
  requestStream: false,
  responseStream: false,
  requestType: contact_pb.Contact,
  responseType: contact_pb.Contact
};

ContactService.DeleteContact = {
  methodName: "DeleteContact",
  service: ContactService,
  requestStream: false,
  responseStream: false,
  requestType: contact_pb.ContactId,
  responseType: contact_pb.DeleteResponse
};

exports.ContactService = ContactService;

function ContactServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ContactServiceClient.prototype.createContact = function createContact(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactService.CreateContact, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ContactServiceClient.prototype.getContact = function getContact(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactService.GetContact, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ContactServiceClient.prototype.updateContact = function updateContact(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactService.UpdateContact, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ContactServiceClient.prototype.deleteContact = function deleteContact(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ContactService.DeleteContact, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ContactServiceClient = ContactServiceClient;

