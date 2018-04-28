db.collection1.aggregate([
    {
        $lookup:
         {
           from: "collection2",
           localField: "_id",
           foreignField: "_id",
           as: "file_list"
         }
    }
    ])