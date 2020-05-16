const 码表 = require("./五笔码表数据")

exports.取码 = function(字, 五笔版本 = '98') {
  if (五笔版本 == "98") {
    return 码表.五笔98[字];
  } else if (五笔版本 == "86") {
    return 码表.五笔86[字];
  }
}
