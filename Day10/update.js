const dbConnect = require("./mongodb");

const update = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "banti" },
    { $set: { name: "avinash", grade: "B" } }
  );
  console.log(result);
};

update();
