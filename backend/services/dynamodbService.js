const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'CloudNoteTable';

exports.getAllNotes = async () => {
  const res = await dynamo.scan({ TableName: TABLE_NAME }).promise();
  return res.Items;
};

exports.createNote = async (note) => {
  await dynamo.put({
    TableName: TABLE_NAME,
    Item: note
  }).promise();
};
