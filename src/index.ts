import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { transformMarkupToHtml } from "./markDownToHtmlConverter";


const app = express();

const PORT = '3000';

app.get("/test1", (request: Request, response: Response) => {
  const param = `
# Sample Document

Hello!

This is sample markdown for the [Mailchimp](https://www.mailchimp.com) homework assignment.`
const markdown = transformMarkupToHtml(param);
console.log(markdown);
  response.status(200).send(markdown);
}); 

app.get("/test2", (request: Request, response: Response) => {
  const param = `
# Header one

Hello there

How are you?
What's going on?

## Another Header

This is a paragraph [with an inline link](http://google.com). Neat, eh?

## This is a header [with a link](http://yahoo.com)`
const markdown = transformMarkupToHtml(param);
console.log(markdown);
  response.status(200).send(markdown);
}); 

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});

