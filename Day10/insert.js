const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "akshay",
      grade: "B",
      rollNo: "13",
      project: "CPP",
    },
    {
      name: "abc",
      grade: "X",
      rollNo: "32",
      project: "Java",
    },
  ]);
  if (result.acknowledged === true) {
    console.log("Data inserted");
  }
};

insert();
