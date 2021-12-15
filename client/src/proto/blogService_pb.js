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
goog.exportSymbol('proto.blogApp.Blog', null, global);
goog.exportSymbol('proto.blogApp.BlogInsertionStatus', null, global);
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
proto.blogApp.BlogInsertionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blogApp.BlogInsertionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blogApp.BlogInsertionStatus.displayName = 'proto.blogApp.BlogInsertionStatus';
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
proto.blogApp.Blog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blogApp.Blog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blogApp.Blog.displayName = 'proto.blogApp.Blog';
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
proto.blogApp.BlogInsertionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.blogApp.BlogInsertionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blogApp.BlogInsertionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.BlogInsertionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    isadded: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.blogApp.BlogInsertionStatus}
 */
proto.blogApp.BlogInsertionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogApp.BlogInsertionStatus;
  return proto.blogApp.BlogInsertionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogApp.BlogInsertionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogApp.BlogInsertionStatus}
 */
proto.blogApp.BlogInsertionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsadded(value);
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
proto.blogApp.BlogInsertionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blogApp.BlogInsertionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogApp.BlogInsertionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.BlogInsertionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsadded();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool isAdded = 1;
 * @return {boolean}
 */
proto.blogApp.BlogInsertionStatus.prototype.getIsadded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.blogApp.BlogInsertionStatus} returns this
 */
proto.blogApp.BlogInsertionStatus.prototype.setIsadded = function(value) {
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
proto.blogApp.Blog.prototype.toObject = function(opt_includeInstance) {
  return proto.blogApp.Blog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blogApp.Blog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.Blog.toObject = function(includeInstance, msg) {
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
 * @return {!proto.blogApp.Blog}
 */
proto.blogApp.Blog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogApp.Blog;
  return proto.blogApp.Blog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogApp.Blog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogApp.Blog}
 */
proto.blogApp.Blog.deserializeBinaryFromReader = function(msg, reader) {
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
proto.blogApp.Blog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blogApp.Blog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogApp.Blog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blogApp.Blog.serializeBinaryToWriter = function(message, writer) {
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
proto.blogApp.Blog.prototype.getAuthorid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.blogApp.Blog} returns this
 */
proto.blogApp.Blog.prototype.setAuthorid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string blogTitle = 2;
 * @return {string}
 */
proto.blogApp.Blog.prototype.getBlogtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.blogApp.Blog} returns this
 */
proto.blogApp.Blog.prototype.setBlogtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string blogContent = 3;
 * @return {string}
 */
proto.blogApp.Blog.prototype.getBlogcontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.blogApp.Blog} returns this
 */
proto.blogApp.Blog.prototype.setBlogcontent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp creationTime = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.blogApp.Blog.prototype.getCreationtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.blogApp.Blog} returns this
*/
proto.blogApp.Blog.prototype.setCreationtime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.blogApp.Blog} returns this
 */
proto.blogApp.Blog.prototype.clearCreationtime = function() {
  return this.setCreationtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.blogApp.Blog.prototype.hasCreationtime = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.blogApp);
