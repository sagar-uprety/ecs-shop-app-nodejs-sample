// product-service.js
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path"); // Import the path module

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  PutCommand,
  ScanCommand,
  GetCommand,
  DynamoDBDocumentClient,
} = require("@aws-sdk/lib-dynamodb");


const awsRegion = process.env.awsRegion || "us-east-2";
const dynamodbTableName = process.env.dynamodbTableName || "ecs-products-ms";

const client = new DynamoDBClient({ region: awsRegion });
const docClient = DynamoDBDocumentClient.from(client);

router.get("/", async (req, res) => {
  try {
    const productsData = await checkIfDataExists();
    res.json(productsData);
  }
  catch (error) {
    console.error(`Error: ${error.message}`);
  }
});


// Route to insert data for seeding the DynamoDB table
router.get("/insertproductdata", async (req, res) => {
    try {
      // Check if the data already exists in the DynamoDB table
      const existingData = await checkIfDataExists();
      if (existingData.length > 0) {
        return res
          .status(200)
          .json({
            message: "Data already exists in the table. No action required.",
          });
      }

      // If data doesn't exist, read the data from products.json file
      const productFilePath = path.join(__dirname, "../data/products.json");   
      const productData = JSON.parse(fs.readFileSync(productFilePath, "utf8"));
  
      // Loop through each product record and insert it into the DynamoDB table
      for (const product of productData) {
        const command = new PutCommand({
          TableName: dynamodbTableName,
          Item: {
            id: product.id.toString(),
            name: product.name ,
            price: product.price ,
            description: product.description ,
            category: product.category ,
          },
        });
  
        try {
          await docClient.send(command);
          console.log(`Inserted product with ID ${product.id} into DynamoDB`);
        } catch (error) {
          console.error(
            `Error inserting products with ID ${product.id}: ${error.message}`
          );
        }
      }
  
      res.status(200).json({ message: "Data insertion completed." });
    } catch (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// Route to get products data by ID from DynamoDB
router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const command = new GetCommand({
      TableName: dynamodbTableName, // Replace with your DynamoDB table name
      Key: {
        id: productId,
      },
    });

    const response = await docClient.send(command);

    if (response.Item) {
      res.status(200).json(response.Item);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
});

async function checkIfDataExists() {
  const scanCommand = new ScanCommand({
    TableName: dynamodbTableName,
  });

  const response = await docClient.send(scanCommand);
  return response.Items || [];
}

module.exports = router;
