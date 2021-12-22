// source: blogService.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.blogApp.InsertBlogRequest', null, global);
goog.exportSymbol('proto.blogApp.InsertBlogResponse', null, global);
goog.exportSymbol('proto.blogApp.SignInAndUpResponse', null, global);
goog.exportSymbol('proto.blogApp.SignInAndUpResponse.ResponseCase', null, global);
goog.exportSymbol('proto.blogApp.UserInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blogApp.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blogApp.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blogApp.UserInfo.displayName = 'proto.blogApp.UserInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blogApp.SignInAndUpResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.blogApp.SignInAndUpResponse.oneofGroups_);
};
goog.inherits(proto.blogApp.SignInAndUpResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blogApp.SignInAndUpResponse.displayName = 'proto.blogApp.SignInAndUpResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blogApp.InsertBlogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blogApp.InsertBlogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blogApp.InsertBlogResponse.displayName = 'proto.blogApp.InsertBlogResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blogApp.InsertBlogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blogApp.InsertBlogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blogApp.InsertBlogRequest.displayName = 'proto.blogApp.InsertBlogRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blogApp.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.blogApp.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blogApp.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blogApp.UserInfo}
 */
proto.blogApp.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogApp.UserInfo;
  return proto.blogApp.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogApp.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogApp.UserInfo}
 */
proto.blogApp.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blogApp.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blogApp.UserInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogApp.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.UserInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.blogApp.UserInfo.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.blogApp.UserInfo} returns this
 */
proto.blogApp.UserInfo.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.blogApp.UserInfo.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.blogApp.UserInfo} returns this
 */
proto.blogApp.UserInfo.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.blogApp.SignInAndUpResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.blogApp.SignInAndUpResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  AUTHTOKEN: 1,
  ERRORMESSAGE: 2
};

/**
 * @return {proto.blogApp.SignInAndUpResponse.ResponseCase}
 */
proto.blogApp.SignInAndUpResponse.prototype.getResponseCase = function() {
  return /** @type {proto.blogApp.SignInAndUpResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.blogApp.SignInAndUpResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blogApp.SignInAndUpResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.blogApp.SignInAndUpResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blogApp.SignInAndUpResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.SignInAndUpResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    authtoken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    errormessage: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blogApp.SignInAndUpResponse}
 */
proto.blogApp.SignInAndUpResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogApp.SignInAndUpResponse;
  return proto.blogApp.SignInAndUpResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogApp.SignInAndUpResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogApp.SignInAndUpResponse}
 */
proto.blogApp.SignInAndUpResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthtoken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrormessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blogApp.SignInAndUpResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blogApp.SignInAndUpResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogApp.SignInAndUpResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.SignInAndUpResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string authToken = 1;
 * @return {string}
 */
proto.blogApp.SignInAndUpResponse.prototype.getAuthtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.blogApp.SignInAndUpResponse} returns this
 */
proto.blogApp.SignInAndUpResponse.prototype.setAuthtoken = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.blogApp.SignInAndUpResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.blogApp.SignInAndUpResponse} returns this
 */
proto.blogApp.SignInAndUpResponse.prototype.clearAuthtoken = function() {
  return jspb.Message.setOneofField(this, 1, proto.blogApp.SignInAndUpResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blogApp.SignInAndUpResponse.prototype.hasAuthtoken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errorMessage = 2;
 * @return {string}
 */
proto.blogApp.SignInAndUpResponse.prototype.getErrormessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.blogApp.SignInAndUpResponse} returns this
 */
proto.blogApp.SignInAndUpResponse.prototype.setErrormessage = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.blogApp.SignInAndUpResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.blogApp.SignInAndUpResponse} returns this
 */
proto.blogApp.SignInAndUpResponse.prototype.clearErrormessage = function() {
  return jspb.Message.setOneofField(this, 2, proto.blogApp.SignInAndUpResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blogApp.SignInAndUpResponse.prototype.hasErrormessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blogApp.InsertBlogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.blogApp.InsertBlogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blogApp.InsertBlogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.InsertBlogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    issuccessful: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blogApp.InsertBlogResponse}
 */
proto.blogApp.InsertBlogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogApp.InsertBlogResponse;
  return proto.blogApp.InsertBlogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogApp.InsertBlogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogApp.InsertBlogResponse}
 */
proto.blogApp.InsertBlogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuccessful(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blogApp.InsertBlogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blogApp.InsertBlogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogApp.InsertBlogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.InsertBlogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIssuccessful();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool isSuccessful = 1;
 * @return {boolean}
 */
proto.blogApp.InsertBlogResponse.prototype.getIssuccessful = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.blogApp.InsertBlogResponse} returns this
 */
proto.blogApp.InsertBlogResponse.prototype.setIssuccessful = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blogApp.InsertBlogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.blogApp.InsertBlogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blogApp.InsertBlogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.InsertBlogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authorid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blogtitle: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blogcontent: jspb.Message.getFieldWithDefault(msg, 3, ""),
    creationtime: (f = msg.getCreationtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blogApp.InsertBlogRequest}
 */
proto.blogApp.InsertBlogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogApp.InsertBlogRequest;
  return proto.blogApp.InsertBlogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogApp.InsertBlogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogApp.InsertBlogRequest}
 */
proto.blogApp.InsertBlogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAuthorid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlogtitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlogcontent(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blogApp.InsertBlogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blogApp.InsertBlogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogApp.InsertBlogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.InsertBlogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBlogtitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlogcontent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreationtime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 authorId = 1;
 * @return {number}
 */
proto.blogApp.InsertBlogRequest.prototype.getAuthorid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.blogApp.InsertBlogRequest} returns this
 */
proto.blogApp.InsertBlogRequest.prototype.setAuthorid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string blogTitle = 2;
 * @return {string}
 */
proto.blogApp.InsertBlogRequest.prototype.getBlogtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.blogApp.InsertBlogRequest} returns this
 */
proto.blogApp.InsertBlogRequest.prototype.setBlogtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string blogContent = 3;
 * @return {string}
 */
proto.blogApp.InsertBlogRequest.prototype.getBlogcontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.blogApp.InsertBlogRequest} returns this
 */
proto.blogApp.InsertBlogRequest.prototype.setBlogcontent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp creationTime = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.blogApp.InsertBlogRequest.prototype.getCreationtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.blogApp.InsertBlogRequest} returns this
*/
proto.blogApp.InsertBlogRequest.prototype.setCreationtime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.blogApp.InsertBlogRequest} returns this
 */
proto.blogApp.InsertBlogRequest.prototype.clearCreationtime = function() {
  return this.setCreationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blogApp.InsertBlogRequest.prototype.hasCreationtime = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.blogApp);
