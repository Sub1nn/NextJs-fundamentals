export function GET() {
  return Response.json({
    userName: "Subin",
    email: "subin@subin.com",
    address: {
      postalCode: "11130",
      city: "Riihimaki ",
      state: "Kantahame",
      country: "Finland",
    },
  });
}
