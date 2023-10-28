export async function GET() {
  const data = { test: "Hello this works", test2: "123", test3: 1245 };

  return Response.json(data);
}

// returns: 
// test	"Hello this works"
// test2	"123"
// test3	1245
