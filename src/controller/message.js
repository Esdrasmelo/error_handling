const ApiError = require('../errors/ApiError');
const messagesData = require('./mock-messages.json');

exports.insertMessage = (request, response, next) => {
  const { message } = request.body;

  if (!message) {
    next(
      ApiError.emptyFields('The message field is required an cannot be empty')
    );
    return;
  } else {
    messagesData.push({ id: messagesData.length + 1, message: message });
    console.log(messagesData.length);
    next(
      ApiError.created('The message has been created', {
        messageId: messagesData.length,
      })
    );
  }
};

exports.getMessages = (request, response, next) => {
  next(ApiError.success('The messages has been found', messagesData));
};

exports.getMessage = (request, response, next) => {
  const { messageId } = request.params;

  if (!messageId) {
    next(ApiError.emptyFieldsOrParameters('The id of the message is required'));
    return;
  }

  const gettingMessage = messagesData.filter(
    (message) => message.id == messageId
  );

  if (gettingMessage.length > 0) {
    next(ApiError.success('The message has been found', gettingMessage));
    return;
  } else {
    next(ApiError.notFound('The message was not found'));
  }
};

exports.editMessage = (request, response, next) => {
  const { messageId } = request.params;
  const { message } = request.body;

  if (!messageId) {
    next(ApiError.emptyFieldsOrParameters('The id of the message is required'));
    return;
  } else {
    const gettingMessage = messagesData.filter(
      (message) => message.id == messageId
    );
    gettingMessage[0].message = message;

    next(ApiError.updated('The message has been updated'));
  }
};

exports.removeMessage = (request, response, next) => {
  const { messageId } = request.params;

  if (!messageId) {
    next(ApiError.emptyFieldsOrParameters('The id of the message is required'));
    return;
  } else {
    let index = messagesData.findIndex(
      (messageIndex) => messageIndex.id == messageId
    );

    if (index == 0) {
      messagesData.shift();
    } else {
      messagesData.splice(
        messagesData.findIndex((messageIndex) => messageIndex.id == messageId),
        1
      );
    }

    next(ApiError.deleted('The message has been deleted'));
    return;
  }
};
