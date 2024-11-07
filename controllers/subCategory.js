const subCategorySchema = require("../Schema/subCategory");
const factory = require("./handlerfactory");

// @desc  creat subcategory
// @rout post/api/subcategory
// @access private

exports.setcategoryidToBody = (req, res, next) => {
  //  Nasted route
  if (!req.body.category) {
    req.body.category = req.params.categoryid;
  }
  next();
};
//Nasted route
exports.creatsubcategory = factory.createone(subCategorySchema);
exports.creatfileobject = (req, res, next) => {
  let filtreObject = {};
  if (req.params.categoryid) filtreObject = { category: req.params.categoryid };
  req.filterobj = filtreObject;
  next();
};
// @desc  get all list of subcategory
// @route get /api/subcategory
// @acess public
exports.getsubcategories = factory.getall(subCategorySchema);

// @desc  get a specific subcategoryby id
// @route get /api/subcategory/:id
// @acess public
exports.getsubcategory = factory.getone(subCategorySchema);
// @desc  update a specific categoryby id
// @route put /api/category/:id
// @acess private
exports.updatesubcategory = factory.updateone(subCategorySchema);

// @desc  delete a specific subcategoryby id
// @route delate /api/subcategory/:id
// @acess private
exports.deletesubcategory = factory.deleteone(subCategorySchema);
