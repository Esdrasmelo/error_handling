const express = require('express');
const messageController = require('../controller/message');

const router = express();

router.post('/messages', messageController.insertMessage);
router.get('/messages', messageController.getMessages);
router.get('/messages/:messageId', messageController.getMessage);
router.put('/messages/:messageId', messageController.editMessage);
router.delete('/messages/:messageId', messageController.removeMessage);

module.exports = router;
