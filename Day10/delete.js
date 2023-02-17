const dbConnect = require("./mongodb");

const deleteData = async () => {
  const data = await dbConnect();
  let result = await data.deleteMany({ name: "akshay" });
  console.log(result);

  if (result.acknowledged) {
    console.log("Deleted Successfully");
  }
};

deleteData();
