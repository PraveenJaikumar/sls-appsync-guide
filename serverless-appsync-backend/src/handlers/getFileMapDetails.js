import {v4 as uuid} from 'uuid';
import AWS from 'aws-sdk';
async function getFileMapDetail1(event, context) {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  const {title} = JSON.parse(event.body);
  const now = new Date();
  const auction  = {
    id: uuid(),
    title,
    status: 'OPEN',
    createdAt: now.toISOString()
  };
  await dynamoDB.put({
    TableName: process.env.AUCTION_TABLE_NAME,
    Item: auction,
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify( auction),
  };
}

export const handler = getFileMapDetail1;


