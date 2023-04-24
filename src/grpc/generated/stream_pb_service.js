// package: stream
// file: stream.proto

var stream_pb = require("./stream_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var StreamService = (function () {
  function StreamService() {}
  StreamService.serviceName = "stream.StreamService";
  return StreamService;
}());

StreamService.StreamData = {
  methodName: "StreamData",
  service: StreamService,
  requestStream: true,
  responseStream: true,
  requestType: stream_pb.Empty,
  responseType: stream_pb.DataResponse
};

exports.StreamService = StreamService;

function StreamServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

StreamServiceClient.prototype.streamData = function streamData(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(StreamService.StreamData, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.StreamServiceClient = StreamServiceClient;

