const 码表 = require("./五笔码表数据")

exports.取码 = function(字) {
  return 码表.五笔98[字];
}
