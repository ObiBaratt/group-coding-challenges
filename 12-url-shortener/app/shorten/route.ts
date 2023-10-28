import { NextApiRequest } from "next";

export async function GET() {
    const data = { test: "Hello this works", test2: "123", test3: 1245 };
  
    return Response.json(data);
  }

  export async function POST(req: NextApiRequest) {
    const url = req.query.desiredUrl;
  
    return Response.json({url});
  }
 
  