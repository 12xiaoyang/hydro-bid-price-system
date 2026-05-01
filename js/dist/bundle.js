(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // js/src/data.js
  var data_exports = {};
  __export(data_exports, {
    DATA: () => DATA2,
    MATERIAL_PRICE_DB: () => MATERIAL_PRICE_DB2,
    PRICE_CACHE: () => PRICE_CACHE2,
    YUAN_TO_WAN: () => YUAN_TO_WAN2,
    csvEscape: () => csvEscape,
    escHtml: () => escHtml2,
    lookupMaterialPrice: () => lookupMaterialPrice
  });
  var DATA2 = { "water": [{ "category": "", "seq": "\u4E00", "name": "HLB200-LJ-203", "material": "", "replacement": "", "weight": 94.4, "usage": null, "is_buy": false, "amount": 222.81, "remark": "" }, { "category": "", "seq": "1", "name": "\u57CB\u5165\u96F6\u4EF6\u62A5\u4EF7", "material": "", "replacement": "", "weight": 52.9, "usage": null, "is_buy": false, "amount": 42.04, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.1", "name": "\u8098\u7BA1\u88C5\u914D", "material": "Q235\\90", "replacement": "", "weight": 5.4, "usage": 0.7, "is_buy": false, "amount": 3.70285714285714, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.2", "name": "\u62A4\u5934", "material": "Q235\\90", "replacement": "", "weight": 0.6, "usage": 0.7, "is_buy": false, "amount": 0.411428571428571, "remark": "" }, { "category": "", "seq": "1.3", "name": "\u690E\u7BA1\u88C5\u914D", "material": " ", "replacement": "", "weight": 3.5, "usage": null, "is_buy": false, "amount": 9.25, "remark": "" }, { "seq": "1.3.1", "category": "\u4E0D\u9508\u94A2\u677F", "name": "", "material": "0Cr18Ni9\\16", "replacement": "", "weight": 0.3, "usage": 0.7, "is_buy": false, "amount": 0.792857142857143, "remark": "" }, { "seq": "1.3.2", "category": "\u4E0D\u9508\u94A2\u677F", "name": "", "material": "0Cr18Ni9\\16", "replacement": "", "weight": 3.2, "usage": 0.7, "is_buy": false, "amount": 8.45714285714286, "remark": "" }, { "category": "", "seq": "1.4", "name": "\u8717\u58F3\u5EA7\u73AF\u88C5\u914D", "material": "", "replacement": "", "weight": 34, "usage": null, "is_buy": false, "amount": 20.4, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.4.1", "name": "\u5EA7\u73AF", "material": "Q235\\50-90", "replacement": "", "weight": 11, "usage": 0.7, "is_buy": false, "amount": 6.6, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.4.2", "name": "\u8717\u58F3", "material": "Q235\\50-90", "replacement": "", "weight": 23, "usage": 0.7, "is_buy": false, "amount": 13.8, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.5", "name": "\u5176\u4F59(\u542B\u5343\u65A4\u9876\u7B49\u6742\u4EF6)", "material": "Q235\\10-50", "replacement": "", "weight": 1.7, "usage": 0.7, "is_buy": false, "amount": 0.971428571428572, "remark": "" }, { "category": "\u9600\u95E8\u7C7B", "seq": "1.6", "name": "\u8717\u58F3\u6392\u6C34\u9600", "material": "\u624B\u52A8\u95F8\u9600\u03C6200/150", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.25, "remark": "DN300\u4E0D\u9508\u94A2\u95F8\u9600 " }, { "category": "\u9600\u95E8\u7C7B", "seq": "1.9", "name": "\u5C3E\u6C34\u7BA1\u6392\u6C34\u9600", "material": "\u6DB2\u538B\u76D8\u578B\u9600\\DN300", "replacement": "", "weight": 1.4, "usage": 1, "is_buy": true, "amount": 3.45, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.1", "name": "\u673A\u5751\u91CC\u886C\u88C5\u914D", "material": "Q235\\10-50", "replacement": "", "weight": 4.8, "usage": 0.7, "is_buy": false, "amount": 2.74285714285714, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.11", "name": "\u6742\u4EF6(\u542B\u5C3E\u6C34\u7BA1\u6392\u6C34\u7BB1,\u62E6\u6C61\u6805)", "material": "Q235\\10-50", "replacement": "", "weight": 1.5, "usage": 0.7, "is_buy": false, "amount": 0.857142857142857, "remark": "" }, { "category": "", "seq": "2", "name": "\u5BFC\u6C34\u673A\u6784", "material": "", "replacement": "", "weight": 17, "usage": null, "is_buy": false, "amount": 56.87, "remark": "" }, { "category": "", "seq": "2.1", "name": "\u9876\u76D6\u88C5\u914D", "material": "", "replacement": "", "weight": 6.5, "usage": null, "is_buy": false, "amount": 3.9, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "2.1.1", "name": "\u9876\u76D6\u672C\u4F53", "material": "Q235\\50-90", "replacement": "", "weight": 6.5, "usage": 0.7, "is_buy": false, "amount": 3.9, "remark": "" }, { "category": "\u4E0D\u9508\u94A2\u677F", "seq": "2.2", "name": "\u9876\u76D6\u5E95\u73AF\u6297\u78E8\u677F", "material": "0Cr18Ni9\\30-50", "replacement": "", "weight": 0.7, "usage": 0.7, "is_buy": false, "amount": 1.95, "remark": "" }, { "category": "\u4E0D\u9508\u94A2\u677F", "seq": "2.3", "name": "\u4E0A\u3001\u4E0B\u6B62\u6F0F\u73AF", "material": "0Cr18Ni9\\30-50", "replacement": "", "weight": 0.4, "usage": 0.7, "is_buy": false, "amount": 1.11428571428571, "remark": "" }, { "category": "", "seq": "2.4", "name": "\u5BFC\u53F6", "material": "", "replacement": "", "weight": 3.4, "usage": null, "is_buy": false, "amount": 44, "remark": "" }, { "category": "\u6210\u54C1\u8F6C\u8F6E\\\u6210\u54C1\u5BFC\u53F6", "seq": "2.4.1", "name": "\u672C\u4F53", "material": "\u5BFC\u53F6\\ZG06Cr13Ni4Mo\\\u6210\u54C1", "replacement": "", "weight": 3.4, "usage": 5.5, "is_buy": true, "amount": 44, "remark": "" }, { "category": "", "seq": "2.5", "name": "\u5E95\u73AF\u88C5\u914D", "material": "", "replacement": "", "weight": 1.8, "usage": null, "is_buy": false, "amount": 1.08, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "2.5.1", "name": "\u5E95\u73AF\u672C\u4F53", "material": "Q235\\50-90", "replacement": "", "weight": 1.8, "usage": 0.7, "is_buy": false, "amount": 1.08, "remark": "" }, { "category": "", "seq": "2.6", "name": "\u63A7\u5236\u73AF\u88C5\u914D", "material": "", "replacement": "", "weight": 1.1, "usage": null, "is_buy": false, "amount": 0.66, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "2.6.1", "name": "\u63A7\u5236\u73AF", "material": "Q235\\50-90", "replacement": "", "weight": 1.1, "usage": 0.7, "is_buy": false, "amount": 0.66, "remark": "" }, { "category": "", "seq": "2.7", "name": "\u5BFC\u6C34\u96F6\u4EF6", "material": "", "replacement": "", "weight": 0.9, "usage": null, "is_buy": false, "amount": 1.906, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "2.7.1", "name": "\u5BFC\u53F6\u81C2", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 0.9, "usage": 1, "is_buy": false, "amount": 1.26, "remark": "" }, { "category": "\u8F74\u5957\\\u8F74\u627F", "seq": "2.7.6", "name": "\u5BFC\u53F6\u8F74\u5957\uFF08\u4E0A\u4E2D\u4E0B\uFF09", "material": "\u8F74\u5957\\FZ-2\\120\xD7115\xD7100", "replacement": "", "weight": 0, "usage": 96, "is_buy": true, "amount": 0.384, "remark": "" }, { "category": "\u8F74\u5957\\\u8F74\u627F", "seq": "2.7.7", "name": "\u8FDE\u6746\u8F74\u5957", "material": "\u8F74\u5957\\FZ-2\\90\xD785\xD780", "replacement": "", "weight": 0, "usage": 48, "is_buy": true, "amount": 0.144, "remark": "" }, { "category": "\u8F74\u5957\\\u8F74\u627F", "seq": "2.7.8", "name": "\u5927\u8033\u5B54\u8F74\u627F", "material": "\u8F74\u5957\\FZ-2\\175\xD7170\xD7100", "replacement": "", "weight": 0, "usage": 2, "is_buy": true, "amount": 0.022, "remark": "" }, { "category": "\u5BC6\u5C01\u5708", "seq": "2.7.9", "name": "\u5BFC\u53F6\u5BC6\u5C01\u4EF6", "material": "O\u5F62\u5708\\GB/T3452.1\\165\xD75.3", "replacement": "", "weight": 0, "usage": 72, "is_buy": true, "amount": 0.072, "remark": "" }, { "category": "\u8F74\u5957\\\u8F74\u627F", "seq": "2.7.11", "name": "\u63A7\u5236\u73AF\u6297\u78E8\u677F", "material": "O\u5F62\u5708\\GB/T3452.1\\165\xD75.3", "replacement": "", "weight": 0, "usage": 24, "is_buy": true, "amount": 0.024, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "2.8", "name": "\u5BFC\u53F6\u8FDE\u677F\u88C5\u914D", "material": "\u5BFC\u53F6\\ZG270-500\\\u6BDB\u576F", "replacement": "", "weight": 0.5, "usage": 0.7, "is_buy": false, "amount": 1.28571428571429, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "2.9", "name": "\u5957\u7B52", "material": "Q235\\10-50", "replacement": "", "weight": 1.2, "usage": 0.7, "is_buy": false, "amount": 0.685714285714286, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "2.1", "name": "\u5176\u4ED6", "material": "Q235\\10-50", "replacement": "", "weight": 0.5, "usage": 0.7, "is_buy": false, "amount": 0.285714285714286, "remark": "" }, { "category": "", "seq": "3", "name": "\u8F6C\u52A8\u90E8\u5206", "material": "", "replacement": "", "weight": 15.4, "usage": null, "is_buy": false, "amount": 106.58, "remark": "" }, { "category": "", "seq": "3.2", "name": "\u8F6C\u8F6E", "material": "", "replacement": "", "weight": 7.5, "usage": null, "is_buy": false, "amount": 91.0514285714286, "remark": "" }, { "category": "\u4E0D\u9508\u94A2\u94F8\u94A2", "seq": "3.2.1", "name": "\u4E0A\u51A0\u3001\u4E0B\u73AF", "material": "\u8F6C\u8F6E\u4E0B\u73AF\\ZG06Cr13Ni4Mo\\\u7C97\u52A0\u5DE5\u63A2\u4F24", "replacement": "", "weight": 4.4, "usage": 8.3, "is_buy": true, "amount": 50.63, "remark": "" }, { "category": "\u6210\u54C1\u8F6C\u8F6E\\\u6210\u54C1\u5BFC\u53F6", "seq": "3.2.2", "name": "\u53F6\u7247", "material": "\u6DF7\u6D41\u8F6C\u8F6E\u53F6\u7247\\ZG06Cr13Ni4Mo\\\u6210\u54C1", "replacement": "", "weight": 2.6, "usage": 4.6, "is_buy": true, "amount": 39.1, "remark": "" }, { "category": "\u4E0D\u9508\u94A2\u677F", "seq": "3.2.3", "name": "\u8F6C\u8F6E\u6CF5\u677F", "material": "0Cr18Ni9\\16", "replacement": "", "weight": 0.5, "usage": 0.7, "is_buy": false, "amount": 1.32142857142857, "remark": "" }, { "category": "\u953B\u94A2", "seq": "3.3", "name": "\u4E3B\u8F74", "material": "\u6C34\u673A\u4E3B\u8F74\u953B\u4EF6\\3-10\\\u953B20SiMn\\\u953B45\\\u7C97\u52A0\u5DE5\u63A2\u4F24", "replacement": "", "weight": 7.2, "usage": 0.8, "is_buy": false, "amount": 14.85, "remark": "" }, { "category": "\u953B\u94A2", "seq": "3.4", "name": "\u5176\u4ED6", "material": "\u953B35CrMoA\u3001\u953BQ345\\\u6BDB\u576F", "replacement": "", "weight": 0.5, "usage": 0.8, "is_buy": false, "amount": 0.675, "remark": "" }, { "category": "", "seq": "4", "name": "\u6C34\u5BFC\u8F74\u627F\u88C5\u914D", "material": "", "replacement": "", "weight": 2.2, "usage": null, "is_buy": false, "amount": 2.96, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "4.1", "name": "\u8F74\u627F\u4F53", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 1.1, "usage": 1, "is_buy": false, "amount": 1.49285714285714, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "4.1.1", "name": "\u8F74\u74E6", "material": "Q235\\10-50", "replacement": "", "weight": 0.25, "usage": 0.7, "is_buy": false, "amount": 0.142857142857143, "remark": "" }, { "category": "\u8F74\u74E6", "seq": "4.1.2", "name": "\u8F74\u627F\u5408\u91D1", "material": "\u5DF4\u6C0F\u5408\u91D1\\\u5DF4\u6C0F\u5408\u91D1\\ZchSnSb11-6", "replacement": "", "weight": 0.05, "usage": 0.01, "is_buy": true, "amount": 0.23, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "4.1.3", "name": "\u672C\u4F53", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 0.8, "usage": 1, "is_buy": false, "amount": 1.12, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "4.2", "name": "\u5176\u4ED6", "material": "Q235\\10-50", "replacement": "", "weight": 0.9, "usage": 0.7, "is_buy": false, "amount": 0.514285714285714, "remark": "" }, { "category": "", "seq": "4.3", "name": "\u6CB9\u51B7\u5374\u5668\u88C5\u914D", "material": "", "replacement": "", "weight": 0.2, "usage": null, "is_buy": false, "amount": 0.7802, "remark": "" }, { "category": "\u7BA1\u6750", "seq": "4.3.1", "name": "\u94DC\u7BA1", "material": "\u51B7\u5374\u5668\u94DC\u7BA1\\T2Y", "replacement": "", "weight": 0.06, "usage": 0.75, "is_buy": false, "amount": 0.7002, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "4.3.2", "name": "\u5176\u4ED6", "material": "Q235\\10-50", "replacement": "", "weight": 0.14, "usage": 0.7, "is_buy": false, "amount": 0.08, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "4.4", "name": "\u5BFC\u74E6\u672C\u4F53", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 0, "usage": 0.12, "is_buy": true, "amount": 0.168, "remark": "" }, { "category": "", "seq": "5", "name": "\u4E3B\u8F74\u5BC6\u5C01", "material": "", "replacement": "", "weight": 0.9, "usage": null, "is_buy": false, "amount": 2.39, "remark": "" }, { "category": "\u7A7A\u6C14\u56F4\u5E26\\\u5BC6\u5C01\u73AF", "seq": "5.5", "name": "\u5DE5\u4F5C\u5BC6\u5C01\u5708(\u03C6700)", "material": "\u7A7A\u6C14\u56F4\u5E26\\\u5927", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.5, "remark": "" }, { "category": "\u7A7A\u6C14\u56F4\u5E26\\\u5BC6\u5C01\u73AF", "seq": "5.6", "name": "\u68C0\u4FEE\u5BC6\u5C01\u4EF6\uFF08\u7A7A\u6C14\u56F4\u5E26\uFF09", "material": "\u7A7A\u6C14\u56F4\u5E26\\\u5927", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.5, "remark": "" }, { "seq": "5.7", "category": "\u4E0D\u9508\u94A2\u94F8\u94A2", "name": "", "material": "\u5BFC\u53F6\\ZG06Cr13Ni4Mo\\\u6BDB\u576F", "replacement": "", "weight": 0.1, "usage": 0.7, "is_buy": false, "amount": 0.928571428571429, "remark": "" }, { "seq": "5.8", "category": "\u666E\u901A\u94A2\u677F", "name": "", "material": "Q235\\10-50", "replacement": "", "weight": 0.8, "usage": 0.7, "is_buy": false, "amount": 0.457142857142857, "remark": "" }, { "category": "", "seq": "6", "name": "\u63A5\u529B\u5668\u88C5\u914D\u53CA\u5E03\u7F6E", "material": "", "replacement": "", "weight": 1, "usage": null, "is_buy": false, "amount": 7.28, "remark": "" }, { "category": "\u63A5\u529B\u5668", "seq": "6.1", "name": "\u5E26\u9501\u5B9A\u63A5\u529B\u5668160", "material": "\u03C6220\\\u63A5\u529B\u5668", "replacement": "", "weight": 1, "usage": 1, "is_buy": true, "amount": 2.66, "remark": "" }, { "category": "\u63A5\u529B\u5668", "seq": "6.2", "name": "\u4E0D\u5E26\u9501\u5B9A\u63A5\u529B\u5668160", "material": "\u03C6220\\\u63A5\u529B\u5668", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 2.66, "remark": "" }, { "category": "", "seq": "7", "name": "\u6C34\u3001\u6C14\u3001\u6CB9\u7BA1\u8DEF", "material": "", "replacement": "", "weight": 1.1, "usage": null, "is_buy": false, "amount": 1.96, "remark": "" }, { "category": "", "seq": "7.1", "name": "\u6C34\u3001\u6C14\u7BA1\u8DEF", "material": "", "replacement": "", "weight": 0.6, "usage": null, "is_buy": false, "amount": 1.06666666666667, "remark": "" }, { "category": "\u7BA1\u6750", "seq": "7.1.1", "name": "\u4E0D\u9508\u94A2\u7BA1\u8DEF", "material": "\u4E0D\u9508\u94A2\u7BA1\\0Cr18Ni9\\\u03C622\\\u03C634\\\u5176\u5B83\u5E38\u7528\u89C4\u683C", "replacement": "", "weight": 0.6, "usage": 0.9, "is_buy": false, "amount": 1.06666666666667, "remark": "" }, { "category": "", "seq": "7.2", "name": "\u8C03\u901F\u5668\u6CB9\u7BA1\u8DEF", "material": "", "replacement": "", "weight": 0.5, "usage": null, "is_buy": false, "amount": 0.888888888888889, "remark": "" }, { "category": "\u7BA1\u6750", "seq": "7.2.1", "name": "\u4E0D\u9508\u94A2\u7BA1\u53CA\u63A5\u5934", "material": "\u4E0D\u9508\u94A2\u7BA1\\0Cr18Ni9\\\u03C645\xD73", "replacement": "", "weight": 0.5, "usage": 0.9, "is_buy": false, "amount": 0.888888888888889, "remark": "" }, { "category": "", "seq": "8", "name": "\u4E2D\u5FC3\u5B54\u8865\u6C14\u88C5\u7F6E", "material": "", "replacement": "", "weight": 1, "usage": null, "is_buy": false, "amount": 1.07, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "8.2", "name": "\u78B3\u94A2\u90E8\u5206", "material": "Q235\\10-50", "replacement": "", "weight": 1, "usage": 0.9, "is_buy": false, "amount": 0.444444444444444, "remark": "" }, { "category": "\u9600\u95E8\u7C7B", "seq": "8.3", "name": "\u0424200\u771F\u7A7A\u7834\u574F\u8865\u6C14\u9600", "material": "\u771F\u7A7A\u7834\u574F\u9600\u03C6250", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.63, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "9", "name": "\u5176\u4F59", "material": "Q235\\10-50", "replacement": "", "weight": 2.9, "usage": 0.7, "is_buy": false, "amount": 1.65714285714286, "remark": "" }], "gen": [{ "category": "", "seq": "\u4E00", "name": "SF40-16/4700", "material": "", "replacement": "", "weight": 234, "usage": null, "is_buy": false, "amount": 375.419335714286, "remark": "\u542B\u7A7A\u51B7\u56686t" }, { "category": "", "seq": "1", "name": "\u5B9A\u5B50\u88C5\u914D", "material": "", "replacement": "", "weight": 77, "usage": null, "is_buy": false, "amount": 161.23, "remark": "" }, { "category": "\u94DC\u6750", "seq": "1.1", "name": "\u53CC\u73BB\u7EBF", "material": "SBEB\\DSBEB\\\u975E\u5B9A\u5C3A", "replacement": "", "weight": 6.17, "usage": 0.95, "is_buy": false, "amount": 56.8451842105263, "remark": "" }, { "category": "\u6210\u54C1\u77FD\u94A2\u7247", "seq": "1.2", "name": "\u7845\u94A2\u7247", "material": "50W270", "replacement": "", "weight": 32, "usage": 32, "is_buy": true, "amount": 59.2, "remark": "" }, { "category": "\u7EDD\u7F18\u6750\u6599", "seq": "1.3", "name": "\u7EDD\u7F18\u6750\u6599", "material": "\u4E91\u6BCD\u5E26\\5440-1K\\0.14\xD725", "replacement": "", "weight": 2, "usage": 0.98, "is_buy": false, "amount": 13.7755102040816, "remark": "" }, { "category": "\u94DC\u6750", "seq": "1.4", "name": "\u94DC\u6392", "material": "TMR\\\u975E\u5B9A\u5C3A", "replacement": "", "weight": 0.8, "usage": 0.95, "is_buy": false, "amount": 7.29894736842105, "remark": "" }, { "category": "\u4E0D\u9508\u94A2\u677F", "seq": "1.5", "name": "\u7AEF\u7B8D", "material": "0Cr18Ni9\\16", "replacement": "", "weight": 0.3, "usage": 0.7, "is_buy": false, "amount": 0.792857142857143, "remark": "" }, { "category": "\u4E0D\u9508\u94A2\u677F", "seq": "1.6", "name": "\u9F7F\u538B\u7247", "material": "0Cr18Ni9\\16", "replacement": "", "weight": 0.8, "usage": 0.7, "is_buy": false, "amount": 2.11428571428571, "remark": "" }, { "category": "\u578B\u94A2\\\u578B\u6750", "seq": "1.7", "name": "\u62C9\u7D27\u87BA\u6746", "material": "\u51B7\u62C9\u5706\u94A2\\35CrMo\\\u03C645\\\u9000\u706B", "replacement": "", "weight": 1.3, "usage": 0.8, "is_buy": false, "amount": 1.02375, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.13", "name": "\u5176\u5B83", "material": "Q235\\50-90", "replacement": "", "weight": 33.63, "usage": 0.7, "is_buy": false, "amount": 20.178, "remark": "" }, { "category": "", "seq": "2", "name": "\u8F6C\u5B50", "material": "", "replacement": "", "weight": 109, "usage": null, "is_buy": false, "amount": 170.76, "remark": "" }, { "category": "\u953B\u94A2", "seq": "2.1", "name": "\u4E3B\u8F74", "material": "\u7535\u673A\u4E3B\u8F74\u953B\u4EF6\\3-10\\\u953B20SiMn\\\u953B45\\\u7C97\u52A0\u5DE5\u63A2\u4F24", "replacement": "", "weight": 13.6, "usage": 0.8, "is_buy": false, "amount": 24.65, "remark": "" }, { "category": "\u953B\u94A2", "seq": "2.2", "name": "\u4E0B\u5BFC\u6ED1\u8F6C\u5B50", "material": "\u5C0F\u953B\u4EF6\\<0.5\\\u953B45\\\u953B20\\\u6BDB\u576F", "replacement": "", "weight": 1.1, "usage": 0.8, "is_buy": false, "amount": 1.375, "remark": "" }, { "category": "", "seq": "2.3", "name": "\u8F6C\u5B50\u652F\u67B6", "material": " ", "replacement": "", "weight": 4.1, "usage": null, "is_buy": false, "amount": 5.74, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "2.3.1", "name": "\u4E2D\u5FC3\u4F53\uFF08\u8F6E\u6BC2\uFF09", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 4.1, "usage": 1, "is_buy": false, "amount": 5.74, "remark": "" }, { "category": "", "seq": "2.4", "name": "\u78C1\u8F6D", "material": "", "replacement": "", "weight": 42.55, "usage": null, "is_buy": false, "amount": 36.2775, "remark": "" }, { "category": "\u6210\u54C1\u77FD\u94A2\u7247", "seq": "2.4.1", "name": "\u78C1\u8F6D\u51B2\u7247", "material": "Q235\\2-3", "replacement": "", "weight": 40.4, "usage": 30.5, "is_buy": true, "amount": 34.465, "remark": "" }, { "category": "\u953B\u94A2", "seq": "2.4.3", "name": "\u78C1\u8F6D\u952E", "material": "\u5C0F\u953B\u4EF6\\<0.5\\\u953B45\\\u953B20\\\u6BDB\u576F", "replacement": "", "weight": 0.4, "usage": 0.8, "is_buy": false, "amount": 0.5, "remark": "" }, { "category": "\u578B\u94A2\\\u578B\u6750", "seq": "2.4.4", "name": "\u78C1\u8F6D\u62C9\u7D27\u87BA\u6746", "material": "\u51B7\u62C9\u5706\u94A2\\35CrMo\\\u03C636\\\u9000\u706B", "replacement": "", "weight": 1.75, "usage": 0.8, "is_buy": false, "amount": 1.3125, "remark": "" }, { "category": "", "seq": "2.5", "name": "\u78C1\u6781", "material": "", "replacement": "", "weight": 35.05, "usage": null, "is_buy": false, "amount": 94.1614144736842, "remark": "" }, { "category": "\u94DC\u6750", "seq": "2.5.1", "name": "\u78C1\u6781\u7EBF\u5708", "material": "TMR\\\u975E\u5B9A\u5C3A", "replacement": "", "weight": 7.5, "usage": 0.95, "is_buy": false, "amount": 68.4276315789474, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "2.5.2", "name": "\u78C1\u6781\u538B\u677F", "material": "Q235\\50-90", "replacement": "", "weight": 2.6, "usage": 0.7, "is_buy": false, "amount": 1.56, "remark": "" }, { "category": "\u6210\u54C1\u77FD\u94A2\u7247", "seq": "2.5.3", "name": "\u78C1\u6781\u51B2\u7247", "material": "Q235\\2-3", "replacement": "", "weight": 22.2, "usage": 13.5, "is_buy": true, "amount": 15.255, "remark": "" }, { "category": "\u94DC\u6750", "seq": "2.5.4", "name": "\u963B\u5C3C\u6761\u3001\u963B\u5C3C\u73AF", "material": "\u94DC\u68D2\u3001\u963B\u5C3C\u73AF\u6761", "replacement": "", "weight": 0.8, "usage": 0.95, "is_buy": false, "amount": 7.38315789473684, "remark": "" }, { "category": "\u578B\u94A2\\\u578B\u6750", "seq": "2.5.6", "name": "\u78C1\u6781\u62C9\u7D27\u87BA\u6746", "material": "\u51B7\u62C9\u5706\u94A2\\35CrMo\\\u03C645\\\u9000\u706B", "replacement": "", "weight": 1.2, "usage": 0.8, "is_buy": false, "amount": 0.945, "remark": "" }, { "category": "\u578B\u94A2\\\u578B\u6750", "seq": "2.5.7", "name": "\u78C1\u6781\u952E", "material": "\u51B7\u62C9\u5706\u94A2\\35CrMo\\\u03C645\\\u9000\u706B", "replacement": "", "weight": 0.75, "usage": 0.8, "is_buy": false, "amount": 0.590625, "remark": "" }, { "category": "\u7EDD\u7F18\u6750\u6599", "seq": "2.7", "name": "\u603B\u7EDD\u7F18", "material": "\u73BB\u7483\u576F\u5E03\\D241\\0.14(241\\0.14)", "replacement": "", "weight": 0.3, "usage": 0.98, "is_buy": false, "amount": 1.53061224489796, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "2.8", "name": "\u5176\u5B83", "material": "Q235\\10-50", "replacement": "", "weight": 12.3, "usage": 0.7, "is_buy": false, "amount": 7.02857142857143, "remark": "" }, { "category": "", "seq": "3", "name": "\u4E0A\u673A\u67B6\u88C5\u914D", "material": "", "replacement": "", "weight": 22.2, "usage": null, "is_buy": false, "amount": 26.9, "remark": "" }, { "category": "", "seq": "3.1", "name": "\u4E0A\u5BFC\u8F74\u627F", "material": "", "replacement": "", "weight": 0.15, "usage": null, "is_buy": false, "amount": 1.56238571428571, "remark": "" }, { "category": "", "seq": "3.1.1", "name": "\u4E0A\u5BFC\u8F74\u627F\u74E6", "material": "", "replacement": "", "weight": 0.15, "usage": null, "is_buy": false, "amount": 0.781192857142857, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.1.1.1", "name": "\u74E6\u576F", "material": "Q345\\90", "replacement": "", "weight": 0.13, "usage": 0.19, "is_buy": true, "amount": 0.09405, "remark": "" }, { "category": "\u8F74\u74E6", "seq": "3.1.1.2", "name": "\u5DF4\u6C0F\u5408\u91D1", "material": "\u5DF4\u6C0F\u5408\u91D1\\\u5DF4\u6C0F\u5408\u91D1\\ZchSnSb11-6", "replacement": "", "weight": 0.02, "usage": 0.01, "is_buy": true, "amount": 0.23, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.1.4", "name": "\u5957\u7B52", "material": "Q235\\10-50", "replacement": "", "weight": 0.78, "usage": 0.7, "is_buy": false, "amount": 0.445714285714286, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.1.5", "name": "\u4E0A\u5BFC\u6C14\u5C01\u76D6", "material": "Q235\\10-50", "replacement": "", "weight": 0.02, "usage": 0.7, "is_buy": false, "amount": 0.0114285714285714, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "3.2", "name": "\u4E0A\u5BFC\u8F74\u627F\u5EA7\u5708", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 0.92, "usage": 1, "is_buy": false, "amount": 1.288, "remark": "" }, { "category": "", "seq": "3.3", "name": "\u6CB9\u51B7\u5374\u5668", "material": "", "replacement": "", "weight": 1, "usage": null, "is_buy": false, "amount": 0.7934, "remark": "" }, { "category": "\u7BA1\u6750", "seq": "3.3.1", "name": "\u7D2B\u94DC\u7BA1", "material": "\u51B7\u5374\u5668\u94DC\u7BA1\\T2Y", "replacement": "", "weight": 0.02, "usage": 0.75, "is_buy": false, "amount": 0.2334, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.3.2", "name": "\u5176\u5B83", "material": "Q235\\10-50", "replacement": "", "weight": 0.98, "usage": 0.7, "is_buy": false, "amount": 0.56, "remark": "" }, { "category": "", "seq": "3.4", "name": "\u63A8\u529B\u8F74\u627F", "material": "", "replacement": "", "weight": 3.16, "usage": null, "is_buy": false, "amount": 8.39060714285714, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "3.4.1", "name": "\u63A8\u529B\u5934", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 1.76, "usage": 1, "is_buy": false, "amount": 2.464, "remark": "\u953B20SiMn" }, { "category": "\u953B\u94A2", "seq": "3.4.2", "name": "\u955C\u677F", "material": "\u5C0F\u953B\u4EF6\\0.5-3\\\u7C97\u52A0\u5DE5\u63A2\u4F24", "replacement": "", "weight": 0.9, "usage": 0.8, "is_buy": false, "amount": 1.74375, "remark": "\u953B\u94A245" }, { "category": "", "seq": "3.4.3", "name": "\u63A8\u529B\u74E6", "material": "", "replacement": "", "weight": 0.5, "usage": null, "is_buy": false, "amount": 2.09142857142857, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.4.3.1", "name": "\u74E6\u576F", "material": "Q345\\90", "replacement": "", "weight": 0.48, "usage": 0.7, "is_buy": false, "amount": 0.339428571428571, "remark": "100/Q235" }, { "category": "\u8F74\u74E6", "seq": "3.4.3.2", "name": "\u74E6\u9762", "material": "\u5851\u6599\u74E6", "replacement": "", "weight": 0.02, "usage": 5840, "is_buy": true, "amount": 1.752, "remark": "6740(cm^2)" }, { "category": "", "seq": "3.5", "name": "\u63A8\u529B\u6CB9\u51B7\u5374\u5668", "material": "", "replacement": "", "weight": 0.67, "usage": null, "is_buy": false, "amount": 3.71242857142857, "remark": "" }, { "category": "\u7BA1\u6750", "seq": "3.5.1", "name": "\u94DC\u7BA1", "material": "\u51B7\u5374\u5668\u94DC\u7BA1\\T2Y", "replacement": "", "weight": 0.3, "usage": 0.75, "is_buy": false, "amount": 3.501, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.5.2", "name": "\u5176\u4ED6", "material": "Q235\\10-50", "replacement": "", "weight": 0.37, "usage": 0.7, "is_buy": false, "amount": 0.211428571428571, "remark": "" }, { "category": "\u953B\u94A2", "seq": "3.6", "name": "\u4E0A\u5BFC\u6ED1\u8F6C\u5B50", "material": "\u5C0F\u953B\u4EF6\\0.5-3\\\u7C97\u52A0\u5DE5\u63A2\u4F24", "replacement": "", "weight": 0.85, "usage": 0.7, "is_buy": false, "amount": 1.88214285714286, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.7", "name": "\u5176\u5B83", "material": "Q235\\50-90", "replacement": "", "weight": 15.45, "usage": 0.7, "is_buy": false, "amount": 9.27, "remark": "" }, { "category": "", "seq": "4", "name": "\u4E0B\u673A\u67B6\u88C5\u914D", "material": "", "replacement": "", "weight": 5.9, "usage": null, "is_buy": false, "amount": 6.53390714285714, "remark": "" }, { "category": "", "seq": "4.1", "name": "\u4E0B\u5BFC\u8F74\u627F\u74E6", "material": "", "replacement": "", "weight": 0.32, "usage": null, "is_buy": false, "amount": 0.31415, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "4.1.1", "name": "\u74E6\u576F", "material": "Q345\\90", "replacement": "", "weight": 0.3, "usage": 0.17, "is_buy": true, "amount": 0.08415, "remark": "" }, { "category": "\u8F74\u74E6", "seq": "4.1.2", "name": "\u5DF4\u6C0F\u5408\u91D1", "material": "\u5DF4\u6C0F\u5408\u91D1\\\u5DF4\u6C0F\u5408\u91D1\\ZchSnSb11-6", "replacement": "", "weight": 0.02, "usage": 0.01, "is_buy": true, "amount": 0.23, "remark": "" }, { "category": "", "seq": "4.2", "name": "\u6CB9\u51B7\u5374\u5668", "material": "", "replacement": "", "weight": 0.18, "usage": null, "is_buy": false, "amount": 0.879757142857143, "remark": "" }, { "category": "\u7BA1\u6750", "seq": "4.2.1", "name": "\u7D2B\u94DC\u7BA1", "material": "\u51B7\u5374\u5668\u94DC\u7BA1\\T2Y", "replacement": "", "weight": 0.07, "usage": 0.75, "is_buy": false, "amount": 0.8169, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "4.2.2", "name": "\u5176\u5B83", "material": "Q235\\10-50", "replacement": "", "weight": 0.11, "usage": 0.7, "is_buy": false, "amount": 0.0628571428571429, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "4.3", "name": "\u4E0B\u5BFC\u8F74\u627F\u5EA7\u5708", "material": "\u4E00\u822C\u5927\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 2.1, "usage": 1, "is_buy": false, "amount": 3.36, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "4.5", "name": "\u5176\u5B83", "material": "Q235\\50-90", "replacement": "", "weight": 3.3, "usage": 0.7, "is_buy": false, "amount": 1.98, "remark": "" }, { "category": "", "seq": "5", "name": "\u96C6\u7535\u73AF\u53CA\u5237\u67B6", "material": "", "replacement": "", "weight": 0, "usage": null, "is_buy": false, "amount": 0.48, "remark": "" }, { "category": "\u7535\u5237\u5237\u63E1", "seq": "5.1", "name": "\u7535\u5237+\u5237\u76D2", "material": "\u7535\u5237", "replacement": "", "weight": 0, "usage": 40, "is_buy": true, "amount": 0.48, "remark": "" }, { "category": "", "seq": "12", "name": "\u7BA1\u8DEF\u53CA\u5176\u4ED6", "material": "", "replacement": "", "weight": 3.5, "usage": null, "is_buy": false, "amount": 0, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "13", "name": "\u5176\u5B83", "material": "Q235\\10-50", "replacement": "", "weight": 16.4, "usage": 0.7, "is_buy": false, "amount": 9.37142857142857, "remark": "" }, { "category": "\u7A7A\u6C14\u51B7\u5374\u5668", "seq": "12.1", "name": "\u7A7A\u51B7\u5668", "material": "\u7A7A\u6C14\u51B7\u5374\u5668", "replacement": "", "weight": 0, "usage": 8, "is_buy": true, "amount": 0.144, "remark": "4\xD7105KW" }, { "category": "\u5236\u52A8\u5668", "seq": "12.2", "name": "\u5236\u52A8\u7CFB\u7EDF\uFF08\u5236\u52A8\u5668\uFF09", "material": "\u5236\u52A8\u5668\\\u03C6220", "replacement": "", "weight": 0, "usage": 4, "is_buy": true, "amount": 4.7, "remark": "" }, { "category": "\u9664\u5C18\u88C5\u7F6E", "seq": "12.3", "name": "\u5236\u52A8\u9664\u5C18\u88C5\u7F6E", "material": "\u03C6220\u78B3\u7C89\u5236\u52A8\u9664\u5C18\u88C5\u7F6E", "replacement": "", "weight": 0, "usage": 4, "is_buy": true, "amount": 5, "remark": "" }, { "category": "\u8BD5\u538B\u6CF5", "seq": "12.4", "name": "\u7535\u52A8\u8BD5\u538B\u6CF5", "material": "\u7535\u52A8\u8BD5\u538B\u6CF5DSY", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.83, "remark": "DSY-35" }, { "category": "\u7535\u52A0\u70ED\u5668", "seq": "12.5", "name": "\u52A0\u70ED\u5668", "material": "\u7535\u52A0\u70ED\u5668220V/2KW", "replacement": "", "weight": 0, "usage": 2, "is_buy": true, "amount": 0.196, "remark": "" }, { "category": "\u7535\u52A0\u70ED\u5668", "seq": "12.6", "name": "\u9664\u6E7F\u673A", "material": "\u7535\u52A0\u70ED\u5668SK1-130", "replacement": "", "weight": 0, "usage": 2, "is_buy": true, "amount": 0.38, "remark": "" }, { "category": "\u706D\u706B\u88C5\u7F6E", "seq": "12.1", "name": "\u4E8C\u6C27\u5316\u78B3\u706D\u706B\u88C5\u7F6E", "material": "\u4E8C\u6C27\u5316\u78B3\u706D\u706B\u88C5\u7F6E\\\u660E\u54E5\u6865", "replacement": "", "weight": 0, "usage": null, "is_buy": true, "amount": 0, "remark": "\u7EC4\u5408\u5206\u914D\uFF0C\u5357\u6D88" }, { "category": "", "seq": "12.17", "name": "\u6C14\u5C01\u88C5\u7F6E", "material": "", "replacement": "", "weight": 0, "usage": null, "is_buy": true, "amount": 0, "remark": "" }, { "category": "", "seq": "12.2", "name": "\u5B9A\u3001\u8F6C\u5B50\u73B0\u573A\u670D\u52A1", "material": "", "replacement": "", "weight": 0, "usage": null, "is_buy": true, "amount": 0, "remark": "1.\u5B9A\u5B50\u673A\u5EA7\u5206\u4E24\u74E3\uFF0C\u7531\u5B89\u88C5\u5355\u4F4D\u5728\u5DE5\u5730\u7EC4\u5706\u3001\u5D4C\u5408\u7F1D\u7EBF\u3001\u8BD5\u9A8C\uFF1B2.\u8F6C\u5B50\u5728\u5DE5\u5730\u7531\u5B89\u88C5\u5355\u4F4D\u8D1F\u8D23\u8FDB\u884C\u78C1\u8F6D\u53E0\u7247\u3001\u6302\u6781\u3001\u8BD5\u9A8C\u3002" }], "valve": [{ "category": "", "seq": "\u4E00", "name": "PDF100-WY-150", "material": "", "replacement": "", "weight": 13.6, "usage": null, "is_buy": false, "amount": 0, "remark": "" }, { "category": "", "seq": "1", "name": "\u8776\u9600\u88C5\u914D", "material": "", "replacement": "", "weight": 5.3, "usage": null, "is_buy": false, "amount": 0, "remark": "" }, { "category": "", "seq": "1.1", "name": "\u9600\u4F53", "material": "", "replacement": "", "weight": 1.75, "usage": null, "is_buy": false, "amount": 1.59, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.1.1", "name": "\u6CD5\u5170", "material": "Q235\\50-90", "replacement": "", "weight": 0.8, "usage": 0.7, "is_buy": false, "amount": 0.48, "remark": "60mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.1.2", "name": "\u7B52\u4F53", "material": "Q235\\10-50", "replacement": "", "weight": 0.4, "usage": 0.7, "is_buy": false, "amount": 0.228571428571429, "remark": "30mm" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "1.1.3", "name": "\u8F74\u5EA7", "material": "\u4E00\u822C\u5927\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 0.35, "usage": 1, "is_buy": false, "amount": 0.56, "remark": "ZG20SiMn" }, { "category": "\u4E0D\u9508\u94A2\u677F", "seq": "1.1.4", "name": "\u4E0D\u9508\u94A2", "material": "0Cr18Ni9\\16", "replacement": "", "weight": 0.1, "usage": 0.7, "is_buy": false, "amount": 0.264285714285714, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.1.5", "name": "\u5176\u4ED6", "material": "Q235\\10-50", "replacement": "", "weight": 0.1, "usage": 0.7, "is_buy": false, "amount": 0.0571428571428572, "remark": "" }, { "category": "", "seq": "1.2", "name": "\u6D3B\u95E8", "material": "", "replacement": "", "weight": 1.5, "usage": null, "is_buy": false, "amount": 1.49428571428571, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "1.2.1", "name": "\u8F74\u5EA7", "material": "\u4E00\u822C\u5927\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 0.6, "usage": 1, "is_buy": false, "amount": 0.96, "remark": "ZG230-450" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.2.2", "name": "\u4E0A\u4E0B\u5E73\u677F", "material": "Q235\\50-90", "replacement": "", "weight": 0.7, "usage": 0.7, "is_buy": false, "amount": 0.42, "remark": "60mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.2.3", "name": "\u7B4B\u677F", "material": "Q235\\10-50", "replacement": "", "weight": 0.2, "usage": 0.7, "is_buy": false, "amount": 0.114285714285714, "remark": "30mm" }, { "category": "\u4E0D\u9508\u94A2\u677F", "seq": "1.3", "name": "\u5BC6\u5C01\u5757", "material": "06Cr16Ni5Mo\\10-50", "replacement": "", "weight": 0, "usage": null, "is_buy": false, "amount": 0, "remark": "" }, { "category": "\u5BC6\u5C01\u5708", "seq": "1.4", "name": "V\u578B\u7EC4\u5408\u5708", "material": "V\u5F62\u7EC4\u5408\u5708\\GES4500-450\xD7490\xD770", "replacement": "", "weight": 0, "usage": null, "is_buy": true, "amount": 0, "remark": "" }, { "category": "", "seq": "1.5", "name": "\u9600\u8F74", "material": "", "replacement": "", "weight": 0.45, "usage": null, "is_buy": false, "amount": 1.04303571428571, "remark": "" }, { "category": "\u953B\u94A2", "seq": "1.5.1", "name": "\u9600\u8F74", "material": "\u955C\u677F\u3001\u63A8\u529B\u5934\u953B\u4EF6\\\u953B20SiMn\\\u953B45\\\u7C97\u52A0\u5DE5\u63A2\u4F24", "replacement": "", "weight": 0.35, "usage": 0.8, "is_buy": false, "amount": 0.77875, "remark": "\u953B20SiMn" }, { "category": "\u4E0D\u9508\u94A2\u677F", "seq": "1.5.2", "name": "\u8F74\u5957", "material": "0Cr18Ni9\\16", "replacement": "", "weight": 0.1, "usage": 0.7, "is_buy": false, "amount": 0.264285714285714, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "1.6", "name": "\u8F6C\u81C2", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 0.55, "usage": 1, "is_buy": false, "amount": 0.77, "remark": "ZG230-450" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "1.7", "name": "\u8F74\u5957", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 0.15, "usage": 1, "is_buy": false, "amount": 0.21, "remark": "ZG230-450" }, { "category": "\u8F74\u5957\\\u8F74\u627F", "seq": "1.8", "name": "\u8F74\u627F", "material": "\u8F74\u5957\\FZ-6\\460\xD7450\xD7340", "replacement": "", "weight": 0, "usage": 2, "is_buy": true, "amount": 0.3, "remark": "FZ-6\uFF0C\u03A6230/\u03A6220x180" }, { "category": "\u953B\u94A2", "seq": "1.9", "name": "\u87BA\u6813", "material": "\u5C0F\u953B\u4EF6\\<0.5\\\u953B45\\\u953B20\\\u6BDB\u576F", "replacement": "", "weight": 0.3, "usage": 0.8, "is_buy": false, "amount": 0.375, "remark": "" }, { "category": "\u953B\u94A2", "seq": "1.1", "name": "\u87BA\u6BCD", "material": "\u5C0F\u953B\u4EF6\\<0.5\\\u953B45\\\u953B20\\\u6BDB\u576F", "replacement": "", "weight": 0.1, "usage": 0.8, "is_buy": false, "amount": 0.125, "remark": "" }, { "category": "\u5BC6\u5C01\u5708", "seq": "1.11", "name": "\u5DE5\u4F5C\u5BC6\u5C01\u5708", "material": "V\u5F62\u7EC4\u5408\u5708\\GES4500-450\xD7490\xD770", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.15, "remark": "\u4E01\u82EF\u6A61\u80F6\u03C61.5m" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.12", "name": "\u5176\u4ED6", "material": "Q235\\10-50", "replacement": "", "weight": 0.5, "usage": 0.7, "is_buy": false, "amount": 0.285714285714286, "remark": "" }, { "category": "\u63A5\u529B\u5668", "seq": "2", "name": "\u63A5\u529B\u5668\u88C5\u914D", "material": "\u03C6200\\\u63A5\u529B\u5668", "replacement": "", "weight": 0.8, "usage": 1, "is_buy": true, "amount": 2.6, "remark": "\u03C6180x700mm 16MPa" }, { "category": "", "seq": "3", "name": "\u4E0A\u6E38\u94A2\u7BA1", "material": "", "replacement": "", "weight": 1.1, "usage": null, "is_buy": false, "amount": 0.64, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.1", "name": "\u6CD5\u5170", "material": "Q235\\50-90", "replacement": "", "weight": 0.4, "usage": 0.7, "is_buy": false, "amount": 0.24, "remark": "60mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.2", "name": "\u7B52\u4F53", "material": "Q235\\10-50", "replacement": "", "weight": 0.65, "usage": 0.7, "is_buy": false, "amount": 0.371428571428571, "remark": "16mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.3", "name": "\u5176\u4ED6", "material": "Q235\\10-50", "replacement": "", "weight": 0.05, "usage": 0.7, "is_buy": false, "amount": 0.0285714285714286, "remark": "" }, { "category": "", "seq": "4", "name": "\u4E0B\u6E38\u94A2\u7BA1", "material": "", "replacement": "", "weight": 2, "usage": null, "is_buy": false, "amount": 1.15, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "4.1", "name": "\u6CD5\u5170", "material": "Q235\\50-90", "replacement": "", "weight": 0.4, "usage": 0.7, "is_buy": false, "amount": 0.24, "remark": "60mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "4.2", "name": "\u7B52\u4F53", "material": "Q235\\10-50", "replacement": "", "weight": 0.9, "usage": 0.7, "is_buy": false, "amount": 0.514285714285714, "remark": "16mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "4.3", "name": "\u5176\u4ED6", "material": "Q235\\10-50", "replacement": "", "weight": 0.7, "usage": 0.7, "is_buy": false, "amount": 0.4, "remark": "" }, { "category": "", "seq": "5", "name": "\u4F38\u7F29\u8282\u88C5\u914D", "material": "", "replacement": "", "weight": 1.15, "usage": null, "is_buy": false, "amount": 0.68, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "5.1", "name": "\u6CD5\u5170", "material": "Q235\\50-90", "replacement": "", "weight": 0.8, "usage": 0.7, "is_buy": false, "amount": 0.48, "remark": "60mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "5.2", "name": "\u7B52\u4F53", "material": "Q235\\10-50", "replacement": "", "weight": 0.25, "usage": 0.7, "is_buy": false, "amount": 0.142857142857143, "remark": "20mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "5.3", "name": "\u5176\u4ED6", "material": "Q235\\10-50", "replacement": "", "weight": 0.1, "usage": 0.7, "is_buy": false, "amount": 0.0571428571428572, "remark": "" }, { "category": "", "seq": "6", "name": "\u65C1\u901A\u7BA1\u8DEF", "material": "", "replacement": "", "weight": 0.25, "usage": null, "is_buy": false, "amount": 0, "remark": "" }, { "category": "\u9600\u95E8\u7C7B", "seq": "6.1", "name": "\u6DB2\u538B\u64CD\u4F5C\u9600", "material": "\u6DB2\u538B\u64CD\u4F5C\u9600\\SF150-25/160", "replacement": "", "weight": 0, "usage": null, "is_buy": true, "amount": 0, "remark": "" }, { "category": "\u7BA1\u6750", "seq": "6.3", "name": "\u7BA1\u8DEF", "material": "\u65E0\u7F1D\u94A2\u7BA1\\\u5E38\u7528\u89C4\u683C", "replacement": "", "weight": 0.25, "usage": 0.8, "is_buy": false, "amount": 0.1625, "remark": "" }, { "category": "\u5176\u5B83", "seq": "7", "name": "\u91CD\u9524", "material": "\u7070\u94F8\u94C1\\HT200", "replacement": "", "weight": 3, "usage": 1, "is_buy": false, "amount": 2.775, "remark": "" }, { "category": "\u9600\u95E8\u7C7B", "seq": "9", "name": "\u7A7A\u6C14\u9600", "material": "\u7A7A\u6C14\u9600\\KQF-200/25", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0, "remark": "DN80/16" }, { "category": "\u9600\u95E8\u7C7B", "seq": "10", "name": "\u6DB2\u538B\u64CD\u4F5C\u9600", "material": "\u6DB2\u538B\u64CD\u4F5C\u9600\\SF150-25/160", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0, "remark": "DN150\uFF0CPN16\\16MPa\uFF08\u6CB9\u538B\uFF09" }, { "category": "\u9600\u95E8\u7C7B", "seq": "11", "name": "\u624B\u52A8\u95F8\u9600", "material": "\u95F8\u9600\\Z41H-25/DN200", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0, "remark": "DN150\uFF0CPN16" }, { "category": "\u9600\u95E8\u7C7B", "seq": "12", "name": "\u624B\u52A8\u95F8\u9600", "material": "\u95F8\u9600\\Z41H-25/DN200", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.2, "remark": "DN100\uFF0CPN16" }, { "category": "", "seq": "13", "name": "\u9600\u95E8\u672C\u4F53\u81EA\u52A8\u5316\u5143\u4EF6", "material": "", "replacement": "", "weight": 0, "usage": null, "is_buy": false, "amount": 1.18, "remark": "" }, { "category": "", "seq": "13.1", "name": "\u884C\u7A0B\u5F00\u5173", "material": "", "replacement": "", "weight": 0, "usage": 8, "is_buy": true, "amount": 0.96, "remark": "3SE5232-0BD03" }, { "category": "", "seq": "13.2", "name": "\u8010\u9707\u538B\u529B\u8868", "material": "", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.02, "remark": "YTN-100/2.5MPa" }, { "category": "", "seq": "13.3", "name": "\u5DEE\u538B\u53D8\u9001\u63A7\u5236\u5668", "material": "", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.2, "remark": "" }], "valve_door": [{ "category": "", "seq": "\u4E00", "name": "PDF120-WY-280", "material": "", "replacement": "", "weight": 57.7, "usage": null, "is_buy": false, "amount": 59.88, "remark": "" }, { "category": "", "seq": "1", "name": "\u8776\u9600\u88C5\u914D", "material": "", "replacement": "", "weight": 28.8, "usage": null, "is_buy": false, "amount": 42.73, "remark": "" }, { "category": "", "seq": "1.1", "name": "\u9600\u4F53", "material": "", "replacement": "", "weight": 9.7, "usage": null, "is_buy": false, "amount": 10.7392857142857, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.1.1", "name": "\u6CD5\u5170", "material": "Q345\\50-90", "replacement": "", "weight": 3.2, "usage": 0.7, "is_buy": false, "amount": 1.98857142857143, "remark": "90mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.1.2", "name": "\u7B52\u4F53", "material": "Q345\\50-90", "replacement": "", "weight": 2.3, "usage": 0.7, "is_buy": false, "amount": 1.42928571428571, "remark": "40mm" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "1.1.3", "name": "\u8F74\u5EA7", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 2.7, "usage": 0.7, "is_buy": false, "amount": 5.4, "remark": "" }, { "category": "\u4E0D\u9508\u94A2\u677F", "seq": "1.1.4", "name": "\u4E0D\u9508\u94A2", "material": "0Cr18Ni9\\16", "replacement": "", "weight": 0.5, "usage": 0.7, "is_buy": false, "amount": 1.32142857142857, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.1.5", "name": "\u5176\u4ED6", "material": "Q235\\50-90", "replacement": "", "weight": 1, "usage": 0.7, "is_buy": false, "amount": 0.6, "remark": "" }, { "category": "", "seq": "1.2", "name": "\u6D3B\u95E8", "material": "", "replacement": "", "weight": 9.4, "usage": null, "is_buy": false, "amount": 11.3557142857143, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "1.2.1", "name": "\u8F74\u5EA7", "material": "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 4, "usage": 0.7, "is_buy": false, "amount": 8, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.2.2", "name": "\u4E0A\u4E0B\u5E73\u677F", "material": "Q345\\50-90", "replacement": "", "weight": 4.3, "usage": 0.7, "is_buy": false, "amount": 2.67214285714286, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "1.2.3", "name": "\u7B4B\u677F", "material": "Q345\\50-90", "replacement": "", "weight": 1.1, "usage": 0.7, "is_buy": false, "amount": 0.683571428571429, "remark": "" }, { "category": "", "seq": "1.3", "name": "\u9600\u8F74", "material": "", "replacement": "", "weight": 2.9, "usage": null, "is_buy": false, "amount": 6.66428571428571, "remark": "" }, { "category": "\u953B\u94A2", "seq": "1.3.1", "name": "\u9600\u8F74", "material": "\u4E3B\u8F74\u953B\u4EF6\\10-30\\\u953B20SiMn\\\u7C97\u52A0\u5DE5\u63A2\u4F24", "replacement": "", "weight": 2.8, "usage": 0.7, "is_buy": false, "amount": 6.4, "remark": "" }, { "category": "\u4E0D\u9508\u94A2\u677F", "seq": "1.3.2", "name": "\u8F74\u5957", "material": "0Cr18Ni9\\16", "replacement": "", "weight": 0.1, "usage": 0.7, "is_buy": false, "amount": 0.264285714285714, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "1.4", "name": "\u8F6C\u81C2", "material": "\u590D\u6742\u5927\u578B\u94F8\u4EF6\\\u8F6C\u8F6E\u4F53\\\u9600\u4F53\\\u6D3B\u95E8\\\u5E95\u73AF\\\u55B7\u5634\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 3, "usage": 0.7, "is_buy": false, "amount": 8.03571428571428, "remark": "" }, { "category": "\u666E\u901A\u94F8\u94A2", "seq": "1.5", "name": "\u8F74\u5957", "material": "\u590D\u6742\u5927\u578B\u94F8\u4EF6\\\u8F6C\u8F6E\u4F53\\\u9600\u4F53\\\u6D3B\u95E8\\\u5E95\u73AF\\\u55B7\u5634\\ZG230-450\\ZG20SiMn", "replacement": "", "weight": 1, "usage": 0.7, "is_buy": false, "amount": 2.67857142857143, "remark": "" }, { "category": "\u8F74\u5957\\\u8F74\u627F", "seq": "1.6", "name": "\u8F74\u627F", "material": "\u5173\u8282\u8F74\u627FGE140", "replacement": "", "weight": 0, "usage": 2, "is_buy": true, "amount": 0.18, "remark": "" }, { "category": "\u7A7A\u6C14\u56F4\u5E26\\\u5BC6\u5C01\u73AF", "seq": "1.7", "name": "\u5DE5\u4F5C\u5BC6\u5C01\u5708", "material": "\u7A7A\u6C14\u56F4\u5E26\\\u5927", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.5, "remark": "" }, { "category": "\u953B\u94A2", "seq": "1.8", "name": "\u87BA\u6813\u87BA\u6BCD", "material": "\u955C\u677F\u3001\u63A8\u529B\u5934\u953B\u4EF6\\\u953B20SiMn\\\u953B45\\\u7C97\u52A0\u5DE5\u63A2\u4F24", "replacement": "", "weight": 1, "usage": 0.7, "is_buy": false, "amount": 2.54285714285714, "remark": "" }, { "category": "", "seq": "1.9", "name": "\u5176\u4ED6", "material": " ", "replacement": "", "weight": 1.8, "usage": 0.7, "is_buy": false, "amount": 0, "remark": "" }, { "category": "", "seq": "2", "name": "\u4E0A\u6E38\u94A2\u7BA1", "material": "", "replacement": "", "weight": 3.4, "usage": null, "is_buy": false, "amount": 2.11, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "2.1", "name": "\u6CD5\u5170", "material": "Q345\\50-90", "replacement": "", "weight": 1.6, "usage": 0.7, "is_buy": false, "amount": 0.994285714285714, "remark": "90mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "2.2", "name": "\u7B52\u4F53", "material": "Q345\\50-90", "replacement": "", "weight": 1.6, "usage": 0.7, "is_buy": false, "amount": 0.994285714285714, "remark": "40mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "2.3", "name": "\u5176\u4ED6", "material": "Q235\\50-90", "replacement": "", "weight": 0.2, "usage": 0.7, "is_buy": false, "amount": 0.12, "remark": "" }, { "category": "", "seq": "3", "name": "\u4E0B\u6E38\u94A2\u7BA1", "material": "", "replacement": "", "weight": 4.4, "usage": null, "is_buy": false, "amount": 2.72, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.1", "name": "\u6CD5\u5170", "material": "Q345\\50-90", "replacement": "", "weight": 1.6, "usage": 0.7, "is_buy": false, "amount": 0.994285714285714, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.2", "name": "\u7B52\u4F53", "material": "Q345\\50-90", "replacement": "", "weight": 1.95, "usage": 0.7, "is_buy": false, "amount": 1.21178571428571, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "3.3", "name": "\u5176\u4ED6", "material": "Q235\\50-90", "replacement": "", "weight": 0.85, "usage": 0.7, "is_buy": false, "amount": 0.51, "remark": "" }, { "category": "", "seq": "5", "name": "\u4F38\u7F29\u8282", "material": "", "replacement": "", "weight": 4.4, "usage": null, "is_buy": false, "amount": 2.72, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "5.1", "name": "\u6CD5\u5170", "material": "Q345\\50-90", "replacement": "", "weight": 3.2, "usage": 0.7, "is_buy": false, "amount": 1.98857142857143, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "5.2", "name": "\u7B52\u4F53", "material": "Q345\\50-90", "replacement": "", "weight": 1, "usage": 0.7, "is_buy": false, "amount": 0.621428571428571, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "5.3", "name": "\u5176\u4ED6", "material": "Q235\\10-50", "replacement": "", "weight": 0.2, "usage": 0.7, "is_buy": false, "amount": 0.114285714285714, "remark": "" }, { "category": "", "seq": "6", "name": "\u65C1\u901A\u7BA1\u8DEF", "material": "", "replacement": "", "weight": 0.7, "usage": null, "is_buy": true, "amount": 0, "remark": "" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "7", "name": "\u91CD\u9524", "material": "Q235\\50-90", "replacement": "", "weight": 16, "usage": 0.7, "is_buy": false, "amount": 9.6, "remark": "80mm" }, { "category": "\u666E\u901A\u94A2\u677F", "seq": "13", "name": "\u5176\u5B83", "material": "Q235\\10-50", "replacement": "", "weight": 16.4, "usage": 0.7, "is_buy": false, "amount": 9.37142857142857, "remark": "" }, { "category": "\u7A7A\u6C14\u51B7\u5374\u5668", "seq": "12.1", "name": "\u7A7A\u51B7\u5668", "material": "\u7A7A\u6C14\u51B7\u5374\u5668", "replacement": "", "weight": 0, "usage": 8, "is_buy": true, "amount": 0.144, "remark": "4\xD7105KW" }, { "category": "\u5236\u52A8\u5668", "seq": "12.2", "name": "\u5236\u52A8\u7CFB\u7EDF\uFF08\u5236\u52A8\u5668\uFF09", "material": "\u5236\u52A8\u5668\\\u03C6220", "replacement": "", "weight": 0, "usage": 4, "is_buy": true, "amount": 4.7, "remark": "" }, { "category": "\u9664\u5C18\u88C5\u7F6E", "seq": "12.3", "name": "\u5236\u52A8\u9664\u5C18\u88C5\u7F6E", "material": "\u03C6220\u78B3\u7C89\u5236\u52A8\u9664\u5C18\u88C5\u7F6E", "replacement": "", "weight": 0, "usage": 4, "is_buy": true, "amount": 5, "remark": "" }, { "category": "\u8BD5\u538B\u6CF5", "seq": "12.4", "name": "\u7535\u52A8\u8BD5\u538B\u6CF5", "material": "\u7535\u52A8\u8BD5\u538B\u6CF5DSY", "replacement": "", "weight": 0, "usage": 1, "is_buy": true, "amount": 0.83, "remark": "DSY-35" }, { "category": "\u7535\u52A0\u70ED\u5668", "seq": "12.5", "name": "\u52A0\u70ED\u5668", "material": "\u7535\u52A0\u70ED\u5668220V/2KW", "replacement": "", "weight": 0, "usage": 2, "is_buy": true, "amount": 0.196, "remark": "" }, { "category": "\u7535\u52A0\u70ED\u5668", "seq": "12.6", "name": "\u9664\u6E7F\u673A", "material": "\u7535\u52A0\u70ED\u5668SK1-130", "replacement": "", "weight": 0, "usage": 2, "is_buy": true, "amount": 0.38, "remark": "" }, { "category": "\u706D\u706B\u88C5\u7F6E", "seq": "12.1", "name": "\u4E8C\u6C27\u5316\u78B3\u706D\u706B\u88C5\u7F6E", "material": "\u4E8C\u6C27\u5316\u78B3\u706D\u706B\u88C5\u7F6E\\\u660E\u54E5\u6865", "replacement": "", "weight": 0, "usage": null, "is_buy": true, "amount": 0, "remark": "\u7EC4\u5408\u5206\u914D\uFF0C\u5357\u6D88" }, { "category": "", "seq": "12.17", "name": "\u6C14\u5C01\u88C5\u7F6E", "material": "", "replacement": "", "weight": 0, "usage": null, "is_buy": true, "amount": 0, "remark": "" }, { "category": "", "seq": "12.2", "name": "\u5B9A\u3001\u8F6C\u5B50\u73B0\u573A\u670D\u52A1", "material": "", "replacement": "", "weight": 0, "usage": null, "is_buy": true, "amount": 0, "remark": "1.\u5B9A\u5B50\u673A\u5EA7\u5206\u4E24\u74E3\uFF0C\u7531\u5B89\u88C5\u5355\u4F4D\u5728\u5DE5\u5730\u7EC4\u5706\u3001\u5D4C\u5408\u7F1D\u7EBF\u3001\u8BD5\u9A8C\uFF1B2.\u8F6C\u5B50\u5728\u5DE5\u5730\u7531\u5B89\u88C5\u5355\u4F4D\u8D1F\u8D23\u8FDB\u884C\u78C1\u8F6D\u53E0\u7247\u3001\u6302\u6781\u3001\u8BD5\u9A8C\u3002" }], "water_parts": [{ "seq": 1, "name": "\u5BFC\u53F6\u4E0A\u3001\u4E2D\u3001\u4E0B\u8F74\u5957", "qty": 1, "spec": "\u540424\u4E2A\u517196\u4E2A,FZ-2", "self": null, "buy": 0.384, "unit": "\u5957" }, { "seq": 2, "name": "\u5BFC\u53F6\u8FDE\u6746\u8F74\u5957", "qty": 0.5, "spec": "\u517148\u4E2A,FZ-2", "self": null, "buy": 0.072, "unit": "\u5957" }, { "seq": 3, "name": "\u5BFC\u53F6\u5BC6\u5C01\u5708", "qty": 4, "spec": '\u517196\u4E2A"Y"\u5F62\u5BC6\u5C01\u5708\u548C96\u4E2AO\u578B\u5BC6\u5C01\u5708', "self": null, "buy": 0.288, "unit": "\u5957" }, { "seq": 4, "name": "\u5BFC\u53F6\u5206\u534A\u952E", "qty": 0.5, "spec": "12\u4E2A(\u6BCF\u4E2A\u91CD4kg  45\u53F7\u94A2)", "self": 0.03, "buy": null, "unit": "\u5957" }, { "seq": 5, "name": "\u5DE5\u4F5C\u5BC6\u5C01\u5708", "qty": 1, "spec": "\u6A61\u80F6I-2\uFF08\u5916\u8D2D\uFF09", "self": null, "buy": 0.5, "unit": "\u5957" }, { "seq": 6, "name": "\u4E3B\u8F74\u68C0\u4FEE\u5BC6\u5C01\u4EF6", "qty": 1, "spec": "\u6A61\u80F6I-2\uFF08\u5916\u8D2D\uFF09", "self": null, "buy": 0.5, "unit": "\u5957" }, { "seq": 7, "name": "\u6C34\u5BFC\u8F74\u627F\u74E6", "qty": 1, "spec": "0.13t(\u5DF4\u6C0F\u5408\u91D110kg,\u5176\u4F59\u4E3AQ235)", "self": null, "buy": 1, "unit": "\u5957" }, { "seq": 8, "name": "\u63A5\u529B\u5668\u56FA\u5B9A\u5BC6\u5C01\u5708", "qty": 1, "spec": "\u4E24\u4EF6\u7EC4\u5408\u5BC6\u5C01(\u63A5\u529B\u5668\u6D3B\u585E\u76F4\u5F84\u4E3A150mm)", "self": null, "buy": 0.1, "unit": "\u5957" }, { "seq": 9, "name": "\u63A5\u529B\u5668\u6D3B\u585E\u73AF", "qty": 1, "spec": "\u4E24\u4EF6(\u63A5\u529B\u5668\u6D3B\u585E\u76F4\u5F84\u4E3A150mm)", "self": null, "buy": 0.1, "unit": "\u5957" }, { "seq": 10, "name": "\u5BFC\u53F6\u526A\u65AD\u9500", "qty": 1, "spec": "24\u4E2A(\u6BCF\u4E2A\u91CD1.8kg  45\u53F7\u94A2)", "self": 0.0370285714285714, "buy": null, "unit": "\u5957" }, { "seq": 11, "name": "\u9876\u76D6\u3001\u5E95\u73AF\u6297\u78E8\u677F", "qty": 1, "spec": "06Cr19Ni10\uFF0C\u91CD1.3t", "self": 1.95, "buy": null, "unit": "\u5957" }, { "seq": 12, "name": "\u5404\u7C7B\u5F39\u7C27", "qty": 1, "spec": null, "self": null, "buy": 0.05, "unit": "\u5957" }, { "seq": 13, "name": "\u6A61\u80F6\u5BC6\u5C01\u6761", "qty": null, "spec": null, "self": null, "buy": null }, { "seq": 14, "name": "\u63A7\u5236\u73AF\u5927\u8033\u5B54\u8F74\u5957", "qty": 0.5, "spec": "2\u4E2A", "self": null, "buy": 0.022, "unit": "\u53F0\u5957" }, { "seq": 15, "name": "\u4E0A\u3001\u4E0B\u56FA\u5B9A\u6B62\u6F0F\u73AF\uFF08\u8FC7\u6D41\u9762\u7559\u52A0\u5DE5\u4F59\u91CF\uFF09", "qty": 1, "spec": null, "self": 1.11428571428571, "buy": null, "unit": "\u53F0\u5957" }], "gen_parts": [{ "seq": 1, "name": "\u5B9A\u5B50\u591A\u531D\u53E0\u7ED5\u7EBF\u5708", "qty": null, "unit": null, "spec": null, "self": null, "buy": null }, { "seq": 2, "name": "\u5B9A\u5B50\u69FD\u6954", "qty": null, "unit": null, "spec": null, "self": null, "buy": null }, { "seq": 3, "name": "\u8F6C\u5B50\u78C1\u6781\u952E", "qty": "8", "unit": "\u5BF9", "spec": "8\xD711.7/\u953B45", "self": 0.5, "buy": null }, { "seq": 4, "name": "\u5236\u52A8\u5757\u3001\u5BC6\u5C01\u5708\u3001\u5F39\u7C27", "qty": 1, "unit": "\u53F0\u4EFD", "spec": "\u4E0E\u5236\u52A8\u5668\u914D\u5957\u91C7\u8D2D(1\u59574\u4EF6)", "self": null, "buy": 4.7 }, { "seq": 5, "name": "\u96C6\u7535\u73AF\u7535\u5237", "qty": "1", "unit": "\u53F0\u4EFD", "spec": "1\xD740\u4EF6", "self": null, "buy": 0.48 }, { "seq": 6, "name": "\u96C6\u7535\u73AF\u7535\u5237\u76D2\u53CA\u5F39\u7C27", "qty": "1/2", "unit": "\u53F0\u4EFD", "spec": "1\xD740\u4EF6", "self": null, "buy": 0.24 }, { "seq": 7, "name": "\u5404\u7C7B\u578B\u78C1\u6781\u7EBF\u5708\uFF08\u542B\u7EDD\u7F18\u6750\u6599\uFF09", "qty": null, "unit": "\u4E2A", "spec": null, "self": null, "buy": null }, { "seq": 8, "name": "\u63A8\u529B\u8F74\u627F\u74E6", "qty": 1, "unit": "\u53F0\u4EFD", "spec": "8\u5757", "self": 2.09142857142857, "buy": null }, { "seq": 9, "name": "\u4E0A\u5BFC\u8F74\u74E6", "qty": 1, "unit": "\u53F0\u4EFD", "spec": "8\u5757", "self": 0.781192857142857, "buy": null }, { "seq": 10, "name": "\u4E0B\u5BFC\u8F74\u74E6", "qty": 1, "unit": "\u53F0\u4EFD", "spec": "8\u5757", "self": 0.31415, "buy": null }, { "seq": 11, "name": "\u8F74\u627F\u7528\u7EDD\u7F18\u677F\u3001\u7EDD\u7F18\u5957\u7B52\u7B49", "qty": null, "unit": "\u53F0\u4EFD", "spec": null, "self": null, "buy": null }, { "seq": 12, "name": "\u7535\u963B\u6E29\u5EA6\u8BA1\uFF08\u5404\u7C7B\u578B\uFF09", "qty": "2", "unit": "\u652F", "spec": "4\u4EF6", "self": null, "buy": null }, { "seq": 13, "name": "\u78C1\u8F6D\u952E", "qty": 2, "unit": "\u5BF9", "spec": "2\xD750kg", "self": 0.5, "buy": null }, { "seq": "14", "name": "\u5B9A\u5B50\u7EBF\u5708\uFF08\u4E0A\u5C42\uFF09The stator coil\uFF08superstratum\uFF09", "qty": "39", "unit": "\u4EF6", "spec": "39\xD725.7", "self": 8.77263075, "buy": null }, { "seq": "15", "name": "\u5B9A\u5B50\u7EBF\u5708\uFF08\u4E0B\u5C42\uFF09\nThe stator coil\uFF08substratum\uFF09", "qty": "20", "unit": "\u4EF6", "spec": "20\xD725.7", "self": 3.4695, "buy": null }], "valve_parts": [{ "seq": 1, "name": "\u6240\u6709\u7684\u706F\u3001\u7194\u65AD\u5668\u548C\u5176\u5B83\u7C7B\u4F3C\u5143\u4EF6", "unit": "\u53F0\u5957", "qty": 1, "material": null, "spec": null, "unit_price": null, "total": null, "buy": null }, { "seq": 2, "name": "\u6240\u6709\u7684\u5BC6\u5C01\u4EF6\u3001\u586B\u6599\u548C\u57AB\u7247\uFF08\u5305\u62EC\u63A5\u529B\u5668\u6D3B\u585E\u548C\u6D3B\u585E\u6746\u7684\u5BC6\u5C01\uFF09", "unit": "\u53F0\u5957", "qty": 1.5, "material": "\u5BC6\u5C01\u57570Cr13Ni5Mo+XB350", "spec": "0.2t\uFF0C\u03C62200/\u03C62040\xD720 2\u4EF6", "unit_price": 5400, "total": 8100, "buy": 900 }, { "seq": 3, "name": "\u5404\u79CD\u89C4\u683C\u578B\u53F7\u7684\u8FC7\u6EE4\u5668\u6EE4\u82AF", "unit": "\u53F0\u5957", "qty": 1, "material": null, "spec": null, "unit_price": null, "total": null, "buy": null }, { "seq": 4, "name": "\u5404\u79CD\u89C4\u683C\u578B\u53F7\u7684\u9650\u4F4D\u5F00\u5173", "unit": "\u53F0\u5957", "qty": 1, "material": null, "spec": "\u884C\u7A0B\u5F00\u5173", "unit_price": 2400, "total": 2400, "buy": 2400 }, { "seq": 5, "name": "\u7535\u78C1\u9600\u3001\u7535\u78C1\u914D\u538B\u9600\u3001\u6DB2\u538B\u9600", "unit": "\u53F0\u5957", "qty": "\u6BCF\u79CD\u89C4\u683C\u578B\u53F71\u4E2A", "material": null, "spec": null, "unit_price": null, "total": null, "buy": null }, { "seq": 6, "name": "\u5404\u79CD\u89C4\u683C\u578B\u53F7\u7684\u6DB2\u4F4D\u4FE1\u53F7\u5668", "unit": "\u53F0\u5957", "qty": 1, "material": null, "spec": null, "unit_price": null, "total": null, "buy": null }, { "seq": 7, "name": "\u538B\u529B\u5F00\u5173", "unit": "\u53F0\u5957", "qty": 1, "material": null, "spec": null, "unit_price": null, "total": null, "buy": null }, { "seq": 8, "name": "\u53D8\u9001\u5668\u548C\u7EE7\u7535\u5668\u3001\u8026\u5408\u5668", "unit": "\u53F0\u5957", "qty": "\u6BCF\u79CD\u89C4\u683C\u578B\u53F71\u4E2A", "material": null, "spec": null, "unit_price": null, "total": null, "buy": null }, { "seq": 9, "name": "\u6CB9\u538B\u88C5\u7F6E\u6CB9\u6CF5\u7EC4\uFF08\u5305\u62EC\u7535\u673A\u3001\u5378\u8377\u9600\u3001\u5B89\u5168\u9600\u548C\u622A\u6B62\u9600\uFF09", "unit": "\u5957", "qty": 1, "material": null, "spec": null, "unit_price": null, "total": null, "buy": null }, { "seq": 10, "name": "\u5404\u79CD\u89C4\u683C\u7684\u8C03\u6574\u5F39\u7C27", "unit": "\u53F0\u5957", "qty": 1.5, "material": null, "spec": null, "unit_price": null, "total": null, "buy": null }, { "seq": 11, "name": "\u8FDB\u6C34\u9600\u6CD5\u5170\u4E24\u7AEF\u7684\u9884\u5E94\u529B\u87BA\u6813", "unit": "\u53F0\u5957", "qty": 0.5, "material": " \u953B45", "spec": "0.5t", "unit_price": 11800, "total": 5900, "buy": null }, { "seq": 12, "name": "\u5206\u534A\u952E\u548C\u9500", "unit": "\u53F0\u5957", "qty": 1, "material": 45, "spec": "0.02t", "unit_price": 200, "total": 200, "buy": null }, { "seq": 13, "name": "\u5404\u79CD\u89C4\u683C\u7684\u8F74\u5957\u3001\u8F74\u74E6", "unit": "\u53F0\u5957", "qty": 1, "material": "FZ-6", "spec": "\u8F74\u627F\u03A6430/\u03A6420x320  2\u4EF6", "unit_price": 4e3, "total": 4e3, "buy": 4e3 }, { "seq": 14, "name": "\u5176\u4ED6", "unit": null, "qty": null, "material": null, "spec": null, "unit_price": null, "total": null, "buy": null }], "water_tools": [{ "seq": 1, "name": "\u5404\u79CD\u4E13\u7528\u7279\u6B8A\u6273\u624B", "qty": 2, "weight": null, "self": null, "buy": 0.2, "spec": null }, { "seq": 2, "name": "\u5404\u7C7B\u540A\u73AF", "qty": 1, "weight": null, "self": null, "buy": 0.05, "spec": null }, { "seq": 3, "name": "\u5404\u7C7B\u94F0\u5200", "qty": 2, "weight": null, "self": null, "buy": 0.1, "spec": null }, { "seq": 4, "name": "\u5927\u8F74\u548C\u8F6C\u8F6E\u4E13\u7528\u540A\u5177", "qty": 1, "weight": 0.5, "self": 0.3, "buy": null, "spec": "Q235" }, { "seq": 5, "name": "\u4E3B\u8F74\u8054\u8F74\u5DE5\u5177", "qty": 1, "weight": 0.3, "self": 0.18, "buy": null, "spec": null }, { "seq": 6, "name": "\u5BFC\u53F6\u81C2\u88C5\u62C6\u5DE5\u5177", "qty": 2, "weight": 0.03, "self": 0.1, "buy": null, "spec": null }, { "seq": 7, "name": "\u5BFC\u53F6\u578B\u7EBF\u68C0\u67E5\u6837\u677F", "qty": null, "weight": null, "self": null, "buy": null, "spec": null }, { "seq": 8, "name": "\u8F6C\u8F6E\u53F6\u7247\u578B\u7EBF\u68C0\u67E5\u6837\u677F", "qty": null, "weight": null, "self": null, "buy": null, "spec": null }, { "seq": 9, "name": "\u62C6\u5206\u534A\u952E\u5DE5\u5177", "qty": null, "weight": null, "self": null, "buy": null, "spec": null }, { "seq": 10, "name": "\u5C3E\u6C34\u7BA1\u68C0\u4FEE\u5E73\u53F0", "qty": null, "weight": null, "self": null, "buy": null, "spec": null }, { "seq": 11, "name": "\u62C6\u5378\u526A\u65AD\u9500\u5DE5\u5177", "qty": null, "weight": null, "self": null, "buy": null, "spec": null }, { "seq": 12, "name": "\u6DB2\u538B\u62C9\u4F38\u5668", "qty": 1, "weight": null, "self": null, "buy": 5, "spec": "\u4E3B\u8F74\u548C\u8F6C\u8F6E\u8FDE\u63A5\u7528\u7684\u6DB2\u538B\u62C9\u4F38\u5668\uFF0CM90\u6DB2\u538B\u62C9\u4F38\u5668\u4E24\u4E2A\uFF0C\u542B\u538B\u529B\u6CB9\u6CF5\uFF0C\u63A5\u5934\uFF0C\u63A5\u7BA1\u3001\u652F\u67B6\u53CA\u4F38\u957F\u503C\u6D4B\u91CF\u5DE5\u5177" }, { "seq": 13, "name": "\u73AF\u5F62\u540A\u8F66(\u542B\u7535\u52A8\u846B\u82A6)", "qty": 4, "weight": null, "self": null, "buy": 10, "spec": null }, { "seq": 14, "name": "\u5BFC\u53F6\u5206\u74E3\u952E\u88C5\u62C6\u5DE5\u5177", "qty": "\u54042", "weight": 0.015, "self": 9e-3, "buy": null, "spec": null }, { "seq": 15, "name": "\u5BFC\u53F6\u7834\u65AD\u9500\u88C5\u62C6\u5DE5\u5177", "qty": 2, "weight": 8e-3, "self": 48e-4, "buy": null, "spec": null }, { "seq": 16, "name": "\u5BFC\u53F6\u6273\u624B", "qty": 2, "weight": 0.023, "self": 0.0138, "buy": null, "spec": null }, { "seq": 17, "name": "\u8F6C\u8F6E\u53F6\u7247\u548C\u5BFC\u6C34\u53F6\u6837\u677F", "qty": 2, "weight": null, "self": 0.05, "buy": null, "spec": null }, { "seq": 18, "name": "\u8F6C\u8F6E\u68C0\u4FEE\u5E73\u53F0", "qty": 1, "weight": 0.3, "self": 0.18, "buy": null, "spec": null }, { "seq": 19, "name": "\u6C34\u5BFC\u8F74\u627F\u5185\u6CB9\u7BB1\u88C5\u62C6\u5DE5\u5177", "qty": null, "weight": 0.015, "self": 0.1, "buy": null, "spec": null }], "gen_tools": [{ "seq": 1, "name": "\u8F6C\u5B50\u78C1\u6781\u540A\u88C5\u4E13\u7528\u5DE5\u5177", "unit": "\u5957", "qty": null, "material": "Q235", "weight": null, "spec": null, "self": 0, "buy": null }, { "seq": 2, "name": "\u8F6C\u5B50\u8D77\u540A\u4E13\u7528\u540A\u5177", "unit": "\u5957", "qty": 1, "material": "ZG270-500", "weight": 1, "spec": null, "self": 1.4, "buy": null }, { "seq": 3, "name": "\u63A8\u529B\u5934\u62C6\u88C5\u5DE5\u5177", "unit": "\u5957", "qty": 1, "material": "Q235", "weight": 0.36, "spec": null, "self": 0.210857142857143, "buy": null }, { "seq": 4, "name": "\u673A\u68B0\u76D8\u8F66\u5DE5\u5177", "unit": "\u5957", "qty": 1, "material": null, "weight": null, "spec": "\u4E0E\u88C5\u62C6\u63A8\u529B\u5934\u5171\u7528\u5DE5\u5177Tool shared with assembly and disassembly of thrust head", "self": 0, "buy": null }, { "seq": 5, "name": "\u8F6C\u5B50\u53E0\u7247\u68C0\u4FEE\u652F\u58A9", "unit": "\u5957", "qty": 1, "material": "Q235", "weight": 0.9, "spec": null, "self": 0.527142857142857, "buy": null }, { "seq": 6, "name": "\u78C1\u8F6D\u9884\u7D27\u5DE5\u5177", "unit": "\u5957", "qty": 1, "material": "Q235", "weight": 1.3, "spec": null, "self": 0.761428571428571, "buy": null }, { "seq": 7, "name": "\u5B9A\u5B50\u8D77\u540A\u8FD0\u8F93\u5DE5\u5177", "unit": "\u5957", "qty": null, "material": "Q235", "weight": null, "spec": "\u8D77\u540A\u5706\u67F1\uFF0C\u710A\u4E8E\u673A\u5EA7\u5185Lifting cylinder, welded into stator framework", "self": 0, "buy": null }, { "seq": 8, "name": "\u78B3\u5237\u629B\u5149\u5DE5\u5177", "unit": "\u5957", "qty": null, "material": "Q235", "weight": null, "spec": null, "self": null, "buy": null }, { "seq": 9, "name": "\u78C1\u6781\u952E\u69FD\u62C9\u5200", "unit": "\u628A", "qty": 2, "material": null, "weight": null, "spec": null, "self": null, "buy": 0.1 }, { "seq": 10, "name": "\u78C1\u8F6D\u952E\u69FD\u62C9\u5200", "unit": "\u628A", "qty": 2, "material": null, "weight": null, "spec": null, "self": null, "buy": 0.1 }, { "seq": 11, "name": "\u5706\u62C9\u5200", "unit": "\u628A", "qty": 2, "material": null, "weight": null, "spec": null, "self": null, "buy": 0.05 }, { "seq": 12, "name": "\u8F6C\u5B50\u6D4B\u5706\u67B6", "unit": "\u5957", "qty": 1, "material": "Q235", "weight": 0.5, "spec": null, "self": 0.292857142857143, "buy": null }, { "seq": 13, "name": "\u5404\u79CD\u4E13\u7528\u6273\u624B", "unit": "\u628A", "qty": "\u54042", "material": 45, "weight": null, "spec": "M36\u3001M42\u3001M48\u3001M56\u3001M64\u3001M100", "self": null, "buy": 0.15 }, { "seq": "14", "name": "\u5B9A\u5B50\u8FD0\u8F93\u652F\u6491\u5DE5\u5177", "unit": "\u5957", "qty": 1, "material": "Q235", "weight": "0.7", "spec": null, "self": 0.41, "buy": null }], "valve_tools": [{ "seq": 1, "name": "\u88C5\u5728\u5DE5\u5177\u7BB1\u5185\u7684\u5404\u79CD\u89C4\u683C\u7684\u4E13\u7528\u6273\u624B", "unit": "\u5957", "qty": 1, "material": null, "weight": null, "spec": null, "unit_price": 2e3, "total": 2e3, "buy": 2e3 }, { "seq": 2, "name": "\u8D77\u540A\u9600\u95E8\u7684\u4E13\u7528\u540A\u5177", "unit": "\u5957", "qty": 1, "material": null, "weight": null, "spec": "\u540A\u73AF\u87BA\u9489", "unit_price": 300, "total": 300, "buy": null }, { "seq": 3, "name": "\u8D77\u540A\u63A5\u529B\u5668\u7684\u4E13\u7528\u540A\u5177", "unit": "\u5957", "qty": 1, "material": null, "weight": null, "spec": "\u540A\u73AF\u87BA\u9489", "unit_price": 200, "total": 200, "buy": null }, { "seq": 4, "name": "\u8FDB\u6C34\u9600\u88C5\u914D\u3001\u62C6\u5378\u548C\u68C0\u4FEE\u4E13\u7528\u5DE5\u5177", "unit": "\u5957", "qty": 1, "material": null, "weight": null, "spec": "\u6885\u82B1\u6572\u51FB\u6273\u624B", "unit_price": 500, "total": 500, "buy": 500 }, { "seq": 5, "name": "\u9884\u5E94\u529B\u87BA\u6813\u7528\u7684\u5404\u79CD\u89C4\u683C\u5DE5\u5177", "unit": "\u5957", "qty": 1, "material": null, "weight": null, "spec": "\u529B\u77E9\u6273\u624BM64\u3001M56(4\u53F0\u673A\u5171\u7528)", "unit_price": 2e4, "total": 2e4, "buy": 2e4 }, { "seq": 6, "name": "\u5145\u6C2E\u4E13\u7528\u5DE5\u5177", "unit": "\u5957", "qty": 1, "material": null, "weight": null, "spec": "\u6DB2\u538B\u7AD9\u63D0\u4F9B", "unit_price": null, "total": null, "buy": null }, { "seq": 7, "name": "\u5176\u4ED6", "unit": null, "qty": null, "material": null, "weight": null, "spec": null, "unit_price": null, "total": null, "buy": null }], "automation": [{ "seq": "\u4E00.1.1", "name": "\u5BFC\u53F6\u4F4D\u7F6E\u5F00\u5173", "model": "ZCK", "unit": "\u4E2A", "qty": 4, "unit_price": 200, "total": 800, "usage": "\u5BFC\u53F6\u4F4D\u7F6E\u76D1\u6D4B", "manufacturer": "\u5FB7\u56FD\u65BD\u8010\u5FB7", "source_seq": 1, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u5BFC\u6C34\u673A\u6784" }, { "seq": "\u4E00.1.2", "name": "\u526A\u65AD\u9500\u4FE1\u53F7\u88C5\u7F6E", "model": "ZJX-3A", "unit": "\u652F", "qty": 1, "unit_price": 900, "total": 900, "usage": "\u5BFC\u53F6\u5DE5\u51B5\u4FDD\u62A4", "manufacturer": "\u5357\u5E73\u901A\u8FBE", "source_seq": 2, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u5BFC\u6C34\u673A\u6784" }, { "seq": "\u4E00.1.3", "name": "\u526A\u65AD\u9500\u4FE1\u53F7\u5668", "model": "CJX-18", "unit": "\u652F", "qty": 36, "unit_price": 50, "total": 1800, "usage": "\u5BFC\u53F6\u5DE5\u51B5\u76D1\u89C6", "manufacturer": "\u5357\u5E73\u901A\u8FBE", "source_seq": 3, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u5BFC\u6C34\u673A\u6784" }, { "seq": "\u4E00.2.1", "name": "\u7535\u78C1\u7A7A\u6C14\u9600", "model": "JMFH-5-1/2", "unit": "\u4E2A", "qty": 1, "unit_price": 3500, "total": 3500, "usage": "\u7A7A\u6C14\u56F4\u5E26\u5BC6\u5C01\u63A7\u5236", "manufacturer": "\u5FB7\u56FD\u8D39\u65AF\u6258", "source_seq": 4, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u63A5\u529B\u5668\u4E0E\u7A7A\u6C14\u56F4\u5E26" }, { "seq": "\u4E00.2.2", "name": "\u538B\u529B\u8868", "model": "YTN-150", "unit": "\u4E2A", "qty": 1, "unit_price": 150, "total": 150, "usage": "\u7A7A\u6C14\u56F4\u5E26\u5BC6\u5C01\u538B\u529B\u6307\u793A", "manufacturer": "\u7EA2\u65D7\u4EEA\u8868", "source_seq": 5, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u63A5\u529B\u5668\u4E0E\u7A7A\u6C14\u56F4\u5E26" }, { "seq": "\u4E00.2.3", "name": "\u538B\u529B\u5F00\u5173", "model": "YLK", "unit": "\u4E2A", "qty": 1, "unit_price": 1200, "total": 1200, "usage": "\u7A7A\u6C14\u56F4\u5E26\u5BC6\u5C01\u538B\u529B\u4FE1\u53F7", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 6, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u63A5\u529B\u5668\u4E0E\u7A7A\u6C14\u56F4\u5E26" }, { "seq": "\u4E00.2.4", "name": "\u76F4\u7EBF\u4F4D\u79FB\u53D8\u9001\u5668", "model": "MTS", "unit": "\u4E2A", "qty": 1, "unit_price": 6500, "total": 6500, "usage": "\u63A5\u529B\u5668\u884C\u7A0B\u4F4D\u7F6E\u76D1\u6D4B", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 7, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u63A5\u529B\u5668\u4E0E\u7A7A\u6C14\u56F4\u5E26" }, { "seq": "\u4E00.2.5", "name": "\u884C\u7A0B\u5F00\u5173", "model": "ZCK", "unit": "\u4E2A", "qty": 2, "unit_price": 200, "total": 400, "usage": "\u63A5\u529B\u5668\u9501\u952D\u4F4D\u7F6E\u4FE1\u53F7", "manufacturer": "\u5FB7\u56FD\u65BD\u8010\u5FB7", "source_seq": 8, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u63A5\u529B\u5668\u4E0E\u7A7A\u6C14\u56F4\u5E26" }, { "seq": "\u4E00.2.6", "name": "\u7535\u78C1\u914D\u538B\u9600", "model": "4WE", "unit": "\u53F0", "qty": 1, "unit_price": 3e3, "total": 3e3, "usage": "\u63A5\u529B\u5668\u9501\u952D\u63A7\u5236", "manufacturer": "\u5FB7\u56FD\u529B\u58EB\u4E50", "source_seq": 9, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u63A5\u529B\u5668\u4E0E\u7A7A\u6C14\u56F4\u5E26" }, { "seq": "\u4E00.3.1", "name": "\u538B\u529B\u53D8\u9001\u5668", "model": "MPM480", "unit": "\u4E2A", "qty": 1, "unit_price": 2500, "total": 2500, "usage": "\u8717\u58F3\u8FDB\u53E3\u538B\u529B\u76D1\u6D4B", "manufacturer": "\u4E2D\u7F8E\u9EA6\u514B", "source_seq": 10, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u57CB\u5165\u96F6\u4EF6\u538B\u529B\u76D1\u6D4B" }, { "seq": "\u4E00.3.2", "name": "\u538B\u529B\u8868", "model": "YTN-150", "unit": "\u4E2A", "qty": 1, "unit_price": 150, "total": 150, "usage": "\u8717\u58F3\u672B\u7AEF\u538B\u529B\u6307\u793A", "manufacturer": "\u7EA2\u65D7\u4EEA\u8868", "source_seq": 11, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u57CB\u5165\u96F6\u4EF6\u538B\u529B\u76D1\u6D4B" }, { "seq": "\u4E00.3.3", "name": "\u538B\u529B\u53D8\u9001\u5668", "model": "MPM480", "unit": "\u4E2A", "qty": 1, "unit_price": 2500, "total": 2500, "usage": "\u9876\u76D6\u538B\u529B\u76D1\u6D4B", "manufacturer": "\u4E2D\u7F8E\u9EA6\u514B", "source_seq": 12, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u57CB\u5165\u96F6\u4EF6\u538B\u529B\u76D1\u6D4B" }, { "seq": "\u4E00.3.4", "name": "\u538B\u529B\u8868", "model": "YTN-150", "unit": "\u4E2A", "qty": 1, "unit_price": 150, "total": 150, "usage": "\u9876\u76D6\u538B\u529B\u6307\u793A", "manufacturer": "\u7EA2\u65D7\u4EEA\u8868", "source_seq": 13, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u57CB\u5165\u96F6\u4EF6\u538B\u529B\u76D1\u6D4B" }, { "seq": "\u4E00.3.5", "name": "\u538B\u529B\u8868", "model": "YTN-150", "unit": "\u4E2A", "qty": 1, "unit_price": 150, "total": 150, "usage": "\u5C3E\u6C34\u7BA1\u538B\u529B\u6307\u793A", "manufacturer": "\u7EA2\u65D7\u4EEA\u8868", "source_seq": 14, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u57CB\u5165\u96F6\u4EF6\u538B\u529B\u76D1\u6D4B" }, { "seq": "\u4E00.3.6", "name": "\u538B\u529B\u53D8\u9001\u5668", "model": "MPM480", "unit": "\u4E2A", "qty": 1, "unit_price": 2500, "total": 2500, "usage": "\u5C3E\u6C34\u8FDB\u53E3\u538B\u529B\u76D1\u6D4B", "manufacturer": "\u4E2D\u7F8E\u9EA6\u514B", "source_seq": 15, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u57CB\u5165\u96F6\u4EF6\u538B\u529B\u76D1\u6D4B" }, { "seq": "\u4E00.3.7", "name": "\u538B\u529B\u8868", "model": "YTN-150", "unit": "\u4E2A", "qty": 1, "unit_price": 150, "total": 150, "usage": "\u5C3E\u6C34\u8FDB\u53E3\u538B\u529B\u6307\u793A", "manufacturer": "\u7EA2\u65D7\u4EEA\u8868", "source_seq": 16, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u57CB\u5165\u96F6\u4EF6\u538B\u529B\u76D1\u6D4B" }, { "seq": "\u4E00.3.8", "name": "\u538B\u529B\u53D8\u9001\u5668", "model": "MPM480", "unit": "\u4E2A", "qty": 1, "unit_price": 2500, "total": 2500, "usage": "\u5C3E\u6C34\u51FA\u53E3\u538B\u529B\u76D1\u6D4B", "manufacturer": "\u4E2D\u7F8E\u9EA6\u514B", "source_seq": 17, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u57CB\u5165\u96F6\u4EF6\u538B\u529B\u76D1\u6D4B" }, { "seq": "\u4E00.3.9", "name": "\u538B\u529B\u8868", "model": "YTN-150", "unit": "\u4E2A", "qty": 1, "unit_price": 150, "total": 150, "usage": "\u5C3E\u6C34\u51FA\u53E3\u538B\u529B\u6307\u793A", "manufacturer": "\u7EA2\u65D7\u4EEA\u8868", "source_seq": 18, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u57CB\u5165\u96F6\u4EF6\u538B\u529B\u76D1\u6D4B" }, { "seq": "\u4E00.4.1", "name": "\u538B\u529B\u8868", "model": "YTN-150", "unit": "\u4E2A", "qty": 2, "unit_price": 150, "total": 300, "usage": "\u6C34\u5BFC\u51B7\u5374\u6C34\u8FDB\u51FA\u6C34\u538B\u529B\u6307\u793A", "manufacturer": "\u7EA2\u65D7\u4EEA\u8868", "source_seq": 19, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u4E3B\u8F74\u5BC6\u5C01\u4E0E\u6C34\u5BFC\u51B7\u5374" }, { "seq": "\u4E00.4.2", "name": "\u7535\u78C1\u9600", "model": 5282, "unit": "\u4E2A", "qty": 1, "unit_price": 3500, "total": 3500, "usage": "\u5BC6\u5C01\u6C34\u901A\u65AD\u63A7\u5236", "manufacturer": "\u5FB7\u56FD\u5B9D\u5FB7", "source_seq": 20, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u4E3B\u8F74\u5BC6\u5C01\u4E0E\u6C34\u5BFC\u51B7\u5374" }, { "seq": "\u4E00.4.3", "name": "\u538B\u529B\u8868", "model": "YTN-150", "unit": "\u4E2A", "qty": 1, "unit_price": 150, "total": 150, "usage": "\u5BC6\u5C01\u6C34\u538B\u529B\u6307\u793A", "manufacturer": "\u7EA2\u65D7\u4EEA\u8868", "source_seq": 21, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u4E3B\u8F74\u5BC6\u5C01\u4E0E\u6C34\u5BFC\u51B7\u5374" }, { "seq": "\u4E00.4.4", "name": "\u538B\u529B\u5F00\u5173", "model": "YLK", "unit": "\u4E2A", "qty": 1, "unit_price": 1200, "total": 1200, "usage": "\u5BC6\u5C01\u6C34\u538B\u529B\u4FE1\u53F7", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 22, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u4E3B\u8F74\u5BC6\u5C01\u4E0E\u6C34\u5BFC\u51B7\u5374" }, { "seq": "\u4E00.4.5", "name": "\u70ED\u5BFC\u5F0F\u6D41\u91CF\u5F00\u5173", "model": "FCS-G1/2", "unit": "\u4E2A", "qty": 1, "unit_price": 3100, "total": 3100, "usage": "\u4E3B\u8F74\u5BC6\u5C01\u6C34\u7BA1\u8DEF", "manufacturer": "\u5FB7\u56FD\u56FE\u5C14\u514B", "source_seq": 23, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u4E3B\u8F74\u5BC6\u5C01\u4E0E\u6C34\u5BFC\u51B7\u5374" }, { "seq": "\u4E00.4.6", "name": "\u70ED\u5BFC\u5F0F\u6D41\u91CF\u5F00\u5173", "model": "FCS-G1/2", "unit": "\u4E2A", "qty": 1, "unit_price": 3100, "total": 3100, "usage": "\u5BFC\u8F74\u627F\u51B7\u5374\u6C34\u7BA1\u8DEF", "manufacturer": "\u5FB7\u56FD\u56FE\u5C14\u514B", "source_seq": 24, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u4E3B\u8F74\u5BC6\u5C01\u4E0E\u6C34\u5BFC\u51B7\u5374" }, { "seq": "\u4E00.5.1", "name": "\u6DB2\u4F4D\u4FE1\u53F7\u5668", "model": "ZWX", "unit": "\u4E2A", "qty": 1, "unit_price": 1e3, "total": 1e3, "usage": "\u6C34\u5BFC\u8F74\u627F\u6CB9\u69FD", "manufacturer": "\u5357\u5E73\u901A\u8FBE", "source_seq": 25, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6C34\u5BFC\u8F74\u627F\u4E0E\u6D4B\u6E29" }, { "seq": "\u4E00.5.2", "name": "\u6DB2\u4F4D\u53D8\u9001\u5668", "model": "MPM426", "unit": "\u4E2A", "qty": 1, "unit_price": 2500, "total": 2500, "usage": "\u6C34\u5BFC\u8F74\u627F\u6CB9\u69FD", "manufacturer": "\u4E2D\u7F8E\u9EA6\u514B", "source_seq": 26, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6C34\u5BFC\u8F74\u627F\u4E0E\u6D4B\u6E29" }, { "seq": "\u4E00.5.3", "name": "\u6CB9\u6DF7\u6C34\u4FE1\u53F7\u5668", "model": "YHX", "unit": "\u4E2A", "qty": 1, "unit_price": 5e3, "total": 5e3, "usage": "\u6C34\u5BFC\u6CB9\u69FD\u6CB9\u6DF7\u6C34\u76D1\u89C6", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 27, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6C34\u5BFC\u8F74\u627F\u4E0E\u6D4B\u6E29" }, { "seq": "\u4E00.5.4", "name": "\u6C34\u673A\u7AEF\u5B50\u7BB1", "model": null, "unit": "\u4E2A", "qty": 1, "unit_price": 3e3, "total": 3e3, "usage": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u5143\u4EF6\u6C47\u603B", "manufacturer": "\u4E1C\u98CE\u7535\u673A", "source_seq": 28, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6C34\u5BFC\u8F74\u627F\u4E0E\u6D4B\u6E29" }, { "seq": "\u4E00.5.5", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP2", "unit": "\u652F", "qty": 8, "unit_price": 150, "total": 1200, "usage": "\u6C34\u5BFC\u8F74\u74E6\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 29, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6C34\u5BFC\u8F74\u627F\u4E0E\u6D4B\u6E29" }, { "seq": "\u4E00.5.6", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP", "unit": "\u652F", "qty": 2, "unit_price": 150, "total": 300, "usage": "\u6C34\u5BFC\u6CB9\u69FD\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 30, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6C34\u5BFC\u8F74\u627F\u4E0E\u6D4B\u6E29" }, { "seq": "\u4E00.4.7", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP", "unit": "\u652F", "qty": 1, "unit_price": 150, "total": 150, "usage": "\u6C34\u5BFC\u51B7\u5374\u6C34\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 31, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u4E3B\u8F74\u5BC6\u5C01\u4E0E\u6C34\u5BFC\u51B7\u5374" }, { "seq": "\u4E00.5.7", "name": "\u6570\u5B57\u6E29\u5EA6\u6307\u793A\u4EEA", "model": "WP-C", "unit": "\u4E2A", "qty": 3, "unit_price": 1e3, "total": 3e3, "usage": "\u6C34\u5BFC\u74E6\u3001\u6CB9\u69FD\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 32, "auto_group": "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6C34\u5BFC\u8F74\u627F\u4E0E\u6D4B\u6E29" }, { "seq": "\u4E8C.1.1", "name": "\u6DB2\u4F4D\u4FE1\u53F7\u5668", "model": "ZWX", "unit": "\u4E2A", "qty": 1, "unit_price": 1e3, "total": 1e3, "usage": "\u4E0A\u5BFC\u6CB9\u69FD\u6DB2\u4F4D\u4FE1\u53F7", "manufacturer": "\u5357\u5E73\u901A\u8FBE", "source_seq": 1, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.2", "name": "\u6DB2\u4F4D\u53D8\u9001\u5668", "model": "MPM426", "unit": "\u4E2A", "qty": 1, "unit_price": 2500, "total": 2500, "usage": "\u4E0A\u5BFC\u6CB9\u69FD\u6DB2\u4F4D\u76D1\u89C6", "manufacturer": "\u4E2D\u7F8E\u9EA6\u514B", "source_seq": 2, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.3", "name": "\u6DB2\u4F4D\u4FE1\u53F7\u5668", "model": "ZWX", "unit": "\u4E2A", "qty": 1, "unit_price": 1e3, "total": 1e3, "usage": "\u4E0B\u5BFC\u6CB9\u69FD\u6DB2\u4F4D\u4FE1\u53F7", "manufacturer": "\u5357\u5E73\u901A\u8FBE", "source_seq": 3, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.4", "name": "\u6DB2\u4F4D\u53D8\u9001\u5668", "model": "MPM426", "unit": "\u4E2A", "qty": 1, "unit_price": 2500, "total": 2500, "usage": "\u4E0B\u5BFC\u6CB9\u69FD\u6DB2\u4F4D\u76D1\u89C6", "manufacturer": "\u4E2D\u7F8E\u9EA6\u514B", "source_seq": 4, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.5", "name": "\u6CB9\u6DF7\u6C34\u4FE1\u53F7\u5668", "model": "YHX", "unit": "\u4E2A", "qty": 1, "unit_price": 5e3, "total": 5e3, "usage": "\u4E0A\u5BFC\u6CB9\u6DF7\u6C34\u4FE1\u53F7", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 5, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.6", "name": "\u6CB9\u6DF7\u6C34\u4FE1\u53F7\u5668", "model": "YHX", "unit": "\u4E2A", "qty": 1, "unit_price": 5e3, "total": 5e3, "usage": "\u4E0B\u5BFC\u6CB9\u6DF7\u6C34\u4FE1\u53F7", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 6, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.7", "name": "\u70ED\u5BFC\u5F0F\u6D41\u91CF\u5F00\u5173", "model": "FCS-G1/2", "unit": "\u4E2A", "qty": 1, "unit_price": 3100, "total": 3100, "usage": "\u4E0A\u5BFC\u51B7\u5374\u6C34", "manufacturer": "\u5FB7\u56FD\u56FE\u5C14\u514B", "source_seq": 7, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.8", "name": "\u70ED\u5BFC\u5F0F\u6D41\u91CF\u5F00\u5173", "model": "FCS-G1/2", "unit": "\u4E2A", "qty": 1, "unit_price": 3100, "total": 3100, "usage": "\u4E0B\u5BFC\u51B7\u5374\u6C34", "manufacturer": "\u5FB7\u56FD\u56FE\u5C14\u514B", "source_seq": 8, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.2.1", "name": "\u70ED\u5BFC\u5F0F\u6D41\u91CF\u5F00\u5173", "model": "FCS-G1/2", "unit": "\u4E2A", "qty": 1, "unit_price": 3100, "total": 3100, "usage": "\u7A7A\u51B7\u5668\u51B7\u5374\u6C34", "manufacturer": "\u5FB7\u56FD\u56FE\u5C14\u514B", "source_seq": 9, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u51B7\u5374\u7CFB\u7EDF\u76D1\u6D4B" }, { "seq": "\u4E8C.1.9", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP2", "unit": "\u652F", "qty": 8, "unit_price": 150, "total": 1200, "usage": "\u4E0A\u5BFC\u8F74\u74E6\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 10, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.10", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP2", "unit": "\u652F", "qty": 8, "unit_price": 150, "total": 1200, "usage": "\u63A8\u529B\u8F74\u74E6\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 11, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.11", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP2", "unit": "\u652F", "qty": 8, "unit_price": 150, "total": 1200, "usage": "\u4E0B\u5BFC\u8F74\u74E6\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 12, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.12", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP2", "unit": "\u652F", "qty": 2, "unit_price": 150, "total": 300, "usage": "\u4E0A\u5BFC\u6CB9\u69FD\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 13, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.1.13", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP2", "unit": "\u652F", "qty": 2, "unit_price": 150, "total": 300, "usage": "\u4E0B\u5BFC\u6CB9\u69FD\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 14, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B" }, { "seq": "\u4E8C.2.2", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP2", "unit": "\u652F", "qty": 8, "unit_price": 150, "total": 1200, "usage": "\u7A7A\u51B7\u5668\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 15, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u51B7\u5374\u7CFB\u7EDF\u76D1\u6D4B" }, { "seq": "\u4E8C.2.3", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP2", "unit": "\u652F", "qty": 3, "unit_price": 150, "total": 450, "usage": "\u53D1\u673A\u51B7\u5374\u6C34\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 16, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u51B7\u5374\u7CFB\u7EDF\u76D1\u6D4B" }, { "seq": "\u4E8C.3.1", "name": "\u6D4B\u6E29\u7535\u963B", "model": "WZP2", "unit": "\u652F", "qty": 30, "unit_price": 150, "total": 4500, "usage": "\u5B9A\u5B50\u6E29\u5EA6\u76D1\u6D4B", "manufacturer": "\u6E05\u51C9\u4EEA\u8868", "source_seq": 17, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6D4B\u6E29\u7CFB\u7EDF" }, { "seq": "\u4E8C.3.2", "name": "\u6570\u5B57\u6E29\u5EA6\u6307\u793A\u4EEA", "model": "WP-C", "unit": "\u4E2A", "qty": 12, "unit_price": 1e3, "total": 12e3, "usage": "\u53D1\u7535\u673A\u6E29\u5EA6\u62A5\u8B66\u4FE1\u53F7", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 18, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6D4B\u6E29\u7CFB\u7EDF" }, { "seq": "\u4E8C.4.1", "name": "\u538B\u529B\u8868", "model": "YTN-150", "unit": "\u4E2A", "qty": 13, "unit_price": 150, "total": 1950, "usage": "\u53D1\u7535\u673A\u51B7\u6C34\u538B\u529B\u6307\u793A", "manufacturer": "\u7EA2\u65D7\u4EEA\u8868", "source_seq": 19, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u5176\u4ED6\u81EA\u52A8\u5316\u5143\u4EF6" }, { "seq": "\u4E8C.2.4", "name": "\u538B\u529B\u53D8\u9001\u5668", "model": "MPM480", "unit": "\u4E2A", "qty": 1, "unit_price": 2500, "total": 2500, "usage": "\u603B\u51B7\u5374\u6C34\u538B\u529B\u76D1\u6D4B", "manufacturer": "\u4E2D\u7F8E\u9EA6\u514B", "source_seq": 20, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u51B7\u5374\u7CFB\u7EDF\u76D1\u6D4B" }, { "seq": "\u4E8C.5.1", "name": "\u9F7F\u76D8\u6D4B\u901F\u88C5\u7F6E", "model": "ZKZ-3", "unit": "\u5957", "qty": 1, "unit_price": 11500, "total": 11500, "usage": "\u9F7F\u76D8\u6D4B\u901F", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 21, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u8F6C\u901F\u76D1\u6D4B" }, { "seq": "\u4E8C.6.1", "name": "\u706B\u707E\u62A5\u8B66\u88C5\u7F6E", "model": "JB-QB/LD128EN(M)", "unit": "\u5957", "qty": 1, "unit_price": 7e3, "total": 7e3, "usage": "\u706B\u8B66\u4FE1\u53F7", "manufacturer": "\u5317\u4EAC\u5229\u8FBE", "source_seq": 22, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6D88\u9632\u62A5\u8B66" }, { "seq": "\u4E8C.7.1", "name": "\u884C\u7A0B\u5F00\u5173", "model": "ZCK", "unit": "\u4E2A", "qty": 8, "unit_price": 200, "total": 1600, "usage": "\u5236\u52A8\u5668\u884C\u7A0B\u4FE1\u53F7", "manufacturer": "\u65BD\u8010\u5FB7", "source_seq": 23, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u5236\u52A8\u7CFB\u7EDF" }, { "seq": "\u4E8C.7.2", "name": "\u96C6\u6210\u7EC4\u5408\u9600", "model": "JZF-1/2", "unit": "\u4E2A", "qty": 1, "unit_price": 15e3, "total": 15e3, "usage": "\u5236\u52A8\u6295\u5165\u5207\u9664\u63A7\u5236", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 24, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u5236\u52A8\u7CFB\u7EDF" }, { "seq": "\u4E8C.7.3", "name": "\u538B\u529B\u8868", "model": "YTN-150", "unit": "\u4E2A", "qty": 3, "unit_price": 150, "total": 450, "usage": "\u5236\u52A8\u7CFB\u7EDF\u538B\u529B\u6307\u793A", "manufacturer": "\u7EA2\u65D7\u4EEA\u8868", "source_seq": 25, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u5236\u52A8\u7CFB\u7EDF" }, { "seq": "\u4E8C.7.4", "name": "\u538B\u529B\u5F00\u5173", "model": "YLK", "unit": "\u4E2A", "qty": 3, "unit_price": 1200, "total": 3600, "usage": "\u5236\u52A8\u7CFB\u7EDF\u538B\u529B\u4FE1\u53F7", "manufacturer": "\u897F\u5B89\u6C5F\u6CB3", "source_seq": 26, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u5236\u52A8\u7CFB\u7EDF" }, { "seq": "\u4E8C.8.1", "name": "\u53D1\u7535\u673A\u7AEF\u5B50\u7BB1", "model": null, "unit": "\u9762", "qty": 1, "unit_price": 3500, "total": 3500, "usage": null, "manufacturer": "\u4E1C\u98CE\u7535\u673A", "source_seq": 27, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u7AEF\u5B50\u7BB1\u4E0E\u63A7\u5236\u67DC" }, { "seq": "\u4E8C.3.3", "name": "\u6D4B\u6E29\u5236\u52A8\u67DC", "model": "\u542B\u6E29\u5EA6\u5DE1\u68C0\u4EEA", "unit": "\u9762", "qty": 1, "unit_price": 25e3, "total": 25e3, "usage": "\u6D4B\u6E29\u5236\u52A8\u63A7\u5236", "manufacturer": "\u4E1C\u98CE\u7535\u673A", "source_seq": 28, "auto_group": "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "auto_subgroup": "\u6D4B\u6E29\u7CFB\u7EDF" }], "monitoring": [{ "seq": "1", "function": "\u53D1\u7535\u673A\u4E0A\u673A\u67B6\u6C34\u5E73\u632F\u52A8", "name": "\u4F4E\u9891\u6C34\u5E73\u632F\u52A8\u4F20\u611F\u5668", "model": "VRS-9", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2400, "total": 14400, "remark": null, "source_seq": 1 }, { "seq": "2", "function": "\u53D1\u7535\u673A\u4E0A\u673A\u67B6\u5782\u76F4\u632F\u52A8", "name": "\u4F4E\u9891\u5782\u76F4\u632F\u52A8\u4F20\u611F\u5668", "model": "VRS-9", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2400, "total": 14400, "remark": null, "source_seq": 2 }, { "seq": "3", "function": "\u53D1\u7535\u673A\u4E0B\u673A\u67B6\u6C34\u5E73\u632F\u52A8", "name": "\u4F4E\u9891\u6C34\u5E73\u632F\u52A8\u4F20\u611F\u5668", "model": "VRS-9", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2400, "total": 14400, "remark": null, "source_seq": 3 }, { "seq": "4", "function": "\u53D1\u7535\u673A\u4E0B\u673A\u67B6\u5782\u76F4\u632F\u52A8", "name": "\u4F4E\u9891\u5782\u76F4\u632F\u52A8\u4F20\u611F\u5668", "model": "VRS-9", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2400, "total": 14400, "remark": null, "source_seq": 4 }, { "seq": "5", "function": "\u5B9A\u5B50\u6C34\u5E73\u632F\u52A8", "name": "\u4F4E\u9891\u6C34\u5E73\u632F\u52A8\u4F20\u611F\u5668", "model": "VRS-9", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2400, "total": 14400, "remark": null, "source_seq": 5 }, { "seq": "6", "function": "\u5B9A\u5B50\u673A\u5EA7\u6C34\u5E73\u632F\u52A8", "name": "\u4F4E\u9891\u6C34\u5E73\u632F\u52A8\u4F20\u611F\u5668", "model": "VRS-9", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2400, "total": 14400, "remark": null, "source_seq": 6 }, { "seq": "7", "function": "\u5B9A\u5B50\u94C1\u82AF\u6C34\u5E73\u632F\u52A8", "name": "\u4F4E\u9891\u5782\u76F4\u632F\u52A8\u4F20\u611F\u5668", "model": "VRS-9", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2400, "total": 14400, "remark": null, "source_seq": 7 }, { "seq": "8", "function": "\u5B9A\u5B50\u94C1\u82AF\u5782\u76F4\u632F\u52A8", "name": "\u4F4E\u9891\u5782\u76F4\u632F\u52A8\u4F20\u611F\u5668", "model": "VRS-9", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2400, "total": 14400, "remark": null, "source_seq": 8 }, { "seq": "9", "function": "\u9876\u76D6\u6C34\u5E73\u632F\u52A8", "name": "\u4F4E\u9891\u6C34\u5E73\u632F\u52A8\u4F20\u611F\u5668", "model": "VRS-9", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2400, "total": 14400, "remark": null, "source_seq": 9 }, { "seq": "10", "function": "\u9876\u76D6\u5782\u76F4\u632F\u52A8", "name": "\u4F4E\u9891\u5782\u76F4\u632F\u52A8\u4F20\u611F\u5668", "model": "VRS-9", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2400, "total": 14400, "remark": null, "source_seq": 10 }, { "seq": "11", "function": "\u63A8\u529B\u3001\u4E0A\u5BFC\u8F74\u627F\u5927\u8F74X/Y\u6446\u5EA6", "name": "\u7535\u6DA1\u6D41\u4F4D\u79FB\u4F20\u611F\u5668", "model": "VRS330", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2600, "total": 15600, "remark": null, "source_seq": 11 }, { "seq": "12", "function": "\u4E0B\u5BFC\u8F74\u627F\u5927\u8F74X/Y\u6446\u5EA6", "name": "\u7535\u6DA1\u6D41\u4F4D\u79FB\u4F20\u611F\u5668", "model": "VRS330", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2600, "total": 15600, "remark": null, "source_seq": 12 }, { "seq": "13", "function": "\u6C34\u5BFC\u8F74\u627F\u5927\u8F74X/Y\u6446\u5EA6", "name": "    \u7535\u6DA1\u6D41\u4F4D\u79FB\u4F20\u611F\u5668", "model": "VRS330", "unit": "\u4E2A", "qty": "3\xD72", "unit_price": 2600, "total": 15600, "remark": null, "source_seq": 13 }, { "seq": "14", "function": "\u952E\u76F8", "name": "\u7535\u6DA1\u6D41\u4F4D\u79FB\u4F20\u611F\u5668", "model": "VRS330", "unit": "\u4E2A", "qty": "3\xD71", "unit_price": 2600, "total": 7800, "remark": null, "source_seq": 14 }, { "seq": "15", "function": "\u6C14\u9699\u76D1\u6D4B", "name": "\u5E73\u677F\u7535\u5BB9\u5F0F\u4F20\u611F\u5668", "model": "Sensonics  CS-5", "unit": "\u5957", "qty": "3\xD71", "unit_price": 96e3, "total": 288e3, "remark": null, "source_seq": 15 }, { "seq": "16", "function": "\u5C40\u653E\u76D1\u6D4B", "name": "\u8026\u5408\u4F20\u611F\u5668\u53CA\u76D1\u6D4B\u4EEA", "model": "PD-MIMS", "unit": "\u5957", "qty": "3\xD71", "unit_price": 396e3, "total": 1188e3, "remark": null, "source_seq": 16 }, { "seq": "17", "function": "\u6570\u636E\u91C7\u96C6\u7AD9", "name": "\u673A\u7EC4\u632F\u52A8\u3001\u6446\u5EA6\u3001\u6570\u636E\u6536\u96C6\u3001\u5206\u6790\u88C5\u7F6E", "model": "VRS8000\u673A\u7EC4\u632F\u52A8\u3001\u6446\u5EA6\u3001\u6C14\u9699\u3001", "unit": "\u5957", "qty": "3\xD71", "unit_price": 85e3, "total": 255e3, "remark": null, "source_seq": 17 }, { "seq": "18", "function": "\u673A\u7EC4\u632F\u52A8\u6446\u5EA6\u663E\u793A\u3001\u63A7\u5236", "name": "\u6DB2\u6676\u89E6\u6478\u5C4F", "model": "TFT\uFF0C15\u5BF8\uFF0C\u5206\u8FA8\u7387\uFF1A800X600", "unit": "\u5757", "qty": "3\xD71", "unit_price": 2500, "total": 7500, "remark": null, "source_seq": 18 }, { "seq": "19", "function": null, "name": "\u4EA4\u6362\u673A", "model": null, "unit": "\u53F0", "qty": "3\xD71", "unit_price": 1200, "total": 3600, "remark": null, "source_seq": 19 }, { "seq": "20", "function": null, "name": "\u5C4F\u853D\u7EBF\u7F06", "model": null, "unit": "\u5957", "qty": "3\xD71", "unit_price": 1e4, "total": 3e4, "remark": null, "source_seq": 20 }, { "seq": "21", "function": null, "name": "\u5B89\u88C5\u652F\u67B6\u6216\u5E95\u5EA7", "model": null, "unit": "\u5957", "qty": "3\xD71", "unit_price": 1e3, "total": 3e3, "remark": null, "source_seq": 21 }, { "seq": "22", "function": null, "name": "\u8F6F\u4EF6", "model": null, "unit": "\u5957", "qty": 1, "unit_price": 15e3, "total": 15e3, "remark": null, "source_seq": 22 }, { "seq": "23", "function": "\u5404\u632F\u6446\u76D1\u6D4B\u4E8C\u6B21\u5143\u4EF6\u88C5\u4E8E\u67DC\u5185", "name": "\u632F\u6446\u76D1\u6D4B\u67DC", "model": "\u5C3A\u5BF8\uFF1A2260\xD7800\xD7600", "unit": "\u9762", "qty": "3\xD71", "unit_price": 1e4, "total": 3e4, "remark": null, "source_seq": 23 }], "liaison": [{ "seq": 1, "name": "\u7B2C\u4E00\u6B21", "location": "\u4E1C\u98CE\u7535\u673A", "person_days": null, "unit_price": 3177.8, "total": 28600, "remark": "\u4E1A\u4E3B\u65B94\u4EBA\u8BBE\u8BA1\u96624\u4EBA" }, { "seq": 2, "name": "\u7B2C\u4E8C\u6B21", "location": "\u4E1C\u98CE\u7535\u673A", "person_days": null, "unit_price": 3177.8, "total": 28600, "remark": "\u4E1A\u4E3B\u65B94\u4EBA\u8BBE\u8BA1\u96624\u4EBA" }, { "seq": 3, "name": "\u6A21\u578B\u8D44\u6599\u9A8C\u6536", "location": "\u4E1C\u98CE\u7535\u673A", "person_days": null, "unit_price": 0, "total": 0, "remark": "\u4E0E\u4E00\u8054\u4F1A\u540C\u65F6\u8FDB\u884C" }, { "seq": "\u4EBA\u5458", "name": "\u65F6\u95F4\uFF08\u5929\uFF09", "location": "\u6BCF\u4EBA\u65E5", "person_days": null, "unit_price": null, "total": 100, "remark": "" }, { "seq": 10, "name": "14", "location": "", "person_days": 0, "unit_price": null, "total": 100, "remark": "" }, { "seq": 10, "name": "14", "location": "", "person_days": 0, "unit_price": null, "total": 2e3, "remark": "" }, { "seq": "\u4EBA\u5458", "name": "\u65F6\u95F4\uFF08\u5929\uFF09", "location": "\u6BCF\u4EBA\u65E5", "person_days": null, "unit_price": null, "total": null, "remark": "" }, { "seq": 5, "name": "3*2\u6B21\uFF08\u6C34\uFF09", "location": "500", "person_days": 15e3, "unit_price": null, "total": 15e3, "remark": "\u4E1A\u4E3B\u65B9\u4EBA\u5458" }, { "seq": 5, "name": "5*1\u6B21\uFF08\u6C34\uFF09", "location": "500", "person_days": 12500, "unit_price": null, "total": 12500, "remark": "\u4E1A\u4E3B\u65B9\u4EBA\u5458" }, { "seq": 5, "name": "8*1\u6B21\uFF08\u53D1\uFF09", "location": "500", "person_days": 2e4, "unit_price": null, "total": 2e4, "remark": "\u4E1A\u4E3B\u65B9\u4EBA\u5458" }, { "seq": 5, "name": "1*2\u6B21\uFF08\u96001\uFF09", "location": "500", "person_days": 5e3, "unit_price": null, "total": 5e3, "remark": "\u4E1A\u4E3B\u65B9\u4EBA\u5458" }, { "seq": 5, "name": "1*2\u6B21\uFF08\u96002\uFF09", "location": "500", "person_days": 5e3, "unit_price": null, "total": 5e3, "remark": "\u4E1A\u4E3B\u65B9\u4EBA\u5458" }, { "seq": "\u5DE5\u7A0B\u5E08", "name": "\u65F6\u95F4\uFF08\u5929\uFF09", "location": "\u6BCF\u4EBA\u65E5", "person_days": null, "unit_price": null, "total": null, "remark": "" }, { "seq": 1, "name": "150", "location": "400", "person_days": null, "unit_price": null, "total": 6e4, "remark": "\u6C34\u673A\u5B89\u88C5\u6307\u5BFC" }, { "seq": 2, "name": "330", "location": "400", "person_days": null, "unit_price": null, "total": 132e3, "remark": "\u53D1\u673A\u5B89\u88C5\u6307\u5BFC" }, { "seq": 3, "name": "90", "location": "400", "person_days": null, "unit_price": null, "total": 36e3, "remark": "\u673A\u7EC4\u8C03\u8BD5" }], "agency_tiers": [{ "lower": 0, "upper": 100, "rate": 0.015, "desc": "100\u4E07\u4EE5\u4E0B" }, { "lower": 100, "upper": 500, "rate": 0.011, "desc": "100-500\u4E07" }, { "lower": 500, "upper": 1e3, "rate": 8e-3, "desc": "500-1000\u4E07" }, { "lower": 1e3, "upper": 5e3, "rate": 5e-3, "desc": "1000-5000\u4E07" }, { "lower": 5e3, "upper": 1e4, "rate": 25e-4, "desc": "5000\u4E07-1\u4EBF" }, { "lower": 1e4, "upper": 1e5, "rate": 5e-4, "desc": "1\u4EBF-10\u4EBF" }, { "lower": 1e5, "upper": 1e6, "rate": 1e-4, "desc": "10\u4EBF\u4EE5\u4E0A" }], "sub_categories": [{ "category": "\u7EDD\u7F18\u6750\u6599", "is_std": false }, { "category": "\u666E\u901A\u94A2\u677F", "is_std": false }, { "category": "\u4E0D\u9508\u94A2\u677F", "is_std": false }, { "category": "\u953B\u94A2", "is_std": false }, { "category": "\u666E\u901A\u94F8\u94A2", "is_std": false }, { "category": "\u4E0D\u9508\u94A2\u94F8\u94A2", "is_std": false }, { "category": "\u578B\u94A2\\\u578B\u6750", "is_std": false }, { "category": "\u94DC\u6750", "is_std": false }, { "category": "\u5176\u5B83", "is_std": false }, { "category": "\u6210\u54C1\u8F6C\u8F6E\\\u6210\u54C1\u5BFC\u53F6", "is_std": true }, { "category": "\u6210\u54C1\u77FD\u94A2\u7247", "is_std": true }, { "category": "\u8F74\u74E6", "is_std": true }, { "category": "\u8F74\u5957\\\u8F74\u627F", "is_std": true }, { "category": "\u5BC6\u5C01\u5708", "is_std": true }, { "category": "\u63A5\u529B\u5668", "is_std": true }, { "category": "\u9600\u95E8\u7C7B", "is_std": true }, { "category": "\u63A5\u5934\\\u4E09\u901A", "is_std": true }, { "category": "\u7BA1\u6750", "is_std": false }, { "category": "\u7535\u7F06", "is_std": true }, { "category": "\u8BD5\u538B\u6CF5", "is_std": true }, { "category": "\u7535\u52A0\u70ED\u5668/\u9664\u6E7F\u673A", "is_std": true }, { "category": "\u4E92\u611F\u5668\\\u63A5\u5730\u88C5\u7F6E", "is_std": true }, { "category": "\u7A7A\u6C14\u51B7\u5374\u5668", "is_std": true }, { "category": "\u5236\u52A8\u5668", "is_std": true }, { "category": "\u6D4B\u6E29\u5143\u4EF6", "is_std": true }, { "category": "\u55B7\u6D82/\u55B7\u7802/\u5F39\u6027\u5C42", "is_std": true }, { "category": "\u9664\u5C18\u88C5\u7F6E", "is_std": true }, { "category": "\u5438\u6392\u6CB9\u96FE\u88C5\u7F6E", "is_std": true }, { "category": "\u7535\u5237\u5237\u63E1", "is_std": true }, { "category": "\u6DA6\u6ED1\u6CB9", "is_std": true }, { "category": "\u789F\u5F62\u5F39\u7C27", "is_std": true }, { "category": "\u7A7A\u6C14\u56F4\u5E26\\\u5BC6\u5C01\u73AF", "is_std": true }, { "category": "\u6DB2\u538B\u62C9\u4F38\u5668", "is_std": true }, { "category": "\u8F74\u6D41\u98CE\u673A", "is_std": true }, { "category": "\u6EE4\u6C34\u5668", "is_std": true }] };
  ["automation", "liaison"].forEach(function(k) {
    DATA2[k] = (DATA2[k] || []).filter(function(row) {
      return row.seq !== "\u5E8F\u53F7" && row.seq !== "\u4EBA\u5458" && row.seq !== "\u5DE5\u7A0B\u5E08";
    });
  });
  var UNIT_WORDS = ["\u5957", "\u53F0\u5957", "\u53F0", "\u4E2A", "\u4EF6", "\u7EC4", "\u628A", "\u652F", "\u5BF9", "\u5757", "\u7247", "\u526F", "\u6279", "\u6B21", "\u6839", "\u6761", "\u8282", "\u6BB5", "\u5957\u4EF6"];
  function splitQtyUnit(qtyVal, unitVal) {
    if (qtyVal === null || qtyVal === void 0) return { qty: qtyVal, unit: unitVal };
    const s = String(qtyVal).trim();
    if (!isNaN(parseFloat(s)) && isFinite(s)) return { qty: qtyVal, unit: unitVal };
    for (const u of UNIT_WORDS) {
      const re = new RegExp("^([\\d\\./\u5404\\*\xD7xX]+)\\s*" + u + "$");
      const m = s.match(re);
      if (m) {
        const numPart = m[1].trim();
        const num = parseFloat(numPart);
        return { qty: isNaN(num) ? numPart : num, unit: u };
      }
    }
    for (const u of UNIT_WORDS) {
      if (s.endsWith(u) && s.length > u.length) {
        const numPart = s.slice(0, s.length - u.length).trim();
        const num = parseFloat(numPart);
        return { qty: isNaN(num) ? numPart : num, unit: unitVal || u };
      }
    }
    return { qty: qtyVal, unit: unitVal };
  }
  ["water_parts", "gen_parts", "valve_parts", "water_tools", "gen_tools", "valve_tools"].forEach(function(k) {
    (DATA2[k] || []).forEach(function(row) {
      const result = splitQtyUnit(row.qty, row.unit);
      row.qty = result.qty;
      if (!row.unit && result.unit) row.unit = result.unit;
    });
  });
  (function deduplicateSeqs() {
    var tables = [
      "water",
      "gen",
      "valve",
      "valve_door",
      "water_parts",
      "gen_parts",
      "valve_parts",
      "water_tools",
      "gen_tools",
      "valve_tools"
    ];
    tables.forEach(function(key) {
      var seen = {};
      (DATA2[key] || []).forEach(function(row) {
        if (row.seq === null || row.seq === void 0 || row.seq === "") return;
        var s = String(row.seq);
        if (seen[s]) {
          var base = s, n = 1;
          while (seen[s]) {
            s = base + "_" + n++;
          }
          row.seq = s;
        }
        seen[s] = true;
      });
    });
  })();
  var MATERIAL_PRICE_DB2 = /* @__PURE__ */ new Map([
    ["Q235\\4-8", { p: 0.39, u: 0.7 }],
    ["Q235\\10-50", { p: 0.4, u: 0.7 }],
    ["Q235\\50-90", { p: 0.42, u: 0.7 }],
    ["Q235\\90", { p: 0.48, u: 0.7 }],
    ["Q235\\2\\\u5377\u677F", { p: 0.42, u: 0.6 }],
    ["WDER550\\2-3", { p: 1.4, u: "\u624B\u8F93" }],
    ["WDER345\\3", { p: 1.4, u: "\u624B\u8F93" }],
    ["\u706F\u6CE1\u8D2F\\65W800", { p: 1.6, u: "\u624B\u8F93" }],
    ["\u590D\u5408\u677F0Cr18Ni9/Q235/2/18", { p: 1.2, u: 0.7 }],
    ["Q345\\4-8", { p: 0.405, u: 0.7 }],
    ["Q345\\10-50", { p: 0.415, u: 0.7 }],
    ["Q345\\50-90", { p: 0.435, u: 0.7 }],
    ["Q345\\90", { p: 0.495, u: 0.7 }],
    ["Q345\\2\\\u5377\u677F", { p: 0.435, u: 0.7 }],
    ["0Cr18Ni9\\8", { p: 1.85, u: 0.7 }],
    ["0Cr18Ni9\\16", { p: 1.85, u: 0.7 }],
    ["0Cr18Ni9\\30-50", { p: 1.95, u: 0.7 }],
    ["50W310", { p: 1.65, u: "\u624B\u8F93" }],
    ["50W290", { p: 1.75, u: "\u624B\u8F93" }],
    ["50W270", { p: 1.85, u: "\u624B\u8F93" }],
    ["Q345\\2-3", { p: 1.15, u: "\u624B\u8F93" }],
    ["Q235\\2-3", { p: 1.13, u: "\u624B\u8F93" }],
    ["\u673A\u5EA7\u58C1", { p: 1.2, u: 0.9 }],
    ["\u78C1\u8F6D\u5708", { p: 1.36, u: 0.9 }],
    ["\u5706\u94A2\\Q235\\20", { p: 0.41, u: 0.8 }],
    ["\u94A2\u7BA1\\20#\\80*10", { p: 0.5, u: 0.8 }],
    ["\u89D2\u94A2\\Q235\\80*80*8", { p: 0.41, u: 0.8 }],
    ["\u5DE5\u5B57\u94A2\\Q235\\200*100*7", { p: 0.41, u: 0.8 }],
    ["\u65E0\u7F1D\u94A2\u7BA1\\\u5E38\u7528\u89C4\u683C", { p: 0.52, u: 0.8 }],
    ["\u51B7\u62C9\u5706\u94A2\\35CrMo\\\u03C645\\\u9000\u706B", { p: 0.63, u: 0.8 }],
    ["\u51B7\u62C9\u5706\u94A2\\35CrMo\\\u03C636\\\u9000\u706B", { p: 0.6, u: 0.8 }],
    ["\u8F6C\u8F6E\u4E0A\u51A0\\ZG06Cr13Ni4Mo\\\u7C97\u52A0\u5DE5\u63A2\u4F24", { p: 5.8, u: 1 }],
    ["\u8F6C\u8F6E\u4E0B\u73AF\\ZG06Cr13Ni4Mo\\\u7C97\u52A0\u5DE5\u63A2\u4F24", { p: 6.1, u: 1 }],
    ["\u6DF7\u6D41\u8F6C\u8F6E\u53F6\u7247\\ZG06Cr13Ni4Mo\\\u6210\u54C1", { p: 8.5, u: "\u624B\u8F93" }],
    ["\u6DF7\u6D41\u8F6C\u8F6E\u53F6\u7247\\ZG06Cr13Ni4Mo\\\u6BDB\u576F", { p: 5.3, u: 1 }],
    ["\u8F74\u3001\u8D2F\u6D41\u8F6C\u8F6E\u53F6\u7247\\ZG06Cr13Ni4Mo\\\u6210\u54C1", { p: 7.1, u: "\u624B\u8F93" }],
    ["\u8F74\u3001\u8D2F\u6D41\u8F6C\u8F6E\u53F6\u7247\\ZG06Cr13Ni4Mo\\\u6BDB\u576F", { p: 5.8, u: 1 }],
    ["HL\u8F6C\u8F6E\\ZG06Cr13Ni4Mo\\\u6210\u54C1", { p: 15, u: "\u624B\u8F93" }],
    ["CJ\u8F6C\u8F6E\\ZG06Cr13Ni4Mo\\\u6210\u54C1", { p: 18, u: "\u624B\u8F93" }],
    ["\u5BFC\u53F6\\ZG06Cr13Ni4Mo\\\u6210\u54C1", { p: 8, u: "\u624B\u8F93" }],
    ["\u5BFC\u53F6\\ZG06Cr13Ni4Mo\\\u6BDB\u576F", { p: 6.5, u: 1 }],
    ["\u5BFC\u53F6\\ZG270-500\\\u6BDB\u576F", { p: 1.8, u: 1 }],
    ["\u5BFC\u53F6\\ZG270-500\\ZG20SiMn\\\u6210\u54C1", { p: 2.85, u: 1 }],
    ["\u590D\u6742\u5927\u578B\u94F8\u4EF6\\\u8F6C\u8F6E\u4F53\\\u9600\u4F53\\\u6D3B\u95E8\\\u5E95\u73AF\\\u55B7\u5634\\ZG230-450\\ZG20SiMn", { p: 1.875, u: 1 }],
    ["\u4E00\u822C\u5927\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", { p: 1.6, u: 1 }],
    ["\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG230-450\\ZG20SiMn", { p: 1.4, u: 1 }],
    ["\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6\\ZG35CrMo", { p: 1, u: 1 }],
    ["ZG06Cr13Ni4Mo\\\u55B7\u5634", { p: 6, u: 1 }],
    ["\u6C34\u673A\u4E3B\u8F74\u953B\u4EF6\\3-10\\\u953B20SiMn\\\u953B45\\\u7C97\u52A0\u5DE5\u63A2\u4F24", { p: 1.65, u: 0.8 }],
    ["\u7535\u673A\u4E3B\u8F74\u953B\u4EF6\\3-10\\\u953B20SiMn\\\u953B45\\\u7C97\u52A0\u5DE5\u63A2\u4F24", { p: 1.45, u: 0.8 }],
    ["\u4E3B\u8F74\u953B\u4EF6\\10-30\\\u953B20SiMn\\\u7C97\u52A0\u5DE5\u63A2\u4F24", { p: 1.6, u: 0.8 }],
    ["\u4E3B\u8F74\u953B\u4EF6\\>30\\\u953B20SiMn\\\u7C97\u52A0\u5DE5\u63A2\u4F24", { p: 2.6, u: 0.8 }],
    ["\u955C\u677F\u3001\u63A8\u529B\u5934\u953B\u4EF6\\\u953B20SiMn\\\u953B45\\\u7C97\u52A0\u5DE5\u63A2\u4F24", { p: 1.78, u: 0.8 }],
    ["\u5C0F\u953B\u4EF6\\0.5-3\\\u7C97\u52A0\u5DE5\u63A2\u4F24", { p: 1.55, u: 0.8 }],
    ["\u5C0F\u953B\u4EF6\\<0.5\\\u953B45\\\u953B20\\\u6BDB\u576F", { p: 1, u: 0.8 }],
    ["\u953B35CrMoA\u3001\u953BQ345\\\u6BDB\u576F", { p: 1.08, u: 0.8 }],
    ["\u953B34CrNi3Mo\\\u6BDB\u576F", { p: 1.78, u: 0.8 }],
    ["\u953B1Cr13\\2Cr13", { p: 1.85, u: 0.8 }],
    ["\u953B06Cr16Ni5Mo", { p: 8, u: 0.8 }],
    ["\u4E91\u6BCD\u5E26\\5440-1K\\0.14\xD725", { p: 6.75, u: 0.98 }],
    ["\u4E91\u6BCD\u5E26\\DF73291S\\0.14(0.13)\xD725", { p: 13.5, u: 0.98 }],
    ["\u805A\u916F\u82B3\u9170\u80FA\u590D\u5408\u6750\u6599\uFF08F\u7EA7\\NMN\uFF09\\6640\\0.25", { p: 13.5, u: 0.98 }],
    ["NHN\u590D\u5408\u6750\u6599\uFF08H\u7EA7\uFF09\\6650\\0.2", { p: 33, u: 0.98 }],
    ["\u73BB\u7483\u576F\u5E03\\D241\\0.14(241\\0.14)", { p: 5, u: 0.98 }],
    ["\u73BB\u5E03\u677F\\3240\\0.4-0.5", { p: 4, u: 0.95 }],
    ["\u73BB\u5E03\u677F\\3240\\1-1.5", { p: 3.2, u: 0.95 }],
    ["\u73BB\u5E03\u677F\\3240\\\u22652", { p: 2.8, u: 0.95 }],
    ["\u9AD8\u5F3A\u5EA6\u73BB\u5E03\u677F\\3248\\0.5", { p: 5, u: 0.95 }],
    ["\u9AD8\u5F3A\u5EA6\u73BB\u5E03\u677F\\3248\\1-2", { p: 4.8, u: 0.95 }],
    ["\u9AD8\u5F3A\u5EA6\u73BB\u5E03\u677F\\3248\\\u22653", { p: 4.8, u: 0.95 }],
    ["\u9632\u7535\u6655\u677F\\3241\\0.3", { p: 4.9, u: 0.95 }],
    ["\u9632\u7535\u6655\u677F\\3241\\0.5", { p: 4.8, u: 0.95 }],
    ["\u9632\u7535\u6655\u677F\\3241\\1-5", { p: 4.4, u: 0.95 }],
    ["\u9AD8\u963B\u5E26\\TJ2641-1V/0.18*25", { p: 9.8, u: 0.98 }],
    ["\u4F4E\u963B\u5E26\\TJ2641-2V/0.08*25", { p: 14.2, u: 0.98 }],
    ["\u4F4E\u963B\u5E03\\2641-2\\0.08\\m\xB3", { p: 3e-3, u: 1 }],
    ["F\u7EA7\u65E0\u7EAC\u5E26\\2841\\0.3*25\\km", { p: 0.047, u: 1 }],
    ["\u65E0\u7EAC\u5E26\\2841-W\\0.3*25\\km", { p: 0.053, u: 1 }],
    ["\u65E0\u7EAC\u5E26\\2850\\0.2*2\\km", { p: 0.07, u: 1 }],
    ["\u6DA4\u7EB6\u6536\u7F29\u5E26\\0.22*25\\km", { p: 0.01, u: 1 }],
    ["TMR\\\u975E\u5B9A\u5C3A", { p: 8.6675, u: 0.95 }],
    ["TMR\\\u5B9A\u5C3A", { p: 8.7675, u: 0.95 }],
    ["\u5F02\u578B\u94DC\u6392\\\u975E\u5B9A\u5C3A", { p: 8.9175, u: 0.95 }],
    ["\u5F02\u578B\u94DC\u6392\\\u5B9A\u5C3A", { p: 8.9375, u: 0.95 }],
    ["\u542B\u94F6\u94DC\u7EBF\\\u975E\u5B9A\u5C3A", { p: 9.1675, u: 0.95 }],
    ["\u542B\u94F6\u94DC\u7EBF\\\u5B9A\u5C3A", { p: 9.2175, u: 0.95 }],
    ["\u94DC\u68D2\u3001\u963B\u5C3C\u73AF\u6761", { p: 8.7675, u: 0.95 }],
    ["SBEB\\DSBEB\\\u975E\u5B9A\u5C3A", { p: 8.7525, u: 0.95 }],
    ["SBEB\\DSBEB\\\u5B9A\u5C3A", { p: 8.8725, u: 0.95 }],
    ["SBEQB\\\u975E\u5B9A\u5C3A", { p: 8.9925, u: 0.95 }],
    ["SBEQB\\\u5B9A\u5C3A", { p: 9.1425, u: 0.95 }],
    ["DSBESJB\\\u975E\u5B9A\u5C3A", { p: 8.8275, u: 0.95 }],
    ["DSBESJB\\\u5B9A\u5C3A", { p: 8.9425, u: 0.95 }],
    ["\u7070\u94F8\u94C1\\HT200", { p: 0.925, u: 1 }],
    ["\u94F8\u94DD\u9752\u94DC\\ZCUAL10Fe3", { p: 10, u: 1 }],
    ["\u94F8\u94DD\u9752\u94DC\\ZQAL9-4", { p: 10, u: 1 }],
    ["\u94F8\u9521\u9752\u94DC\\ZQSn10-1", { p: 13, u: 1 }],
    ["\u65E0\u78C1\u94A2\\40Mn18Cr3", { p: 1.95, u: 0.8 }],
    ["\u5BC6\u5C01\u76D6\\\u94F8\u94DD\u5408\u91D1\\ZAlSi12", { p: 4.5, u: 1 }],
    ["\u963B\u5C3C\u73AF\\\u963B\u5C3C\u6761T2Y", { p: 8.7675, u: 1 }],
    ["\u78B3\u94A2\u710A\u6761", { p: 0.85, u: 0.9 }],
    ["\u4E0D\u9508\u94A2\u710A\u4E1DYC-YB102(Q)\\\u03C61.6", { p: 9, u: 0.95 }],
    ["Kg\u94F6\u94DC\u710A\u4E1DHLAgCu30-5\\\u03C63", { p: 22, u: 0.95 }],
    ["Kg\u94F6\u94DC\u710A\u4E1DHLAgCu80-5\\\u03C63", { p: 12, u: 0.95 }],
    ["\u6321\u98CE\u677F\\\u73BB\u7483\u94A2", { p: 15, u: "\u624B\u8F93" }],
    ["\u5DF4\u6C0F\u5408\u91D1\\\u5DF4\u6C0F\u5408\u91D1\\ZchSnSb11-6", { p: 23, u: "\u624B\u8F93" }],
    ["\u6C34\u5BFC\u8F74\u74E6", { p: 5, u: 0.95 }],
    ["\u4E0A\u5BFC\u8F74\u74E6", { p: 7.5, u: 0.95 }],
    ["\u63A8\u529B\u8F74\u74E6", { p: 5, u: 0.95 }],
    ["\u4E0B\u5BFC\u8F74\u74E6", { p: 5.5, u: 0.95 }],
    ["\u5851\u6599\u74E6", { p: 3e-4, u: "\u624B\u8F93" }],
    ["\u4E0D\u9508\u94A2\u7BA1\\0Cr18Ni9\\\u03C6168\xD74", { p: 1.6, u: 0.9 }],
    ["\u4E0D\u9508\u94A2\u7BA1\\0Cr18Ni9\\\u03C645\xD73", { p: 1.6, u: 0.9 }],
    ["\u4E0D\u9508\u94A2\u7BA1\\0Cr18Ni9\\\u03C622\\\u03C634\\\u5176\u5B83\u5E38\u7528\u89C4\u683C", { p: 1.6, u: 0.9 }],
    ["\u51B7\u5374\u5668\u94DC\u7BA1\\T2Y", { p: 8.7525, u: 0.75 }],
    ["\u52B1\u78C1\u7535\u7F06120mm\xB2", { p: 0.02, u: "\u624B\u8F93" }],
    ["\u4FE1\u53F7\u7535\u7F06\\\u6D4B\u6E29Rvvp-3\xD70.75mm\xB2", { p: 4e-4, u: "\u624B\u8F93" }],
    ["\u52A8\u529B\u7535\u7F06BVR-500V-6mm^2", { p: 18e-4, u: "\u624B\u8F93" }],
    ["\u7A7A\u6C14\u51B7\u5374\u5668", { p: 0.018, u: "\u624B\u8F93" }],
    ["\u6D41\u9053\u55B7\u7802\u5DE5\u827A", { p: 58e-4, u: "\u624B\u8F93" }],
    ["\u78B3\u5316\u94A8\u55B7\u6D82", { p: 2.35, u: "\u624B\u8F93" }],
    ["\u8717\u58F3\u5F39\u6027\u5C42", { p: 0.1, u: "\u624B\u8F93" }],
    ["\u9540\u94EC\\\u6D3B\u585E\u6746", { p: 0.2, u: "\u624B\u8F93" }],
    ["\u03C6220\u78B3\u7C89\u5236\u52A8\u9664\u5C18\u88C5\u7F6E", { p: 1.25, u: "\u624B\u8F93" }],
    ["\u03C6160\u78B3\u7C89\u5236\u52A8\u9664\u5C18\u88C5\u7F6E", { p: 0.75, u: "\u624B\u8F93" }],
    ["\u5237\u67B6\u53CA\u78B3\u7C89\u6536\u96C6\u88C5\u7F6E", { p: 15, u: "\u624B\u8F93" }],
    ["\u5438\u6392\u6CB9\u96FE\u88C5\u7F6E", { p: 3.35, u: "\u624B\u8F93" }],
    ["\u7535\u5237", { p: 0.012, u: "\u624B\u8F93" }],
    ["\u5237\u63E1", { p: 0.015, u: "\u624B\u8F93" }],
    ["46#\u6C7D\u8F6E\u673A\u6CB9", { p: 1.147, u: "\u624B\u8F93" }],
    ["\u4E2D\u5FC3\u70B9\u63A5\u5730\u88C5\u7F6E", { p: 10, u: "\u624B\u8F93" }],
    ["\u789F\u7C27\\120", { p: 3e-3, u: "\u624B\u8F93" }],
    ["\u789F\u7C27\\160", { p: 6e-3, u: "\u624B\u8F93" }],
    ["\u789F\u7C27\\200", { p: 8e-3, u: "\u624B\u8F93" }],
    ["\u7A7A\u6C14\u56F4\u5E26\\\u5C0F", { p: 0.2, u: "\u624B\u8F93" }],
    ["\u7A7A\u6C14\u56F4\u5E26\\\u4E2D", { p: 0.35, u: "\u624B\u8F93" }],
    ["\u7A7A\u6C14\u56F4\u5E26\\\u5927", { p: 0.5, u: "\u624B\u8F93" }],
    ["\u5BC6\u5C01\u73AF\\\u5C0F\\\u9AD8\u5206\u5B50\u6750\u6599", { p: 0.6, u: "\u624B\u8F93" }],
    ["\u7A7A\u6C14\u56F4\u5E26\\\u4E2D\\\u9AD8\u5206\u5B50\u6750\u6599", { p: 0.75, u: "\u624B\u8F93" }],
    ["\u7A7A\u6C14\u56F4\u5E26\\\u5927\\\u9AD8\u5206\u5B50\u6750\u6599", { p: 0.9, u: "\u624B\u8F93" }],
    // 购买件价格参考 (从成品价sheet提取)
    ["O\u5F62\u5708\\GB/T3452.1\\165\xD75.3", { p: 1e-3, u: 1 }],
    ["\u8F74\u5957\\FZ-2\\120\xD7115\xD7100", { p: 4e-3, u: 1 }],
    ["\u8F74\u5957\\FZ-2\\90\xD785\xD780", { p: 3e-3, u: 1 }],
    ["\u8F74\u5957\\FZ-2\\175\xD7170\xD7100", { p: 0.011, u: 1 }],
    ["\u8F74\u5957\\FZ-6\\460\xD7450\xD7340", { p: 0.15, u: 1 }],
    ["\u5173\u8282\u8F74\u627FGE140", { p: 0.09, u: 1 }],
    ["V\u5F62\u7EC4\u5408\u5708\\GES4500-450\xD7490\xD770", { p: 0.15, u: 1 }],
    ["\u7A7A\u6C14\u56F4\u5E26\\\u5927", { p: 0.5, u: 1 }],
    ["\u03C6220\\\u63A5\u529B\u5668", { p: 2.66, u: 1 }],
    ["\u03C6200\\\u63A5\u529B\u5668", { p: 2.6, u: 1 }],
    ["\u771F\u7A7A\u7834\u574F\u9600\u03C6250", { p: 0.63, u: 1 }],
    ["\u624B\u52A8\u95F8\u9600\u03C6200/150", { p: 0.25, u: 1 }],
    ["\u6DB2\u538B\u76D8\u578B\u9600\\DN300", { p: 3.45, u: 1 }],
    ["\u6DB2\u538B\u64CD\u4F5C\u9600\\SF150-25/160", { p: 1.5, u: 1 }],
    ["\u95F8\u9600\\Z41H-25/DN200", { p: 0.2, u: 1 }],
    ["\u7535\u52A8\u8BD5\u538B\u6CF5DSY", { p: 0.83, u: 1 }],
    ["\u7535\u52A0\u70ED\u5668220V/2KW", { p: 0.098, u: 1 }],
    ["\u7535\u52A0\u70ED\u5668SK1-130", { p: 0.19, u: 1 }],
    ["\u5236\u52A8\u5668\\\u03C6220", { p: 1.175, u: 1 }]
  ]);
  var PRICE_CACHE2 = /* @__PURE__ */ new Map();
  var YUAN_TO_WAN2 = 1e4;
  function csvEscape(val) {
    var s = String(val || "");
    if (s.includes(",") || s.includes('"') || s.includes("\n") || /^[=+\-@]/.test(s)) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  }
  function escHtml2(str) {
    if (!str) return "";
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function lookupMaterialPrice(spec) {
    if (!spec || spec.trim() === "") return null;
    const key = spec.trim().replace(/\s+/g, "");
    if (PRICE_CACHE2.has(key)) return PRICE_CACHE2.get(key);
    if (MATERIAL_PRICE_DB2.has(key)) {
      PRICE_CACHE2.set(key, MATERIAL_PRICE_DB2.get(key));
      return PRICE_CACHE2.get(key);
    }
    if (MATERIAL_PRICE_DB2.has(spec.trim())) {
      PRICE_CACHE2.set(key, MATERIAL_PRICE_DB2.get(spec.trim()));
      return PRICE_CACHE2.get(spec.trim());
    }
    const parts = key.split("\\");
    for (let i = parts.length; i >= 1; i--) {
      const partial = parts.slice(0, i).join("\\");
      if (MATERIAL_PRICE_DB2.has(partial)) {
        PRICE_CACHE2.set(key, MATERIAL_PRICE_DB2.get(partial));
        return PRICE_CACHE2.get(key);
      }
    }
    if (parts.length >= 2) {
      for (const [dbKey, val] of MATERIAL_PRICE_DB2) {
        const dbParts = dbKey.split("\\");
        if (dbParts[0] === parts[0]) {
          for (let j = 1; j < parts.length; j++) {
            if (dbKey.includes(parts[j])) {
              PRICE_CACHE2.set(key, val);
              return val;
            }
          }
        }
      }
    }
    for (const [dbKey, val] of MATERIAL_PRICE_DB2) {
      if (dbKey.includes(key) || key.includes(dbKey.substring(0, Math.min(dbKey.length, 6)))) {
        PRICE_CACHE2.set(key, val);
        return val;
      }
    }
    const firstWord = parts[0].replace(/[^a-zA-Z0-9一-鿿]/g, "");
    if (firstWord) {
      for (const [dbKey, val] of MATERIAL_PRICE_DB2) {
        if (dbKey.startsWith(firstWord) || dbKey.includes(firstWord)) {
          PRICE_CACHE2.set(key, val);
          return val;
        }
      }
    }
    PRICE_CACHE2.set(key, null);
    return null;
  }

  // js/src/editor.js
  function _escapeHtmlRowEdit(v) {
    return String(v ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]);
  }
  function _isLongRowEditField(key, col) {
    const k = String(key || "").toLowerCase();
    const label = String(col && col.label || "");
    return ["remark", "remarks", "note", "notes", "desc", "description", "spec", "model"].includes(k) || /备注|说明|描述|规格|型号/.test(label);
  }
  function _isNumericRowEditField(col) {
    return ["number", "money", "weight", "int", "usageRate", "qty"].includes(col && col.type);
  }
  function _rowEditFieldOptions(col, key, dataKey) {
    if (col && col.type === "bool") return [
      { value: "0", label: "\u81EA\u5236" },
      { value: "1", label: "\u5916\u8D2D" }
    ];
    if (key === "category") return ["\u677F\u6750\u7C7B", "\u578B\u6750\u7C7B", "\u94F8\u4EF6\u7C7B", "\u953B\u4EF6\u7C7B", "\u94DC\u6750", "\u7EDD\u7F18\u6750\u6599", "\u4E0D\u9508\u94A2\u6750", "\u7BA1\u6750", "\u6210\u54C1\u4EF6", "\u8F74\u627F/\u8F74\u5957", "\u5BC6\u5C01\u4EF6", "\u9600\u95E8\u7C7B", "\u5176\u4ED6"].map((v) => ({ value: v, label: v }));
    if (key === "unit") return ["", "\u4EF6", "\u5957", "\u53F0", "\u53F0\u5957", "\u4E2A", "\u53EA", "\u628A", "\u7EC4", "\u7C73", "kg", "T"].map((v) => ({ value: v, label: v || "\u7A7A" }));
    return null;
  }
  function openRowEditModal(kind, payload) {
    closeRowEditModal();
    const overlay = document.createElement("div");
    overlay.id = "rowEditOverlay";
    document.body.appendChild(overlay);
    let title = "\u7F16\u8F91\u884C";
    let subtitle = "";
    let fields = [];
    let row = null;
    let onSave = null;
    let modalDataKey = payload && payload.dataKey;
    if (kind === "data") {
      const { dataKey, rowIdx, config } = payload;
      modalDataKey = dataKey;
      row = (DATA[dataKey] || [])[rowIdx];
      if (!row) {
        overlay.remove();
        return;
      }
      const columns = config.columns || [];
      const isMatBOM = ["water", "gen", "valve", "valve_door"].includes(dataKey);
      const isSub = isMatBOM && isSubtotalRow(row, DATA[dataKey] || []);
      title = "\u7F16\u8F91\u8868\u683C\u884C";
      subtitle = `${dataKey} \xB7 ${row.seq ? "\u5E8F\u53F7 " + row.seq + " \xB7 " : ""}${row.name || row.material || "\u672A\u547D\u540D\u884C"}`;
      fields = columns.map((col) => {
        const formulaMeta = getFormulaMetaForField(dataKey, row, col.key, col, isSub);
        const readonly = !!(formulaMeta || col.formula || isSub && (col.key === "weight" || col.key === "amount") || isSub && col.key === "usage");
        return { key: col.key, label: col.label || col.key, type: col.type || "text", col, value: row[col.key], readonly, formulaMeta };
      });
      onSave = (values, formulaValues) => {
        let changed = false;
        fields.forEach((f) => {
          if (f.formulaMeta && f.formulaMeta.configurable) return;
          if (f.readonly) return;
          if (JSON.stringify(row[f.key]) !== JSON.stringify(values[f.key])) {
            row[f.key] = values[f.key];
            changed = true;
          }
        });
        Object.entries(formulaValues || {}).forEach(([formulaId, expr]) => {
          const before = getFormulaExpr(formulaId);
          setCustomFormula(formulaId, expr);
          const after = getFormulaExpr(formulaId);
          if (before !== after) changed = true;
        });
        if (changed) takeProjectSnapshot("\u5F39\u7A97\u7F16\u8F91\u8868\u683C\u884C");
        FormulaEngine.recalcTable(dataKey);
        persistData();
        if (["water", "gen", "valve", "valve_door", "water_parts", "gen_parts", "valve_parts", "water_tools", "gen_tools", "valve_tools", "automation", "monitoring", "liaison"].includes(dataKey)) {
          _sidebarOverrides.clear();
        }
        EditableTable.render(config);
        if (config.onChange) config.onChange();
        renderAll();
        showToast(changed ? "\u5DF2\u4FDD\u5B58\u5F39\u7A97\u7F16\u8F91\u5185\u5BB9" : "\u672A\u68C0\u6D4B\u5230\u53D8\u66F4");
      };
    } else if (kind === "matlib") {
      const idx = payload.idx;
      row = MAT_LIB[idx];
      if (!row) {
        overlay.remove();
        return;
      }
      title = "\u7F16\u8F91\u6750\u6599\u5E93";
      subtitle = `${row.id || ""} \xB7 ${row.name || "\u65B0\u6750\u6599"}`;
      fields = [
        { key: "id", label: "\u6750\u6599ID", type: "text", value: row.id, readonly: true },
        { key: "name", label: "\u6750\u6599\u540D\u79F0", type: "text", value: row.name },
        { key: "spec", label: "\u89C4\u683C", type: "text", value: row.spec },
        { key: "category", label: "\u5206\u7C7B", type: "text", value: row.category },
        { key: "price", label: "\u6807\u51C6\u4EF7\u683C(\u4E07/T)", type: "number", value: row.price },
        { key: "usage_rate", label: "\u5229\u7528\u7387", type: "number", value: row.usage_rate ?? 0.8 },
        { key: "remark", label: "\u5907\u6CE8", type: "text", value: row.remark }
      ];
      onSave = (values) => {
        let changed = false;
        ["name", "spec", "category", "price", "usage_rate", "remark"].forEach((k) => {
          if (JSON.stringify(row[k]) !== JSON.stringify(values[k])) {
            row[k] = values[k];
            changed = true;
          }
        });
        if (changed) takeProjectSnapshot("\u5F39\u7A97\u7F16\u8F91\u6750\u6599\u5E93");
        persistMatLib();
        renderMatLib();
        ["water", "gen", "valve", "valve_door"].forEach((k) => FormulaEngine.recalcTable(k));
        renderAll();
        showToast(changed ? "\u5DF2\u4FDD\u5B58\u6750\u6599\u5E93\u7F16\u8F91\u5185\u5BB9" : "\u672A\u68C0\u6D4B\u5230\u53D8\u66F4");
      };
    }
    const modal = document.createElement("div");
    modal.className = "row-edit-modal";
    overlay.appendChild(modal);
    const fieldHtml = fields.map((f) => {
      const key = f.key;
      const col = f.col || { type: f.type, label: f.label };
      const opts = _rowEditFieldOptions(col, key, modalDataKey);
      const isLong = _isLongRowEditField(key, col);
      const isNumeric = _isNumericRowEditField(col) || f.type === "number";
      const formulaMeta = f.formulaMeta;
      const full = !!formulaMeta || isLong || key === "material" || key === "replacement" || key === "name";
      const current = f.value ?? "";
      const readonlyAttr = f.readonly ? " readonly" : "";
      const readonlyTag = f.readonly && !formulaMeta ? '<span class="readonly-tag">\u81EA\u52A8/\u53EA\u8BFB</span>' : "";
      let control = "";
      if (opts && !f.readonly) {
        control = `<select class="row-edit-select" data-key="${key}">
        ${opts.map((o) => `<option value="${_escapeHtmlRowEdit(o.value)}" ${String(current) === String(o.value) || col.type === "bool" && String(current ? "1" : "0") === String(o.value) ? "selected" : ""}>${_escapeHtmlRowEdit(o.label)}</option>`).join("")}
      </select>`;
      } else if (col.type === "bool") {
        control = `<input class="row-edit-input" data-key="${key}" value="${current ? "\u5916\u8D2D" : "\u81EA\u5236"}" readonly>`;
      } else if (isLong) {
        control = `<textarea class="row-edit-textarea" data-key="${key}"${readonlyAttr}>${_escapeHtmlRowEdit(current)}</textarea>`;
      } else {
        control = `<input class="row-edit-input${isNumeric ? " numeric" : ""}" data-key="${key}" type="${isNumeric && !f.readonly ? "number" : "text"}" ${isNumeric && !f.readonly ? 'step="any"' : ""} value="${_escapeHtmlRowEdit(current)}"${readonlyAttr}>`;
      }
      if (formulaMeta && formulaMeta.configurable) {
        const fid = formulaMeta.id;
        const currentExpr = getFormulaExpr(fid);
        const defaultExpr = DEFAULT_FORMULAS[fid] ? DEFAULT_FORMULAS[fid].expr : "";
        const isCustom = currentExpr !== defaultExpr;
        const vars = formulaMeta.vars || [];
        const varsHtml = vars.length ? vars.map((v) => `<code class="fv-chip">${_escapeHtmlRowEdit(v)}</code>`).join(" ") : '<span style="color:var(--text-dim)">\u2014</span>';
        return `<div class="row-edit-field full formula-field-card">
        <label class="row-edit-label">
          <span>\u2A0D ${_escapeHtmlRowEdit(formulaMeta.label || f.label)}</span>
          <span class="formula-badge ${isCustom ? "custom" : "default"}">${isCustom ? "\u5DF2\u81EA\u5B9A\u4E49" : "\u9ED8\u8BA4\u516C\u5F0F"}</span>
        </label>
        <div class="formula-card">
          <div class="formula-card-desc">${_escapeHtmlRowEdit(formulaMeta.desc || "")}</div>
          <div class="formula-card-vars">\u53EF\u7528\u53D8\u91CF\uFF1A${varsHtml}</div>
          <div class="formula-card-row">
            <span class="formula-card-label">\u5F53\u524D\u516C\u5F0F</span>
            <input class="row-edit-input formula-expr-input" data-formula-id="${fid}"
              value="${_escapeHtmlRowEdit(currentExpr)}"
              placeholder="${_escapeHtmlRowEdit(defaultExpr)}"
              spellcheck="false" autocomplete="off" autocorrect="off">
          </div>
          ${isCustom ? `<div class="formula-card-reset"><button type="button" class="formula-reset-btn" data-formula-id="${fid}">\u21BA \u6062\u590D\u9ED8\u8BA4\uFF08${_escapeHtmlRowEdit(defaultExpr)}\uFF09</button></div>` : ""}
          <div class="formula-card-result">
            <span class="formula-card-label">\u5F53\u524D\u8BA1\u7B97\u503C</span>
            <span class="formula-result-val">${_escapeHtmlRowEdit(String(f.value ?? "\u2014"))}</span>
          </div>
        </div>
      </div>`;
      }
      return `<div class="row-edit-field ${full ? "full" : ""}">
      <label class="row-edit-label"><span>${_escapeHtmlRowEdit(f.label)}</span><span>${readonlyTag}</span></label>
      ${control}
    </div>`;
    }).join("");
    modal.innerHTML = `
    <div class="row-edit-header">
      <div>
        <div class="row-edit-title">${_escapeHtmlRowEdit(title)}</div>
        <div class="row-edit-subtitle">${_escapeHtmlRowEdit(subtitle)}</div>
      </div>
      <button class="row-edit-close" type="button" title="\u5173\u95ED">\u2715</button>
    </div>
    <div class="row-edit-body">
      <div class="row-edit-error" id="rowEditError"></div>
      ${fieldHtml}
    </div>
    <div class="row-edit-footer">
      <span class="row-edit-hint">\u53CC\u51FB\u884C\u6216\u70B9\u51FB\u201C\u7F16\u8F91\u201D\u6253\u5F00\uFF1BEsc \u53D6\u6D88\uFF0CCtrl/\u2318 + Enter \u4FDD\u5B58\u3002</span>
      <button class="btn" id="rowEditCancel" type="button">\u53D6\u6D88</button>
      <button class="btn row-edit-primary" id="rowEditSave" type="button">\u4FDD\u5B58</button>
    </div>
  `;
    const close = () => closeRowEditModal();
    modal.querySelector(".row-edit-close").onclick = close;
    modal.querySelector("#rowEditCancel").onclick = close;
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    modal.addEventListener("click", (e) => {
      const btn = e.target.closest(".formula-reset-btn");
      if (!btn) return;
      const fid = btn.dataset.formulaId;
      if (!fid || !DEFAULT_FORMULAS[fid]) return;
      const inp = modal.querySelector(`[data-formula-id="${CSS.escape(fid)}"]`);
      if (inp) {
        inp.value = DEFAULT_FORMULAS[fid].expr;
        inp.dispatchEvent(new Event("input"));
      }
      const card = btn.closest(".formula-field-card");
      if (card) {
        const badge = card.querySelector(".formula-badge");
        if (badge) {
          badge.textContent = "\u9ED8\u8BA4\u516C\u5F0F";
          badge.className = "formula-badge default";
        }
        btn.closest(".formula-card-reset")?.remove();
      }
    });
    modal.addEventListener("input", (e) => {
      const inp = e.target.closest(".formula-expr-input");
      if (!inp) return;
      const fid = inp.dataset.formulaId;
      if (!fid) return;
      const card = inp.closest(".formula-card");
      const resultEl = card ? card.querySelector(".formula-result-val") : null;
      if (!resultEl) return;
      try {
        const testCtx = Object.assign({}, row || {}, { price: row && row.price != null ? parseFloat(row.price) || 0 : 1, material_price: 1, qty_parsed: parseQtyValue((row || {}).qty) });
        const val = evaluateFormulaSafe(inp.value.trim(), testCtx);
        resultEl.textContent = val != null ? String(Math.round(val * 1e4) / 1e4) : "\u2014";
        resultEl.style.color = "var(--green)";
        inp.style.borderColor = "";
      } catch (err) {
        resultEl.textContent = "\u26A0 " + err.message;
        resultEl.style.color = "var(--red)";
        inp.style.borderColor = "var(--red)";
      }
    });
    function collectValues() {
      const values = {};
      const formulaValues = {};
      for (const f of fields) {
        const col = f.col || { type: f.type };
        const el = modal.querySelector(`[data-key="${CSS.escape(f.key)}"]`);
        if (!el) {
          values[f.key] = f.value;
          continue;
        }
        if (f.formulaMeta && f.formulaMeta.configurable) {
          values[f.key] = f.value;
          continue;
        }
        if (f.readonly) {
          values[f.key] = f.value;
          continue;
        }
        let raw = (el.value ?? "").trim();
        if (col.type === "bool") {
          values[f.key] = raw === "1";
        } else if (_isNumericRowEditField(col) || f.type === "number") {
          if (raw === "") {
            values[f.key] = null;
          } else {
            const n = parseFloat(raw);
            if (isNaN(n)) throw new Error(`${f.label} \u5FC5\u987B\u662F\u6709\u6548\u6570\u5B57`);
            if ((col.type === "usageRate" || f.key === "usage") && (n < 0 || n > 1 && n % 1 !== 0)) throw new Error(`${f.label} \u9700\u57280~1\u4E4B\u95F4\uFF08\u5229\u7528\u7387\uFF09\u6216\u4E3A\u6574\u6570\uFF08\u6570\u91CF\uFF09`);
            values[f.key] = col.type === "int" ? Math.round(n) : n;
          }
        } else {
          values[f.key] = raw;
        }
      }
      modal.querySelectorAll("[data-formula-id]").forEach((input) => {
        const fid = input.dataset.formulaId;
        const expr = String(input.value || "").trim();
        if (!DEFAULT_FORMULAS[fid]) return;
        if (!expr) throw new Error(`${DEFAULT_FORMULAS[fid].label} \u7684\u516C\u5F0F\u4E0D\u80FD\u4E3A\u7A7A`);
        if (!expr.includes("sum(")) {
          const testCtx = Object.assign({}, row || {}, { price: 1, material_price: 1, qty_parsed: parseQtyValue((row || {}).qty) });
          evaluateFormulaSafe(expr, testCtx);
        }
        formulaValues[fid] = expr;
      });
      if (kind === "matlib") {
        if (!values.name) throw new Error("\u6750\u6599\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A");
        if (values.price === null || values.price === void 0 || isNaN(parseFloat(values.price))) throw new Error("\u6807\u51C6\u4EF7\u683C\u5FC5\u987B\u662F\u6709\u6548\u6570\u5B57");
      }
      return { values, formulaValues };
    }
    modal.querySelector("#rowEditSave").onclick = () => {
      const err = modal.querySelector("#rowEditError");
      try {
        const result = collectValues();
        err.style.display = "none";
        onSave(result.values, result.formulaValues);
        closeRowEditModal();
      } catch (e) {
        err.textContent = "\u26A0 " + e.message;
        err.style.display = "block";
      }
    };
    const firstEditable = modal.querySelector(".row-edit-input:not([readonly]), .row-edit-textarea:not([readonly]), .row-edit-select");
    if (firstEditable) setTimeout(() => {
      firstEditable.focus();
      if (firstEditable.select) firstEditable.select();
    }, 0);
    overlay._rowEditKeydown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        modal.querySelector("#rowEditSave").click();
      }
    };
    document.addEventListener("keydown", overlay._rowEditKeydown);
  }
  function closeRowEditModal() {
    const overlay = document.getElementById("rowEditOverlay");
    if (overlay) {
      if (overlay._rowEditKeydown) document.removeEventListener("keydown", overlay._rowEditKeydown);
      overlay.remove();
    }
  }
  var EditableTable = {
    currentEdit: null,
    render(config) {
      const { tableId, dataKey, columns, summaryId, filterFn } = config;
      const allItems = DATA[dataKey] || [];
      const items = filterFn ? allItems.filter(filterFn) : allItems;
      const origIdxMap = filterFn ? items.map((it) => allItems.indexOf(it)) : items.map((_, i) => i);
      const isMatBOM = ["water", "gen", "valve", "valve_door"].includes(dataKey);
      const colClass = (col) => {
        if (config.tableId === "matTable") {
          if (col.key === "seq") return "mat-seq";
          if (col.key === "name") return "mat-name";
          if (col.key === "material") return "mat-mat";
          if (col.key === "replacement") return "mat-rep";
          if (col.key === "weight") return "mat-wt";
          if (col.key === "amount") return "mat-amt";
          if (col.key === "usage") return "mat-usage";
          if (col.key === "is_buy") return "mat-buy";
          if (col.key === "remark") return "mat-remark";
        }
        if (col.key === "seq") return "col-seq";
        if (col.key === "name" || col.key === "usage" || col.key === "function") return "col-name";
        if (col.key === "spec" || col.key === "model" || col.key === "remark" || col.key === "manufacturer") return "col-spec";
        if (col.key === "qty") return "col-qty";
        if (col.key === "unit") return "col-unit";
        if (col.key === "weight") return "col-weight";
        if (col.type === "money" || col.type === "number" || col.align === "right") return "col-money";
        return "col-spec";
      };
      let html = `<colgroup>`;
      html += `<col class="${config.tableId === "matTable" ? "mat-op" : "col-op"}">`;
      columns.forEach((col) => {
        if (col.width) {
          html += `<col style="width:${col.width}">`;
        } else {
          html += `<col class="${colClass(col)}">`;
        }
      });
      html += `</colgroup>`;
      html += `<thead><tr>`;
      html += `<th>\u64CD\u4F5C</th>`;
      columns.forEach((col) => {
        html += `<th class="${col.align === "right" ? "num" : ""}" title="${col.label}">${col.label}</th>`;
      });
      html += `</tr></thead><tbody>`;
      const issues = isMatBOM ? validateTableConsistency(dataKey) : [];
      const issueSet = new Set(issues.map((iss) => iss.idx));
      function isParentRow(item, allRows) {
        if (isMatBOM) return isSubtotalRow(item, allRows);
        const seqStr = String(item.seq || "").trim();
        if (!seqStr || seqStr === "\u4E00") return false;
        const prefix = seqStr + ".";
        return allRows.some((other) => other !== item && String(other.seq || "").startsWith(prefix));
      }
      function countDirectChildren(seqStr, allRows) {
        if (!seqStr || seqStr === "\u4E00") {
          return allRows.filter((r) => /^\d+$/.test(String(r.seq || ""))).length;
        }
        const pfx = seqStr + ".";
        const depth = seqStr.split(".").length;
        return allRows.filter((r) => {
          const os = String(r.seq || "");
          return os.startsWith(pfx) && os.split(".").length === depth + 1;
        }).length;
      }
      function seqDepth(seqStr) {
        if (!seqStr || seqStr === "\u4E00") return 0;
        return String(seqStr).split(".").length;
      }
      const collapseKey = (seq) => `et_collapsed_${dataKey}_${seq}`;
      function isCollapsed(seq) {
        return sessionStorage.getItem(collapseKey(seq)) === "1";
      }
      function isHidden(item) {
        const seqStr = String(item.seq || "");
        if (seqStr === "\u4E00") return false;
        if (isCollapsed("\u4E00")) return true;
        const parts = seqStr.split(".");
        for (let len = 1; len < parts.length; len++) {
          const ancestorSeq = parts.slice(0, len).join(".");
          if (isCollapsed(ancestorSeq)) return true;
        }
        return false;
      }
      items.forEach((it, idx) => {
        const origIdx = origIdxMap[idx];
        const seqStr = String(it.seq || "").trim();
        const isRoot = seqStr === "\u4E00";
        const isSub = isMatBOM ? isSubtotalRow(it, allItems) : isParentRow(it, allItems);
        const dotDepth = isRoot ? 0 : seqDepth(seqStr);
        const isInconsistent = isMatBOM && isSub && issueSet.has(origIdx);
        const directChildCount = countDirectChildren(seqStr, allItems);
        const hasToggle = directChildCount >= 1;
        const hasChildren = directChildCount >= 1;
        const hidden = isHidden(it);
        let rowClass = "";
        if (isRoot) {
          rowClass = "subtotal subtotal-root";
        } else if (isSub) {
          if (dotDepth <= 1) rowClass = "subtotal";
          else if (dotDepth === 2) rowClass = "subtotal subtotal-deep";
          else rowClass = "subtotal subtotal-deep subtotal-deep3";
        }
        if (isInconsistent) rowClass += " inconsistent";
        if (hidden) rowClass += " et-row-hidden";
        const INDENT_PX = 20;
        const ROOT_CHILD_BASE = 32;
        const indent = isRoot ? 0 : ROOT_CHILD_BASE + Math.max(0, dotDepth - 1) * INDENT_PX;
        const collapsed = isCollapsed(seqStr);
        const toggleBtn = hasToggle ? `<button class="et-toggle-btn${collapsed ? " collapsed" : ""}" onclick="EditableTable.toggleCollapse('${dataKey}','${seqStr}',this)" title="${collapsed ? "\u5C55\u5F00 " + directChildCount + " \u4E2A\u5B50\u884C" : "\u6536\u8D77 " + directChildCount + " \u4E2A\u5B50\u884C"}">${collapsed ? "\u25B6" : "\u25BC"}</button>` : `<span style="display:inline-block;width:22px;"></span>`;
        const levelDot = dotDepth === 2 ? `<span class="et-level-dot d2"></span>` : dotDepth === 3 ? `<span class="et-level-dot d3"></span>` : dotDepth >= 4 ? `<span class="et-level-dot d4"></span>` : "";
        html += `<tr class="${rowClass}" data-idx="${idx}" data-orig-idx="${origIdx}" data-seq="${escHtml(seqStr)}" data-datakey="${dataKey}">`;
        const childBtn = `<button class="row-btn child" onclick="EditableTable.addChildRow('${dataKey}',${origIdx})" title="\u63D2\u5165\u5B50\u884C">\u21B3</button>`;
        if (isInconsistent) {
          const iss = issues.find((iss2) => iss2.idx === origIdx);
          const tip = iss ? `\u671F\u671B\u91CD\u91CF:${iss.expectedWeight}T \u671F\u671B\u91D1\u989D:${iss.expectedAmount}\u4E07` : "\u6570\u636E\u4E0D\u4E00\u81F4";
          html += `<td class="et-action-cell" title="${tip}"><button class="row-btn row-edit-btn" onclick="EditableTable.openRowModal('${dataKey}',${origIdx})" title="\u5F39\u7A97\u7F16\u8F91">\u270E</button><button class="row-btn del" onclick="EditableTable.deleteRow('${dataKey}',${origIdx})" title="\u5220\u9664\u884C">\xD7</button><button class="row-btn ins" onclick="EditableTable.insertAfter('${dataKey}',${origIdx})" title="\u63D2\u5165\u540C\u7EA7\u884C">+</button>${childBtn}<span style="color:var(--red);font-size:11px;">\u26A0</span></td>`;
        } else {
          html += `<td class="et-action-cell"><button class="row-btn row-edit-btn" onclick="EditableTable.openRowModal('${dataKey}',${origIdx})" title="\u5F39\u7A97\u7F16\u8F91">\u270E</button><button class="row-btn del" onclick="EditableTable.deleteRow('${dataKey}',${origIdx})" title="\u5220\u9664\u884C">\xD7</button><button class="row-btn ins" onclick="EditableTable.insertAfter('${dataKey}',${origIdx})" title="\u63D2\u5165\u540C\u7EA7\u884C">+</button>${childBtn}</td>`;
        }
        columns.forEach((col, ci) => {
          const val = it[col.key];
          const isSubtotalAmountField = isSub && isMatBOM && (col.key === "weight" || col.key === "amount");
          const isFormula = isSubtotalAmountField || col.formula && !isSub && isMatBOM || col.key === "usage" && isSub && isMatBOM;
          const cellClass = ["editable-cell"];
          if (col.align === "right") cellClass.push("num");
          if (isFormula) cellClass.push("formula-cell");
          const isFirstCol = ci === 0;
          const padStyle = isFirstCol ? `padding-left:${8 + indent}px;` : "";
          const seqStyle = col.key === "seq" ? 'font-family:"SF Mono",Monaco,Consolas,monospace;font-size:11px;' : "";
          let titleAttr = "";
          if (isSubtotalAmountField) {
            titleAttr = ` title="\u81EA\u52A8\u6C47\u603B = \u6240\u6709\u76F4\u63A5\u5B50\u8282\u70B9\u4E4B\u548C"`;
          } else if (col.formula && !isSub && isMatBOM) {
            titleAttr = ` title="${FormulaEngine.getMatFormula(it, dataKey).replace(/"/g, "&quot;")}"`;
          } else if (val && typeof val === "string" && val.length > 16 && !col.formula) {
            titleAttr = ` title="${String(val).replace(/"/g, "&quot;")}"`;
          }
          html += `<td class="${cellClass.join(" ")}" style="${padStyle}${seqStyle}" data-col="${ci}" data-key="${col.key}" data-formula="${col.formula || ""}" data-idx="${idx}" data-orig-idx="${origIdx}"${titleAttr}>`;
          if (col.key === "seq") {
            html += `<span style="display:inline-flex;align-items:center;gap:3px;vertical-align:middle;">${toggleBtn}${levelDot}</span>`;
          }
          html += EditableTable.cellDisplay(val, col);
          if (col.key === "seq" && directChildCount >= 2) {
            html += `<span class="et-child-count">${directChildCount}</span>`;
          }
          html += `</td>`;
        });
        html += `</tr>`;
      });
      html += `</tbody>`;
      html += `<tfoot><tr><td colspan="${columns.length + 1}" class="add-row-bar">`;
      html += `<button onclick="EditableTable.addRow('${dataKey}')">+ \u6DFB\u52A0\u65B0\u884C</button>`;
      html += `</td></tr></tfoot>`;
      document.getElementById(tableId).innerHTML = html;
      if (summaryId) {
        const totalVals = {};
        columns.filter((c) => c.summary).forEach((c) => {
          totalVals[c.key] = 0;
        });
        items.forEach((it) => {
          columns.filter((c) => c.summary).forEach((c) => {
            totalVals[c.key] += parseFloat(it[c.key]) || 0;
          });
        });
        EditableTable.renderSummary(summaryId, items.length, dataKey, totalVals, columns);
      }
    },
    cellDisplay(val, col) {
      if (val === null || val === void 0 || val === "") return '<span style="color:var(--text-dim);">\u2014</span>';
      if (col.type === "bool") {
        return val ? '<span class="tag tag-buy">\u5916\u8D2D</span>' : '<span class="tag tag-self">\u81EA\u5236</span>';
      }
      if (col.type === "money") return fmt(parseFloat(val) || 0, 2);
      if (col.type === "weight") return val ? fmt(parseFloat(val) || 0, 2) : "\u2014";
      if (col.type === "usageRate") {
        if (val === null || val === void 0 || val === "") return '<span style="color:var(--text-dim);">\u2014</span>';
        const n = parseFloat(val);
        if (isNaN(n)) return '<span style="color:var(--text-dim);">\u2014</span>';
        return fmt(n, 2);
      }
      if (col.type === "int") return fmt(parseFloat(val) || 0, 0);
      if (col.type === "number") return fmt(parseFloat(val) || 0, 2);
      if (col.type === "qty") {
        const s = String(val);
        if (!isNaN(parseFloat(s)) && isFinite(s)) return String(parseFloat(s) % 1 === 0 ? parseInt(s) : parseFloat(s));
        return s;
      }
      if (col.type === "formula_result") {
        const n = parseFloat(val);
        if (isNaN(n)) return String(val);
        return n % 1 === 0 ? String(n) : fmt(n, 2);
      }
      const strVal = String(val);
      return strVal.startsWith("=") ? strVal.substring(1) : strVal;
    },
    renderSummary(summaryId, count, dataKey, totals, columns) {
      const el = document.getElementById(summaryId);
      if (!el) return;
      const yuanDataKeys = /* @__PURE__ */ new Set(["valve_parts", "valve_tools", "automation", "monitoring", "liaison"]);
      const isYuan = yuanDataKeys.has(dataKey);
      let parts = [`\u5171 ${count} \u9879`];
      columns.filter((c) => c.summary).forEach((c) => {
        const val = totals[c.key];
        const label = c.summaryLabel || c.label;
        if (c.type === "money" || c.type === "number" || c.type === "weight") {
          if (isYuan && (c.type === "money" || c.type === "number")) {
            parts.push(`${label}\uFF1A<strong style="color:var(--text);">${fmt(val, 2)}</strong> \u5143 <span style="color:var(--text-dim);font-size:11px;">(\u2248 ${fmt(val / YUAN_TO_WAN, 4)} \u4E07)</span>`);
          } else {
            parts.push(`${label}\uFF1A<strong style="color:var(--text);">${fmt(val, 2)}</strong>`);
          }
        } else {
          parts.push(`${label}\uFF1A<strong style="color:var(--text);">${fmt(val, 0)}</strong>`);
        }
      });
      el.innerHTML = parts.join(" \xB7 ");
    },
    openRowModal(dataKey, rowIdx) {
      const tableId = Object.keys(_tableConfigs).find((k) => _tableConfigs[k].dataKey === dataKey);
      const config = tableId ? _tableConfigs[tableId] : null;
      if (!config) return;
      openRowEditModal("data", { dataKey, rowIdx, config });
    },
    handleClick(e, config) {
      const cell = e.target.closest(".editable-cell");
      if (!cell || cell.classList.contains("formula-cell")) return;
      const { tableId, dataKey, columns, onChange } = config;
      const colIdx = parseInt(cell.dataset.col, 10);
      const rowIdx = parseInt(cell.dataset.origIdx || cell.dataset.idx, 10);
      const col = columns[colIdx];
      const items = DATA[dataKey];
      if (!items || rowIdx >= items.length) return;
      if (cell.classList.contains("editing")) return;
      EditableTable.startEdit(cell, items[rowIdx], col, dataKey, config, () => {
        FormulaEngine.recalcTable(dataKey);
        persistData();
        EditableTable.render(config);
        if (onChange) onChange();
        const isMatBOM2 = [
          "water",
          "gen",
          "valve",
          "valve_door",
          "water_parts",
          "gen_parts",
          "valve_parts",
          "water_tools",
          "gen_tools",
          "valve_tools",
          "automation",
          "monitoring",
          "liaison"
        ].includes(dataKey);
        if (isMatBOM2) _sidebarOverrides.clear();
        renderAll();
      });
    },
    startEdit(cell, row, col, dataKey, config, onSave) {
      cell.classList.add("editing");
      const oldVal = row[col.key];
      cell.innerHTML = "";
      let _committed = false;
      const commit = (save, getNewVal) => {
        if (_committed) return;
        _committed = true;
        const newVal = save && getNewVal ? getNewVal() : null;
        setTimeout(() => {
          if (save && newVal !== void 0 && JSON.stringify(newVal) !== JSON.stringify(oldVal)) takeProjectSnapshot("\u7F16\u8F91\u8868\u683C\u5355\u5143\u683C");
          if (save && newVal !== void 0) row[col.key] = newVal;
          cell.classList.remove("editing");
          cell.innerHTML = EditableTable.cellDisplay(save ? row[col.key] : oldVal, col);
          if (save) onSave();
        }, 0);
      };
      if (col.type === "bool") {
        const sel = document.createElement("select");
        sel.innerHTML = `<option value="0" ${!oldVal ? "selected" : ""}>\u81EA\u5236</option><option value="1" ${oldVal ? "selected" : ""}>\u5916\u8D2D</option>`;
        cell.appendChild(sel);
        sel.focus();
        const getBool = () => sel.value === "1";
        sel.addEventListener("blur", () => commit(true, getBool));
        sel.addEventListener("change", () => commit(true, getBool));
        sel.addEventListener("keydown", (e) => {
          if (e.key === "Escape") commit(false, null);
        });
      } else if (col.type === "material") {
        let openPanel = function() {
          const oldOverlay = document.getElementById("matPickerOverlay");
          if (oldOverlay) oldOverlay.remove();
          const rect = cell.getBoundingClientRect();
          let top = rect.bottom + 4;
          if (top + 400 > window.innerHeight) top = rect.top - 404;
          let left = rect.left;
          if (left + 610 > window.innerWidth) left = window.innerWidth - 614;
          left = Math.max(6, left);
          const overlay = document.createElement("div");
          overlay.id = "matPickerOverlay";
          document.body.appendChild(overlay);
          const panel = document.createElement("div");
          panel.id = "matPickerPanel";
          panel.style.cssText = `top:${top}px;left:${left}px;`;
          function getMatsForDisplay() {
            if (searchVal.trim()) {
              const q = searchVal.toLowerCase();
              const results = [];
              allCats.forEach((cat) => {
                (catMap[cat] || []).forEach((name) => {
                  if (name.toLowerCase().includes(q)) results.push({ name, cat });
                });
              });
              return results;
            }
            return (catMap[selectedCat] || []).map((name) => ({ name, cat: selectedCat }));
          }
          function buildPanel() {
            const mats = getMatsForDisplay();
            const isSearch = !!searchVal.trim();
            const crumbHtml = isSearch ? `<span>\u641C\u7D22 "<strong>${searchVal}</strong>" \xB7 ${mats.length} \u6761</span>` : `<span class="mp-crumb-cat">${selectedCat}</span><span style="color:var(--border-strong);">&nbsp;/&nbsp;</span><span>${(catMap[selectedCat] || []).length} \u79CD\u6750\u6599</span>`;
            panel.innerHTML = `
            <div class="mp-header">
              <div>
                <div class="mp-header-title">\u9009\u62E9\u6750\u6599</div>
                <div class="mp-header-crumb">${crumbHtml}</div>
              </div>
              <button class="mp-close" id="mpClose">\u2715</button>
            </div>
            <div class="mp-search-bar">
              <input id="mpSearch" type="text" placeholder="\u{1F50D} \u8F93\u5165\u6750\u6599\u540D\u79F0\u5FEB\u901F\u641C\u7D22..." value="${searchVal}">
            </div>
            <div class="mp-body">
              <div class="mp-cats" id="mpCats">
                ${allCats.map((cat) => `
                  <div class="mp-cat-item${!isSearch && cat === selectedCat ? " active" : ""}" data-cat="${cat}">
                    <span>${cat}</span>
                    <span class="mp-cat-count">${(catMap[cat] || []).length}</span>
                  </div>`).join("")}
              </div>
              <div class="mp-mats" id="mpMats">
                ${mats.length === 0 ? `<div class="mp-empty">\u6682\u65E0\u5339\u914D\u6750\u6599</div>` : mats.map((m) => `
                    <div class="mp-mat-item${m.name === selectedMat ? " selected" : ""}" data-name="${m.name}">
                      ${isSearch ? `<div style="font-size:10px;color:var(--text-dim);margin-bottom:2px;">${m.cat}</div>` : ""}
                      ${m.name}
                    </div>`).join("")}
              </div>
            </div>
            <div class="mp-footer">
              <span class="mp-footer-hint">${selectedMat ? '\u5DF2\u9009\uFF1A<strong style="color:var(--accent-dark);">' + selectedMat + "</strong>" : "\u8BF7\u4ECE\u53F3\u4FA7\u70B9\u51FB\u9009\u62E9\u6750\u6599"}</span>
              <div class="mp-footer-btns">
                <button class="mp-btn-cancel" id="mpCancel">\u53D6\u6D88</button>
                <button class="mp-btn-confirm" id="mpConfirm" ${!selectedMat ? "disabled" : ""}>\u786E\u8BA4\u9009\u62E9</button>
              </div>
            </div>`;
            document.body.appendChild(panel);
            if (!isSearch) {
              const activeItem = panel.querySelector(".mp-cat-item.active");
              if (activeItem) activeItem.scrollIntoView({ block: "nearest" });
            }
            const selectedItem = panel.querySelector(".mp-mat-item.selected");
            if (selectedItem) selectedItem.scrollIntoView({ block: "nearest" });
            const searchEl = panel.querySelector("#mpSearch");
            if (searchEl) {
              searchEl.focus();
            }
            panel.querySelector("#mpClose").onclick = () => {
              overlay.remove();
              panel.remove();
              commit(false, null);
            };
            panel.querySelector("#mpCancel").onclick = () => {
              overlay.remove();
              panel.remove();
              commit(false, null);
            };
            panel.querySelector("#mpConfirm").onclick = () => {
              overlay.remove();
              panel.remove();
              commit(true, () => {
                if (!selectedMat) return oldVal || null;
                if (["water", "gen", "valve", "valve_door"].includes(dataKey)) {
                  const libMatch = lookupMatLib(selectedMat);
                  if (libMatch) {
                    if (row.usage === null || row.usage === void 0 || row.usage === "") {
                      row.usage = libMatch.usage_rate ?? findMaterialDetailDefaultUsage(selectedMat, dataKey, row);
                      const u = parseFloat(row.usage);
                      if (!isNaN(u) && (row.is_buy === null || row.is_buy === void 0 || row.is_buy === "")) {
                        if (u > 1) row.is_buy = true;
                        else if (u > 0 && u <= 1) row.is_buy = false;
                      }
                    }
                    if (!row.category || row.category === "") row.category = libMatch.category;
                  }
                }
                return selectedMat;
              });
            };
            panel.querySelector("#mpCats").addEventListener("click", (e) => {
              const item = e.target.closest(".mp-cat-item");
              if (!item) return;
              selectedCat = item.dataset.cat;
              searchVal = "";
              buildPanel();
            });
            panel.querySelector("#mpMats").addEventListener("click", (e) => {
              const item = e.target.closest(".mp-mat-item");
              if (!item) return;
              selectedMat = item.dataset.name;
              buildPanel();
            });
            panel.querySelector("#mpMats").addEventListener("dblclick", (e) => {
              const item = e.target.closest(".mp-mat-item");
              if (!item) return;
              selectedMat = item.dataset.name;
              overlay.remove();
              panel.remove();
              commit(true, () => {
                if (["water", "gen", "valve", "valve_door"].includes(dataKey)) {
                  const libMatch = lookupMatLib(selectedMat);
                  if (libMatch) {
                    if (row.usage === null || row.usage === void 0 || row.usage === "") {
                      row.usage = libMatch.usage_rate ?? findMaterialDetailDefaultUsage(selectedMat, dataKey, row);
                      const u = parseFloat(row.usage);
                      if (!isNaN(u) && (row.is_buy === null || row.is_buy === void 0 || row.is_buy === "")) {
                        if (u > 1) row.is_buy = true;
                        else if (u > 0 && u <= 1) row.is_buy = false;
                      }
                    }
                    if (!row.category || row.category === "") row.category = libMatch.category;
                  }
                }
                return selectedMat;
              });
            });
            panel.querySelector("#mpSearch").addEventListener("input", (e) => {
              searchVal = e.target.value;
              buildPanel();
            });
            panel.querySelector("#mpSearch").addEventListener("keydown", (e) => {
              if (e.key === "Escape") {
                overlay.remove();
                panel.remove();
                commit(false, null);
              }
              if (e.key === "Enter") {
                const mats2 = getMatsForDisplay();
                if (mats2.length === 1) {
                  selectedMat = mats2[0].name;
                  overlay.remove();
                  panel.remove();
                  commit(true, () => {
                    if (["water", "gen", "valve", "valve_door"].includes(dataKey)) {
                      const libMatch = lookupMatLib(selectedMat);
                      if (libMatch) {
                        if (row.usage === null || row.usage === void 0 || row.usage === "") {
                          row.usage = libMatch.usage_rate ?? findMaterialDetailDefaultUsage(selectedMat, dataKey, row);
                          const u = parseFloat(row.usage);
                          if (!isNaN(u) && (row.is_buy === null || row.is_buy === void 0 || row.is_buy === "")) {
                            if (u > 1) row.is_buy = true;
                            else if (u > 0 && u <= 1) row.is_buy = false;
                          }
                        }
                        if (!row.category || row.category === "") row.category = libMatch.category;
                      }
                    }
                    return selectedMat;
                  });
                }
              }
            });
          }
          buildPanel();
          overlay.addEventListener("click", () => {
            overlay.remove();
            panel.remove();
            commit(false, null);
          });
        };
        const catMap = {};
        const catOrder = ["\u677F\u6750\u7C7B", "\u578B\u6750\u7C7B", "\u94F8\u4EF6\u7C7B", "\u953B\u4EF6\u7C7B", "\u94DC\u6750", "\u7EDD\u7F18\u6750\u6599", "\u4E0D\u9508\u94A2\u6750", "\u7BA1\u6750", "\u6210\u54C1\u4EF6", "\u8F74\u627F/\u8F74\u5957", "\u5BC6\u5C01\u4EF6", "\u9600\u95E8\u7C7B", "\u5176\u4ED6"];
        MAT_LIB.forEach((m) => {
          const cat = m.category || "\u5176\u4ED6";
          if (!catMap[cat]) catMap[cat] = [];
          if (!catMap[cat].includes(m.name)) catMap[cat].push(m.name);
        });
        for (const key of MATERIAL_PRICE_DB.keys()) {
          const libM = lookupMatLib(key);
          const cat = libM && libM.category ? libM.category : "\u5176\u4ED6";
          if (!catMap[cat]) catMap[cat] = [];
          if (!catMap[cat].includes(key)) catMap[cat].push(key);
        }
        const allCats = [...catOrder.filter((c) => catMap[c]), ...Object.keys(catMap).filter((c) => !catOrder.includes(c))];
        let initCat = allCats[0] || "";
        if (oldVal) {
          const libMatch = lookupMatLib(oldVal);
          if (libMatch && libMatch.category && catMap[libMatch.category]) initCat = libMatch.category;
          else {
            for (const [cat, names] of Object.entries(catMap)) {
              if (names.includes(oldVal)) {
                initCat = cat;
                break;
              }
            }
          }
        }
        const trigger = document.createElement("button");
        trigger.className = "mat-picker-trigger";
        trigger.innerHTML = (oldVal ? "\u270F\uFE0F " + oldVal : "\u{1F4C2} \u9009\u62E9\u6750\u6599\u2026") + ' <span style="font-size:10px;opacity:.6;">\u25BC</span>';
        cell.appendChild(trigger);
        setTimeout(() => trigger.click(), 0);
        let selectedCat = initCat;
        let selectedMat = oldVal || "";
        let searchVal = "";
        trigger.addEventListener("click", openPanel);
      } else if (col.key === "usage") {
        const input = document.createElement("input");
        input.type = "number";
        input.step = "0.01";
        input.min = "0";
        input.value = oldVal !== null && oldVal !== void 0 ? oldVal : "";
        cell.appendChild(input);
        input.focus();
        input.select();
        input.addEventListener("input", () => {
          const v = parseFloat(input.value);
          const bad = !isNaN(v) && (v < 0 || v > 1 && v % 1 !== 0);
          input.classList.toggle("invalid", bad);
          input.title = bad ? "\u5229\u7528\u7387(0-1\u4E4B\u95F4)\u6216\u6570\u91CF(\u5927\u4E8E1\u7684\u6574\u6570)" : "";
        });
        const getUsage = () => {
          const r = input.value.trim();
          return r === "" ? null : Math.round(parseFloat(r) * 100) / 100;
        };
        input.addEventListener("blur", () => commit(true, getUsage));
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            commit(true, getUsage);
          }
          if (e.key === "Escape") commit(false, null);
          if (e.key === "Tab") {
            e.preventDefault();
            commit(true, getUsage);
            EditableTable.focusNext(cell, config);
          }
        });
      } else {
        const input = document.createElement("input");
        const isNum = col.type === "number" || col.type === "money" || col.type === "weight" || col.type === "int" || col.type === "usageRate" || col.type === "qty";
        input.type = "text";
        if (isNum && col.type !== "qty") {
          input.setAttribute("inputmode", "decimal");
        }
        input.value = oldVal !== null && oldVal !== void 0 ? oldVal : "";
        if (isNum) {
          input.placeholder = "\u6570\u5B57 \u6216 =A+B";
          input.style.cssText = 'font-family: "SF Mono", Monaco, Consolas, monospace; color: var(--text);';
        }
        cell.appendChild(input);
        input.focus();
        input.select();
        input.addEventListener("input", () => {
          if (input.value.startsWith("=")) {
            input.style.color = "var(--purple)";
            input.style.fontStyle = "italic";
          } else {
            input.style.color = "";
            input.style.fontStyle = "";
          }
          if (col.type === "usageRate") {
            const v = parseFloat(input.value);
            const bad = !isNaN(v) && (v < 0 || v > 1 && v % 1 !== 0);
            input.classList.toggle("invalid", bad);
            input.title = bad ? "\u5229\u7528\u7387(0-1\u4E4B\u95F4)\u6216\u6570\u91CF(\u5927\u4E8E1\u7684\u6574\u6570)" : "";
          }
        });
        const getVal = () => {
          const raw = input.value.trim();
          if (raw === "") return null;
          if (isNum && raw.startsWith("=")) {
            const expr = raw.substring(1);
            let resolved = expr;
            if (row) {
              for (const [k, v] of Object.entries(row)) {
                const numV = parseFloat(v);
                if (!isNaN(numV)) {
                  resolved = resolved.replace(new RegExp("\\b" + k + "\\b", "gi"), String(numV));
                }
              }
            }
            try {
              const result = evaluateFormulaSafe(expr, row);
              showToast("\u2713 \u5DF2\u8BA1\u7B97: " + result);
              return result;
            } catch (e) {
              showToast("\u26A0\uFE0F \u8BA1\u7B97\u9519\u8BEF: " + e.message + "\uFF0C\u5DF2\u4FDD\u5B58\u4E3A\u6587\u672C");
              return raw;
            }
          }
          if (isNum && col.type !== "qty") {
            const n = parseFloat(raw);
            return isNaN(n) ? raw || null : n;
          }
          if (col.type === "usageRate") return Math.round(parseFloat(raw) * 100) / 100;
          return raw;
        };
        input.addEventListener("blur", () => commit(true, getVal));
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            commit(true, getVal);
          }
          if (e.key === "Escape") commit(false, null);
          if (e.key === "Tab") {
            e.preventDefault();
            commit(true, getVal);
            EditableTable.focusNext(cell, config);
          }
        });
      }
    },
    focusNext(cell, config) {
      const tr = cell.parentElement;
      const nextCell = tr.nextElementSibling ? tr.nextElementSibling.querySelector(`[data-col="${cell.dataset.col}"]`) : null;
      if (nextCell && !nextCell.classList.contains("formula-cell")) {
        nextCell.click();
      }
    },
    deleteRow(dataKey, idx) {
      const items = DATA[dataKey];
      if (!items || idx >= items.length) return;
      const row = items[idx];
      const name = row.name || row.seq || `\u7B2C${idx + 1}\u884C`;
      const seqStr = String(row.seq || "");
      const childIndices = [];
      items.forEach((r, i) => {
        if (i !== idx && String(r.seq || "").startsWith(seqStr + ".")) childIndices.push(i);
      });
      let deleteChildren = false;
      if (childIndices.length > 0) {
        const choice = confirm(`"${name}" \u4E0B\u6709 ${childIndices.length} \u4E2A\u5B50\u884C\u3002

\u786E\u5B9A\uFF1A\u540C\u65F6\u5220\u9664\u6240\u6709\u5B50\u884C
\u53D6\u6D88\uFF1A\u4EC5\u5220\u9664\u6B64\u884C\uFF0C\u4FDD\u7559\u5B50\u884C`);
        deleteChildren = choice;
      } else {
        if (!confirm(`\u786E\u5B9A\u8981\u5220\u9664 "${name}" \u5417\uFF1F`)) return;
      }
      takeProjectSnapshot("\u5220\u9664\u8868\u683C\u884C");
      const collapsePrefix = `et_collapsed_${dataKey}_`;
      const toDeleteSeqs = /* @__PURE__ */ new Set();
      toDeleteSeqs.add(seqStr);
      if (deleteChildren) {
        childIndices.forEach((i) => toDeleteSeqs.add(String(items[i].seq || "")));
      }
      for (let s = 0; s < sessionStorage.length; s++) {
        const key = sessionStorage.key(s);
        if (key && key.startsWith(collapsePrefix)) {
          const storedSeq = key.substring(collapsePrefix.length);
          if (toDeleteSeqs.has(storedSeq) || [...toDeleteSeqs].some((ds) => storedSeq.startsWith(ds + "."))) {
            sessionStorage.removeItem(key);
            s--;
          }
        }
      }
      if (deleteChildren) {
        const toDelete = /* @__PURE__ */ new Set([idx, ...childIndices]);
        for (let i = items.length - 1; i >= 0; i--) {
          if (toDelete.has(i)) items.splice(i, 1);
        }
      } else {
        items.splice(idx, 1);
      }
      FormulaEngine.recalcTable(dataKey);
      persistData();
      if ([
        "water",
        "gen",
        "valve",
        "valve_door",
        "water_parts",
        "gen_parts",
        "valve_parts",
        "water_tools",
        "gen_tools",
        "valve_tools",
        "automation",
        "monitoring",
        "liaison"
      ].includes(dataKey)) {
        _sidebarOverrides.clear();
      }
      const config = _tableConfigs[Object.keys(_tableConfigs).find((k) => _tableConfigs[k].dataKey === dataKey)];
      if (config) EditableTable.render(config);
      renderAll();
      showToast(`\u5DF2\u5220\u9664: ${name}`);
    },
    addRow(dataKey) {
      const items = DATA[dataKey];
      if (!items) return;
      const isMatBOM = ["water", "gen", "valve", "valve_door"].includes(dataKey);
      const newRow = {};
      if (items.length > 0) {
        Object.keys(items[0]).forEach((k) => {
          newRow[k] = null;
        });
      }
      if (isMatBOM) {
        newRow.category = "";
        newRow.seq = String(items.length + 1);
        newRow.name = "\u65B0\u9879\u76EE";
        newRow.material = "";
        newRow.replacement = "";
        newRow.weight = 0;
        newRow.usage = 0.7;
        newRow.is_buy = false;
        newRow.amount = 0;
        newRow.remark = "";
      }
      if (["water_parts", "gen_parts", "valve_parts"].includes(dataKey)) {
        newRow.seq = items.length + 1;
        newRow.name = "\u65B0\u5907\u4EF6";
        newRow.qty = "";
        newRow.unit = "";
        newRow.spec = "";
        newRow.self = 0;
        newRow.buy = 0;
        newRow.total = 0;
      }
      if (["water_tools", "gen_tools", "valve_tools"].includes(dataKey)) {
        newRow.seq = items.length + 1;
        newRow.name = "\u65B0\u5DE5\u5177";
        newRow.qty = "";
        newRow.unit = "";
        newRow.weight = 0;
        newRow.self = 0;
        newRow.buy = 0;
        newRow.total = 0;
      }
      if (dataKey === "automation") {
        newRow.seq = items.length + 1;
        newRow.name = "\u65B0\u5143\u4EF6";
        newRow.model = "";
        newRow.unit = "\u4E2A";
        newRow.qty = 1;
        newRow.unit_price = 0;
        newRow.total = 0;
        newRow.usage = "";
        newRow.manufacturer = "";
      }
      if (dataKey === "monitoring") {
        newRow.seq = items.length + 1;
        newRow.function = "";
        newRow.name = "\u65B0\u8BBE\u5907";
        newRow.model = "";
        newRow.unit = "\u4E2A";
        newRow.qty = 1;
        newRow.unit_price = 0;
        newRow.total = 0;
        newRow.remark = "";
      }
      if (dataKey === "liaison") {
        newRow.seq = items.length + 1;
        newRow.name = "\u65B0\u9879\u76EE";
        newRow.location = "";
        newRow.person_days = 0;
        newRow.unit_price = 0;
        newRow.total = 0;
        newRow.remark = "";
      }
      takeProjectSnapshot("\u65B0\u589E\u8868\u683C\u884C");
      items.push(newRow);
      FormulaEngine.recalcTable(dataKey);
      persistData();
      if ([
        "water",
        "gen",
        "valve",
        "valve_door",
        "water_parts",
        "gen_parts",
        "valve_parts",
        "water_tools",
        "gen_tools",
        "valve_tools",
        "automation",
        "monitoring",
        "liaison"
      ].includes(dataKey)) {
        _sidebarOverrides.clear();
      }
      const config = _tableConfigs[Object.keys(_tableConfigs).find((k) => _tableConfigs[k].dataKey === dataKey)];
      if (config) EditableTable.render(config);
      renderAll();
      showToast("\u5DF2\u6DFB\u52A0\u65B0\u884C");
    },
    // 在指定行后插入新行
    insertAfter(dataKey, afterIdx) {
      const items = DATA[dataKey];
      if (!items || afterIdx >= items.length) return;
      const afterItem = items[afterIdx];
      const isMatBOM = ["water", "gen", "valve", "valve_door"].includes(dataKey);
      const newRow = {};
      if (items.length > 0) {
        Object.keys(items[0]).forEach((k) => {
          newRow[k] = null;
        });
      }
      if (isMatBOM) {
        newRow.seq = generateNextSeq(items, afterItem);
        newRow.name = "\u65B0\u9879\u76EE";
        newRow.category = "";
        newRow.material = "";
        newRow.replacement = "";
        newRow.weight = 0;
        newRow.usage = 0.7;
        newRow.is_buy = false;
        newRow.amount = 0;
        newRow.remark = "";
        if (afterItem.category && afterItem.category.trim() === "") {
          newRow.category = afterItem.category;
        }
      } else if (["water_parts", "gen_parts", "valve_parts"].includes(dataKey)) {
        newRow.seq = generateNextSeq(items, afterItem);
        newRow.name = "\u65B0\u5907\u4EF6";
        newRow.qty = "";
        newRow.unit = "";
        newRow.spec = "";
        newRow.self = 0;
        newRow.buy = 0;
        newRow.total = 0;
      } else if (["water_tools", "gen_tools", "valve_tools"].includes(dataKey)) {
        newRow.seq = generateNextSeq(items, afterItem);
        newRow.name = "\u65B0\u5DE5\u5177";
        newRow.qty = "";
        newRow.unit = "";
        newRow.weight = 0;
        newRow.self = 0;
        newRow.buy = 0;
        newRow.total = 0;
      } else if (dataKey === "automation") {
        newRow.seq = generateNextSeq(items, afterItem);
        newRow.name = "\u65B0\u5143\u4EF6";
        newRow.model = "";
        newRow.unit = "\u4E2A";
        newRow.qty = 1;
        newRow.unit_price = 0;
        newRow.total = 0;
        newRow.usage = "";
        newRow.manufacturer = "";
      } else if (dataKey === "monitoring") {
        newRow.seq = generateNextSeq(items, afterItem);
        newRow.function = "";
        newRow.name = "";
        newRow.model = "";
        newRow.unit = "\u4E2A";
        newRow.qty = 1;
        newRow.unit_price = 0;
        newRow.total = 0;
        newRow.remark = "";
      } else if (dataKey === "liaison") {
        newRow.seq = generateNextSeq(items, afterItem);
        newRow.name = "";
        newRow.location = "";
        newRow.person_days = 0;
        newRow.unit_price = 0;
        newRow.total = 0;
        newRow.remark = "";
      }
      takeProjectSnapshot("\u63D2\u5165\u540C\u7EA7\u884C");
      items.splice(afterIdx + 1, 0, newRow);
      FormulaEngine.recalcTable(dataKey);
      persistData();
      if ([
        "water",
        "gen",
        "valve",
        "valve_door",
        "water_parts",
        "gen_parts",
        "valve_parts",
        "water_tools",
        "gen_tools",
        "valve_tools",
        "automation",
        "monitoring",
        "liaison"
      ].includes(dataKey)) {
        _sidebarOverrides.clear();
      }
      const config = _tableConfigs[Object.keys(_tableConfigs).find((k) => _tableConfigs[k].dataKey === dataKey)];
      if (config) EditableTable.render(config);
      renderAll();
      showToast("\u5DF2\u5728 " + (afterItem.seq || afterItem.name || "") + " \u540E\u63D2\u5165\u65B0\u884C");
    },
    toggleCollapse(dataKey, seq, btn) {
      const key = `et_collapsed_${dataKey}_${seq}`;
      const isNowCollapsed = sessionStorage.getItem(key) !== "1";
      if (isNowCollapsed) {
        sessionStorage.setItem(key, "1");
      } else {
        sessionStorage.removeItem(key);
      }
      if (btn) btn.classList.toggle("collapsed", isNowCollapsed);
      const configKey = Object.keys(_tableConfigs).find((k) => _tableConfigs[k].dataKey === dataKey);
      const config = configKey ? _tableConfigs[configKey] : null;
      if (config) {
        EditableTable.render(config);
      } else {
        const visibleTable = document.querySelector(`table[data-datakey="${dataKey}"]`) || document.getElementById("matTable");
        if (visibleTable) {
          const fallbackKey = Object.keys(_tableConfigs).find((k) => _tableConfigs[k].tableId === visibleTable.id);
          if (fallbackKey) EditableTable.render(_tableConfigs[fallbackKey]);
        }
      }
    },
    addChildRow(dataKey, parentIdx) {
      const items = DATA[dataKey];
      if (!items || parentIdx >= items.length) return;
      const parentItem = items[parentIdx];
      const isMatBOM = ["water", "gen", "valve", "valve_door"].includes(dataKey);
      const newRow = {};
      Object.keys(items[0]).forEach((k) => {
        newRow[k] = null;
      });
      newRow.seq = generateChildSeq(items, parentItem);
      if (isMatBOM) {
        newRow.name = "\u65B0\u9879\u76EE";
        newRow.category = "";
        newRow.material = "";
        newRow.replacement = "";
        newRow.weight = 0;
        newRow.usage = 0.7;
        newRow.is_buy = false;
        newRow.amount = 0;
        newRow.remark = "";
      } else {
        const p = items[parentIdx] || {};
        Object.keys(p).forEach((k) => {
          if (k === "seq") return;
          newRow[k] = typeof p[k] === "number" ? 0 : k === "name" || k === "function" ? "\u65B0\u9879\u76EE" : null;
        });
      }
      const parentSeq = String(parentItem.seq);
      let insertIdx = parentIdx;
      for (let i = parentIdx + 1; i < items.length; i++) {
        const s = String(items[i].seq || "");
        if (s.startsWith(parentSeq + ".")) {
          insertIdx = i;
        } else {
          break;
        }
      }
      takeProjectSnapshot("\u63D2\u5165\u5B50\u884C");
      items.splice(insertIdx + 1, 0, newRow);
      const collapseKey = `et_collapsed_${dataKey}_${parentSeq}`;
      sessionStorage.removeItem(collapseKey);
      FormulaEngine.recalcTable(dataKey);
      persistData();
      _sidebarOverrides.clear();
      const config = _tableConfigs[Object.keys(_tableConfigs).find((k) => _tableConfigs[k].dataKey === dataKey)];
      if (config) EditableTable.render(config);
      renderAll();
      showToast("\u5DF2\u5728 " + (parentItem.seq || parentItem.name || "") + " \u4E0B\u6DFB\u52A0\u5B50\u884C " + newRow.seq);
    }
  };

  // js/src/import-wizard.js
  var TABLE_SCHEMAS = {
    water: { label: "\u6C34\u8F6E\u673A\u6750\u6599\u660E\u7EC6", group: "\u6750\u6599\u660E\u7EC6(BOM)", fields: [
      { key: "category", label: "\u5206\u7C7B", type: "text" },
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "material", label: "\u6750\u6599", type: "text" },
      { key: "replacement", label: "\u4EE3\u7528\u6750\u6599", type: "text" },
      { key: "weight", label: "\u91CD\u91CF(T)", type: "number" },
      { key: "usage", label: "\u5229\u7528\u7387/\u6570\u91CF", type: "usageRate" },
      { key: "is_buy", label: "\u81EA\u5236/\u5916\u8D2D", type: "bool" },
      { key: "amount", label: "\u91D1\u989D(\u4E07)", type: "money" },
      { key: "remark", label: "\u5907\u6CE8", type: "text" }
    ] },
    gen: { label: "\u53D1\u7535\u673A\u6750\u6599\u660E\u7EC6", group: "\u6750\u6599\u660E\u7EC6(BOM)", fields: [
      { key: "category", label: "\u5206\u7C7B", type: "text" },
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "material", label: "\u6750\u6599", type: "text" },
      { key: "replacement", label: "\u4EE3\u7528\u6750\u6599", type: "text" },
      { key: "weight", label: "\u91CD\u91CF(T)", type: "number" },
      { key: "usage", label: "\u5229\u7528\u7387/\u6570\u91CF", type: "usageRate" },
      { key: "is_buy", label: "\u81EA\u5236/\u5916\u8D2D", type: "bool" },
      { key: "amount", label: "\u91D1\u989D(\u4E07)", type: "money" },
      { key: "remark", label: "\u5907\u6CE8", type: "text" }
    ] },
    valve: { label: "\u8FDB\u6C34\u9600\u6750\u6599\u660E\u7EC6", group: "\u6750\u6599\u660E\u7EC6(BOM)", fields: [
      { key: "category", label: "\u5206\u7C7B", type: "text" },
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "material", label: "\u6750\u6599", type: "text" },
      { key: "replacement", label: "\u4EE3\u7528\u6750\u6599", type: "text" },
      { key: "weight", label: "\u91CD\u91CF(T)", type: "number" },
      { key: "usage", label: "\u5229\u7528\u7387/\u6570\u91CF", type: "usageRate" },
      { key: "is_buy", label: "\u81EA\u5236/\u5916\u8D2D", type: "bool" },
      { key: "amount", label: "\u91D1\u989D(\u4E07)", type: "money" },
      { key: "remark", label: "\u5907\u6CE8", type: "text" }
    ] },
    valve_door: { label: "\u9600\u95E8(\u95E8)\u6750\u6599\u660E\u7EC6", group: "\u6750\u6599\u660E\u7EC6(BOM)", fields: [
      { key: "category", label: "\u5206\u7C7B", type: "text" },
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "material", label: "\u6750\u6599", type: "text" },
      { key: "replacement", label: "\u4EE3\u7528\u6750\u6599", type: "text" },
      { key: "weight", label: "\u91CD\u91CF(T)", type: "number" },
      { key: "usage", label: "\u5229\u7528\u7387/\u6570\u91CF", type: "usageRate" },
      { key: "is_buy", label: "\u81EA\u5236/\u5916\u8D2D", type: "bool" },
      { key: "amount", label: "\u91D1\u989D(\u4E07)", type: "money" },
      { key: "remark", label: "\u5907\u6CE8", type: "text" }
    ] },
    water_parts: { label: "\u6C34\u8F6E\u673A\u5907\u4EF6", group: "\u5907\u4EF6", fields: [
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "qty", label: "\u6570\u91CF", type: "text" },
      { key: "unit", label: "\u5355\u4F4D", type: "text" },
      { key: "spec", label: "\u89C4\u683C", type: "text" },
      { key: "self", label: "\u81EA\u5236\u91D1\u989D(\u4E07)", type: "money" },
      { key: "buy", label: "\u5916\u8D2D\u91D1\u989D(\u4E07)", type: "money" },
      { key: "total", label: "\u5408\u8BA1(\u4E07)", type: "money" }
    ] },
    gen_parts: { label: "\u53D1\u7535\u673A\u5907\u4EF6", group: "\u5907\u4EF6", fields: [
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "qty", label: "\u6570\u91CF", type: "text" },
      { key: "unit", label: "\u5355\u4F4D", type: "text" },
      { key: "spec", label: "\u89C4\u683C", type: "text" },
      { key: "self", label: "\u81EA\u5236\u91D1\u989D(\u4E07)", type: "money" },
      { key: "buy", label: "\u5916\u8D2D\u91D1\u989D(\u4E07)", type: "money" },
      { key: "total", label: "\u5408\u8BA1(\u4E07)", type: "money" }
    ] },
    valve_parts: { label: "\u8FDB\u6C34\u9600\u5907\u4EF6", group: "\u5907\u4EF6", fields: [
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "qty", label: "\u6570\u91CF", type: "text" },
      { key: "unit", label: "\u5355\u4F4D", type: "text" },
      { key: "spec", label: "\u89C4\u683C", type: "text" },
      { key: "unit_price", label: "\u5355\u4EF7(\u5143)", type: "money" },
      { key: "total", label: "\u5408\u8BA1(\u5143)", type: "money" },
      { key: "buy", label: "\u5916\u8D2D\u91D1\u989D(\u5143)", type: "money" },
      { key: "material", label: "\u6750\u6599", type: "text" }
    ] },
    water_tools: { label: "\u6C34\u8F6E\u673A\u5DE5\u5177", group: "\u5DE5\u5177", fields: [
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "qty", label: "\u6570\u91CF", type: "text" },
      { key: "unit", label: "\u5355\u4F4D", type: "text" },
      { key: "spec", label: "\u89C4\u683C", type: "text" },
      { key: "weight", label: "\u91CD\u91CF(T)", type: "number" },
      { key: "self", label: "\u81EA\u5236\u91D1\u989D(\u4E07)", type: "money" },
      { key: "buy", label: "\u5916\u8D2D\u91D1\u989D(\u4E07)", type: "money" },
      { key: "total", label: "\u5408\u8BA1(\u4E07)", type: "money" }
    ] },
    gen_tools: { label: "\u53D1\u7535\u673A\u5DE5\u5177", group: "\u5DE5\u5177", fields: [
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "qty", label: "\u6570\u91CF", type: "text" },
      { key: "unit", label: "\u5355\u4F4D", type: "text" },
      { key: "spec", label: "\u89C4\u683C", type: "text" },
      { key: "weight", label: "\u91CD\u91CF(T)", type: "number" },
      { key: "self", label: "\u81EA\u5236\u91D1\u989D(\u4E07)", type: "money" },
      { key: "buy", label: "\u5916\u8D2D\u91D1\u989D(\u4E07)", type: "money" },
      { key: "total", label: "\u5408\u8BA1(\u4E07)", type: "money" }
    ] },
    valve_tools: { label: "\u8FDB\u6C34\u9600\u5DE5\u5177", group: "\u5DE5\u5177", fields: [
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "qty", label: "\u6570\u91CF", type: "text" },
      { key: "unit", label: "\u5355\u4F4D", type: "text" },
      { key: "spec", label: "\u89C4\u683C", type: "text" },
      { key: "weight", label: "\u91CD\u91CF(T)", type: "number" },
      { key: "self", label: "\u81EA\u5236\u91D1\u989D(\u4E07)", type: "money" },
      { key: "buy", label: "\u5916\u8D2D\u91D1\u989D(\u4E07)", type: "money" },
      { key: "total", label: "\u5408\u8BA1(\u4E07)", type: "money" },
      { key: "unit_price", label: "\u5355\u4EF7(\u5143)", type: "money" },
      { key: "material", label: "\u6750\u6599", type: "text" }
    ] },
    automation: { label: "\u81EA\u52A8\u5316\u5143\u4EF6", group: "\u5176\u4ED6", fields: [
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "model", label: "\u578B\u53F7", type: "text" },
      { key: "unit", label: "\u5355\u4F4D", type: "text" },
      { key: "qty", label: "\u6570\u91CF", type: "number" },
      { key: "unit_price", label: "\u5355\u4EF7(\u5143)", type: "money" },
      { key: "total", label: "\u603B\u4EF7(\u5143)", type: "money" },
      { key: "usage", label: "\u7528\u9014", type: "text" },
      { key: "manufacturer", label: "\u5382\u5BB6", type: "text" }
    ] },
    monitoring: { label: "\u5728\u7EBF\u76D1\u6D4B", group: "\u5176\u4ED6", fields: [
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "function", label: "\u529F\u80FD", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "model", label: "\u578B\u53F7", type: "text" },
      { key: "unit", label: "\u5355\u4F4D", type: "text" },
      { key: "qty", label: "\u6570\u91CF", type: "text" },
      { key: "unit_price", label: "\u5355\u4EF7(\u5143)", type: "money" },
      { key: "total", label: "\u603B\u4EF7(\u5143)", type: "money" },
      { key: "remark", label: "\u5907\u6CE8", type: "text" }
    ] },
    liaison: { label: "\u8BBE\u8054\u4F1A", group: "\u5176\u4ED6", fields: [
      { key: "seq", label: "\u5E8F\u53F7", type: "text" },
      { key: "name", label: "\u540D\u79F0", type: "text" },
      { key: "location", label: "\u5730\u70B9", type: "text" },
      { key: "person_days", label: "\u4EBA\u5929", type: "number" },
      { key: "unit_price", label: "\u5355\u4EF7(\u5143)", type: "money" },
      { key: "total", label: "\u5408\u8BA1(\u5143)", type: "money" },
      { key: "remark", label: "\u5907\u6CE8", type: "text" }
    ] },
    matlib: { label: "\u6750\u6599\u5E93", group: "\u5176\u4ED6", fields: [
      { key: "name", label: "\u6750\u6599\u540D\u79F0", type: "text" },
      { key: "spec", label: "\u89C4\u683C", type: "text" },
      { key: "category", label: "\u5206\u7C7B", type: "text" },
      { key: "price", label: "\u6807\u51C6\u4EF7\u683C(\u4E07/T)", type: "number" },
      { key: "usage_rate", label: "\u5229\u7528\u7387", type: "number" },
      { key: "remark", label: "\u5907\u6CE8", type: "text" }
    ] }
  };
  var FIELD_ALIASES = {
    seq: ["\u5E8F\u53F7", "\u7F16\u53F7", "\u5E8F\u865F", "no", "number", "order", "item", "id", "seq", "\u5E8F\u5217\u53F7", "\u987A\u5E8F\u53F7", "\u884C\u53F7", "\u884C\u6570"],
    name: ["\u540D\u79F0", "name", "\u9879\u76EE", "\u9879\u76EE\u540D\u79F0", "\u90E8\u4EF6", "\u96F6\u4EF6", "item", "part", "\u96F6\u4EF6\u540D\u79F0", "\u90E8\u4EF6\u540D\u79F0", "\u8BBE\u5907", "\u8BBE\u5907\u540D\u79F0", "\u6750\u6599\u540D\u79F0", "\u7269\u6599\u540D\u79F0", "\u5185\u5BB9", "\u8BF4\u660E"],
    category: ["\u5206\u7C7B", "\u7C7B\u522B", "category", "\u6750\u6599\u5206\u7C7B", "\u6750\u6599\u7C7B\u522B", "\u54C1\u79CD", "\u7C7B\u578B", "type", "\u79CD\u7C7B", "\u6750\u6599\u7C7B\u578B", "\u6750\u6599\u54C1\u79CD", "\u7EC4\u522B"],
    material: ["\u6750\u6599", "\u6750\u8D28", "material", "\u724C\u53F7", "\u6750\u6599\u724C\u53F7", "\u6750\u6599\u540D\u79F0", "spec", "\u89C4\u683C\u578B\u53F7", "\u6750\u6599\u89C4\u683C", "\u7269\u6599", "\u7269\u6599\u7F16\u7801", "\u7269\u6599\u53F7"],
    replacement: ["\u4EE3\u7528", "\u4EE3\u7528\u6750\u6599", "replacement", "\u66FF\u4EE3", "\u66FF\u4EE3\u6750\u6599", "\u4EE3\u7528\u6750\u8D28"],
    weight: ["\u91CD\u91CF", "weight", "\u91CD", "\u51C0\u91CD", "\u6BDB\u91CD", "\u5355\u91CD", "\u603B\u91CD", "T", "\u5428", "kg", "\u5343\u514B", "\u5343\u514B\u91CD", "\u91CD\u91CF(T)", "\u91CD\u91CF(t)", "\u91CD\u91CF\u5428"],
    usage: ["\u5229\u7528\u7387", "usage", "utilisation", "\u6750\u6599\u5229\u7528\u7387", "\u5229\u7528\u7CFB\u6570", "\u6750\u6599\u5229\u7528\u7CFB\u6570", "\u635F\u8017\u7387", "\u5229\u7528\u7387/\u6570\u91CF", "\u5229\u7528\u7387\u6570\u91CF"],
    usage_rate: ["\u5229\u7528\u7387", "usage", "usage_rate", "utilisation", "\u6750\u6599\u5229\u7528\u7387", "\u5229\u7528\u7CFB\u6570", "\u6750\u6599\u5229\u7528\u7CFB\u6570"],
    is_buy: ["\u81EA\u5236/\u5916\u8D2D", "\u81EA\u5236\u5916\u8D2D", "is_buy", "\u91C7\u8D2D", "\u5916\u8D2D", "\u81EA\u5236", "buy", "self", "\u91C7\u8D2D\u65B9\u5F0F", "\u5236\u4F5C\u65B9\u5F0F", "\u7C7B\u578B", "\u7C7B\u522B", "\u6765\u6E90", "\u6765\u6E90\u65B9\u5F0F", "\u6807\u4EF6", "\u662F\u5426\u6807\u4EF6", "\u6807\u51C6\u4EF6", "\u662F\u5426\u6807\u51C6\u4EF6"],
    amount: ["\u91D1\u989D", "amount", "\u603B\u4EF7", "\u603B\u91D1\u989D", "\u5408\u4EF7", "\u6210\u672C", "\u8D39\u7528", "cost", "price", "\u4EF7\u683C", "\u4E07", "\u4E07\u5143", "\u6750\u6599\u4EF7\u683C", "\u6750\u6599\u4EF7", "\u7269\u6599\u4EF7\u683C", "\u62A5\u4EF7", "\u5408\u8BA1(\u4E07)"],
    remark: ["\u5907\u6CE8", "remark", "\u8BF4\u660E", "note", "\u5907\u6CE8\u8BF4\u660E", "\u9644\u6CE8", "\u5907\u6CE8\u4FE1\u606F", "\u5907\u6CE8\u9879", "\u5907\u6CE8\u5185\u5BB9", "\u6CE8\u91CA"],
    qty: ["\u6570\u91CF", "qty", "quantity", "\u6570", "\u7528\u91CF", "\u53F0\u6570", "\u4EF6\u6570", "\u5957\u6570", "\u6570\u91CF(\u53F0\u5957)", "\u4E2A\u6570", "\u53EA\u6570", "\u652F\u6570"],
    unit: ["\u5355\u4F4D", "unit", "\u8BA1\u91CF\u5355\u4F4D", "units", "\u5EA6\u91CF\u5355\u4F4D", "measure", "\u89C4\u683C"],
    spec: ["\u89C4\u683C", "spec", "\u89C4\u683C\u578B\u53F7", "\u578B\u53F7\u89C4\u683C", "\u5C3A\u5BF8", "\u53C2\u6570", "\u63CF\u8FF0", "description", "\u6280\u672F\u53C2\u6570", "\u5916\u5F62\u5C3A\u5BF8"],
    self: ["\u81EA\u5236", "self", "\u81EA\u5236\u91D1\u989D", "\u81EA\u5236\u8D39", "\u81EA\u5236\u6210\u672C", "\u81EA\u5236\u5907\u4EF6", "\u81EA\u5236\u4EF6\u91D1\u989D"],
    buy: ["\u5916\u8D2D", "buy", "\u5916\u8D2D\u91D1\u989D", "\u5916\u8D2D\u8D39", "\u5916\u8D2D\u6210\u672C", "\u91C7\u8D2D\u91D1\u989D", "\u8D2D\u4EF7", "\u4E70\u5165", "\u5916\u8D2D\u4EF6\u91D1\u989D"],
    total: ["\u5408\u8BA1", "total", "\u603B\u8BA1", "\u5408\u4EF7", "\u603B\u4EF7", "\u603B\u91D1\u989D", "\u91D1\u989D", "\u603B\u8D39\u7528", "\u6C47\u603B", "\u5C0F\u8BA1"],
    model: ["\u578B\u53F7", "model", "\u578B\u53F7\u89C4\u683C", "type", "\u578B\u5F0F", "\u4EA7\u54C1\u578B\u53F7", "\u8BBE\u5907\u578B\u53F7"],
    unit_price: ["\u5355\u4EF7", "unit_price", "unit price", "price", "\u4EF7\u683C", "\u4EF7\u683C(\u5143)", "\u5143", "\u6BCF\u5355\u4F4D\u4EF7\u683C"],
    manufacturer: ["\u5382\u5BB6", "\u5382\u5546", "\u5236\u9020\u5546", "manufacturer", "\u751F\u4EA7\u5382\u5BB6", "\u54C1\u724C", "brand", "\u4F9B\u5E94\u5382\u5BB6", "\u4F9B\u8D27\u5546", "\u751F\u4EA7\u5546", "\u4EA7\u5730", "\u751F\u4EA7\u5355\u4F4D"],
    function: ["\u529F\u80FD", "\u7528\u9014", "function", "\u6D4B\u91CF\u9879\u76EE", "\u68C0\u6D4B\u9879\u76EE", "\u76D1\u6D4B\u5185\u5BB9", "\u76D1\u6D4B\u529F\u80FD", "\u4F5C\u7528"],
    location: ["\u5730\u70B9", "location", "\u4F4D\u7F6E", "\u573A\u6240", "place", "\u5730\u5740", "\u6240\u5728\u5730", "\u4F1A\u8BAE\u5730\u70B9"],
    person_days: ["\u4EBA\u5929", "\u5DE5\u65E5", "\u5DE5\u5929", "person_days", "\u4EBA\u65E5", "\u4EBA\u6570\xD7\u5929\u6570", "\u4EBA\u6570*\u5929\u6570", "\u4EBA\u5458", "\u4EBA\xB7\u5929", "\u4EBA\u6B21"],
    price: ["\u4EF7\u683C", "price", "\u6807\u51C6\u4EF7\u683C", "\u6750\u6599\u4EF7\u683C", "\u5355\u4EF7", "\u6807\u51C6\u4EF7", "\u5355\u4F4D\u4EF7\u683C", "\u4E07/T", "\u4E07\u5143/\u5428", "\u9884\u7B97\u4EF7", "\u5E02\u573A\u4EF7"],
    // For material library
    mat_name: ["\u6750\u6599\u540D\u79F0", "\u7269\u6599\u540D\u79F0", "\u540D\u79F0", "name", "\u6750\u6599", "\u7269\u6599"],
    mat_spec: ["\u89C4\u683C", "spec", "\u89C4\u683C\u578B\u53F7", "\u6750\u6599\u89C4\u683C", "\u578B\u53F7"],
    mat_category: ["\u5206\u7C7B", "\u7C7B\u522B", "category", "\u6750\u6599\u5206\u7C7B", "\u54C1\u79CD"],
    mat_price: ["\u4EF7\u683C", "price", "\u6807\u51C6\u4EF7\u683C", "\u5355\u4EF7", "\u4E07/T", "\u4E07\u5143/\u5428", "\u6750\u6599\u4EF7\u683C"],
    mat_remark: ["\u5907\u6CE8", "remark", "\u8BF4\u660E", "\u5907\u6CE8\u8BF4\u660E"]
  };
  var ImportWizard = {
    _state: {
      step: 0,
      file: null,
      fileName: "",
      workbook: null,
      sheets: [],
      selectedSheet: 0,
      targetTable: null,
      columnMappings: [],
      // [{ excelIdx, excelHeader, systemField }]
      parsedRows: [],
      previewRows: [],
      errors: [],
      validated: false,
      previewPage: 1,
      previewPageSize: 50,
      dupSeqs: []
    },
    // ---------- 入口 ----------
    start() {
      if (typeof XLSX === "undefined") {
        showToast("Excel\u89E3\u6790\u5E93\u672A\u52A0\u8F7D\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u5237\u65B0");
        return;
      }
      this._reset();
      this._renderOverlay();
      this._renderStep1_file();
    },
    cancel() {
      const overlay = document.getElementById("importWizardOverlay");
      if (overlay) overlay.remove();
      this._reset();
    },
    _reset() {
      this._state = {
        step: 0,
        file: null,
        fileName: "",
        workbook: null,
        sheets: [],
        selectedSheet: 0,
        targetTable: null,
        columnMappings: [],
        parsedRows: [],
        previewRows: [],
        errors: [],
        validated: false,
        previewPage: 1,
        previewPageSize: 50,
        dupSeqs: []
      };
    },
    // ---------- 渲染向导框架 ----------
    _renderOverlay() {
      const existing = document.getElementById("importWizardOverlay");
      if (existing) existing.remove();
      const overlay = document.createElement("div");
      overlay.id = "importWizardOverlay";
      overlay.className = "wizard-overlay";
      overlay.innerHTML = `<div class="wizard-modal" id="wizardModal">
      <div class="wizard-header" id="wizardHeader"></div>
      <div class="wizard-body" id="wizardBody"></div>
      <div class="wizard-footer" id="wizardFooter"></div>
    </div>`;
      document.body.appendChild(overlay);
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay && this._state.step > 0) {
          if (confirm("\u786E\u5B9A\u8981\u53D6\u6D88\u5BFC\u5165\u5417\uFF1F")) this.cancel();
        }
      });
      const handler = (e) => {
        if (e.key === "Escape") {
          if (this._state.step > 0) {
            if (confirm("\u786E\u5B9A\u8981\u53D6\u6D88\u5BFC\u5165\u5417\uFF1F")) {
              this.cancel();
              document.removeEventListener("keydown", handler);
            }
          }
        }
      };
      document.addEventListener("keydown", handler);
    },
    _renderStepper(current) {
      const steps = ["\u9009\u62E9\u6587\u4EF6", "\u9009\u62E9\u8868\u683C", "\u5217\u6620\u5C04", "\u9884\u89C8\u5BFC\u5165"];
      let html = '<div class="wizard-stepper">';
      for (let i = 0; i < steps.length; i++) {
        if (i > 0) html += `<span class="wizard-step-connector ${i < current ? "done" : ""}"></span>`;
        const cls = i + 1 === current ? "active" : i + 1 < current ? "done" : "";
        html += `<span class="wizard-step ${cls}">${i + 1}</span>`;
      }
      html += '</div><div class="wizard-step-labels">';
      for (let i = 0; i < steps.length; i++) {
        const cls = i + 1 === current ? "active" : "";
        html += `<span class="${cls}">${steps[i]}</span>`;
      }
      html += "</div>";
      html += '<button class="wizard-close" onclick="ImportWizard.cancel()">\u2715</button>';
      document.getElementById("wizardHeader").innerHTML = html;
    },
    _setBody(html) {
      document.getElementById("wizardBody").innerHTML = html;
    },
    _setFooter(html) {
      document.getElementById("wizardFooter").innerHTML = html;
    },
    // ---------- Step 1: 选择文件 ----------
    _renderStep1_file() {
      this._state.step = 1;
      this._renderStepper(1);
      this._setBody(`<div class="wizard-dropzone" id="wizardDropZone">
      <div class="wizard-dropzone-icon">\u{1F4C2}</div>
      <div class="wizard-dropzone-text">\u62D6\u62FD .xlsx / .xls / .csv \u6587\u4EF6\u5230\u6B64\u5904</div>
      <div class="wizard-dropzone-or">\u6216</div>
      <button class="btn primary" onclick="document.getElementById('wizardFileInput').click()">\u9009\u62E9\u6587\u4EF6</button>
      <input type="file" id="wizardFileInput" accept=".xlsx,.xls,.csv" style="display:none">
    </div>
    <div class="wizard-supported-formats">\u652F\u6301\u683C\u5F0F: .xlsx, .xls, .csv\uFF08\u4EFB\u610F\u5E26\u8868\u5934\u7684\u8868\u683C\uFF09</div>
    <div class="wizard-hint" style="margin-top:16px;text-align:center;">
      \u7CFB\u7EDF\u5C06\u81EA\u52A8\u8BC6\u522B\u5217\u542B\u4E49\u5E76\u6620\u5C04\u5230\u7CFB\u7EDF\u5B57\u6BB5\uFF0C\u65E0\u9700\u56FA\u5B9A\u6A21\u677F
    </div>`);
      this._setFooter('<span class="wizard-hint">\u8BF7\u9009\u62E9\u8981\u5BFC\u5165\u7684 Excel \u6587\u4EF6</span><button class="btn" onclick="ImportWizard.cancel()">\u53D6\u6D88</button>');
      const dz = document.getElementById("wizardDropZone");
      if (dz) {
        dz.addEventListener("dragover", (e) => {
          e.preventDefault();
          dz.classList.add("drag-active");
        });
        dz.addEventListener("dragleave", () => dz.classList.remove("drag-active"));
        dz.addEventListener("drop", (e) => {
          e.preventDefault();
          dz.classList.remove("drag-active");
          if (e.dataTransfer.files.length > 0) this._loadFile(e.dataTransfer.files[0]);
        });
      }
      const input = document.getElementById("wizardFileInput");
      if (input) {
        input.addEventListener("change", () => {
          if (input.files.length > 0) this._loadFile(input.files[0]);
        });
      }
    },
    _loadFile(file) {
      const ext = file.name.split(".").pop().toLowerCase();
      if (!["xlsx", "xls", "csv"].includes(ext)) {
        showToast("\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F: ." + ext);
        return;
      }
      this._state.file = file;
      this._state.fileName = file.name;
      const reader = new FileReader();
      if (ext === "csv") {
        reader.onload = (e) => {
          try {
            const wb = XLSX.read(e.target.result, { type: "string", raw: true });
            this._loadWorkbook(wb);
          } catch (err) {
            this._showError("\u6587\u4EF6\u89E3\u6790\u5931\u8D25: " + err.message);
          }
        };
        reader.readAsText(file, "utf-8");
      } else {
        reader.onload = (e) => {
          try {
            const wb = XLSX.read(e.target.result, { type: "array", raw: true });
            this._loadWorkbook(wb);
          } catch (err) {
            this._showError("\u6587\u4EF6\u89E3\u6790\u5931\u8D25: " + err.message + "\uFF08\u6587\u4EF6\u53EF\u80FD\u5DF2\u635F\u574F\u6216\u52A0\u5BC6\uFF09");
          }
        };
        reader.readAsArrayBuffer(file);
      }
    },
    _loadWorkbook(wb) {
      this._state.workbook = wb;
      const sheets = [];
      wb.SheetNames.forEach((name) => {
        const ws = wb.Sheets[name];
        const ref = ws["!ref"];
        const rowCount = ref ? XLSX.utils.decode_range(ref).e.r + 1 : 0;
        const json = XLSX.utils.sheet_to_json(ws, { defval: "", header: 1, raw: false });
        let headerIdx = 0;
        for (let i = 0; i < Math.min(5, json.length); i++) {
          const row = json[i] || [];
          const nonEmpty = row.filter((c) => String(c).trim() !== "").length;
          const firstCell = String(row[0] || "").trim();
          if (nonEmpty >= 3 && firstCell.length < 30) {
            headerIdx = i;
            break;
          }
        }
        const rawHeaders = (json[headerIdx] || []).map((h, i) => {
          const val = String(h).trim();
          return val || `\u5217${i + 1}`;
        });
        let data = json.slice(headerIdx + 1);
        let lastNonEmpty = rawHeaders.length - 1;
        while (lastNonEmpty >= 0) {
          const hasData = data.some((row) => row[lastNonEmpty] !== void 0 && String(row[lastNonEmpty]).trim() !== "");
          if (hasData) break;
          lastNonEmpty--;
        }
        const headers = rawHeaders.slice(0, lastNonEmpty + 1);
        if (headers.length > 0) {
          sheets.push({ name, rowCount, headers, data });
        }
      });
      if (sheets.length === 0) {
        this._showError("\u6587\u4EF6\u4E2D\u672A\u627E\u5230\u5305\u542B\u8868\u5934\u7684\u6709\u6548\u6570\u636E");
        return;
      }
      this._state.sheets = sheets;
      this._state.selectedSheet = 0;
      this._renderStep2_table();
    },
    _showError(msg) {
      document.getElementById("wizardBody").innerHTML = `<div class="wizard-error-banner">${msg}</div>`;
      document.getElementById("wizardFooter").innerHTML = '<button class="btn" onclick="ImportWizard._renderStep1_file()">\u8FD4\u56DE\u91CD\u8BD5</button>';
    },
    // ---------- Step 2: 选择目标表 ----------
    _renderStep2_table() {
      this._state.step = 2;
      this._renderStepper(2);
      const sheets = this._state.sheets;
      const selSheet = this._state.selectedSheet;
      let sheetHtml = '<div class="wizard-step-title">\u9009\u62E9\u5DE5\u4F5C\u8868</div><div class="wizard-sheet-select">';
      sheets.forEach((s, i) => {
        const active = i === selSheet ? "active" : "";
        sheetHtml += `<div class="wizard-sheet-option ${active}" onclick="ImportWizard._selectSheet(${i})">\u{1F4C4} ${s.name} <span class="wizard-sheet-rows">(${s.rowCount} \u884C)</span></div>`;
      });
      sheetHtml += "</div>";
      const currentHeaders = sheets[selSheet].headers;
      const detected = this._detectTargetTable(currentHeaders, sheets[selSheet].name);
      const groups = {};
      Object.keys(TABLE_SCHEMAS).forEach((key) => {
        const schema = TABLE_SCHEMAS[key];
        if (!groups[schema.group]) groups[schema.group] = [];
        groups[schema.group].push({ key, label: schema.label });
      });
      let tableHtml = '<div class="wizard-step-title" style="margin-top:16px;">\u5BFC\u5165\u76EE\u6807</div>';
      tableHtml += '<div class="wizard-table-grid">';
      Object.keys(groups).forEach((group) => {
        groups[group].forEach(({ key, label }) => {
          const isMatch = detected === key;
          const active = this._state.targetTable === key ? "active" : "";
          const matchBadge = isMatch ? '<span class="wizard-badge-match">\u63A8\u8350 \u2713</span>' : "";
          tableHtml += `<div class="wizard-table-card ${active}" data-table="${key}" onclick="ImportWizard._selectTable('${key}')">
          <div class="wizard-table-card-group">${group}</div>
          <div class="wizard-table-card-name">${label} ${matchBadge}</div>
        </div>`;
        });
      });
      tableHtml += "</div>";
      this._setBody(sheetHtml + tableHtml);
      this._setFooter(`<span class="wizard-hint">\u5DF2\u9009: ${sheets[selSheet].name} (${currentHeaders.length} \u5217)</span>
      <button class="btn" onclick="ImportWizard.cancel()">\u53D6\u6D88</button>
      <button class="btn primary" onclick="ImportWizard._goToMapping()">\u4E0B\u4E00\u6B65 \u2192</button>`);
    },
    _selectSheet(idx) {
      this._state.selectedSheet = idx;
      this._state.targetTable = null;
      this._renderStep2_table();
    },
    _selectTable(key) {
      this._state.targetTable = key;
      this._renderStep2_table();
    },
    _goToMapping() {
      if (!this._state.targetTable) {
        showToast("\u8BF7\u5148\u9009\u62E9\u5BFC\u5165\u76EE\u6807\u8868");
        return;
      }
      const sheet = this._state.sheets[this._state.selectedSheet];
      this._computeAutoMappings(sheet.headers, sheet.data);
      this._renderStep3_mapping();
    },
    // ---------- 列名模糊匹配 ----------
    _detectTargetTable(headers, sheetName) {
      let bestKey = null;
      let bestScore = 0;
      const sheetHints = [];
      const s = (sheetName || "").toLowerCase();
      if (s.includes("\u53D1") || s.includes("\u7535\u673A") || s.includes("\u53D1\u7535\u673A")) sheetHints.push("gen");
      if (s.includes("\u6C34") || s.includes("\u6C34\u673A") || s.includes("\u6C34\u8F6E\u673A")) sheetHints.push("water");
      if (s.includes("\u9600") || s.includes("\u9600\u95E8")) sheetHints.push("valve");
      if (s.includes("\u81EA\u52A8")) sheetHints.push("automation");
      if (s.includes("\u76D1\u6D4B")) sheetHints.push("monitoring");
      if (s.includes("\u8BBE\u8054")) sheetHints.push("liaison");
      if (s.includes("\u6210\u54C1") || s.includes("\u6750\u6599\u4EF7")) sheetHints.push("matlib");
      for (const [tableKey, schema] of Object.entries(TABLE_SCHEMAS)) {
        let score = 0;
        for (const header of headers) {
          const match = this._fuzzyMatchField(header, schema.fields);
          if (match) score += match.confidence;
        }
        let normalized = score / schema.fields.length;
        for (const hint of sheetHints) {
          if (tableKey === hint || tableKey.startsWith(hint + "_")) {
            normalized += 0.15;
            break;
          }
        }
        if (normalized > bestScore) {
          bestScore = normalized;
          bestKey = tableKey;
        }
      }
      if (bestScore < 0.15) return null;
      return bestKey;
    },
    _fuzzyMatchField(header, fields) {
      const h = header.trim().toLowerCase().replace(/[^a-z0-9一-鿿]/g, "");
      const hOrig = header.trim();
      const hClean = hOrig.toLowerCase().replace(/\s+/g, "");
      let best = null;
      for (const field of fields) {
        const fkey = field.key.toLowerCase();
        if (h === fkey) {
          return { field, confidence: 1 };
        }
        const aliases = FIELD_ALIASES[field.key] || [];
        for (const alias of aliases) {
          const a = alias.toLowerCase().replace(/[^a-z0-9一-鿿]/g, "");
          if (!a) continue;
          if (hOrig.match(/[\n\r\t]/)) continue;
          if (a === hClean) {
            best = { field, confidence: 0.97 };
            continue;
          }
          if (h === a) {
            best = { field, confidence: 0.95 };
            continue;
          }
          if (h.includes(a) || a.includes(h)) {
            const sharedLen = Math.min(h.length, a.length);
            const score = Math.min(0.75, 0.5 + sharedLen * 0.05);
            if (!best || score > best.confidence || score === best.confidence && sharedLen > 0) {
              best = { field, confidence: score };
            }
          }
        }
        const label = field.label.toLowerCase().replace(/[^a-z0-9一-鿿]/g, "");
        if (label && h === label) {
          best = { field, confidence: 0.9 };
        } else if (label && (h.includes(label) || label.includes(h))) {
          const sharedLen = Math.min(h.length, label.length);
          const score = Math.min(0.7, 0.4 + sharedLen * 0.05);
          if (!best || score > best.confidence) {
            best = { field, confidence: score };
          }
        }
      }
      if (best && best.confidence >= 0.4) return best;
      return null;
    },
    // Detect field type from data samples (for columns with no meaningful header)
    _detectFieldFromData(samples, fields) {
      const allText = samples.join(" ").toLowerCase();
      for (const field of fields) {
        const aliases = FIELD_ALIASES[field.key] || [];
        let bestScore = 0;
        for (const alias of aliases) {
          const a = alias.toLowerCase();
          if (allText.includes(a)) {
            bestScore = Math.max(bestScore, 0.35);
          }
        }
        if (field.key === "category") {
          const catKeywords = ["\u94A2\u677F", "\u94DC\u6750", "\u4E0D\u9508\u94A2", "\u94F8\u94A2", "\u953B\u94A2", "\u578B\u6750", "\u7BA1\u6750", "\u7EDD\u7F18", "\u77FD\u94A2\u7247", "\u7845\u94A2\u7247", "\u6210\u54C1\u8F6C\u8F6E", "\u5BFC\u53F6", "\u5BC6\u5C01", "\u9600"];
          const matchCount = catKeywords.filter((k) => allText.includes(k)).length;
          if (matchCount >= 1) bestScore = Math.max(bestScore, 0.5 + matchCount * 0.03);
        }
        if (field.key === "material") {
          const matPatterns = /q235|q345|0cr|1cr|zg|ht\d|zcu|zcual|tds|h62|h58|20simn|wder|wo/;
          if (matPatterns.test(allText)) bestScore = Math.max(bestScore, 0.45);
        }
        if (field.key === "manufacturer") {
          const mfrKeywords = ["\u5382", "\u516C\u53F8", "\u96C6\u56E2", "\u6709\u9650\u516C\u53F8", "\u5382\u724C", "\u897F\u95E8\u5B50", "\u65BD\u8010\u5FB7"];
          if (mfrKeywords.some((k) => allText.includes(k))) bestScore = Math.max(bestScore, 0.45);
        }
        if (bestScore >= 0.35) {
          return { field, confidence: Math.min(0.6, bestScore) };
        }
      }
      return null;
    },
    _computeAutoMappings(headers, sampleRows) {
      const schema = TABLE_SCHEMAS[this._state.targetTable];
      if (!schema) return;
      const mappings = [];
      headers.forEach((header, idx) => {
        let match = this._fuzzyMatchField(header, schema.fields);
        if (!match && header.match(/^列\d+$/)) {
          const samples = (sampleRows || []).slice(0, 5).map(
            (r) => String(r[idx] !== void 0 ? r[idx] : "").trim()
          ).filter(Boolean);
          if (samples.length > 0) {
            match = this._detectFieldFromData(samples, schema.fields);
          }
        }
        mappings.push({
          excelIdx: idx,
          excelHeader: header,
          systemField: match ? match.field.key : "",
          confidence: match ? match.confidence : 0
        });
      });
      const fieldBestIdx = {};
      mappings.forEach((m, idx) => {
        if (!m.systemField) return;
        const existing = fieldBestIdx[m.systemField];
        if (existing === void 0 || m.confidence >= mappings[existing].confidence) {
          if (existing !== void 0) mappings[existing].systemField = "";
          fieldBestIdx[m.systemField] = idx;
        } else {
          m.systemField = "";
        }
      });
      this._state.columnMappings = mappings;
    },
    // ---------- Step 3: 列映射 ----------
    _renderStep3_mapping() {
      this._state.step = 3;
      this._renderStepper(3);
      const schema = TABLE_SCHEMAS[this._state.targetTable];
      const sheet = this._state.sheets[this._state.selectedSheet];
      const mappings = this._state.columnMappings;
      const dataRows = sheet.data;
      let rowsHtml = "";
      mappings.forEach((m, idx) => {
        const sampleVal = dataRows.length > 0 && dataRows[0][idx] !== void 0 ? String(dataRows[0][idx]).substring(0, 30) : "";
        let opts = '<option value="" ' + (m.systemField === "" ? "selected" : "") + ">-- \u5FFD\u7565\u6B64\u5217 --</option>";
        schema.fields.forEach((f) => {
          const selected = f.key === m.systemField ? "selected" : "";
          opts += `<option value="${f.key}" ${selected}>${f.label} (${f.key})</option>`;
        });
        let statusCls = "ignore";
        let statusText = "\u25CB";
        if (m.systemField && m.confidence >= 0.7) {
          statusCls = "good";
          statusText = "\u2713";
        } else if (m.systemField && m.confidence >= 0.4) {
          statusCls = "warn";
          statusText = "~";
        } else if (m.systemField) {
          statusCls = "bad";
          statusText = "?";
        }
        rowsHtml += `<tr>
        <td class="wizard-mapping-idx">${idx + 1}</td>
        <td class="wizard-mapping-header">${escHtml(m.excelHeader)}</td>
        <td class="wizard-mapping-arrow"><span class="wizard-mapping-status ${statusCls}">${statusText}</span></td>
        <td><select class="row-edit-select wizard-mapping-select" onchange="ImportWizard._updateMapping(${idx}, this.value)">${opts}</select></td>
        <td class="wizard-mapping-preview" id="wizPreview_${idx}">${escHtml(sampleVal)}</td>
      </tr>`;
      });
      this._setBody(`<div class="wizard-step-title">\u5217\u6620\u5C04 \u2014 \u5C06 Excel \u5217\u6620\u5C04\u5230\u300C${schema.label}\u300D\u5B57\u6BB5</div>
      <div class="wizard-hint" style="margin-bottom:12px;">\u2713 = \u9AD8\u7F6E\u4FE1\u5EA6\u5339\u914D &nbsp; ~ = \u4E2D\u7F6E\u4FE1\u5EA6 &nbsp; ? = \u4F4E\u7F6E\u4FE1\u5EA6 &nbsp; \u25CB = \u672A\u6620\u5C04</div>
      <div class="table-wrap" style="max-height:360px;">
      <table class="wizard-mapping-table">
        <thead><tr>
          <th style="width:36px;">#</th>
          <th>Excel \u5217\u540D</th>
          <th style="width:36px;text-align:center;">\u2192</th>
          <th>\u6620\u5C04\u5230\u7CFB\u7EDF\u5B57\u6BB5</th>
          <th style="width:180px;">\u9884\u89C8\u503C</th>
        </tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      </div>`);
      this._setFooter(`<span class="wizard-hint">\u81F3\u5C11\u6620\u5C04\u4E00\u4E2A\u5B57\u6BB5\u5373\u53EF\u7EE7\u7EED</span>
      <button class="btn" onclick="ImportWizard._renderStep2_table()">\u2190 \u4E0A\u4E00\u6B65</button>
      <button class="btn primary" onclick="ImportWizard._goToPreview()">\u4E0B\u4E00\u6B65 \u2192</button>`);
    },
    _updateMapping(idx, value) {
      if (this._state.columnMappings[idx]) {
        this._state.columnMappings[idx].systemField = value;
      }
    },
    // ---------- Step 4: 预览导入 ----------
    _goToPreview() {
      this._state.previewPage = 1;
      const mappings = this._state.columnMappings;
      const activeMappings = mappings.filter((m) => m.systemField);
      if (activeMappings.length === 0) {
        showToast("\u8BF7\u81F3\u5C11\u6620\u5C04\u4E00\u4E2A\u5B57\u6BB5");
        return;
      }
      const sheet = this._state.sheets[this._state.selectedSheet];
      const schema = TABLE_SCHEMAS[this._state.targetTable];
      const parsedRows = [];
      sheet.data.forEach((row, rowIdx) => {
        const obj = {};
        mappings.forEach((m) => {
          if (m.systemField) {
            const rawVal = row[m.excelIdx] !== void 0 ? row[m.excelIdx] : "";
            obj[m.systemField] = this._convertValue(rawVal, m.systemField, schema);
          }
        });
        obj._rowIdx = rowIdx + 2;
        obj._valid = true;
        obj._errors = [];
        parsedRows.push(obj);
      });
      while (parsedRows.length > 0) {
        const last = parsedRows[parsedRows.length - 1];
        const hasIdentifier = last.seq !== null && last.seq !== void 0 && String(last.seq).trim() !== "" || last.name !== null && last.name !== void 0 && String(last.name).trim() !== "";
        if (hasIdentifier) break;
        const hasValue = activeMappings.some((m) => {
          const v = last[m.systemField];
          return v !== null && v !== void 0 && String(v).trim() !== "" && String(v) !== "0";
        });
        if (!hasValue) {
          parsedRows.pop();
        } else {
          parsedRows.pop();
        }
      }
      let autoSeqCounter = 0;
      let lastRealSeq = "";
      parsedRows.forEach((row, i) => {
        const hasName = row.name && String(row.name).trim() !== "";
        const hasSeq = row.seq !== null && row.seq !== void 0 && String(row.seq).trim() !== "";
        if (hasName && !hasSeq) {
          autoSeqCounter++;
          if (lastRealSeq && /^\d+(\.\d+)*$/.test(lastRealSeq)) {
            row.seq = lastRealSeq + "." + autoSeqCounter;
          } else {
            row.seq = "\u7F3A\u5E8F\u53F7" + autoSeqCounter;
          }
        } else if (hasSeq) {
          lastRealSeq = String(row.seq).trim();
          autoSeqCounter = 0;
        }
      });
      if (["water", "gen", "valve", "valve_door"].includes(this._state.targetTable)) {
        parsedRows.forEach((row) => {
          const hasName = row.name && String(row.name).trim() !== "";
          if (hasName) return;
          if (row.material && String(row.material).trim() !== "") {
            row.name = String(row.material).trim();
          }
        });
      }
      const errors = [];
      parsedRows.forEach((row) => {
        this._validateRow(row, this._state.targetTable, errors);
      });
      if (["water", "gen", "valve", "valve_door"].includes(this._state.targetTable)) {
        this._fixTruncatedSeqs(parsedRows);
      }
      let dupSeqs = [];
      if (["water", "gen", "valve", "valve_door"].includes(this._state.targetTable)) {
        const seqCount = {};
        parsedRows.forEach((row) => {
          const s = String(row.seq || "").trim();
          if (!s) return;
          seqCount[s] = (seqCount[s] || 0) + 1;
        });
        dupSeqs = Object.keys(seqCount).filter((s) => seqCount[s] > 1);
        if (dupSeqs.length > 0) {
          console.warn("\u26A0\uFE0F \u68C0\u6D4B\u5230\u91CD\u590D\u5E8F\u53F7:", dupSeqs.join(", "), "\u2014 \u5BFC\u5165\u65F6\u5C06\u81EA\u52A8\u6D88\u91CD");
        }
      }
      this._state.dupSeqs = dupSeqs;
      this._state.parsedRows = parsedRows;
      this._state.errors = errors;
      this._state.validated = true;
      this._renderStep4_preview();
    },
    _fixTruncatedSeqs(rows) {
      const isNumeric = (s) => /^\d+(\.\d+)*$/.test(String(s));
      const groups = {};
      rows.forEach((row, idx) => {
        const seq = String(row.seq || "").trim();
        if (!seq || !isNumeric(seq)) return;
        const parts = seq.split(".");
        if (parts.length < 2) return;
        const parent = parts.slice(0, -1).join(".");
        if (!groups[parent]) groups[parent] = [];
        groups[parent].push({ idx, row, seq, lastSeg: parseInt(parts[parts.length - 1], 10) });
      });
      let fixedCount = 0;
      Object.values(groups).forEach((children) => {
        children.sort((a, b) => a.idx - b.idx);
        const seen = {};
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          const key = child.seq;
          if (seen[key] !== void 0 && i > 0) {
            const prev = children[i - 1];
            if (prev && prev.lastSeg > child.lastSeg) {
              const prefix = child.seq.substring(0, child.seq.lastIndexOf(".") + 1);
              const newLastSeg = prev.lastSeg + 1;
              const newSeq = prefix + newLastSeg;
              child.row.seq = newSeq;
              child.seq = newSeq;
              child.lastSeg = newLastSeg;
              fixedCount++;
            }
          } else {
            seen[key] = true;
          }
        }
      });
      if (fixedCount > 0) {
        console.log("\u{1F527} \u4FEE\u590D\u4E86 " + fixedCount + " \u4E2A\u56E0Excel\u6570\u5B57\u683C\u5F0F\u4E22\u5931\u7CBE\u5EA6\u7684\u5E8F\u53F7");
      }
    },
    _convertValue(val, fieldKey, schema) {
      if (val === null || val === void 0 || val === "") return null;
      const field = schema.fields.find((f) => f.key === fieldKey);
      if (!field) return val;
      switch (field.type) {
        case "number":
        case "money": {
          const n = parseFloat(String(val).replace(/[^0-9.\-]/g, ""));
          return isNaN(n) ? null : n;
        }
        case "usageRate": {
          const n = parseFloat(String(val).replace(/[^0-9.\-]/g, ""));
          if (isNaN(n)) return null;
          return n;
        }
        case "bool": {
          if (typeof val === "boolean") return val;
          const s = String(val).trim().toLowerCase();
          if (["\u662F", "\u5916\u8D2D", "true", "1", "yes", "\u91C7\u8D2D", "\u4E70", "\u6210\u54C1", "\u6807\u51C6"].includes(s)) return true;
          if (["\u5426", "\u81EA\u5236", "false", "0", "no", "\u81EA\u88FD", "\u751F\u4EA7", "\u975E\u6807"].includes(s)) return false;
          return null;
        }
        default:
          return String(val).trim();
      }
    },
    // 智能拆分组合的数量+单位值，如 "2套" → {qty:"2", unit:"套"}, "各2套(Q235)" → {qty:"2", unit:"套", extra:"Q235"}
    _smartSplitQty(rawVal) {
      if (rawVal === null || rawVal === void 0) return { qty: "", unit: "", extra: "" };
      const s = String(rawVal).trim();
      if (!s) return { qty: "", unit: "", extra: "" };
      const cleaned = s.replace(/^[各约共大约共计]+/, "").trim();
      let extra = "";
      let working = cleaned;
      const parenMatch = working.match(/[（(]([^)）]*)[)）]/);
      if (parenMatch) {
        extra = parenMatch[1];
        working = working.replace(/[（(][^)）]*[)）]/, "").trim();
      }
      const match = working.match(/^(\d+(?:\.\d+)?)\s*(.*)/);
      if (match) {
        return { qty: match[1], unit: match[2] || "", extra };
      }
      const looseMatch = working.match(/(\d+(?:\.\d+)?)\s*(.*)/);
      if (looseMatch) {
        return { qty: looseMatch[1], unit: looseMatch[2] || "", extra };
      }
      return { qty: "", unit: working, extra };
    },
    // 单位简写标准化：套→套, 台→台, 个→个, 件→件, 把→把, 根→根, 支→支, 条→条, 副→副, 组→组
    _normalizeUnit(rawUnit) {
      if (!rawUnit) return "";
      const u = rawUnit.trim();
      if (/^[套台个件把根支条副组只对张块卷筒包箱]$/.test(u)) return u;
      const map = { "\u53F0\u5957": "\u5957", "\u53F0/\u5957": "\u5957", "\u628A/\u5957": "\u628A", "\u628A/\u4E2A": "\u628A" };
      return map[u] || u;
    },
    _validateRow(row, tableKey, errors) {
      const schema = TABLE_SCHEMAS[tableKey];
      if (!schema) return;
      row._valid = true;
      row._errors = [];
      if ([
        "water",
        "gen",
        "valve",
        "valve_door",
        "water_parts",
        "gen_parts",
        "valve_parts",
        "water_tools",
        "gen_tools",
        "valve_tools",
        "automation",
        "monitoring",
        "liaison"
      ].includes(tableKey)) {
        if (!row.name || String(row.name).trim() === "") {
          row._valid = false;
          row._errors.push("\u7F3A\u5C11\u540D\u79F0");
        }
        if (!row.seq && row.seq !== 0) {
          row._valid = false;
          row._errors.push("\u7F3A\u5C11\u5E8F\u53F7");
        }
      }
      if (tableKey === "matlib") {
        if (!row.name || String(row.name).trim() === "") {
          row._valid = false;
          row._errors.push("\u7F3A\u5C11\u6750\u6599\u540D\u79F0");
        }
      }
      schema.fields.forEach((f) => {
        if ((f.type === "number" || f.type === "money") && row[f.key] !== null && row[f.key] !== void 0) {
          if (typeof row[f.key] !== "number" || isNaN(row[f.key])) {
            row._valid = false;
            row._errors.push(`${f.label}\u4E0D\u662F\u6709\u6548\u6570\u5B57`);
          }
        }
        if (f.type === "usageRate" && row[f.key] !== null && row[f.key] !== void 0) {
          const uv = row[f.key];
          if (typeof uv !== "number" || uv < 0 || uv > 1 && uv % 1 !== 0) {
            row._errors.push(`${f.label}\u5E94\u57280-1\u4E4B\u95F4\uFF08\u5229\u7528\u7387\uFF09\u6216\u4E3A\u6574\u6570\uFF08\u6570\u91CF\uFF09`);
          }
        }
      });
      if (!row._valid) {
        errors.push(row);
      }
    },
    _renderStep4_preview(page) {
      this._state.step = 4;
      this._renderStepper(4);
      const schema = TABLE_SCHEMAS[this._state.targetTable];
      const rows = this._state.parsedRows;
      const errors = this._state.errors;
      const validRows = rows.filter((r) => r._valid);
      const invalidCount = errors.length;
      const pageSize = this._state.previewPageSize || 50;
      const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
      const currentPage = Math.max(1, Math.min(totalPages, page || this._state.previewPage || 1));
      this._state.previewPage = currentPage;
      const startIdx = (currentPage - 1) * pageSize;
      const endIdx = Math.min(startIdx + pageSize, rows.length);
      const mappedFields = this._state.columnMappings.filter((m) => m.systemField).map((m) => m.systemField);
      const uniqueFields = [...new Set(mappedFields)];
      let tableHtml = '<table class="wizard-preview-table"><thead><tr>';
      uniqueFields.forEach((fk) => {
        const fieldDef = schema.fields.find((f) => f.key === fk);
        tableHtml += `<th>${fieldDef ? fieldDef.label : fk}</th>`;
      });
      tableHtml += '<th style="width:40px;">\u72B6\u6001</th></tr></thead><tbody>';
      for (let i = startIdx; i < endIdx; i++) {
        const row = rows[i];
        tableHtml += "<tr>";
        uniqueFields.forEach((fk) => {
          const val = row[fk] !== null && row[fk] !== void 0 ? String(row[fk]) : "";
          tableHtml += `<td>${escHtml(val)}</td>`;
        });
        const statusIcon = row._valid ? '<span class="wizard-mapping-status good">\u2713</span>' : '<span class="wizard-mapping-status bad" title="' + escHtml(row._errors.join("; ")) + '">\u2717</span>';
        tableHtml += `<td style="text-align:center;">${statusIcon}</td></tr>`;
      }
      tableHtml += "</tbody></table>";
      let pagerHtml = "";
      if (totalPages > 1) {
        const prevDisabled = currentPage <= 1 ? " disabled" : "";
        const nextDisabled = currentPage >= totalPages ? " disabled" : "";
        pagerHtml = `<div class="wizard-pager">
        <button class="btn btn-sm${prevDisabled}" onclick="ImportWizard._renderStep4_preview(${currentPage - 1})"${prevDisabled ? "" : ""} ${prevDisabled ? "disabled" : ""}>\u2190 \u4E0A\u4E00\u9875</button>
        <span class="wizard-pager-info">\u7B2C ${startIdx + 1}-${endIdx} \u884C\uFF0C\u5171 ${rows.length} \u884C (${currentPage}/${totalPages} \u9875)</span>
        <button class="btn btn-sm${nextDisabled}" onclick="ImportWizard._renderStep4_preview(${currentPage + 1})"${nextDisabled ? " disabled" : ""}>\u4E0B\u4E00\u9875 \u2192</button>
      </div>`;
      }
      let summaryHtml = "";
      if (invalidCount > 0) {
        summaryHtml = `<div class="wizard-validation-summary">
        <span class="wizard-validation-count">\u26A0\uFE0F \u6709 ${invalidCount} \u884C\u6570\u636E\u5B58\u5728\u95EE\u9898\uFF08\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5\u6216\u7C7B\u578B\u9519\u8BEF\uFF09</span>
        <button class="btn" onclick="ImportWizard._removeInvalidRows()">\u4EC5\u5BFC\u5165\u6709\u6548\u884C (${validRows.length} \u884C)</button>
      </div>`;
      }
      if (this._state.dupSeqs && this._state.dupSeqs.length > 0) {
        summaryHtml += `<div class="wizard-validation-summary" style="background:var(--red-light);border-color:var(--red);">
        <span class="wizard-validation-count" style="color:var(--red);">\u{1F534} \u68C0\u6D4B\u5230\u91CD\u590D\u5E8F\u53F7: ${this._state.dupSeqs.join(", ")} \u2014 \u53EF\u80FD\u56E0Excel\u5C06\u5E8F\u53F7\u5B58\u50A8\u4E3A\u6570\u5B57\uFF08\u59822.10\u21922.1\uFF09\uFF0C\u5BFC\u5165\u65F6\u5C06\u81EA\u52A8\u6D88\u91CD</span>
      </div>`;
      }
      this._setBody(`<div class="wizard-step-title">\u9884\u89C8 \u2014 \u5C06\u5BFC\u5165\u5230\u300C${schema.label}\u300D</div>
      ${summaryHtml}
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">
        \u6587\u4EF6: ${this._state.fileName} \u2192 \u5171\u89E3\u6790 ${rows.length} \u884C\uFF0C\u6709\u6548 ${validRows.length} \u884C\uFF08\u5C06\u8986\u76D6\u66FF\u6362\u76EE\u6807\u8868\u5168\u90E8\u6570\u636E\uFF09
      </div>
      <div class="table-wrap" style="max-height:400px;">${tableHtml}</div>
      ${pagerHtml}`);
      const hasValid = validRows.length > 0;
      this._setFooter(`<span class="wizard-hint">${hasValid ? "\u786E\u8BA4\u540E\u5C06\u8986\u76D6\u66FF\u6362\u76EE\u6807\u8868\u5168\u90E8\u6570\u636E\uFF0C\u53EF\u901A\u8FC7 Ctrl+Z \u64A4\u9500" : "\u6CA1\u6709\u53EF\u5BFC\u5165\u7684\u6709\u6548\u6570\u636E"}</span>
      <button class="btn" onclick="ImportWizard._renderStep3_mapping()">\u2190 \u4E0A\u4E00\u6B65</button>
      <button class="btn primary" onclick="ImportWizard._executeImport()" ${hasValid ? "" : "disabled"}>
        ${invalidCount > 0 ? "\u5BFC\u5165\u6709\u6548\u884C (" + validRows.length + ")" : "\u786E\u8BA4\u5BFC\u5165"}
      </button>`);
    },
    _removeInvalidRows() {
      this._state.parsedRows = this._state.parsedRows.filter((r) => r._valid);
      this._state.errors = [];
      this._renderStep4_preview();
      showToast("\u5DF2\u79FB\u9664\u95EE\u9898\u884C");
    },
    // ---------- 执行导入 ----------
    _executeImport() {
      const targetTable = this._state.targetTable;
      const schema = TABLE_SCHEMAS[targetTable];
      const rows = this._state.parsedRows.filter((r) => r._valid);
      if (rows.length === 0) {
        showToast("\u6CA1\u6709\u53EF\u5BFC\u5165\u7684\u6709\u6548\u6570\u636E");
        return;
      }
      if (typeof takeProjectSnapshot === "function") {
        takeProjectSnapshot("Excel\u5BFC\u5165");
      }
      console.group("\u{1F4E5} Excel \u5BFC\u5165\u8BCA\u65AD");
      console.log("\u76EE\u6807\u8868:", targetTable, "| \u6709\u6548\u884C\u6570:", rows.length);
      console.log("\u6587\u4EF6:", this._state.fileName);
      console.log("\u5217\u6620\u5C04:", this._state.columnMappings.filter((m) => m.systemField).map((m) => m.excelHeader + "\u2192" + m.systemField).join(", "));
      if (["water", "gen", "valve", "valve_door"].includes(targetTable)) {
        const childrenOf7 = rows.filter((r) => String(r.seq || "").startsWith("7."));
        console.log('seq \u4EE5 "7." \u5F00\u5934\u7684\u884C:', childrenOf7.length, "\u884C", childrenOf7.map((r) => r.seq + " " + r.name).join(", "));
        const allSeqs = rows.map((r) => String(r.seq || "")).filter(Boolean);
        console.log("\u5168\u90E8 seq \u503C:", allSeqs.join(", "));
        const parentSeqs = [...new Set(allSeqs.filter((s) => allSeqs.some((o) => o !== s && o.startsWith(s + "."))))];
        console.log("\u6709\u5B50\u8282\u70B9\u7684\u7236\u7EA7 seq:", parentSeqs.join(", "));
      }
      console.groupEnd();
      let added = 0, updated = 0;
      if (targetTable === "matlib") {
        rows.forEach((row) => {
          const name = String(row.name || "").trim();
          if (!name) return;
          const existingIdx = MAT_LIB.findIndex((m) => m.name === name);
          if (existingIdx >= 0) {
            if (row.spec) MAT_LIB[existingIdx].spec = row.spec;
            if (row.category) MAT_LIB[existingIdx].category = row.category;
            if (row.price !== null && row.price !== void 0 && row.price !== "") MAT_LIB[existingIdx].price = parseFloat(row.price);
            if (row.usage_rate !== null && row.usage_rate !== void 0 && row.usage_rate !== "") MAT_LIB[existingIdx].usage_rate = parseFloat(row.usage_rate);
            if (row.remark) MAT_LIB[existingIdx].remark = row.remark;
            updated++;
          } else {
            MAT_LIB.push({
              id: "MAT-" + String(_matLibNextId).padStart(4, "0"),
              name,
              spec: row.spec || "",
              category: row.category || "\u5176\u4ED6",
              price: parseFloat(row.price) || 0,
              usage_rate: parseFloat(row.usage_rate) || 0.8,
              remark: row.remark || ""
            });
            _matLibNextId++;
            added++;
          }
          if (name && row.price) {
            const key = name.replace(/\s+/g, "");
            MATERIAL_PRICE_DB.set(key, { p: parseFloat(row.price), u: "\u5BFC\u5165" });
          }
        });
        PRICE_CACHE && PRICE_CACHE.clear();
        persistMatLib();
        ["water", "gen", "valve", "valve_door"].forEach((k) => {
          if (DATA[k]) FormulaEngine.recalcTable(k);
        });
      } else {
        const hasQtyMapping = this._state.columnMappings.some((m) => m.systemField === "qty");
        const hasUnitMapping = this._state.columnMappings.some((m) => m.systemField === "unit");
        const hasSpecMapping = this._state.columnMappings.some((m) => m.systemField === "spec");
        const shouldExtractUnit = hasQtyMapping && !hasUnitMapping && schema.fields.some((f) => f.key === "unit");
        const shouldExtractSpec = !hasSpecMapping && schema.fields.some((f) => f.key === "spec");
        const newRows = [];
        rows.forEach((row) => {
          const newRow = {};
          schema.fields.forEach((f) => {
            newRow[f.key] = row[f.key] !== void 0 ? row[f.key] : null;
          });
          if (shouldExtractUnit && newRow.qty) {
            const split = this._smartSplitQty(newRow.qty);
            if (split.qty) newRow.qty = split.qty;
            if (split.unit && !newRow.unit) newRow.unit = this._normalizeUnit(split.unit);
            if (split.extra && shouldExtractSpec && !newRow.spec) newRow.spec = split.extra;
          }
          newRows.push(newRow);
          added++;
        });
        if (["water", "gen", "valve", "valve_door"].includes(targetTable)) {
          const seen = {};
          let dedupCount = 0;
          newRows.forEach((row) => {
            const origSeq = row.seq;
            if (!origSeq) return;
            const key = String(origSeq).trim();
            if (!key) return;
            if (seen[key]) {
              let suffix = 2;
              let newSeq = key + "-" + suffix;
              while (seen[newSeq]) {
                suffix++;
                newSeq = key + "-" + suffix;
              }
              row.seq = newSeq;
              seen[newSeq] = true;
              dedupCount++;
              console.log('\u{1F527} \u6D88\u91CD\u5E8F\u53F7: seq "' + key + '" \u2192 "' + newSeq + '" (' + (row.name || "(\u65E0\u540D\u79F0)") + ")");
            } else {
              seen[key] = true;
            }
          });
          if (dedupCount > 0) {
            console.log("\u{1F527} \u5171\u6D88\u91CD " + dedupCount + " \u6761\u91CD\u590D\u5E8F\u53F7");
          }
        }
        DATA[targetTable] = newRows;
        console.log("\u{1F4CA} DATA." + targetTable + ".length after import:", DATA[targetTable].length, "(expected:", newRows.length, ")");
        if (DATA[targetTable].length !== newRows.length) {
          console.error("\u274C \u884C\u6570\u4E0D\u5339\u914D! DATA=" + DATA[targetTable].length + " newRows=" + newRows.length);
        }
        autoFixSequences(targetTable);
        FormulaEngine.recalcTable(targetTable);
        if (["water", "gen", "valve", "valve_door"].includes(targetTable)) {
          FormulaEngine.recalcSubtotals(DATA[targetTable], targetTable);
          const items = DATA[targetTable];
          const beforeClean = items.length;
          for (let i = items.length - 1; i >= 0; i--) {
            const row = items[i];
            const w = parseFloat(row.weight);
            const hasWeight = !isNaN(w) && w > 0;
            const isSub = isSubtotalRow(row, items);
            const isBuy = row.is_buy === true;
            const hasMaterial = row.material && String(row.material).trim() !== "";
            const hasName = row.name && String(row.name).trim() !== "";
            const isEmptyRow = !hasWeight && !isSub && !isBuy && !hasMaterial && !hasName;
            if (isEmptyRow) {
              items.splice(i, 1);
            }
          }
          if (items.length < beforeClean) {
            console.log("\u{1F9F9} \u5DF2\u6E05\u7406 " + (beforeClean - items.length) + " \u884C\u65E0\u610F\u4E49\u7A7A\u6570\u636E (\u4FDD\u7559\u4E86" + items.length + "\u884C)");
          }
        }
        persistData();
      }
      if ([
        "water",
        "gen",
        "valve",
        "valve_door",
        "water_parts",
        "gen_parts",
        "valve_parts",
        "water_tools",
        "gen_tools",
        "valve_tools",
        "automation",
        "monitoring",
        "liaison"
      ].includes(targetTable)) {
        const prefix = `et_collapsed_${targetTable}_`;
        Object.keys(sessionStorage).filter((k) => k.startsWith(prefix)).forEach((k) => sessionStorage.removeItem(k));
      }
      renderAll();
      showToast(`\u2705 \u5BFC\u5165\u5B8C\u6210: \u5171\u8986\u76D6 ${added} \u6761\u6570\u636E`);
      this.cancel();
    }
  };
  window.auditBOMTable = function(tableKey) {
    tableKey = tableKey || typeof state !== "undefined" && state.currentMatTab || "water";
    const items = DATA[tableKey];
    if (!items || !Array.isArray(items)) {
      console.log("\u274C \u8868 " + tableKey + " \u65E0\u6570\u636E");
      return;
    }
    console.group("\u{1F50D} BOM \u8868\u8BCA\u65AD: " + tableKey + " (\u5171 " + items.length + " \u884C)");
    console.log("--- \u5168\u90E8\u884C ---");
    items.forEach((it, i) => {
      console.log(String(i).padStart(3) + " | seq: " + String(it.seq || "").padEnd(8) + " | name: " + (it.name || "(\u7A7A)") + " | material: " + (it.material || "").slice(0, 20) + " | weight: " + it.weight);
    });
    console.log("--- \u6811\u5F62\u7ED3\u6784 ---");
    (function printTree(parentSeq, indent) {
      var children = items.filter(function(it) {
        if (!parentSeq || parentSeq === "") return /^\d+$/.test(String(it.seq || ""));
        var c = String(it.seq || "");
        return c.startsWith(parentSeq + ".") && c.split(".").length === parentSeq.split(".").length + 1;
      });
      children.forEach(function(c) {
        var it = items.find(function(i) {
          return String(i.seq) === String(c.seq);
        });
        console.log(indent + c.seq + " " + (it ? it.name : "(\u672A\u627E\u5230)") + (it && it.material ? " [" + it.material + "]" : ""));
        printTree(c.seq, indent + "  ");
      });
    })("", "");
    console.log("--- \u6F5C\u5728\u95EE\u9898 ---");
    var seqCount = {};
    items.forEach(function(it) {
      var s = String(it.seq || "");
      seqCount[s] = (seqCount[s] || 0) + 1;
    });
    Object.keys(seqCount).filter(function(s) {
      return seqCount[s] > 1;
    }).forEach(function(s) {
      console.warn('\u26A0\uFE0F \u91CD\u590D\u5E8F\u53F7: "' + s + '" \u51FA\u73B0 ' + seqCount[s] + " \u6B21");
    });
    items.filter(function(it) {
      return !it.seq && it.seq !== 0;
    }).forEach(function(it) {
      console.warn("\u26A0\uFE0F \u7F3A\u5C11\u5E8F\u53F7: " + (it.name || "(\u65E0\u540D\u79F0)"));
    });
    console.log("--- \u5B50\u8282\u70B9\u7EDF\u8BA1 ---");
    var parents = items.filter(function(it) {
      return typeof isSubtotalRow === "function" && isSubtotalRow(it, items);
    });
    parents.forEach(function(p) {
      var count = items.filter(function(other) {
        return typeof isDirectChild === "function" && isDirectChild(String(p.seq), String(other.seq || ""));
      }).length;
      console.log("  seq=" + p.seq + " " + p.name + " \u2192 " + count + " \u4E2A\u5B50\u8282\u70B9");
    });
    console.groupEnd();
    return items.length;
  };

  // js/src/calculation.js
  var MAT_LIB2 = [];
  var _matLibNextId2 = 1;
  var MAT_IMPORT_LOG2 = [];
  function initMatLib() {
    const categoryMap = {
      "Q235": "\u677F\u6750\u7C7B",
      "Q345": "\u677F\u6750\u7C7B",
      "WDER": "\u677F\u6750\u7C7B",
      "0Cr": "\u4E0D\u9508\u94A2\u6750",
      "50W": "\u677F\u6750\u7C7B",
      "\u590D\u5408\u677F": "\u677F\u6750\u7C7B",
      "\u673A\u5EA7\u58C1": "\u677F\u6750\u7C7B",
      "\u78C1\u8F6D\u5708": "\u677F\u6750\u7C7B",
      "\u5706\u94A2": "\u578B\u6750\u7C7B",
      "\u94A2\u7BA1": "\u7BA1\u6750",
      "\u89D2\u94A2": "\u578B\u6750\u7C7B",
      "\u5DE5\u5B57\u94A2": "\u578B\u6750\u7C7B",
      "\u65E0\u7F1D\u94A2\u7BA1": "\u7BA1\u6750",
      "\u51B7\u62C9\u5706\u94A2": "\u578B\u6750\u7C7B",
      "\u8F6C\u8F6E": "\u94F8\u4EF6\u7C7B",
      "\u6DF7\u6D41": "\u94F8\u4EF6\u7C7B",
      "\u5BFC\u53F6": "\u94F8\u4EF6\u7C7B",
      "\u590D\u6742\u5927\u578B\u94F8\u4EF6": "\u94F8\u4EF6\u7C7B",
      "\u4E00\u822C\u5927\u578B\u94F8\u4EF6": "\u94F8\u4EF6\u7C7B",
      "\u4E00\u822C\u5C0F\u578B\u94F8\u4EF6": "\u94F8\u4EF6\u7C7B",
      "\u6C34\u673A\u4E3B\u8F74": "\u953B\u4EF6\u7C7B",
      "\u7535\u673A\u4E3B\u8F74": "\u953B\u4EF6\u7C7B",
      "\u4E3B\u8F74\u953B\u4EF6": "\u953B\u4EF6\u7C7B",
      "\u955C\u677F": "\u953B\u4EF6\u7C7B",
      "\u5C0F\u953B\u4EF6": "\u953B\u4EF6\u7C7B",
      "\u953B35": "\u953B\u4EF6\u7C7B",
      "\u953B34": "\u953B\u4EF6\u7C7B",
      "\u953B1Cr": "\u953B\u4EF6\u7C7B",
      "\u953B06": "\u953B\u4EF6\u7C7B",
      "\u4E91\u6BCD\u5E26": "\u7EDD\u7F18\u6750\u6599",
      "\u805A\u916F": "\u7EDD\u7F18\u6750\u6599",
      "NHN": "\u7EDD\u7F18\u6750\u6599",
      "\u73BB\u7483\u576F\u5E03": "\u7EDD\u7F18\u6750\u6599",
      "\u73BB\u5E03\u677F": "\u7EDD\u7F18\u6750\u6599",
      "\u9AD8\u5F3A\u5EA6\u73BB\u5E03\u677F": "\u7EDD\u7F18\u6750\u6599",
      "\u9632\u7535\u6655\u677F": "\u7EDD\u7F18\u6750\u6599",
      "\u9AD8\u963B\u5E26": "\u7EDD\u7F18\u6750\u6599",
      "\u4F4E\u963B\u5E26": "\u7EDD\u7F18\u6750\u6599",
      "\u4F4E\u963B\u5E03": "\u7EDD\u7F18\u6750\u6599",
      "F\u7EA7\u65E0\u7EAC\u5E26": "\u7EDD\u7F18\u6750\u6599",
      "\u65E0\u7EAC\u5E26": "\u7EDD\u7F18\u6750\u6599",
      "\u6DA4\u7EB6": "\u7EDD\u7F18\u6750\u6599",
      "SBEB": "\u94DC\u6750",
      "SBEQB": "\u94DC\u6750",
      "DSBE": "\u94DC\u6750",
      "TMR": "\u94DC\u6750",
      "\u5F02\u578B\u94DC\u6392": "\u94DC\u6750",
      "\u542B\u94F6\u94DC\u7EBF": "\u94DC\u6750",
      "\u94DC\u68D2": "\u94DC\u6750",
      "\u7070\u94F8\u94C1": "\u94F8\u4EF6\u7C7B",
      "\u94F8\u94DD\u9752\u94DC": "\u94F8\u4EF6\u7C7B",
      "\u94F8\u9521\u9752\u94DC": "\u94F8\u4EF6\u7C7B",
      "\u65E0\u78C1\u94A2": "\u578B\u6750\u7C7B",
      "\u5BC6\u5C01\u76D6": "\u94F8\u4EF6\u7C7B",
      "\u963B\u5C3C\u73AF": "\u94DC\u6750",
      "\u78B3\u94A2\u710A\u6761": "\u5176\u4ED6",
      "\u4E0D\u9508\u94A2\u710A\u4E1D": "\u5176\u4ED6",
      "\u6321\u98CE\u677F": "\u5176\u4ED6",
      "\u5DF4\u6C0F\u5408\u91D1": "\u5176\u4ED6",
      "\u5851\u6599\u74E6": "\u6210\u54C1\u4EF6",
      "\u6C34\u5BFC\u8F74\u74E6": "\u6210\u54C1\u4EF6",
      "\u4E0A\u5BFC\u8F74\u74E6": "\u6210\u54C1\u4EF6",
      "\u63A8\u529B\u8F74\u74E6": "\u6210\u54C1\u4EF6",
      "\u4E0B\u5BFC\u8F74\u74E6": "\u6210\u54C1\u4EF6",
      "\u4E0D\u9508\u94A2\u7BA1": "\u7BA1\u6750",
      "\u51B7\u5374\u5668\u94DC\u7BA1": "\u7BA1\u6750",
      "\u52B1\u78C1\u7535\u7F06": "\u5176\u4ED6",
      "\u4FE1\u53F7\u7535\u7F06": "\u5176\u4ED6",
      "\u52A8\u529B\u7535\u7F06": "\u5176\u4ED6",
      "\u7A7A\u6C14\u51B7\u5374\u5668": "\u6210\u54C1\u4EF6",
      "\u6D41\u9053\u55B7\u7802": "\u5176\u4ED6",
      "\u78B3\u5316\u94A8": "\u5176\u4ED6",
      "\u8717\u58F3\u5F39\u6027\u5C42": "\u5176\u4ED6",
      "\u9540\u94EC": "\u5176\u4ED6",
      "\u78B3\u7C89\u5236\u52A8": "\u6210\u54C1\u4EF6",
      "\u5237\u67B6": "\u6210\u54C1\u4EF6",
      "\u5438\u6392\u6CB9\u96FE": "\u6210\u54C1\u4EF6",
      "\u7535\u5237": "\u6210\u54C1\u4EF6",
      "\u5237\u63E1": "\u6210\u54C1\u4EF6",
      "\u6C7D\u8F6E\u673A\u6CB9": "\u5176\u4ED6",
      "\u4E2D\u5FC3\u70B9": "\u6210\u54C1\u4EF6",
      "\u789F\u7C27": "\u6210\u54C1\u4EF6",
      "\u7A7A\u6C14\u56F4\u5E26": "\u5BC6\u5C01\u4EF6",
      "\u5BC6\u5C01\u73AF": "\u5BC6\u5C01\u4EF6",
      "O\u5F62\u5708": "\u5BC6\u5C01\u4EF6",
      "\u8F74\u5957": "\u8F74\u627F/\u8F74\u5957",
      "\u5173\u8282\u8F74\u627F": "\u8F74\u627F/\u8F74\u5957",
      "V\u5F62\u7EC4\u5408\u5708": "\u5BC6\u5C01\u4EF6",
      "\u63A5\u529B\u5668": "\u6210\u54C1\u4EF6",
      "\u771F\u7A7A\u7834\u574F\u9600": "\u9600\u95E8\u7C7B",
      "\u624B\u52A8\u95F8\u9600": "\u9600\u95E8\u7C7B",
      "\u6DB2\u538B\u76D8\u578B\u9600": "\u9600\u95E8\u7C7B",
      "\u6DB2\u538B\u64CD\u4F5C\u9600": "\u9600\u95E8\u7C7B",
      "\u95F8\u9600": "\u9600\u95E8\u7C7B",
      "\u7535\u52A8\u8BD5\u538B\u6CF5": "\u6210\u54C1\u4EF6",
      "\u7535\u52A0\u70ED\u5668": "\u6210\u54C1\u4EF6",
      "\u5236\u52A8\u5668": "\u6210\u54C1\u4EF6"
    };
    function guessCat(key) {
      for (const [prefix, cat] of Object.entries(categoryMap)) {
        if (key.startsWith(prefix)) return cat;
      }
      return "\u5176\u4ED6";
    }
    MAT_LIB2 = [];
    _matLibNextId2 = 1;
    for (const [key, val] of MATERIAL_PRICE_DB2) {
      const existing = MAT_LIB2.find((m) => m.name === key);
      if (existing) continue;
      MAT_LIB2.push({
        id: "MAT-" + String(_matLibNextId2).padStart(4, "0"),
        name: key,
        spec: "",
        category: guessCat(key),
        price: val.p,
        usage_rate: 0.8,
        remark: ""
      });
      _matLibNextId2++;
    }
    try {
      const saved = localStorage.getItem("hydro_mat_lib");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          MAT_LIB2 = parsed;
          _matLibNextId2 = Math.max(...MAT_LIB2.map((m) => parseInt((m.id || "MAT-0000").replace("MAT-", ""), 10) || 0)) + 1;
        }
      }
    } catch (e) {
    }
    try {
      const saved = localStorage.getItem("hydro_import_log");
      if (saved) MAT_IMPORT_LOG2 = JSON.parse(saved);
    } catch (e) {
    }
  }
  function persistMatLib2() {
    try {
      localStorage.setItem("hydro_mat_lib", JSON.stringify(MAT_LIB2));
    } catch (e) {
    }
    try {
      localStorage.setItem("hydro_import_log", JSON.stringify(MAT_IMPORT_LOG2));
    } catch (e) {
    }
  }
  initMatLib();
  var DEFAULT_FORMULAS2 = {
    mat_amount_self: {
      label: "\u6750\u6599\u91D1\u989D\uFF08\u81EA\u5236\uFF09",
      expr: "weight / usage * price",
      desc: "\u91D1\u989D = \u91CD\u91CF \xF7 \u660E\u7EC6\u884C\u5229\u7528\u7387 \xD7 \u6750\u6599\u5E93\u6807\u51C6\u4EF7\u683C",
      vars: ["weight", "usage", "price"]
    },
    mat_amount_buy: {
      label: "\u6750\u6599\u91D1\u989D\uFF08\u5916\u8D2D\uFF09",
      expr: "usage * price",
      desc: "\u91D1\u989D = \u6570\u91CF/\u7528\u91CF \xD7 \u6750\u6599\u5E93\u6807\u51C6\u4EF7\u683C",
      vars: ["usage", "price"]
    },
    parts_total: {
      label: "\u5907\u4EF6\u5408\u8BA1",
      expr: "self + buy",
      desc: "\u5408\u8BA1 = \u81EA\u5236\u91D1\u989D + \u5916\u8D2D\u91D1\u989D",
      vars: ["self", "buy"]
    },
    valve_parts_total: {
      label: "\u9600\u95E8\u5907\u4EF6\u5408\u8BA1",
      expr: "qty * unit_price",
      desc: "\u5408\u8BA1 = \u6570\u91CF \xD7 \u5355\u4EF7",
      vars: ["qty", "unit_price"]
    },
    tools_total: {
      label: "\u5DE5\u5177\u5408\u8BA1",
      expr: "self + buy",
      desc: "\u5408\u8BA1 = \u81EA\u5236\u91D1\u989D + \u5916\u8D2D\u91D1\u989D",
      vars: ["self", "buy"]
    },
    automation_total: {
      label: "\u81EA\u52A8\u5316\u5408\u4EF7",
      expr: "qty * unit_price",
      desc: "\u5408\u4EF7 = \u6570\u91CF \xD7 \u5355\u4EF7",
      vars: ["qty", "unit_price"]
    },
    monitoring_total: {
      label: "\u5728\u7EBF\u76D1\u6D4B\u5408\u4EF7",
      expr: "qty_parsed * unit_price",
      desc: '\u5408\u4EF7 = \u89E3\u6790\u540E\u7684\u6570\u91CF \xD7 \u5355\u4EF7\uFF1B\u5982\u6570\u91CF\u4E3A"2\xD74"\uFF0C\u7CFB\u7EDF\u4F1A\u8F6C\u6362\u4E3A 8',
      vars: ["qty", "qty_parsed", "unit_price"]
    },
    liaison_total: {
      label: "\u8BBE\u8054\u4F1A\u5408\u8BA1",
      expr: "person_days * unit_price",
      desc: "\u5408\u8BA1 = \u4EBA\u5929 \xD7 \u5355\u4EF7",
      vars: ["person_days", "unit_price"]
    },
    subtotal_weight: {
      label: "\u6C47\u603B\u91CD\u91CF",
      expr: "sum(child.weight)",
      desc: "\u81EA\u52A8\u6C47\u603B = \u6240\u6709\u76F4\u63A5\u5B50\u7EA7\u91CD\u91CF\u4E4B\u548C",
      vars: ["child.weight"]
    },
    subtotal_amount: {
      label: "\u6C47\u603B\u91D1\u989D",
      expr: "sum(child.amount)",
      desc: "\u81EA\u52A8\u6C47\u603B = \u6240\u6709\u76F4\u63A5\u5B50\u7EA7\u91D1\u989D\u4E4B\u548C",
      vars: ["child.amount"]
    }
  };
  var CUSTOM_FORMULAS = DATA2._customFormulas && typeof DATA2._customFormulas === "object" ? DATA2._customFormulas : {};
  DATA2._customFormulas = CUSTOM_FORMULAS;
  function getFormulaExpr2(formulaId) {
    const def = DEFAULT_FORMULAS2[formulaId];
    if (!def) return "";
    const custom = CUSTOM_FORMULAS && CUSTOM_FORMULAS[formulaId];
    return custom && typeof custom.expr === "string" && custom.expr.trim() ? custom.expr.trim() : def.expr;
  }
  function setCustomFormula2(formulaId, expr) {
    if (!formulaId || !DEFAULT_FORMULAS2[formulaId]) return;
    if (!DATA2._customFormulas || typeof DATA2._customFormulas !== "object") DATA2._customFormulas = {};
    CUSTOM_FORMULAS = DATA2._customFormulas;
    const def = DEFAULT_FORMULAS2[formulaId];
    const normalized = String(expr || "").trim();
    if (!normalized || normalized === def.expr) {
      delete CUSTOM_FORMULAS[formulaId];
    } else {
      CUSTOM_FORMULAS[formulaId] = { expr: normalized, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
    }
  }
  function resetCustomFormula(formulaId) {
    if (CUSTOM_FORMULAS && CUSTOM_FORMULAS[formulaId]) delete CUSTOM_FORMULAS[formulaId];
    if (DATA2._customFormulas && DATA2._customFormulas[formulaId]) delete DATA2._customFormulas[formulaId];
  }
  function parseQtyValue2(v) {
    if (typeof v === "string" && v.includes("\xD7")) {
      return v.split("\xD7").reduce((a, b) => a * (parseFloat(b) || 0), 1);
    }
    return parseFloat(v) || 0;
  }
  function evalConfiguredFormula(formulaId, row, extra, fallback) {
    const def = DEFAULT_FORMULAS2[formulaId];
    if (!def) return fallback;
    const expr = getFormulaExpr2(formulaId);
    try {
      const ctx = Object.assign({}, row || {}, extra || {});
      const result = evaluateFormulaSafe(expr, ctx);
      const n = parseFloat(result);
      return isNaN(n) ? fallback : parseFloat(n.toFixed(6));
    } catch (e) {
      console.warn("calculation failed:", formulaId, e.message);
      return fallback;
    }
  }
  window.setCustomFormula = setCustomFormula2;
  window.resetCustomFormula = resetCustomFormula;
  window.getFormulaExpr = getFormulaExpr2;
  var FormulaEngine2 = {
    // Auto-detect is_buy from sub_categories if null/undefined
    detectIsBuy(row) {
      if (row.is_buy !== null && row.is_buy !== void 0 && row.is_buy !== "") return row.is_buy;
      const u = parseFloat(row.usage);
      if (!isNaN(u)) {
        if (u > 1) return true;
        if (u > 0 && u <= 1) return false;
      }
      if (!row.category) return false;
      const buyCategories = [
        "\u9600\u95E8\u7C7B",
        "\u6210\u54C1\u8F6C\u8F6E\\\u6210\u54C1\u5BFC\u53F6",
        "\u6210\u54C1\u77FD\u94A2\u7247",
        "\u8F74\u74E6",
        "\u8F74\u5957\\\u8F74\u627F",
        "\u5BC6\u5C01\u5708",
        "\u63A5\u529B\u5668",
        "\u63A5\u5934\\\u4E09\u901A",
        "\u7535\u7F06",
        "\u8BD5\u538B\u6CF5",
        "\u7535\u52A0\u70ED\u5668/\u9664\u6E7F\u673A",
        "\u4E92\u611F\u5668\\\u63A5\u5730\u88C5\u7F6E",
        "\u7A7A\u6C14\u51B7\u5374\u5668",
        "\u5236\u52A8\u5668",
        "\u6D4B\u6E29\u5143\u4EF6",
        "\u55B7\u6D82/\u55B7\u7802/\u5F39\u6027\u5C42",
        "\u9664\u5C18\u88C5\u7F6E",
        "\u5438\u6392\u6CB9\u96FE\u88C5\u7F6E",
        "\u7535\u5237\u5237\u63E1",
        "\u6DA6\u6ED1\u6CB9",
        "\u789F\u5F62\u5F39\u7C27",
        "\u7A7A\u6C14\u56F4\u5E26\\\u5BC6\u5C01\u73AF",
        "\u6DB2\u538B\u62C9\u4F38\u5668",
        "\u8F74\u6D41\u98CE\u673A",
        "\u6EE4\u6C34\u5668"
      ];
      return buyCategories.includes(row.category);
    },
    // Calc material BOM amount using optimized formula
    calcMatAmount(row, dataKey) {
      if (!row.material || row.material.trim() === "") return row.amount || 0;
      const priceInfo = lookupMaterialPrice(row.material);
      const unitPrice = priceInfo ? priceInfo.p : null;
      const isBuy = this.detectIsBuy(row);
      if (isBuy) {
        const usageVal = parseFloat(row.usage);
        const qty = row.usage !== null && row.usage !== void 0 && row.usage !== "" && !isNaN(usageVal) ? usageVal : 1;
        if (unitPrice !== null) {
          const fallback = parseFloat((qty * unitPrice).toFixed(6));
          return evalConfiguredFormula("mat_amount_buy", row, { price: unitPrice, material_price: unitPrice, usage: qty }, fallback);
        }
        if (row.amount && row.amount > 0) return row.amount;
        return 0;
      }
      const weight = parseFloat(row.weight) || 0;
      if (weight === 0) return 0;
      const utilizationRaw = parseFloat(row.usage);
      const utilization = !isNaN(utilizationRaw) && utilizationRaw > 0 ? utilizationRaw : 1;
      if (unitPrice !== null) {
        const fallback = parseFloat((weight / utilization * unitPrice).toFixed(6));
        return evalConfiguredFormula("mat_amount_self", row, { price: unitPrice, material_price: unitPrice, usage: utilization }, fallback);
      }
      if (row.amount && row.amount > 0) return row.amount;
      return 0;
    },
    // Get human-readable formula description for a row
    getMatFormula(row, dataKey) {
      if (!row.material || row.material.trim() === "") return "";
      const priceInfo = lookupMaterialPrice(row.material);
      const unitPrice = priceInfo ? priceInfo.p : "?";
      const isBuy = this.detectIsBuy(row);
      if (isBuy) {
        const usageVal = parseFloat(row.usage);
        const qty = row.usage !== null && row.usage !== void 0 && row.usage !== "" && !isNaN(usageVal) ? usageVal : 1;
        return `\u5916\u8D2D: ${qty} \xD7 ${typeof unitPrice === "number" ? unitPrice.toFixed(2) : unitPrice} = ${this.calcMatAmount(row, dataKey).toFixed(4)} \u4E07`;
      }
      const weight = parseFloat(row.weight) || 0;
      const utilizationRaw = parseFloat(row.usage);
      const utilization = !isNaN(utilizationRaw) && utilizationRaw > 0 ? utilizationRaw : 1;
      return `\u81EA\u5236: ${weight}T \xF7 \u660E\u7EC6\u884C\u5229\u7528\u7387${utilization} \xD7 ${typeof unitPrice === "number" ? unitPrice.toFixed(2) : unitPrice}\u4E07/T = ${this.calcMatAmount(row, dataKey).toFixed(4)} \u4E07`;
    },
    // Recalculate all formula cells for a table
    recalcTable(dataKey) {
      const items = DATA2[dataKey];
      if (!items) return;
      const isMatBOM = ["water", "gen", "valve", "valve_door"].includes(dataKey);
      if (isMatBOM) {
        items.forEach((row) => {
          if (row.material && row.material.trim()) {
            if (row.is_buy === null || row.is_buy === void 0 || row.is_buy === "") {
              row.is_buy = this.detectIsBuy(row);
            }
            row.amount = this.calcMatAmount(row, dataKey);
          }
        });
        this.recalcSubtotals(items, dataKey);
      }
      if (["water_parts", "gen_parts", "valve_parts"].includes(dataKey)) {
        items.forEach((row) => {
          if (dataKey === "valve_parts") {
            row.total = evalConfiguredFormula("valve_parts_total", row, { qty: parseQtyValue2(row.qty) }, (parseFloat(row.qty) || 0) * (parseFloat(row.unit_price) || 0));
          } else {
            row.total = evalConfiguredFormula("parts_total", row, { self: parseFloat(row.self) || 0, buy: parseFloat(row.buy) || 0 }, (parseFloat(row.self) || 0) + (parseFloat(row.buy) || 0));
          }
        });
      }
      if (["water_tools", "gen_tools", "valve_tools"].includes(dataKey)) {
        items.forEach((row) => {
          row.total = evalConfiguredFormula("tools_total", row, { self: parseFloat(row.self) || 0, buy: parseFloat(row.buy) || 0 }, (parseFloat(row.self) || 0) + (parseFloat(row.buy) || 0));
        });
      }
      if (dataKey === "automation") {
        items.forEach((row) => {
          row.total = evalConfiguredFormula("automation_total", row, { qty: parseQtyValue2(row.qty) }, (parseFloat(row.qty) || 0) * (parseFloat(row.unit_price) || 0));
        });
      }
      if (dataKey === "monitoring") {
        items.forEach((row) => {
          const qty = parseQtyValue2(row.qty);
          row.total = evalConfiguredFormula("monitoring_total", row, { qty_parsed: qty }, qty * (parseFloat(row.unit_price) || 0));
        });
      }
      if (dataKey === "liaison") {
        items.forEach((row) => {
          if (row.person_days !== null && row.person_days !== void 0 && row.person_days !== "" && !isNaN(parseFloat(row.person_days))) {
            row.total = evalConfiguredFormula("liaison_total", row, {}, parseFloat(row.person_days) * (parseFloat(row.unit_price) || 0));
          }
        });
      }
    },
    // Recalculate ALL subtotal rows using bottom-up multi-level aggregation (包括根节点"一")
    recalcSubtotals(items, dataKey) {
      const subtotalIndices = [];
      items.forEach((it, i) => {
        if (isSubtotalRow2(it, items)) {
          subtotalIndices.push(i);
        }
      });
      function depth(seq) {
        if (!seq || seq === "\u4E00") return 0;
        return String(seq).split(".").length;
      }
      subtotalIndices.sort((a, b) => depth(items[b].seq) - depth(items[a].seq));
      subtotalIndices.forEach((si) => {
        const parentRow = items[si];
        const hasMaterial = parentRow.material && String(parentRow.material).trim() !== "";
        let sumWeight = 0, sumAmount = 0;
        items.forEach((child, ci) => {
          if (ci === si) return;
          const childSeq = String(child.seq || "");
          if (!isDirectChild2(String(parentRow.seq), childSeq)) return;
          sumWeight += parseFloat(child.weight) || 0;
          sumAmount += parseFloat(child.amount) || 0;
        });
        if (hasMaterial) return;
        items[si].weight = parseFloat(sumWeight.toFixed(4));
        items[si].amount = parseFloat(sumAmount.toFixed(4));
      });
    }
  };
  function generateNextSeq2(items, afterItem) {
    if (!afterItem || afterItem.seq === null || afterItem.seq === void 0 || afterItem.seq === "") {
      return String(items.length + 1);
    }
    const afterSeq = String(afterItem.seq);
    const parts = afterSeq.split(".");
    const lastNum = parseInt(parts[parts.length - 1], 10);
    if (isNaN(lastNum)) {
      return String(items.length + 1);
    }
    parts[parts.length - 1] = String(lastNum + 1);
    let candidate = parts.join(".");
    while (items.some((it) => String(it.seq) === candidate)) {
      parts[parts.length - 1] = String(parseInt(parts[parts.length - 1], 10) + 1);
      candidate = parts.join(".");
    }
    return candidate;
  }
  function generateChildSeq2(items, parentItem) {
    if (!parentItem || parentItem.seq === null || parentItem.seq === void 0 || parentItem.seq === "") {
      return String(items.length + 1);
    }
    const parentSeq = String(parentItem.seq);
    if (parentSeq === "\u4E00") {
      let maxChild2 = 0;
      items.forEach((it) => {
        const s = String(it.seq || "");
        if (/^\d+$/.test(s)) {
          const n = parseInt(s, 10);
          if (!isNaN(n) && n > maxChild2) maxChild2 = n;
        }
      });
      return String(maxChild2 + 1);
    }
    const parts = parentSeq.split(".");
    if (parts.every((p) => isNaN(parseInt(p, 10)))) {
      return String(items.length + 1);
    }
    let maxChild = 0;
    items.forEach((it) => {
      const s = String(it.seq || "");
      if (s.startsWith(parentSeq + ".")) {
        const rest = s.substring(parentSeq.length + 1);
        if (!rest.includes(".")) {
          const n = parseInt(rest, 10);
          if (!isNaN(n) && n > maxChild) maxChild = n;
        }
      }
    });
    return parentSeq + "." + (maxChild + 1);
  }
  var DEFAULTS = {
    projectName: "\u5E7F\u897F\u90A3\u8BFB\u7535\u7AD9",
    unitCount: 4,
    waterWeight: 94.4,
    waterMat: 222.81,
    waterBuy: 145.42,
    genWeight: 234,
    genMat: 375.42,
    genBuy: 123.04,
    valveWeight: 57.7,
    valveBuy: 80,
    selfMarkup: 100,
    buyMarkup: 10,
    distance: 3700,
    tonKmPrice: 0.9,
    tonKmPriceWide: 0,
    wideWeight: 0,
    transportExtra: 1.05,
    partsAmt: 48.4,
    toolsAmt: 26.41,
    autoAmt: 0,
    monitorAmt: 0,
    liaisonAmt: 0
  };
  var state2 = {
    hasWater: 1,
    hasGen: 1,
    hasValve: 1,
    scenarios: [],
    currentMatTab: "water",
    currentPartsTab: "water_parts",
    currentToolsTab: "water_tools"
  };
  var fmt2 = (n, d = 0) => {
    if (!isFinite(n) || n === null) return "\u2014";
    return n.toLocaleString("zh-CN", { minimumFractionDigits: d, maximumFractionDigits: d });
  };
  function getInputs() {
    const num = (id) => parseFloat(document.getElementById(id).value) || 0;
    return {
      projectName: document.getElementById("projectName").value,
      unitCount: num("unitCount"),
      hasWater: state2.hasWater,
      hasGen: state2.hasGen,
      hasValve: state2.hasValve,
      waterWeight: num("waterWeight"),
      waterMat: num("waterMat"),
      waterBuy: num("waterBuy"),
      genWeight: num("genWeight"),
      genMat: num("genMat"),
      genBuy: num("genBuy"),
      valveWeight: num("valveWeight"),
      valveBuy: num("valveBuy"),
      selfMarkup: num("selfMarkup") / 100,
      buyMarkup: num("buyMarkup") / 100,
      distance: num("distance"),
      tonKmPrice: num("tonKmPrice"),
      tonKmPriceWide: num("tonKmPriceWide"),
      wideWeight: num("wideWeight"),
      transportExtra: num("transportExtra"),
      partsAmt: num("partsAmt"),
      toolsAmt: num("toolsAmt"),
      autoAmt: num("autoAmt"),
      monitorAmt: num("monitorAmt"),
      liaisonAmt: num("liaisonAmt")
    };
  }
  function isSubtotalRow2(item, allItems) {
    if (!item.seq) return false;
    const seqStr = String(item.seq);
    if (seqStr === "\u4E00") {
      return allItems.some((other) => other !== item && /^\d+$/.test(String(other.seq || "")));
    }
    const prefix = seqStr + ".";
    return allItems.some((other) => other !== item && String(other.seq || "").startsWith(prefix));
  }
  function isDirectChild2(parentSeq, childSeq) {
    const p = String(parentSeq);
    const c = String(childSeq || "");
    if (p === "\u4E00") {
      return /^\d+$/.test(c);
    }
    if (!c.startsWith(p + ".")) return false;
    return c.split(".").length === p.split(".").length + 1;
  }
  function aggregateMatTable(dataKeys) {
    const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
    let weight = 0, mat = 0, buy = 0, buyWeight = 0;
    keys.forEach((dk) => {
      const items = DATA2[dk];
      if (!items) return;
      const rootRow = items.find((it) => String(it.seq) === "\u4E00");
      if (rootRow) {
        weight += parseFloat(rootRow.weight) || 0;
        mat += parseFloat(rootRow.amount) || 0;
      }
      items.forEach((it) => {
        if (isSubtotalRow2(it, items)) return;
        if (it.is_buy) {
          buy += parseFloat(it.amount) || 0;
          buyWeight += parseFloat(it.weight) || 0;
        }
      });
    });
    return {
      weight: parseFloat(weight.toFixed(4)),
      mat: parseFloat(mat.toFixed(4)),
      buy: parseFloat(buy.toFixed(4)),
      buyWeight: parseFloat(buyWeight.toFixed(4))
    };
  }
  function aggregatePartsTools(dataKeys) {
    const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
    let total = 0;
    const yuanKeys = /* @__PURE__ */ new Set(["valve_parts", "valve_tools"]);
    keys.forEach((dk) => {
      const items = DATA2[dk];
      if (!items) return;
      const isYuan = yuanKeys.has(dk);
      items.forEach((it) => {
        let rowVal = 0;
        if (it.total !== null && it.total !== void 0) rowVal = parseFloat(it.total) || 0;
        else rowVal = (parseFloat(it.self) || 0) + (parseFloat(it.buy) || 0);
        total += isYuan ? rowVal / YUAN_TO_WAN2 : rowVal;
      });
    });
    return parseFloat(total.toFixed(4));
  }
  function aggregateSimple(dataKeys) {
    const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
    let total = 0;
    const yuanKeys = /* @__PURE__ */ new Set(["automation", "monitoring", "liaison"]);
    keys.forEach((dk) => {
      const items = DATA2[dk];
      if (!items) return;
      const isYuan = yuanKeys.has(dk);
      items.forEach((it) => {
        if ((dk === "liaison" || dk === "automation") && it.seq !== null && it.seq !== void 0) {
          const seqStr = String(it.seq);
          if (isNaN(parseInt(seqStr, 10)) || !/^\d/.test(seqStr.trim())) return;
        }
        const val = parseFloat(it.total) || 0;
        total += isYuan ? val / YUAN_TO_WAN2 : val;
      });
    });
    return parseFloat(total.toFixed(4));
  }
  function aggregateMatTableValve(dataKey) {
    const items = DATA2[dataKey];
    if (!items) return { weight: 0, mat: 0, buy: 0, buyWeight: 0 };
    const rootRow = items.find((it) => String(it.seq) === "\u4E00");
    const weight = parseFloat(rootRow && rootRow.weight || 0);
    const mat = parseFloat(rootRow && rootRow.amount || 0);
    return {
      weight: parseFloat(weight.toFixed(4)),
      mat: parseFloat(mat.toFixed(4)),
      buy: parseFloat(mat.toFixed(4)),
      // 全部外购
      buyWeight: parseFloat(weight.toFixed(4))
      // 外购重量 = 整机重量
    };
  }
  function getEnabledPartsKeys() {
    const keys = [];
    if (state2.hasWater) keys.push("water_parts");
    if (state2.hasGen) keys.push("gen_parts");
    if (state2.hasValve) keys.push("valve_parts");
    return keys;
  }
  function getEnabledToolsKeys() {
    const keys = [];
    if (state2.hasWater) keys.push("water_tools");
    if (state2.hasGen) keys.push("gen_tools");
    if (state2.hasValve) keys.push("valve_tools");
    return keys;
  }
  function aggregatePartsToolsWeight(dataKeys) {
    const keys = Array.isArray(dataKeys) ? dataKeys : [dataKeys];
    let total = 0;
    keys.forEach((dk) => {
      const items = DATA2[dk];
      if (!items) return;
      items.forEach((it) => {
        total += parseFloat(it.weight) || 0;
      });
    });
    return parseFloat(total.toFixed(4));
  }
  function hasAnyMachine() {
    return state2.hasWater || state2.hasGen || state2.hasValve;
  }
  function getAvailablePartsTabs() {
    const tabs = [];
    if (state2.hasWater) tabs.push({ key: "water_parts", label: "\u6C34\u673A" });
    if (state2.hasGen) tabs.push({ key: "gen_parts", label: "\u53D1\u673A" });
    if (state2.hasValve) tabs.push({ key: "valve_parts", label: "\u9600\u95E8" });
    return tabs;
  }
  function getAvailableToolsTabs() {
    const tabs = [];
    if (state2.hasWater) tabs.push({ key: "water_tools", label: "\u6C34\u673A" });
    if (state2.hasGen) tabs.push({ key: "gen_tools", label: "\u53D1\u673A" });
    if (state2.hasValve) tabs.push({ key: "valve_tools", label: "\u9600\u95E8" });
    return tabs;
  }
  function autoSwitchPartsTab() {
    const avail = getAvailablePartsTabs();
    if (avail.length > 0 && !avail.some((t) => t.key === state2.currentPartsTab)) {
      state2.currentPartsTab = avail[0].key;
    } else if (avail.length === 0) {
      state2.currentPartsTab = "water_parts";
    }
  }
  function autoSwitchToolsTab() {
    const avail = getAvailableToolsTabs();
    if (avail.length > 0 && !avail.some((t) => t.key === state2.currentToolsTab)) {
      state2.currentToolsTab = avail[0].key;
    } else if (avail.length === 0) {
      state2.currentToolsTab = "water_tools";
    }
  }
  function validateTableConsistency2(dataKey) {
    const items = DATA2[dataKey];
    if (!items) return [];
    const issues = [];
    items.forEach((it, i) => {
      if (!isSubtotalRow2(it, items)) return;
      const hasMaterial = it.material && String(it.material).trim() !== "";
      if (hasMaterial) return;
      const parentSeq = String(it.seq);
      let expectedWeight = 0, expectedAmount = 0;
      items.forEach((child, ci) => {
        if (ci === i) return;
        if (isDirectChild2(parentSeq, String(child.seq || ""))) {
          expectedWeight += parseFloat(child.weight) || 0;
          expectedAmount += parseFloat(child.amount) || 0;
        }
      });
      expectedWeight = parseFloat(expectedWeight.toFixed(4));
      expectedAmount = parseFloat(expectedAmount.toFixed(4));
      const actualWeight = parseFloat((parseFloat(it.weight) || 0).toFixed(4));
      const actualAmount = parseFloat((parseFloat(it.amount) || 0).toFixed(4));
      if (Math.abs(actualWeight - expectedWeight) > 1e-3 || Math.abs(actualAmount - expectedAmount) > 1e-3) {
        issues.push({
          dataKey,
          idx: i,
          seq: it.seq,
          name: it.name,
          actualWeight,
          expectedWeight,
          actualAmount,
          expectedAmount
        });
      }
    });
    return issues;
  }
  function validateAllTables() {
    return ["water", "gen", "valve", "valve_door"].flatMap((k) => validateTableConsistency2(k));
  }
  function fixAllConsistency() {
    [
      "water",
      "gen",
      "valve",
      "valve_door",
      "water_parts",
      "gen_parts",
      "valve_parts",
      "water_tools",
      "gen_tools",
      "valve_tools",
      "automation",
      "monitoring",
      "liaison"
    ].forEach((k) => {
      FormulaEngine2.recalcTable(k);
    });
    persistData();
    _sidebarOverrides2.clear();
    renderAll();
    const issues = validateAllTables();
    if (issues.length === 0) {
      showToast("\u5DF2\u91CD\u65B0\u8BA1\u7B97\u6240\u6709\u6C47\u603B\uFF0C\u6570\u636E\u4E00\u81F4");
    } else {
      showToast("\u5DF2\u91CD\u65B0\u8BA1\u7B97\uFF0C\u4F46\u4ECD\u6709 " + issues.length + " \u5904\u6570\u636E\u9700\u8981\u68C0\u67E5");
    }
  }
  var _syncing = false;
  var _matComputed = {};
  var _sidebarOverrides2 = /* @__PURE__ */ new Set();
  function syncSidebarFromMaterials() {
    if (_syncing) return;
    _syncing = true;
    try {
      [
        "water",
        "gen",
        "valve",
        "valve_door",
        "water_parts",
        "gen_parts",
        "valve_parts",
        "water_tools",
        "gen_tools",
        "valve_tools",
        "automation",
        "monitoring",
        "liaison"
      ].forEach((k) => {
        FormulaEngine2.recalcTable(k);
      });
      const waterAgg = aggregateMatTable("water");
      const genAgg = aggregateMatTable("gen");
      const valveAgg = aggregateMatTableValve("valve_door");
      const enabledPartsKeys = getEnabledPartsKeys();
      const enabledToolsKeys = getEnabledToolsKeys();
      const partsTotal = aggregatePartsTools(enabledPartsKeys);
      const toolsTotal = aggregatePartsTools(enabledToolsKeys);
      const waterPartsAmt = aggregatePartsTools(["water_parts"]);
      const genPartsAmt = aggregatePartsTools(["gen_parts"]);
      const valvePartsAmt = aggregatePartsTools(["valve_parts"]);
      const waterToolsAmt = aggregatePartsTools(["water_tools"]);
      const genToolsAmt = aggregatePartsTools(["gen_tools"]);
      const valveToolsAmt = aggregatePartsTools(["valve_tools"]);
      const pairs = [
        ["waterWeight", waterAgg.weight],
        ["waterMat", waterAgg.mat],
        ["waterBuy", waterAgg.buy],
        ["waterBuyWeight", waterAgg.buyWeight],
        ["genWeight", genAgg.weight],
        ["genMat", genAgg.mat],
        ["genBuy", genAgg.buy],
        ["genBuyWeight", genAgg.buyWeight],
        ["partsAmt", partsTotal],
        ["toolsAmt", toolsTotal],
        ["waterPartsAmt", waterPartsAmt],
        ["genPartsAmt", genPartsAmt],
        ["valvePartsAmt", valvePartsAmt],
        ["waterToolsAmt", waterToolsAmt],
        ["genToolsAmt", genToolsAmt],
        ["valveToolsAmt", valveToolsAmt],
        ["partsToolsTotalAmt", partsTotal + toolsTotal],
        ["autoAmt", aggregateSimple("automation")],
        ["monitorAmt", aggregateSimple("monitoring")],
        ["liaisonAmt", aggregateSimple("liaison")]
      ];
      const valvePairs = [
        ["valveWeight", "valveWeightRef", valveAgg.weight],
        ["valveBuy", "valveBuyRef", valveAgg.buy],
        ["valveBuyWeight", "valveBuyWeightRef", valveAgg.buyWeight]
      ];
      valvePairs.forEach(([inputId, refId, val]) => {
        _matComputed[inputId] = val;
        const refEl = document.getElementById(refId);
        if (refEl) refEl.textContent = "\u53C2\u8003: " + (val > 0 ? val.toFixed(4) : "\u2014");
        const inputEl = document.getElementById(inputId);
        if (inputEl && (inputEl.value === "" || inputEl.value === "0" || parseFloat(inputEl.value) === 0)) {
          inputEl.value = val > 0 ? val : "";
        }
      });
      pairs.forEach(([id, val]) => {
        _matComputed[id] = val;
        if (!_sidebarOverrides2.has(id)) {
          setSidebarVal(id, val);
        }
      });
      checkSidebarConsistency();
    } finally {
      _syncing = false;
    }
  }
  function setSidebarVal(id, val) {
    const el = document.getElementById(id);
    if (!el) return;
    const strVal = val.toFixed ? parseFloat(val.toFixed(4)).toString() : val.toString();
    const numVal = parseFloat(strVal);
    if (el.readOnly && numVal === 0) {
      el.value = "";
      el.placeholder = "\u8BF7\u5148\u5B8C\u5584\u6750\u6599\u660E\u7EC6";
      el.classList.add("auto-computed");
      el.title = '\u7531\u6750\u6599\u660E\u7EC6\u8868\u81EA\u52A8\u8BA1\u7B97\u751F\u6210 \xB7 \u660E\u7EC6\u8868\u4E3A\u7A7A\u65F6\u663E\u793A"--"';
      return;
    }
    if (el.value !== strVal) {
      el.value = strVal;
    }
    el.placeholder = "--";
    el.classList.add("auto-computed");
    el.title = "\u7531\u6750\u6599\u660E\u7EC6\u8868\u81EA\u52A8\u8BA1\u7B97\u751F\u6210";
  }
  function checkSidebarConsistency() {
    const fields = [
      "waterWeight",
      "waterMat",
      "waterBuy",
      "waterBuyWeight",
      "genWeight",
      "genMat",
      "genBuy",
      "genBuyWeight",
      "partsAmt",
      "toolsAmt",
      "autoAmt",
      "monitorAmt",
      "liaisonAmt"
    ];
    let sidebarWarnings = 0;
    fields.forEach((id) => {
      const el = document.getElementById(id);
      if (!el || _matComputed[id] === void 0) return;
      const curVal = parseFloat(el.value);
      const compVal = parseFloat(_matComputed[id].toFixed(4));
      if (isNaN(curVal) && _matComputed[id] === 0) return;
      if (isNaN(curVal) || Math.abs(curVal - compVal) > 1e-3) {
        el.classList.add("warning");
        el.title = `\u26A0 \u4E0E\u6750\u6599\u660E\u7EC6\u4E0D\u4E00\u81F4 (\u6C47\u603B\u503C: ${_matComputed[id].toFixed(4)})`;
        sidebarWarnings++;
      } else {
        el.classList.remove("warning");
        el.title = "\u7531\u6750\u6599\u660E\u7EC6\u8868\u81EA\u52A8\u8BA1\u7B97\u751F\u6210";
      }
    });
    const bomIssues = validateAllTables();
    const banner = document.getElementById("consistencyBanner");
    const bannerText = document.getElementById("consistencyBannerText");
    const totalIssues = sidebarWarnings + bomIssues.length;
    if (banner) {
      banner.style.display = totalIssues > 0 ? "flex" : "none";
      if (bannerText) {
        const parts = [];
        if (bomIssues.length > 0) parts.push(`\u6750\u6599\u660E\u7EC6\u5C42\u7EA7\u6C47\u603B\u4E0D\u4E00\u81F4 ${bomIssues.length} \u5904`);
        if (sidebarWarnings > 0) parts.push(`\u4FA7\u8FB9\u680F\u53C2\u6570\u4E0D\u4E00\u81F4 ${sidebarWarnings} \u5904`);
        bannerText.textContent = "\u26A0 " + parts.join(" \xB7 ") + " \xB7 \u70B9\u51FB\u53F3\u4FA7\u6309\u94AE\u4E00\u952E\u4FEE\u590D";
      }
    }
    return totalIssues > 0;
  }
  function compute() {
    const i = getInputs();
    const wW = i.hasWater ? i.waterWeight : 0;
    const gW = i.hasGen ? i.genWeight : 0;
    const vW = i.hasValve ? i.valveWeight : 0;
    const wMat = i.hasWater ? i.waterMat : 0;
    const gMat = i.hasGen ? i.genMat : 0;
    const vMat = i.hasValve ? i.valveBuy : 0;
    const wSelf = i.hasWater ? Math.max(i.waterMat - i.waterBuy, 0) : 0;
    const wBuy = i.hasWater ? i.waterBuy : 0;
    const wSelfM = wSelf * i.selfMarkup;
    const wBuyM = wBuy * i.buyMarkup;
    const wUnit = wSelf + wBuy + wSelfM + wBuyM;
    const gSelf = i.hasGen ? Math.max(i.genMat - i.genBuy, 0) : 0;
    const gBuy = i.hasGen ? i.genBuy : 0;
    const gSelfM = gSelf * i.selfMarkup;
    const gBuyM = gBuy * i.buyMarkup;
    const gUnit = gSelf + gBuy + gSelfM + gBuyM;
    const vBuy = i.hasValve ? i.valveBuy : 0;
    const vBuyM = vBuy * i.buyMarkup;
    const vUnit = vBuy + vBuyM;
    const transportPartsWeight = aggregatePartsToolsWeight(getEnabledPartsKeys());
    const transportToolsWeight = aggregatePartsToolsWeight(getEnabledToolsKeys());
    const totalWeightSingle = (wW + gW + vW + transportPartsWeight + transportToolsWeight) * i.transportExtra;
    const wideWeight = i.wideWeight;
    const normalWeight = Math.max(totalWeightSingle - wideWeight, 0);
    const transportWide = wideWeight * i.tonKmPriceWide * i.distance / YUAN_TO_WAN2;
    const transportNormal = normalWeight * i.tonKmPrice * i.distance / YUAN_TO_WAN2;
    const transportUnit = transportWide + transportNormal;
    const partsT = i.partsAmt;
    const toolsT = i.toolsAmt;
    const autoT = i.autoAmt;
    const monitorT = i.monitorAmt;
    const liaisonT = i.liaisonAmt;
    function sumSelfBuy(dataKeys) {
      let self = 0, buy = 0;
      const yuanKeys = /* @__PURE__ */ new Set(["valve_parts", "valve_tools"]);
      dataKeys.forEach((dk) => {
        const items2 = DATA2[dk];
        if (!items2) return;
        const isYuan = yuanKeys.has(dk);
        items2.forEach((it) => {
          const s = parseFloat(it.self) || 0;
          const b = parseFloat(it.buy) || 0;
          if (isYuan) {
            self += s / YUAN_TO_WAN2;
            buy += b / YUAN_TO_WAN2;
          } else {
            self += s;
            buy += b;
          }
        });
      });
      return { self, buy };
    }
    const partsSB = sumSelfBuy(getEnabledPartsKeys());
    const toolsSB = sumSelfBuy(getEnabledToolsKeys());
    const partsSelf = partsSB.self;
    const partsBuy = partsSB.buy;
    const toolsSelf = toolsSB.self;
    const toolsBuy = toolsSB.buy;
    const items = [
      { name: "\u6C34\u8F6E\u673A", self: wSelf, buy: wBuy, selfM: wSelfM, buyM: wBuyM, qty: i.unitCount },
      { name: "\u53D1\u7535\u673A", self: gSelf, buy: gBuy, selfM: gSelfM, buyM: gBuyM, qty: i.unitCount },
      { name: "\u5907\u4EF6", self: partsSelf, buy: partsBuy, selfM: partsSelf * i.selfMarkup, buyM: partsBuy * i.buyMarkup, qty: 1 },
      { name: "\u5DE5\u5177", self: toolsSelf, buy: toolsBuy, selfM: toolsSelf * i.selfMarkup, buyM: toolsBuy * i.buyMarkup, qty: 1 },
      { name: "\u4E3B\u673A\u81EA\u52A8\u5316", self: 0, buy: autoT, selfM: 0, buyM: autoT * i.buyMarkup, qty: 1 },
      { name: "\u5728\u7EBF\u76D1\u6D4B", self: 0, buy: monitorT, selfM: 0, buyM: monitorT * i.buyMarkup, qty: 1 },
      { name: "\u8FD0\u8F93\u8D39", self: 0, buy: transportUnit, selfM: 0, buyM: 0, qty: i.unitCount },
      { name: "\u9600\u95E8", self: 0, buy: vBuy, selfM: 0, buyM: vBuyM, qty: i.unitCount },
      { name: "\u8BBE\u8BA1\u8054\u7EDC\u7B49", self: 0, buy: liaisonT, selfM: 0, buyM: 0, qty: 1 }
    ];
    items.forEach((it) => {
      it.cost = it.self + it.buy;
      it.unit = it.cost + it.selfM + it.buyM;
      it.total = it.unit * it.qty;
    });
    const totalBid = items.reduce((s, it) => s + it.total, 0);
    const totalFixed = items.reduce((s, it) => s + it.cost * it.qty, 0);
    const absorb = totalBid - totalFixed;
    const absorbPct = totalBid > 0 ? absorb / totalBid : 0;
    const agencyFee = calcAgencyFee(totalBid);
    return {
      inputs: i,
      items,
      totalBid,
      totalFixed,
      absorb,
      absorbPct,
      agencyFee,
      water: { has: i.hasWater, weight: wW, mat: wMat, self: wSelf, buy: wBuy, unit: wUnit, matT: wW > 0 ? wMat / wW : 0, bidT: wW > 0 ? wUnit / wW : 0 },
      gen: { has: i.hasGen, weight: gW, mat: gMat, self: gSelf, buy: gBuy, unit: gUnit, matT: gW > 0 ? gMat / gW : 0, bidT: gW > 0 ? gUnit / gW : 0 },
      valve: { has: i.hasValve, weight: vW, mat: vMat, self: 0, buy: vBuy, unit: vUnit, matT: vW > 0 ? vMat / vW : 0, bidT: vW > 0 ? vUnit / vW : 0 },
      transport: { weightSingle: totalWeightSingle, wideWeight, normalWeight, transportWide, transportNormal, transportUnit, transportTotal: transportUnit * i.unitCount }
    };
  }
  function calcAgencyFee(amount) {
    let fee = 0;
    let detail = [];
    let cumulative = 0;
    for (let i = 0; i < DATA2.agency_tiers.length; i++) {
      const t = DATA2.agency_tiers[i];
      if (amount <= t.lower) break;
      const segHigh = Math.min(amount, t.upper);
      const segLen = segHigh - t.lower;
      const segFee = segLen * t.rate;
      fee += segFee;
      cumulative = fee;
      detail.push({
        seq: i + 1,
        desc: t.desc,
        length: segLen,
        rate: t.rate,
        fee: segFee,
        cumulative,
        hit: amount > t.lower && amount <= t.upper
      });
      if (amount <= t.upper) break;
    }
    return { fee, detail };
  }
  function animateNum(el, newVal, decimals) {
    if (!el) return;
    const oldVal = parseFloat(el.dataset.rawVal) || 0;
    if (Math.abs(oldVal - newVal) < 1e-3) return;
    el.dataset.rawVal = newVal;
    const steps = 20, dur = 400;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const t = step / steps;
      const eased = 1 - Math.pow(1 - t, 3);
      const cur = oldVal + (newVal - oldVal) * eased;
      el.textContent = fmt2(cur, decimals);
      if (step >= steps) {
        clearInterval(interval);
        el.textContent = fmt2(newVal, decimals);
      }
    }, dur / steps);
  }

  // js/src/persistence.js
  var DATA_BACKUP = {};
  (function backupData() {
    for (const key of Object.keys(DATA2)) {
      DATA_BACKUP[key] = JSON.parse(JSON.stringify(DATA2[key]));
    }
  })();
  function resetDataTable(key) {
    if (DATA_BACKUP[key]) {
      DATA2[key] = JSON.parse(JSON.stringify(DATA_BACKUP[key]));
      if (typeof PRICE_CACHE2 !== "undefined" && typeof PRICE_CACHE2.clear === "function") PRICE_CACHE2.clear();
      if (typeof FormulaEngine !== "undefined" && FormulaEngine.recalcTable) FormulaEngine.recalcTable(key);
      persistData2();
      return true;
    }
    return false;
  }
  var STORAGE_KEY = "hydro_bid_data_v2";
  var PROJECT_EXPORT_VERSION = "2.1.0-stable";
  var PROJECT_DATA_KEYS2 = ["water", "gen", "valve", "valve_door", "water_parts", "gen_parts", "valve_parts", "water_tools", "gen_tools", "valve_tools", "automation", "monitoring", "liaison"];
  function stableClone(obj) {
    try {
      if (typeof structuredClone === "function") return structuredClone(obj);
    } catch (e) {
    }
    return JSON.parse(JSON.stringify(obj));
  }
  function getProjectDataTables() {
    const out = {};
    PROJECT_DATA_KEYS2.forEach((k) => {
      if (DATA2[k]) out[k] = stableClone(DATA2[k]);
    });
    return out;
  }
  function captureProjectState() {
    return { app: "hydro-bid-price-analysis-system", version: PROJECT_EXPORT_VERSION, exportedAt: (/* @__PURE__ */ new Date()).toISOString(), data: getProjectDataTables(), _sidebar: captureSidebarState2(), _customFormulas: stableClone(CUSTOM_FORMULAS || {}), _state: { hasWater: state.hasWater, hasGen: state.hasGen, hasValve: state.hasValve, scenarios: stableClone(state.scenarios || []), currentMatTab: state.currentMatTab, currentPartsTab: state.currentPartsTab, currentToolsTab: state.currentToolsTab }, _matLib: typeof MAT_LIB !== "undefined" ? stableClone(MAT_LIB) : [], _importLog: typeof MAT_IMPORT_LOG !== "undefined" ? stableClone(MAT_IMPORT_LOG) : [] };
  }
  function normalizeImportedProject(input) {
    const raw = input && typeof input === "object" ? input : {};
    const data = raw.data && typeof raw.data === "object" ? raw.data : raw;
    const out = { app: raw.app || "hydro-bid-price-analysis-system", version: raw.version || "legacy", data: {}, _sidebar: raw._sidebar || data._sidebar || null, _state: raw._state || data._state || {}, _matLib: raw._matLib || data._matLib || [], _importLog: raw._importLog || data._importLog || [] };
    PROJECT_DATA_KEYS2.forEach((k) => {
      if (Array.isArray(data[k])) out.data[k] = data[k];
    });
    if (!Array.isArray(out._state.scenarios) && Array.isArray(data.scenarios)) out._state.scenarios = data.scenarios;
    return out;
  }
  function restoreProjectState(projectPackage, opts = {}) {
    const pkg = normalizeImportedProject(projectPackage);
    const _isRestoringSnapshot2 = true;
    try {
      PROJECT_DATA_KEYS2.forEach((k) => {
        if (pkg.data && Array.isArray(pkg.data[k])) DATA2[k] = stableClone(pkg.data[k]);
      });
      if (pkg._matLib && typeof MAT_LIB !== "undefined" && Array.isArray(pkg._matLib)) {
        MAT_LIB.length = 0;
        pkg._matLib.forEach((m) => MAT_LIB.push(m));
        _matLibNextId = Math.max(0, ...MAT_LIB.map((m) => parseInt(String(m.id || "MAT-0000").replace("MAT-", ""), 10) || 0)) + 1;
        try {
          localStorage.setItem("hydro_mat_lib", JSON.stringify(MAT_LIB));
        } catch (e) {
        }
      }
      if (pkg._importLog && typeof MAT_IMPORT_LOG !== "undefined" && Array.isArray(pkg._importLog)) {
        MAT_IMPORT_LOG.length = 0;
        pkg._importLog.forEach((x) => MAT_IMPORT_LOG.push(x));
        try {
          localStorage.setItem("hydro_import_log", JSON.stringify(MAT_IMPORT_LOG));
        } catch (e) {
        }
      }
      if (pkg._customFormulas || pkg.data && pkg.data._customFormulas) {
        DATA2._customFormulas = stableClone(pkg._customFormulas || pkg.data._customFormulas || {});
        try {
          localStorage.setItem("hydro_custom_formulas", JSON.stringify(DATA2._customFormulas));
        } catch (e) {
        }
      }
      if (pkg._sidebar) restoreSidebarState(pkg._sidebar);
      if (pkg._state) {
        state.hasWater = pkg._state.hasWater !== void 0 ? pkg._state.hasWater : state.hasWater;
        state.hasGen = pkg._state.hasGen !== void 0 ? pkg._state.hasGen : state.hasGen;
        state.hasValve = pkg._state.hasValve !== void 0 ? pkg._state.hasValve : state.hasValve;
        state.scenarios = Array.isArray(pkg._state.scenarios) ? stableClone(pkg._state.scenarios) : state.scenarios || [];
        state.currentMatTab = pkg._state.currentMatTab || state.currentMatTab || "water";
        state.currentPartsTab = pkg._state.currentPartsTab || state.currentPartsTab || "water_parts";
        state.currentToolsTab = pkg._state.currentToolsTab || state.currentToolsTab || "water_tools";
        syncToggles();
      }
      PRICE_CACHE2.clear();
      PROJECT_DATA_KEYS2.forEach((k) => {
        if (DATA2[k]) FormulaEngine.recalcTable(k);
      });
      if (typeof _sidebarOverrides !== "undefined") _sidebarOverrides.clear();
      updateSliderDisplays();
      persistData2();
      renderAll();
      if (!opts.silent) showToast("\u9879\u76EE\u5DF2\u6062\u590D");
    } finally {
    }
  }
  function exportProjectJSON() {
    return JSON.stringify(captureProjectState(), null, 2);
  }
  function importProjectJSON(text) {
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      throw new Error("\u4E0D\u662F\u6709\u6548\u7684 JSON \u6587\u4EF6");
    }
    return normalizeImportedProject(parsed);
  }
  function sanitizeFileName(name) {
    return String(name || "project").replace(/[\\/:*?"<>|]/g, "_").replace(/\s+/g, "_").slice(0, 120);
  }
  function exportProjectFile() {
    const report = generateDataHealthReport();
    if (!report.passed) {
      const ok = confirm("\u6570\u636E\u4F53\u68C0\u53D1\u73B0 " + report.summary.errorCount + " \u4E2A\u9519\u8BEF\u3001" + report.summary.warningCount + " \u4E2A\u8B66\u544A\u3002\u4ECD\u8981\u5BFC\u51FA\u9879\u76EE\u5417\uFF1F");
      if (!ok) {
        showDataHealthReport(report);
        return;
      }
    }
    const blob = new Blob([exportProjectJSON()], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const projectName = (document.getElementById("projectName") || {}).value || "\u6C34\u7535\u7AD9\u62A5\u4EF7";
    a.href = url;
    a.download = sanitizeFileName(projectName) + "_\u5B8C\u6574\u9879\u76EE.json";
    a.click();
    URL.revokeObjectURL(url);
    showToast("\u5B8C\u6574\u9879\u76EE JSON \u5DF2\u5BFC\u51FA");
  }
  function persistData2() {
    try {
      const toSave = {};
      for (const key of [
        "water",
        "gen",
        "valve",
        "valve_door",
        "water_parts",
        "gen_parts",
        "valve_parts",
        "water_tools",
        "gen_tools",
        "valve_tools",
        "automation",
        "monitoring",
        "liaison"
      ]) {
        if (DATA2[key]) toSave[key] = DATA2[key];
      }
      toSave._customFormulas = CUSTOM_FORMULAS || {};
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.warn("\u4FDD\u5B58\u5931\u8D25:", e);
      showToast("\u6570\u636E\u4FDD\u5B58\u5931\u8D25: " + (e.message || "\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3"));
    }
  }
  function saveHTML() {
    try {
      persistData2();
      const projectPackage = captureProjectState();
      const dataClone = Object.assign({}, projectPackage.data, {
        _sidebar: projectPackage._sidebar,
        _state: projectPackage._state,
        _matLib: projectPackage._matLib,
        _importLog: projectPackage._importLog,
        _customFormulas: CUSTOM_FORMULAS || {},
        _projectVersion: projectPackage.version,
        _exportedAt: projectPackage.exportedAt
      });
      const dataStr = "const DATA = " + JSON.stringify(dataClone) + ";";
      const html = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
      const lines = html.split(/\r?\n/);
      let replaced = false;
      for (let i = 0; i < lines.length; i++) {
        if (/^\s*const DATA = \{/.test(lines[i])) {
          lines[i] = dataStr;
          replaced = true;
          break;
        }
      }
      if (!replaced) {
        showToast("\u672A\u627E\u5230 DATA \u58F0\u660E\uFF0C\u4FDD\u5B58\u5931\u8D25");
        return;
      }
      const modified = lines.join("\n");
      const blob = new Blob([modified], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const projectName = (document.getElementById("projectName") || {}).value || "\u6C34\u7535\u7AD9\u62A5\u4EF7";
      a.download = projectName + "_\u4EF7\u683C\u5206\u6790\u7CFB\u7EDF.html";
      a.click();
      URL.revokeObjectURL(url);
      delete DATA2._sidebar;
      showToast("HTML \u5DF2\u4FDD\u5B58\uFF0C\u6240\u6709\u6570\u636E\u53CA\u53C2\u6570\u5DF2\u5D4C\u5165\u6587\u4EF6\u4E2D");
    } catch (e) {
      showToast("\u4FDD\u5B58\u5931\u8D25: " + e.message);
      console.error(e);
    }
  }
  function captureSidebarState2() {
    const el = (id) => document.getElementById(id);
    return {
      projectName: (el("projectName") || {}).value || "",
      unitCount: (el("unitCount") || {}).value || "4",
      selfMarkup: (el("selfMarkup") || {}).value || "15",
      buyMarkup: (el("buyMarkup") || {}).value || "7",
      transportRate: (el("transportRate") || {}).value || "",
      distance: (el("distance") || {}).value || "200",
      tonKmPrice: (el("tonKmPrice") || {}).value || "0.7",
      tonKmPriceWide: (el("tonKmPriceWide") || {}).value || "1.2",
      wideWeight: (el("wideWeight") || {}).value || "50",
      transportExtra: (el("transportExtra") || {}).value || "1.5",
      partsAmt: (el("partsAmt") || {}).value || "0",
      toolsAmt: (el("toolsAmt") || {}).value || "0",
      autoAmt: (el("autoAmt") || {}).value || "0",
      monitorAmt: (el("monitorAmt") || {}).value || "0",
      liaisonAmt: (el("liaisonAmt") || {}).value || "0",
      hasWater: state.hasWater,
      hasGen: state.hasGen,
      hasValve: state.hasValve
    };
  }
  function restoreSidebarState(sidebar) {
    if (!sidebar) return;
    const el = (id) => document.getElementById(id);
    const fields = [
      "projectName",
      "unitCount",
      "selfMarkup",
      "buyMarkup",
      "transportRate",
      "distance",
      "tonKmPrice",
      "tonKmPriceWide",
      "wideWeight",
      "transportExtra",
      "partsAmt",
      "toolsAmt",
      "autoAmt",
      "monitorAmt",
      "liaisonAmt"
    ];
    for (const f of fields) {
      const elem = el(f);
      if (elem && sidebar[f] !== void 0) {
        elem.value = sidebar[f];
      }
    }
    if (sidebar.hasWater !== void 0) state.hasWater = sidebar.hasWater;
    if (sidebar.hasGen !== void 0) state.hasGen = sidebar.hasGen;
    if (sidebar.hasValve !== void 0) state.hasValve = sidebar.hasValve;
    syncToggles();
  }
  function importFullData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        takeProjectSnapshot("\u5BFC\u5165\u9879\u76EE");
        const pkg = importProjectJSON(e.target.result);
        restoreProjectState(pkg, { silent: true });
        const rowCount = PROJECT_DATA_KEYS2.reduce((sum, k) => sum + (Array.isArray(DATA2[k]) ? DATA2[k].length : 0), 0);
        const report = generateDataHealthReport();
        if (!report.passed) showToast("\u5BFC\u5165\u6210\u529F\uFF0C\u4F46\u4F53\u68C0\u53D1\u73B0 " + report.summary.errorCount + " \u9519\u8BEF / " + report.summary.warningCount + " \u8B66\u544A");
        else showToast("\u6210\u529F\u5BFC\u5165\u5B8C\u6574\u9879\u76EE\uFF0C\u5171 " + rowCount + " \u6761\u6570\u636E");
      } catch (err) {
        showToast("\u5BFC\u5165\u5931\u8D25: " + err.message);
        console.error(err);
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  }
  function loadPersistedData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        for (const key of Object.keys(parsed)) {
          if (key === "_sidebar") continue;
          if (DATA2[key]) DATA2[key] = parsed[key];
        }
        PRICE_CACHE2.clear();
        if (DATA2._customFormulas && typeof DATA2._customFormulas === "object") {
        }
        for (const key of Object.keys(parsed)) {
          if (key === "_sidebar") continue;
          FormulaEngine.recalcTable(key);
        }
        return true;
      }
    } catch (e) {
    }
    return false;
  }

  // js/src/state.js
  var SNAPSHOT_MAX = 60;
  var _projectUndoStack = [];
  var _projectRedoStack = [];
  var _isRestoringSnapshot = false;
  function takeProjectSnapshot2(label) {
    if (_isRestoringSnapshot) return;
    _projectUndoStack.push({ id: Date.now() + "_" + Math.random().toString(16).slice(2), label: label || "\u64CD\u4F5C", createdAt: (/* @__PURE__ */ new Date()).toISOString(), state: captureProjectState() });
    while (_projectUndoStack.length > SNAPSHOT_MAX) _projectUndoStack.shift();
    _projectRedoStack.length = 0;
  }
  function undoProjectSnapshot() {
    const snap = _projectUndoStack.pop();
    if (!snap) {
      showToast("\u6CA1\u6709\u53EF\u64A4\u9500\u7684\u64CD\u4F5C");
      return false;
    }
    _projectRedoStack.push({ id: Date.now() + "_" + Math.random().toString(16).slice(2), label: "\u91CD\u505A\u70B9", createdAt: (/* @__PURE__ */ new Date()).toISOString(), state: captureProjectState() });
    restoreProjectState(snap.state, { silent: true });
    showToast("\u5DF2\u64A4\u9500\uFF1A" + snap.label);
    return true;
  }
  function redoProjectSnapshot() {
    const snap = _projectRedoStack.pop();
    if (!snap) {
      showToast("\u6CA1\u6709\u53EF\u91CD\u505A\u7684\u64CD\u4F5C");
      return false;
    }
    _projectUndoStack.push({ id: Date.now() + "_" + Math.random().toString(16).slice(2), label: "\u64A4\u9500\u70B9", createdAt: (/* @__PURE__ */ new Date()).toISOString(), state: captureProjectState() });
    restoreProjectState(snap.state, { silent: true });
    showToast("\u5DF2\u91CD\u505A");
    return true;
  }

  // js/src/health.js
  function escapeRegExp(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function evaluateFormulaSafe2(expr, row) {
    const source = String(expr || "").trim();
    if (!source) return null;
    const blocked = [
      /\bwindow\b/i,
      /\bdocument\b/i,
      /\bglobalThis\b/i,
      /\blocalStorage\b/i,
      /\bsessionStorage\b/i,
      /\bfetch\b/i,
      /\beval\b/i,
      /\bFunction\b/i,
      /\bconstructor\b/i,
      /\bprototype\b/i,
      /=>/,
      /;/,
      /`/
    ];
    if (blocked.some((r) => r.test(source))) throw new Error("\u516C\u5F0F\u5305\u542B\u4E0D\u5B89\u5168\u5185\u5BB9");
    let resolved = source;
    if (row && typeof row === "object") {
      Object.keys(row).sort((a, b) => b.length - a.length).forEach((k) => {
        const re = new RegExp("\\b" + escapeRegExp(k) + "\\b", "gi");
        if (!re.test(resolved)) return;
        const v = parseFloat(row[k]);
        if (!isNaN(v)) {
          resolved = resolved.replace(new RegExp("\\b" + escapeRegExp(k) + "\\b", "gi"), String(v));
        } else {
          resolved = resolved.replace(new RegExp("\\b" + escapeRegExp(k) + "\\b", "gi"), "0");
        }
      });
    }
    if (!/^[\d\s+\-*/().,%<>=!&|?:]+$/.test(resolved)) {
      throw new Error("\u516C\u5F0F\u53EA\u80FD\u5305\u542B\u6570\u5B57\u3001\u6BD4\u8F83\u7B26\u548C\u57FA\u7840\u8FD0\u7B97\u7B26\uFF08\u672A\u8BC6\u522B\u53D8\u91CF: " + (resolved.match(/[a-zA-Z_][a-zA-Z0-9_]*/g) || []).join(", ") + "\uFF09");
    }
    const result = new Function('"use strict"; return (' + resolved + ");")();
    if (typeof result === "number" && isFinite(result)) return Math.round(result * 1e4) / 1e4;
    if (typeof result === "boolean") return result ? 1 : 0;
    throw new Error("\u516C\u5F0F\u7ED3\u679C\u65E0\u6548");
  }
  function _rowContext(row) {
    if (!row) return "";
    const parts = [];
    if (row.seq !== null && row.seq !== void 0 && String(row.seq).trim()) parts.push("\u5E8F\u53F7" + String(row.seq).trim());
    if (row.name && String(row.name).trim()) parts.push(String(row.name).trim().substring(0, 20));
    if (row.spec && String(row.spec).trim()) parts.push(String(row.spec).trim().substring(0, 15));
    if (row.material && String(row.material).trim()) parts.push(String(row.material).trim().substring(0, 15));
    if (row.model && String(row.model).trim()) parts.push(String(row.model).trim().substring(0, 15));
    return parts.join(" \xB7 ");
  }
  function autoFixMissingSeqs() {
    const fixed = { tables: 0, rows: 0 };
    const ALL_TABLES = PROJECT_DATA_KEYS;
    ALL_TABLES.forEach((k) => {
      if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
      DATA[k].forEach((row, idx) => {
        const hasName = row.name && String(row.name).trim() !== "";
        const hasSeq = row.seq !== null && row.seq !== void 0 && String(row.seq).trim() !== "";
        if (hasName && !hasSeq) {
          row.seq = "A" + (idx + 1);
          fixed.rows++;
        }
      });
      if (fixed.rows > 0) {
        fixed.tables++;
        persistData();
      }
    });
    return fixed;
  }
  function autoFixUsageRates() {
    const fixed = { tables: 0, rows: 0 };
    const ALL_TABLES = PROJECT_DATA_KEYS;
    ALL_TABLES.forEach((k) => {
      if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
      let tableFixed = false;
      DATA[k].forEach((row) => {
        if (row.usage !== null && row.usage !== void 0 && row.usage !== "") {
          const u = parseFloat(row.usage);
          if (isNaN(u)) return;
          if (u < 0) {
            row.usage = 0;
            fixed.rows++;
            tableFixed = true;
          } else if (u > 1 && u % 1 !== 0) {
            row.usage = Math.round(u);
            fixed.rows++;
            tableFixed = true;
          }
        }
      });
      if (tableFixed) {
        fixed.tables++;
        persistData();
      }
    });
    return fixed;
  }
  function autoFixSequences2(dataKey) {
    if (!["water", "gen", "valve", "valve_door"].includes(dataKey)) return { tables: 0, rows: 0 };
    const items = DATA[dataKey];
    if (!Array.isArray(items) || items.length === 0) return { tables: 0, rows: 0 };
    const isNumericSeq = (s) => /^\d+(\.\d+)*$/.test(s);
    let fixed = 0;
    const parentSeqs = [];
    const allSeqs = items.map((r) => r.seq).filter((s) => s && isNumericSeq(String(s)));
    allSeqs.forEach((seq) => {
      if (parentSeqs.includes(seq)) return;
      const hasChild = allSeqs.some((other) => other !== seq && String(other).startsWith(String(seq) + "."));
      if (hasChild) parentSeqs.push(seq);
    });
    const rootHasChild = items.some((r) => /^\d+$/.test(String(r.seq || "")));
    if (rootHasChild && !parentSeqs.includes("\u4E00")) parentSeqs.push("\u4E00");
    parentSeqs.sort((a, b) => {
      const da = a === "\u4E00" ? 0 : String(a).split(".").length;
      const db = b === "\u4E00" ? 0 : String(b).split(".").length;
      return db - da;
    });
    parentSeqs.forEach((parentSeq) => {
      const children = items.filter((r) => {
        const cs = String(r.seq || "");
        return cs && isNumericSeq(cs) && isDirectChild(parentSeq, cs);
      });
      children.sort((a, b) => {
        const segA = parseInt(String(a.seq).split(".").pop(), 10);
        const segB = parseInt(String(b.seq).split(".").pop(), 10);
        return (isNaN(segA) ? 0 : segA) - (isNaN(segB) ? 0 : segB);
      });
      children.forEach((child, idx) => {
        const newSeq = parentSeq === "\u4E00" ? String(idx + 1) : parentSeq + "." + (idx + 1);
        const oldSeq = String(child.seq);
        if (newSeq === oldSeq) return;
        child.seq = newSeq;
        fixed++;
        items.forEach((r) => {
          const rs = String(r.seq || "");
          if (rs === oldSeq) return;
          if (rs.startsWith(oldSeq + ".")) {
            r.seq = newSeq + rs.substring(oldSeq.length);
          }
        });
      });
    });
    return { tables: fixed > 0 ? 1 : 0, rows: fixed };
  }
  function autoFixNegativeValues() {
    const fixed = { tables: 0, rows: 0 };
    const ALL_TABLES = PROJECT_DATA_KEYS;
    ALL_TABLES.forEach((k) => {
      if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
      let tableFixed = false;
      DATA[k].forEach((row) => {
        ["weight", "amount"].forEach((fk) => {
          if (row[fk] !== null && row[fk] !== void 0 && parseFloat(row[fk]) < 0) {
            row[fk] = Math.abs(parseFloat(row[fk]));
            fixed.rows++;
            tableFixed = true;
          }
        });
      });
      if (tableFixed) {
        fixed.tables++;
        persistData();
      }
    });
    return fixed;
  }
  function autoFixDuplicateSeqs() {
    const fixed = { tables: 0, rows: 0 };
    const fixableKeys = ["water", "gen", "valve", "valve_door", "water_parts", "gen_parts", "valve_parts", "water_tools", "gen_tools", "valve_tools"];
    fixableKeys.forEach((k) => {
      if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
      const seen = {};
      let tableFixed = false;
      DATA[k].forEach((row, idx) => {
        if (!row.seq && row.seq !== 0) return;
        const s = String(row.seq).trim();
        if (!s) return;
        if (seen[s] !== void 0) {
          let suffix = 2;
          let newSeq = s + "." + suffix;
          while (seen[newSeq] !== void 0) {
            suffix++;
            newSeq = s + "." + suffix;
          }
          row.seq = newSeq;
          seen[newSeq] = idx;
          fixed.rows++;
          tableFixed = true;
        } else {
          seen[s] = idx;
        }
      });
      if (tableFixed) {
        fixed.tables++;
        persistData();
      }
    });
    return fixed;
  }
  function autoFixEmptyRows() {
    const fixed = { tables: 0, rows: 0 };
    const ALL_TABLES = PROJECT_DATA_KEYS;
    ALL_TABLES.forEach((k) => {
      if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
      const before = DATA[k].length;
      DATA[k] = DATA[k].filter((row) => {
        if (!row || typeof row !== "object") return false;
        const hasName = row.name && String(row.name).trim() !== "";
        const hasSeq = row.seq !== null && row.seq !== void 0 && String(row.seq).trim() !== "";
        const hasAnyData = Object.values(row).some((v) => v !== null && v !== void 0 && String(v).trim() !== "" && String(v) !== "0");
        return hasName || hasSeq || hasAnyData;
      });
      const removed = before - DATA[k].length;
      if (removed > 0) {
        fixed.rows += removed;
        fixed.tables++;
        persistData();
      }
    });
    return fixed;
  }
  function autoFixBuyMismatch() {
    const fixed = { tables: 0, rows: 0 };
    const BOM_KEYS = ["water", "gen", "valve", "valve_door"];
    BOM_KEYS.forEach((k) => {
      if (!Array.isArray(DATA[k]) || DATA[k].length === 0) return;
      let tableFixed = false;
      DATA[k].forEach((row) => {
        if (row.is_buy === false) {
          const uv = parseFloat(row.usage);
          if (!isNaN(uv) && uv > 1 && uv % 1 === 0) {
            row.is_buy = true;
            fixed.rows++;
            tableFixed = true;
          }
        }
      });
      if (tableFixed) {
        fixed.tables++;
        persistData();
      }
    });
    return fixed;
  }
  function generateDataHealthReport2() {
    const issues = [];
    const fn = (row, k) => " \u2192 [" + _rowContext(row) + "]";
    const add = (level, code, message, suggestion, tableKey, rowIdx, ctx) => issues.push({ level, code, message: message + (ctx || ""), suggestion: suggestion || "", tableKey: tableKey || "", rowIdx: rowIdx !== void 0 ? rowIdx : -1 });
    const sidebar = captureSidebarState();
    if (!sidebar.projectName) add("warning", "PROJECT_NAME_EMPTY", "\u9879\u76EE\u540D\u79F0\u4E3A\u7A7A", "\u5EFA\u8BAE\u8865\u5145\u9879\u76EE\u540D\u79F0\uFF0C\u4FBF\u4E8E\u5BFC\u51FA\u548C\u5F52\u6863");
    if ((parseFloat(sidebar.unitCount) || 0) <= 0) add("error", "UNIT_COUNT_INVALID", "\u673A\u7EC4\u53F0\u6570\u5FC5\u987B\u5927\u4E8E 0", "\u8BF7\u5728\u5DE6\u4FA7\u9879\u76EE\u4FE1\u606F\u4E2D\u586B\u5199\u6709\u6548\u53F0\u6570");
    const BOM_KEYS = ["water", "gen", "valve", "valve_door"];
    const PARTS_KEYS = ["water_parts", "gen_parts", "valve_parts"];
    const TOOLS_KEYS = ["water_tools", "gen_tools", "valve_tools"];
    const ALL_TABLES = PROJECT_DATA_KEYS;
    ALL_TABLES.forEach((k) => {
      if (!Array.isArray(DATA[k])) {
        add("error", "TABLE_INVALID", k + " \u4E0D\u662F\u6709\u6548\u6570\u7EC4", "\u8BF7\u91CD\u65B0\u5BFC\u5165\u6216\u6062\u590D\u9ED8\u8BA4\u6570\u636E", k, -1);
        return;
      }
      if (DATA[k].length === 0) return;
      DATA[k].forEach((row, idx) => {
        if (!row || typeof row !== "object") {
          add("error", "ROW_INVALID", k + " \u7B2C " + (idx + 1) + " \u884C\u4E0D\u662F\u5BF9\u8C61", "", k, idx);
          return;
        }
        const ctx = fn(row, k);
        const hasName = row.name && String(row.name).trim() !== "";
        const hasSeq = row.seq !== null && row.seq !== void 0 && String(row.seq).trim() !== "";
        if (BOM_KEYS.includes(k) || PARTS_KEYS.includes(k) || TOOLS_KEYS.includes(k)) {
          if (!hasName && !hasSeq) {
            const hasAnyData = Object.values(row).some((v) => v !== null && v !== void 0 && String(v).trim() !== "" && String(v) !== "0");
            if (hasAnyData) add("error", "MISSING_BOTH", k + " \u7B2C " + (idx + 1) + " \u884C\u7F3A\u5C11\u5E8F\u53F7\u548C\u540D\u79F0" + ctx, "\u8BF7\u8865\u5145\u5E8F\u53F7\u6216\u540D\u79F0\uFF0C\u6216\u5220\u9664\u7A7A\u884C", k, idx);
          } else if (!hasName) {
            add("error", "MISSING_NAME", k + " \u7B2C " + (idx + 1) + " \u884C\u7F3A\u5C11\u540D\u79F0" + ctx, "\u8BF7\u8865\u5145\u540D\u79F0", k, idx);
          } else if (!hasSeq) {
            add("warning", "MISSING_SEQ", k + " \u7B2C " + (idx + 1) + " \u884C\u7F3A\u5C11\u5E8F\u53F7" + ctx, "\u5EFA\u8BAE\u8865\u5145\u5E8F\u53F7", k, idx);
          }
        }
        if (["automation", "monitoring"].includes(k)) {
          const hasFunc = row.function && String(row.function).trim() !== "";
          if (!hasName && !hasFunc) {
            const hasAnyData = Object.values(row).some((v) => v !== null && v !== void 0 && String(v).trim() !== "" && String(v) !== "0");
            if (hasAnyData) add("error", "MISSING_NAME_FUNC", k + " \u7B2C " + (idx + 1) + " \u884C\u7F3A\u5C11\u540D\u79F0\u548C\u529F\u80FD" + ctx, "", k, idx);
          }
        }
        if (row && "amount" in row && row.amount !== null && row.amount !== "" && isNaN(parseFloat(row.amount))) add("error", "AMOUNT_INVALID", k + " \u7B2C " + (idx + 1) + " \u884C\u91D1\u989D\u4E0D\u662F\u6570\u5B57" + ctx, "\u8BF7\u4FEE\u6B63\u4E3A\u6709\u6548\u6570\u5B57", k, idx);
        if (row && "total" in row && row.total !== null && row.total !== "" && isNaN(parseFloat(row.total))) add("error", "TOTAL_INVALID", k + " \u7B2C " + (idx + 1) + " \u884C\u5408\u8BA1\u4E0D\u662F\u6570\u5B57" + ctx, "\u8BF7\u4FEE\u6B63\u4E3A\u6709\u6548\u6570\u5B57", k, idx);
        if (row && "weight" in row && parseFloat(row.weight) < 0) add("warning", "WEIGHT_NEGATIVE", k + " \u7B2C " + (idx + 1) + " \u884C\u91CD\u91CF\u4E3A\u8D1F\u6570" + ctx, "\u8BF7\u4FEE\u6B63", k, idx);
        if (row && "amount" in row && parseFloat(row.amount) < 0) add("warning", "AMOUNT_NEGATIVE", k + " \u7B2C " + (idx + 1) + " \u884C\u91D1\u989D\u4E3A\u8D1F\u6570" + ctx, "\u8BF7\u4FEE\u6B63", k, idx);
        if (row && "qty" in row && row.qty !== null && row.qty !== void 0 && row.qty !== "") {
          const q = parseFloat(row.qty);
          if (isNaN(q) && isNaN(Date.parse(row.qty))) add("warning", "QTY_INVALID", k + " \u7B2C " + (idx + 1) + " \u884C\u6570\u91CF\u4E0D\u662F\u6709\u6548\u6570\u5B57" + ctx, "\u5EFA\u8BAE\u53EA\u586B\u6570\u5B57", k, idx);
        }
        if (BOM_KEYS.includes(k) && row && "is_buy" in row && row.is_buy !== null && row.is_buy !== void 0 && row.is_buy !== "") {
          const uv = parseFloat(row.usage);
          if (!isNaN(uv) && uv > 1 && uv % 1 === 0 && row.is_buy === false) add("warning", "BUY_USAGE_MISMATCH", k + " \u7B2C " + (idx + 1) + " \u884C\u6570\u91CF\u4E3A" + uv + "\uFF08\u5916\u8D2D\u7C7B\uFF09\uFF0C\u4F46\u6807\u8BB0\u4E3A\u81EA\u5236" + ctx, "\u5EFA\u8BAE\u5C06\u7C7B\u522B\u6539\u4E3A\u5916\u8D2D", k, idx);
        }
        if (hasSeq) {
          const dupIdx = DATA[k].findIndex((r, i) => i !== idx && r && String(r.seq || "").trim() === String(row.seq).trim());
          if (dupIdx >= 0 && dupIdx < idx) add("warning", "DUPLICATE_SEQ", k + " \u5E8F\u53F7 " + String(row.seq).trim() + " \u5728\u7B2C " + (dupIdx + 1) + " \u884C\u548C\u7B2C " + (idx + 1) + " \u884C\u91CD\u590D" + ctx, "\u5E8F\u53F7\u5E94\u552F\u4E00", k, idx);
        }
      });
    });
    BOM_KEYS.forEach((k) => {
      if (typeof validateTableConsistency === "function") {
        try {
          validateTableConsistency(k).forEach((x) => add("warning", "SUBTOTAL_INCONSISTENT", k + " \u6C47\u603B\u884C " + (x.seq || x.idx) + " \u4E0E\u5B50\u9879\u5408\u8BA1\u4E0D\u4E00\u81F4\uFF08\u9884\u671F\u91CD\u91CF " + x.expectedWeight + " \u5B9E\u9645 " + x.actualWeight + "\uFF09", '\u53EF\u70B9\u51FB"\u4FEE\u590D\u6C47\u603B"\u4FEE\u590D', k, x.idx));
        } catch (e) {
        }
      }
    });
    if (!state.scenarios || !Array.isArray(state.scenarios)) add("warning", "SCENARIOS_INVALID", "\u65B9\u6848\u6570\u636E\u4E0D\u662F\u6570\u7EC4", "\u7CFB\u7EDF\u4F1A\u5728\u4E0B\u6B21\u4FDD\u5B58\u65B9\u6848\u65F6\u4FEE\u590D");
    const errorCount = issues.filter((x) => x.level === "error").length;
    const warningCount = issues.filter((x) => x.level === "warning").length;
    return { passed: errorCount === 0, summary: { errorCount, warningCount, totalCount: issues.length }, issues, checkedAt: (/* @__PURE__ */ new Date()).toISOString() };
  }
  var TABLE_LABELS = { water: "\u6C34\u8F6E\u673A\u6750\u6599", gen: "\u53D1\u7535\u673A\u6750\u6599", valve: "\u8FDB\u6C34\u9600\u6750\u6599", valve_door: "\u9600\u95E8(\u95E8)\u6750\u6599", water_parts: "\u6C34\u8F6E\u673A\u5907\u4EF6", gen_parts: "\u53D1\u7535\u673A\u5907\u4EF6", valve_parts: "\u8FDB\u6C34\u9600\u5907\u4EF6", water_tools: "\u6C34\u8F6E\u673A\u5DE5\u5177", gen_tools: "\u53D1\u7535\u673A\u5DE5\u5177", valve_tools: "\u8FDB\u6C34\u9600\u5DE5\u5177", automation: "\u81EA\u52A8\u5316", monitoring: "\u5728\u7EBF\u76D1\u6D4B", liaison: "\u8BBE\u8054\u4F1A" };
  function _navigateErrorByIdx(idx) {
    const issues = window.__healthIssues;
    if (issues && issues[idx]) _navigateToError(issues[idx]);
  }
  function _navigateToError(issue) {
    if (!issue.tableKey || issue.rowIdx < 0) return;
    const k = issue.tableKey;
    if (["water", "gen", "valve", "valve_door"].includes(k)) {
      state.currentMatTab = k;
      renderMaterials();
    } else if (["water_parts", "gen_parts", "valve_parts"].includes(k)) {
      state.currentPartsTab = k;
      renderParts();
    } else if (["water_tools", "gen_tools", "valve_tools"].includes(k)) {
      state.currentToolsTab = k;
      renderTools();
    } else if (["automation", "monitoring", "liaison"].includes(k)) {
      renderAll();
    }
    const overlay = document.getElementById("healthOverlay");
    if (overlay) overlay.remove();
    setTimeout(() => _highlightErrorRow(k, issue.rowIdx), 200);
  }
  function _highlightErrorRow(tableKey, rowIdx) {
    let tableEl = null;
    if (["water", "gen", "valve", "valve_door"].includes(tableKey)) {
      tableEl = document.getElementById("matTable");
    } else if (["water_parts", "gen_parts", "valve_parts"].includes(tableKey)) {
      tableEl = document.getElementById("partsTable");
    } else if (["water_tools", "gen_tools", "valve_tools"].includes(tableKey)) {
      tableEl = document.getElementById("toolsTable");
    } else if (tableKey === "automation") {
      tableEl = document.getElementById("automationTable");
    } else if (tableKey === "monitoring") {
      tableEl = document.getElementById("monitoringTable");
    } else if (tableKey === "liaison") {
      tableEl = document.getElementById("liaisonTable");
    }
    if (!tableEl) return;
    const rows = tableEl.querySelectorAll("tbody tr");
    let targetRow = rows[rowIdx];
    if (!targetRow) {
      targetRow = tableEl.querySelector('tr[data-row="' + rowIdx + '"]');
    }
    if (targetRow) {
      targetRow.scrollIntoView({ behavior: "smooth", block: "center" });
      targetRow.style.transition = "background 0.3s";
      targetRow.style.background = "var(--accent-light, #fff3cd)";
      targetRow.style.boxShadow = "0 0 12px var(--accent, #f0a030)";
      setTimeout(() => {
        targetRow.style.background = "";
        targetRow.style.boxShadow = "";
      }, 3e3);
    }
  }
  function showDataHealthReport2(report) {
    const r = report || generateDataHealthReport2();
    const existing = document.getElementById("healthOverlay");
    if (existing) existing.remove();
    const overlay = document.createElement("div");
    overlay.id = "healthOverlay";
    overlay.className = "health-overlay";
    overlay.onclick = function(e) {
      if (e.target === overlay) overlay.remove();
    };
    window.__healthIssues = r.issues;
    const byTable = {};
    r.issues.forEach((iss, idx) => {
      iss._idx = idx;
      const tk = iss.tableKey || "\u5168\u5C40";
      if (!byTable[tk]) byTable[tk] = [];
      byTable[tk].push(iss);
    });
    let groupsHtml = "";
    Object.keys(byTable).forEach((tk) => {
      const issues = byTable[tk];
      const label = TABLE_LABELS[tk] || tk;
      const errCount = issues.filter((x) => x.level === "error").length;
      const warnCount = issues.filter((x) => x.level === "warning").length;
      let badge = "";
      if (errCount > 0) badge += '<span class="health-badge error">' + errCount + " \u9519\u8BEF</span>";
      if (warnCount > 0) badge += '<span class="health-badge warning">' + warnCount + " \u8B66\u544A</span>";
      let rowsHtml = "";
      issues.forEach((iss) => {
        const icon = iss.level === "error" ? "\u274C" : "\u26A0\uFE0F";
        const cls = iss.level === "error" ? "health-row-error" : "health-row-warning";
        const clickable = iss.tableKey && iss.rowIdx >= 0 ? "health-row-clickable" : "";
        const rowInfo = iss.rowIdx >= 0 ? "\u7B2C" + (iss.rowIdx + 1) + "\u884C" : "";
        rowsHtml += '<div class="health-issue-row ' + cls + " " + clickable + '"' + (clickable ? ' onclick="_navigateErrorByIdx(' + iss._idx + ')"' : "") + '><span class="health-issue-icon">' + icon + '</span><span class="health-issue-msg">' + rowInfo + " " + escHtml(iss.message) + "</span>" + (iss.suggestion ? '<span class="health-issue-tip">' + escHtml(iss.suggestion) + "</span>" : "") + (clickable ? '<span class="health-issue-nav">\u5B9A\u4F4D \u2192</span>' : "") + "</div>";
      });
      groupsHtml += '<div class="health-group"><div class="health-group-header"><span class="health-group-title">' + escHtml(label) + "</span>" + badge + '</div><div class="health-group-rows">' + rowsHtml + "</div></div>";
    });
    const passedIcon = r.passed ? "\u2705" : "\u26A0\uFE0F";
    const passedText = r.passed ? "\u6570\u636E\u4F53\u68C0\u901A\u8FC7" : "\u6570\u636E\u4F53\u68C0\u672A\u901A\u8FC7";
    const passedClass = r.passed ? "health-pass" : "health-fail";
    const fixableSeq = r.issues.filter((x) => x.code === "MISSING_SEQ").length;
    const fixableNeg = r.issues.filter((x) => x.code === "WEIGHT_NEGATIVE" || x.code === "AMOUNT_NEGATIVE").length;
    const fixableDup = r.issues.filter((x) => x.code === "DUPLICATE_SEQ").length;
    const fixableEmpty = r.issues.filter((x) => x.code === "MISSING_BOTH").length;
    const fixableBuyMismatch = r.issues.filter((x) => x.code === "BUY_USAGE_MISMATCH").length;
    const fixableTotal = fixableSeq + fixableNeg + fixableDup + fixableEmpty + fixableBuyMismatch + r.issues.filter((x) => x.code === "SUBTOTAL_INCONSISTENT").length;
    let fixBtns = "";
    if (fixableEmpty > 0) fixBtns += `<button class="btn btn-sm" onclick="autoFixEmptyRows(); document.getElementById('healthOverlay').remove(); setTimeout(function(){ showDataHealthReport(); },400);">\u6E05\u9664\u7A7A\u884C (` + fixableEmpty + ")</button>";
    if (fixableSeq > 0) fixBtns += `<button class="btn btn-sm" onclick="autoFixMissingSeqs(); document.getElementById('healthOverlay').remove(); setTimeout(function(){ showDataHealthReport(); },400);">\u8865\u5168\u5E8F\u53F7 (` + fixableSeq + ")</button>";
    if (fixableNeg > 0) fixBtns += `<button class="btn btn-sm" onclick="autoFixNegativeValues(); document.getElementById('healthOverlay').remove(); setTimeout(function(){ showDataHealthReport(); },400);">\u4FEE\u6B63\u8D1F\u6570 (` + fixableNeg + ")</button>";
    if (fixableDup > 0) fixBtns += `<button class="btn btn-sm" onclick="autoFixDuplicateSeqs(); document.getElementById('healthOverlay').remove(); setTimeout(function(){ showDataHealthReport(); },400);">\u53BB\u91CD\u5E8F\u53F7 (` + fixableDup + ")</button>";
    if (fixableBuyMismatch > 0) fixBtns += `<button class="btn btn-sm" onclick="autoFixBuyMismatch(); document.getElementById('healthOverlay').remove(); setTimeout(function(){ showDataHealthReport(); },400);">\u4FEE\u6B63\u7C7B\u522B (` + fixableBuyMismatch + ")</button>";
    const hasFixable = fixableTotal > 0;
    overlay.innerHTML = `<div class="health-modal"><div class="health-header"><span class="health-title">\u{1F50D} \u5FEB\u901F\u67E5\u9519</span><button class="health-close" onclick="document.getElementById('healthOverlay').remove()">\u2715</button></div><div class="health-summary ` + passedClass + '"><span class="health-summary-icon">' + passedIcon + '</span><span class="health-summary-text">' + passedText + '</span><span class="health-summary-stats">\u9519\u8BEF ' + r.summary.errorCount + " \xB7 \u8B66\u544A " + r.summary.warningCount + " \xB7 \u5171 " + r.summary.totalCount + ' \u9879</span><span class="health-summary-time">' + new Date(r.checkedAt).toLocaleString("zh-CN") + '</span></div><div class="health-body">' + (r.issues.length === 0 ? '<div class="health-empty">\u{1F389} \u672A\u53D1\u73B0\u4EFB\u4F55\u6570\u636E\u95EE\u9898</div>' : groupsHtml) + '</div><div class="health-footer"><span class="health-hint">\u{1F4A1} \u70B9\u51FB\u300C\u5B9A\u4F4D \u2192\u300D\u8DF3\u8F6C\u5230\u95EE\u9898\u884C\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u6279\u91CF\u4FEE\u590D</span><span style="display:flex;gap:6px;flex-wrap:wrap;">' + fixBtns + `</span><button class="btn" onclick="document.getElementById('healthOverlay').remove()">\u5173\u95ED</button>` + (hasFixable ? `<button class="btn primary" onclick="autoFixEmptyRows(); autoFixMissingSeqs(); autoFixUsageRates(); autoFixNegativeValues(); autoFixDuplicateSeqs(); autoFixBuyMismatch(); fixAllConsistency(); document.getElementById('healthOverlay').remove(); setTimeout(function(){ showDataHealthReport(); },500);">\u{1F527} \u5168\u90E8\u4FEE\u590D</button>` : "") + "</div></div>";
    document.body.appendChild(overlay);
  }
  function showToast2(msg) {
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1600);
  }
  var _tableConfigs2 = {};

  // js/src/rendering/overview.js
  function renderOverview(r) {
    const i = r.inputs;
    const kTotalEl = document.getElementById("kTotal");
    if (kTotalEl) {
      kTotalEl.innerHTML = fmt2(r.totalBid, 0) + '<span class="unit">\u4E07\u5143</span>';
      kTotalEl.classList.remove("kpi-animate");
      void kTotalEl.offsetWidth;
      kTotalEl.classList.add("kpi-animate");
    }
    document.getElementById("kTotalSub").textContent = `\u542B ${i.unitCount} \u53F0\u673A\u7EC4 \xB7 \u4E3B\u673A/\u5907\u4EF6/\u5DE5\u5177/\u8FD0\u8F93/\u670D\u52A1`;
    document.getElementById("kUnit").textContent = i.unitCount > 0 ? fmt2(r.totalBid / i.unitCount, 0) : "\u2014";
    document.getElementById("kFixed").textContent = fmt2(r.totalFixed, 0);
    const absorbPct = r.absorbPct * 100;
    const absorbEl = document.getElementById("kAbsorb");
    absorbEl.innerHTML = fmt2(absorbPct, 1) + '<span class="unit">%</span>';
    const kpiEl = document.getElementById("kAbsorbKpi");
    kpiEl.className = "mini-kpi " + (absorbPct > 45 ? "kpi-danger" : absorbPct > 30 ? "kpi-warn" : "kpi-good");
    document.getElementById("kAbsorbSub").textContent = `\u6D88\u5316 ${fmt2(r.absorb, 0)} \u4E07`;
    document.getElementById("kAgency").textContent = fmt2(r.agencyFee.fee, 2);
    const badge = document.getElementById("marginBadge");
    if (badge) {
      const margin = r.absorbPct * 100;
      if (margin > 45) {
        badge.textContent = "\u26A0 \u6D88\u5316\u7387\u504F\u9AD8";
        badge.style.cssText = "display:inline-block;background:var(--red-light);color:var(--red);padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600;";
      } else if (margin > 28) {
        badge.textContent = "\u2713 \u62A5\u4EF7\u5408\u7406";
        badge.style.cssText = "display:inline-block;background:var(--green-light);color:var(--green);padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600;";
      } else {
        badge.textContent = "\u2191 \u6709\u63D0\u4EF7\u7A7A\u95F4";
        badge.style.cssText = "display:inline-block;background:var(--blue-light);color:var(--blue);padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600;";
      }
    }
    const palette = ["var(--blue)", "var(--accent)", "var(--red)", "var(--green)", "var(--teal)", "var(--purple)", "var(--amber)", "var(--indigo)", "var(--teal)"];
    const body = document.getElementById("billBody");
    body.innerHTML = r.items.map((it, idx) => {
      const pct = r.totalBid > 0 ? it.total / r.totalBid * 100 : 0;
      const color = palette[idx % palette.length];
      return `<tr>
      <td style="font-weight:500;">${it.name}</td>
      <td class="num">${fmt2(it.self, 2)}</td>
      <td class="num">${fmt2(it.buy, 2)}</td>
      <td class="num">${fmt2(it.selfM, 2)}</td>
      <td class="num">${fmt2(it.buyM, 2)}</td>
      <td class="num">${fmt2(it.cost, 2)}</td>
      <td class="num">${it.qty}</td>
      <td class="num">${fmt2(it.unit, 2)}</td>
      <td class="num" style="font-weight:600;">${fmt2(it.total, 2)}</td>
      <td>
        <div class="bill-bar">
          <div class="bill-bar-track"><div class="bill-bar-fill" style="width:${pct}%;background:${color};"></div></div>
          <span style="font-size:11px;color:var(--text-muted);min-width:34px;text-align:right;">${fmt2(pct, 1)}%</span>
        </div>
      </td>
    </tr>`;
    }).join("");
    const sum = (k) => r.items.reduce((s, it) => s + it[k], 0);
    document.getElementById("tSelf").textContent = fmt2(sum("self"), 2);
    document.getElementById("tBuy").textContent = fmt2(sum("buy"), 2);
    document.getElementById("tSelfM").textContent = fmt2(sum("selfM"), 2);
    document.getElementById("tBuyM").textContent = fmt2(sum("buyM"), 2);
    document.getElementById("tCost").textContent = fmt2(sum("cost"), 2);
    document.getElementById("tTotal").textContent = fmt2(r.totalBid, 2);
  }

  // js/src/rendering/machines.js
  function renderMachines(r) {
    const machines = [
      { key: "water", label: "\u6C34\u8F6E\u673A", model: "HLB200-LJ-203", en: "Hydro Turbine", d: r.water },
      { key: "gen", label: "\u53D1\u7535\u673A", model: "SF40-16/4700", en: "Generator", d: r.gen },
      { key: "valve", label: "\u8FDB\u6C34\u9600\u95E8", model: "PDF120-WY-280", en: "Inlet Valve", d: r.valve }
    ];
    document.getElementById("machinesGrid").innerHTML = machines.map((m) => {
      if (!m.d.has) return `<div class="machine" data-t="${m.key}" style="opacity:0.4;"><div class="machine-name">${m.label}</div><div style="font-size:12px;color:var(--text-dim);text-align:center;padding:30px 0;">\u672C\u9879\u76EE\u4E0D\u542B\u6B64\u8BBE\u5907</div></div>`;
      const total = m.d.self + m.d.buy;
      const selfPct = total > 0 ? m.d.self / total * 100 : 0;
      return `<div class="machine" data-t="${m.key}">
      <div class="machine-name">${m.label}</div>
      <div class="machine-model">${m.model}</div>
      <div class="machine-row"><span>\u91CD\u91CF</span><span class="v">${fmt2(m.d.weight, 1)} T <button class="btn" style="font-size:10px;padding:1px 5px;margin-left:4px;" onclick="jumpToMaterial('${m.key}')" title="\u67E5\u770B\u6750\u6599\u660E\u7EC6">\u2192</button></span></div>
      <div class="machine-row"><span>\u6750\u6599\u4EF7</span><span class="v">${fmt2(m.d.mat, 2)} \u4E07</span></div>
      <div class="machine-row"><span>\u5916\u8D2D\u4EF6</span><span class="v">${fmt2(m.d.buy, 2)} \u4E07</span></div>
      <div class="machine-row"><span>\u81EA\u5236\u90E8\u5206</span><span class="v">${fmt2(m.d.self, 2)} \u4E07</span></div>
      <div class="machine-row"><span>\u6750\u6599\u5428\u4EF7</span><span class="v">${fmt2(m.d.matT, 2)} \u4E07/T</span></div>
      <div class="machine-row highlight"><span>\u62DF\u62A5\u5355\u4EF7</span><span class="v">${fmt2(m.d.unit, 2)} \u4E07</span></div>
      <div class="machine-row"><span>\u6295\u6807\u5428\u4EF7</span><span class="v">${fmt2(m.d.bidT, 2)} \u4E07/T</span></div>
      <div style="margin-top:10px;">
        <div style="display:flex;justify-content:space-between;font-size:10.5px;color:var(--text-muted);">
          <span>\u81EA\u5236 ${fmt2(selfPct, 1)}%</span><span>\u5916\u8D2D ${fmt2(100 - selfPct, 1)}%</span>
        </div>
        <div class="stacked">
          <div style="background:var(--blue);width:${selfPct}%;"></div>
          <div style="background:var(--amber);width:${100 - selfPct}%;"></div>
        </div>
      </div>
    </div>`;
    }).join("");
  }

  // js/src/rendering/charts.js
  var chTonPrice;
  var chTonPrice2;
  var chComposition;
  var chSelfBuy;
  var chCostStack;
  function renderCharts(r) {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const gridColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
    const textColor = isDark ? "#9090b8" : "#5a5a7a";
    const panelColor = isDark ? "#1a1a2e" : "#ffffff";
    Chart.defaults.color = textColor;
    Chart.defaults.borderColor = gridColor;
    const tonData = {
      labels: ["\u6C34\u8F6E\u673A", "\u53D1\u7535\u673A", "\u9600\u95E8"],
      datasets: [
        { label: "\u6750\u6599\u5428\u4EF7", data: [r.water.matT, r.gen.matT, r.valve.matT], backgroundColor: isDark ? "rgba(85,128,240,0.8)" : "rgba(59,111,212,0.8)", borderRadius: 5 },
        { label: "\u6295\u6807\u5428\u4EF7", data: [r.water.bidT, r.gen.bidT, r.valve.bidT], backgroundColor: isDark ? "rgba(240,160,80,0.8)" : "rgba(200,135,61,0.8)", borderRadius: 5 }
      ]
    };
    const tonOpts = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11 }, color: textColor } },
        tooltip: { callbacks: { label: (c) => ` ${c.dataset.label}: ${c.parsed.y.toFixed(2)} \u4E07/T` } }
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: textColor } },
        y: { beginAtZero: true, grid: { color: gridColor }, ticks: { callback: (v) => v + " \u4E07/T", font: { size: 11 }, color: textColor } }
      }
    };
    if (chTonPrice) {
      chTonPrice.data = tonData;
      chTonPrice.options = tonOpts;
      chTonPrice.update();
    } else chTonPrice = new Chart(document.getElementById("chTonPrice"), { type: "bar", data: tonData, options: tonOpts });
    if (document.getElementById("chTonPrice2")) {
      if (chTonPrice2) {
        chTonPrice2.data = tonData;
        chTonPrice2.options = tonOpts;
        chTonPrice2.update();
      } else chTonPrice2 = new Chart(document.getElementById("chTonPrice2"), { type: "bar", data: tonData, options: tonOpts });
    }
    const compItems = r.items.filter((x) => x.total > 0.01);
    const palette = ["#3b6fd4", "#e08820", "#e04060", "#1faa6b", "#00bfa5", "#7c6fdd", "#4255b0", "#f0a050", "#888"];
    const compData = {
      labels: compItems.map((x) => x.name),
      datasets: [{
        data: compItems.map((x) => x.total),
        backgroundColor: compItems.map((_, i) => palette[i % palette.length]),
        borderWidth: 3,
        borderColor: panelColor,
        hoverOffset: 8
      }]
    };
    const compOpts = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: { position: "right", labels: { boxWidth: 10, boxHeight: 10, padding: 10, font: { size: 11 }, color: textColor } },
        tooltip: {
          callbacks: {
            label: (c) => {
              const tot = c.dataset.data.reduce((a, b) => a + b, 0);
              const pct = tot > 0 ? (c.parsed / tot * 100).toFixed(1) : "0";
              return ` ${c.label}: ${c.parsed.toFixed(2)} \u4E07 (${pct}%)`;
            }
          }
        }
      }
    };
    if (chComposition) {
      chComposition.data = compData;
      chComposition.options = compOpts;
      chComposition.update();
    } else chComposition = new Chart(document.getElementById("chComposition"), { type: "doughnut", data: compData, options: compOpts });
    if (document.getElementById("chSelfBuy")) {
      const sbData = {
        labels: ["\u6C34\u8F6E\u673A", "\u53D1\u7535\u673A", "\u9600\u95E8"],
        datasets: [
          { label: "\u81EA\u5236", data: [r.water.self, r.gen.self, r.valve.self], backgroundColor: isDark ? "rgba(85,128,240,0.8)" : "rgba(59,111,212,0.8)", borderRadius: 4 },
          { label: "\u5916\u8D2D", data: [r.water.buy, r.gen.buy, r.valve.buy], backgroundColor: isDark ? "rgba(240,160,80,0.8)" : "rgba(200,135,61,0.8)", borderRadius: 4 }
        ]
      };
      const sbOpts = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11 }, color: textColor } },
          tooltip: { callbacks: { label: (c) => ` ${c.dataset.label}: ${c.parsed.y.toFixed(2)} \u4E07` } }
        },
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { color: textColor } },
          y: { stacked: true, beginAtZero: true, grid: { color: gridColor }, ticks: { callback: (v) => v + " \u4E07", color: textColor } }
        }
      };
      if (chSelfBuy) {
        chSelfBuy.data = sbData;
        chSelfBuy.options = sbOpts;
        chSelfBuy.update();
      } else chSelfBuy = new Chart(document.getElementById("chSelfBuy"), { type: "bar", data: sbData, options: sbOpts });
    }
    if (document.getElementById("chCostStack")) {
      const csData = {
        labels: r.items.map((x) => x.name),
        datasets: [
          { label: "\u81EA\u5236\u6210\u672C", data: r.items.map((x) => x.self), backgroundColor: isDark ? "rgba(85,128,240,0.85)" : "rgba(59,111,212,0.85)", borderRadius: 3 },
          { label: "\u5916\u8D2D\u6210\u672C", data: r.items.map((x) => x.buy), backgroundColor: isDark ? "rgba(240,160,80,0.85)" : "rgba(200,135,61,0.85)", borderRadius: 3 },
          { label: "\u81EA\u5236\u52A0\u4EF7", data: r.items.map((x) => x.selfM), backgroundColor: isDark ? "rgba(85,128,240,0.4)" : "rgba(59,111,212,0.4)", borderRadius: 3 },
          { label: "\u5916\u8D2D\u52A0\u4EF7", data: r.items.map((x) => x.buyM), backgroundColor: isDark ? "rgba(240,160,80,0.4)" : "rgba(200,135,61,0.4)", borderRadius: 3 }
        ]
      };
      const csOpts = {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11 }, color: textColor } },
          tooltip: { callbacks: { label: (c) => ` ${c.dataset.label}: ${c.parsed.x.toFixed(2)} \u4E07` } }
        },
        scales: {
          x: { stacked: true, beginAtZero: true, grid: { color: gridColor }, ticks: { callback: (v) => v + " \u4E07", color: textColor } },
          y: { stacked: true, grid: { display: false }, ticks: { color: textColor } }
        }
      };
      if (chCostStack) {
        chCostStack.data = csData;
        chCostStack.options = csOpts;
        chCostStack.update();
      } else chCostStack = new Chart(document.getElementById("chCostStack"), { type: "bar", data: csData, options: csOpts });
    }
  }

  // js/src/rendering/transport.js
  function renderTransport(r) {
    const t = r.transport;
    const i = r.inputs;
    document.getElementById("tWeightTotal").textContent = fmt2(i.waterWeight + i.genWeight + i.valveWeight, 2) + " T";
    document.getElementById("tFactor").textContent = fmt2(i.transportExtra, 2);
    document.getElementById("tWeightAdj").textContent = fmt2(t.weightSingle, 2) + " T";
    document.getElementById("tWeightWide").textContent = fmt2(t.wideWeight, 2) + " T";
    document.getElementById("tWeightNorm").textContent = fmt2(t.normalWeight, 2) + " T";
    document.getElementById("tDistance").textContent = fmt2(i.distance, 0) + " km";
    document.getElementById("tPriceWide").textContent = fmt2(i.tonKmPriceWide, 2) + " \u5143";
    document.getElementById("tPriceNorm").textContent = fmt2(i.tonKmPrice, 2) + " \u5143";
    document.getElementById("tCostWide").textContent = fmt2(t.transportWide, 4);
    document.getElementById("tCostNorm").textContent = fmt2(t.transportNormal, 4);
    document.getElementById("tCostUnit").textContent = fmt2(t.transportUnit, 2) + " \u4E07";
    document.getElementById("tQty").textContent = i.unitCount;
    document.getElementById("tCostAll").textContent = fmt2(t.transportTotal, 2) + " \u4E07";
  }

  // js/src/rendering/agency.js
  function renderAgency(r) {
    const detail = r.agencyFee.detail;
    document.getElementById("agencyInfo").innerHTML = `\u6295\u6807\u4EF7 <strong>${fmt2(r.totalBid, 2)} \u4E07\u5143</strong> \xB7 \u7D2F\u8FDB\u81F3\u7B2C <strong>${detail.length}</strong> \u6863 \xB7 \u5E94\u6536\u4EE3\u7406\u8D39 <strong>${fmt2(r.agencyFee.fee, 2)} \u4E07\u5143</strong>`;
    const rows = DATA2.agency_tiers.map((t, i) => {
      const matched = detail[i];
      return `<tr class="${matched && matched.hit ? "hit" : ""}">
      <td>${i + 1}</td>
      <td>${t.desc}</td>
      <td class="num">${matched ? fmt2(matched.length, 2) : "\u2014"}</td>
      <td class="num">${fmt2(t.rate * 100, 4)}%</td>
      <td class="num">${matched ? fmt2(matched.fee, 4) : "\u2014"}</td>
      <td class="num">${matched ? fmt2(matched.cumulative, 4) : "\u2014"}</td>
    </tr>`;
    }).join("");
    document.getElementById("agencyTableBody").innerHTML = rows;
  }

  // js/src/rendering/bid-analysis.js
  var chBidLadder;
  function renderBidAnalysis(r) {
    if (!r || !r.totalBid) return;
    const cost = r.totalFixed;
    const bid = r.totalBid;
    const margin = bid > 0 ? (bid - cost) / bid : 0;
    const floor = cost * 1.05;
    const suggestLow = cost * 1.25;
    const suggestHigh = cost * 1.45;
    const absorbPct = r.absorbPct * 100;
    let winRate;
    if (absorbPct < 15) winRate = 92;
    else if (absorbPct < 25) winRate = 80 - (absorbPct - 15) * 1.5;
    else if (absorbPct < 38) winRate = 65 - (absorbPct - 25) * 2.2;
    else if (absorbPct < 52) winRate = 36 - (absorbPct - 38) * 1.8;
    else winRate = Math.max(5, 11 - (absorbPct - 52) * 0.5);
    winRate = Math.min(95, Math.max(5, winRate));
    document.getElementById("baWinRate").textContent = winRate.toFixed(0) + "%";
    document.getElementById("baFloor").textContent = fmt2(floor, 0) + " \u4E07";
    document.getElementById("baSuggest").textContent = fmt2(suggestLow, 0) + " ~ " + fmt2(suggestHigh, 0) + " \u4E07";
    const arc = document.getElementById("gaugeArc");
    const gaugeText = document.getElementById("gaugeText");
    if (arc) {
      const total = 188;
      const filled = total * (winRate / 100);
      arc.setAttribute("stroke-dasharray", `${filled} ${total - filled}`);
      gaugeText.textContent = winRate.toFixed(0) + "%";
      gaugeText.setAttribute("fill", winRate > 60 ? "var(--green)" : winRate > 35 ? "var(--amber)" : "var(--red)");
    }
    const comment = document.getElementById("baWinComment");
    if (comment) {
      let txt = "";
      if (winRate > 70) txt = `<span style="color:var(--green);font-weight:600;">\u62A5\u4EF7\u7ADE\u4E89\u529B\u5F3A \u2705</span><br>\u5F53\u524D\u62A5\u4EF7\u76F8\u5BF9\u8F83\u4F4E\uFF0C\u80DC\u7B97\u8F83\u5927\u3002\u53EF\u8003\u8651\u9002\u5F53\u4E0A\u6D6E <strong>${fmt2(suggestLow - bid, 0)}</strong> \u4E07\u5143\u4EE5\u63D0\u5347\u5229\u6DA6\u7A7A\u95F4\uFF0C\u540C\u65F6\u4E0D\u5F71\u54CD\u4E2D\u6807\u6982\u7387\u3002`;
      else if (winRate > 45) txt = `<span style="color:var(--amber);font-weight:600;">\u62A5\u4EF7\u5904\u4E8E\u5408\u7406\u533A\u95F4 \u26A0\uFE0F</span><br>\u5F53\u524D\u80DC\u7387\u9002\u4E2D\u3002\u5EFA\u8BAE\u62A5\u4EF7\u5728 <strong>${fmt2(suggestLow, 0)}~${fmt2(suggestHigh, 0)}</strong> \u4E07\u5143\u4E4B\u95F4\uFF0C\u517C\u987E\u7ADE\u4E89\u529B\u4E0E\u5229\u6DA6\u3002`;
      else txt = `<span style="color:var(--red);font-weight:600;">\u62A5\u4EF7\u504F\u9AD8\uFF0C\u80DC\u7387\u8F83\u4F4E \u274C</span><br>\u5F53\u524D\u6D88\u5316\u7387 <strong>${absorbPct.toFixed(1)}%</strong> \u8F83\u9AD8\uFF0C\u5EFA\u8BAE\u68C0\u67E5\u6210\u672C\u6784\u6210\uFF0C\u6216\u5C06\u62A5\u4EF7\u964D\u81F3 <strong>${fmt2(suggestLow, 0)}</strong> \u4E07\u4EE5\u5185\u4EE5\u63D0\u5347\u7ADE\u4E89\u529B\u3002`;
      comment.innerHTML = txt;
    }
    const sensEl = document.getElementById("baSensitivity");
    if (sensEl) {
      const scenarios = [
        { label: "\u62A5\u4EF7 -10%", val: bid * 0.9, color: "var(--red)" },
        { label: "\u62A5\u4EF7 -5%", val: bid * 0.95, color: "var(--amber)" },
        { label: "\u5F53\u524D\u62A5\u4EF7", val: bid, color: "var(--blue)", current: true },
        { label: "\u62A5\u4EF7 +5%", val: bid * 1.05, color: "var(--green)" },
        { label: "\u62A5\u4EF7 +10%", val: bid * 1.1, color: "var(--teal)" }
      ];
      sensEl.innerHTML = scenarios.map((s) => {
        const profit = s.val - cost;
        const pct = s.val > 0 ? profit / s.val * 100 : 0;
        const barW = Math.max(0, Math.min(100, pct * 2));
        return `<div class="sensitivity-row" style="${s.current ? "font-weight:600;" : ""}">
        <span style="width:80px;font-size:11.5px;">${s.label}</span>
        <div class="sensitivity-bar"><div class="sensitivity-fill" style="width:${barW}%;background:${s.color};"></div></div>
        <span style="width:70px;text-align:right;font-size:11.5px;color:${s.color};font-family:monospace;">${fmt2(profit, 0)} \u4E07</span>
        <span style="width:44px;text-align:right;font-size:11px;color:var(--text-dim);">${pct.toFixed(1)}%</span>
      </div>`;
      }).join("");
    }
    const stratEl = document.getElementById("baStrategy");
    if (stratEl) {
      const cards = [
        { icon: "\u{1F534}", title: "\u4FDD\u5E95\u4EF7", val: fmt2(floor, 0) + " \u4E07", desc: "\u6210\u672C+5%\u7BA1\u7406\u8D39\uFF0C\u6700\u4F4E\u4E0D\u53EF\u4F4E\u4E8E\u6B64\u4EF7", color: "var(--red-light)", border: "var(--red)" },
        { icon: "\u{1F7E1}", title: "\u7ADE\u4E89\u4EF7", val: fmt2(suggestLow, 0) + " \u4E07", desc: "\u6210\u672C\xD71.25\uFF0C\u517C\u987E\u7ADE\u4E89\u529B\u4E0E\u57FA\u672C\u5229\u6DA6", color: "var(--amber-light)", border: "var(--amber)" },
        { icon: "\u{1F7E2}", title: "\u76EE\u6807\u4EF7", val: fmt2(suggestHigh, 0) + " \u4E07", desc: "\u6210\u672C\xD71.45\uFF0C\u7406\u60F3\u5229\u6DA6\u533A\u95F4\u4E0A\u9650", color: "var(--green-light)", border: "var(--green)" }
      ];
      stratEl.innerHTML = cards.map((c) => `
      <div style="background:${c.color};border:1px solid ${c.border};border-radius:8px;padding:14px;text-align:center;">
        <div style="font-size:22px;margin-bottom:4px;">${c.icon}</div>
        <div style="font-size:11px;color:var(--text-dim);margin-bottom:6px;text-transform:uppercase;letter-spacing:0.08em;">${c.title}</div>
        <div style="font-size:20px;font-weight:700;font-family:monospace;color:var(--text);">${c.val}</div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:6px;">${c.desc}</div>
      </div>`).join("");
    }
    const steps = 9;
    const labels = [], profitData = [], winData = [];
    for (let i = 0; i < steps; i++) {
      const pct = -20 + i * 5;
      const v = bid * (1 + pct / 100);
      const p = v - cost;
      const pPct = v > 0 ? p / v * 100 : 0;
      let wr;
      const absP = (v - cost) / v * 100;
      if (absP < 15) wr = 92;
      else if (absP < 25) wr = 80 - (absP - 15) * 1.5;
      else if (absP < 38) wr = 65 - (absP - 25) * 2.2;
      else if (absP < 52) wr = 36 - (absP - 38) * 1.8;
      else wr = Math.max(5, 11 - (absP - 52) * 0.5);
      wr = Math.min(95, Math.max(5, wr));
      labels.push((pct >= 0 ? "+" : "") + pct + "%");
      profitData.push(parseFloat(p.toFixed(1)));
      winData.push(parseFloat(wr.toFixed(1)));
    }
    const ladderData = {
      labels,
      datasets: [
        { label: "\u5229\u6DA6(\u4E07\u5143)", data: profitData, type: "bar", backgroundColor: profitData.map((v) => v > 0 ? "rgba(31,170,107,0.7)" : "rgba(224,64,96,0.7)"), borderRadius: 4, yAxisID: "y" },
        { label: "\u9884\u4F30\u80DC\u7387(%)", data: winData, type: "line", borderColor: "var(--blue)", backgroundColor: "rgba(59,111,212,0.1)", tension: 0.4, yAxisID: "y2", pointBackgroundColor: "var(--blue)", pointRadius: 4 }
      ]
    };
    const ctx = document.getElementById("chBidLadder");
    if (ctx) {
      if (chBidLadder) {
        chBidLadder.data = ladderData;
        chBidLadder.update();
      } else chBidLadder = new Chart(ctx, {
        data: ladderData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 11 } } },
            tooltip: { callbacks: { label: (c) => c.dataset.label + ": " + c.parsed.y + (c.datasetIndex === 1 ? "%" : " \u4E07") } }
          },
          scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: false, ticks: { callback: (v) => v + " \u4E07", font: { size: 11 } }, title: { display: true, text: "\u5229\u6DA6 (\u4E07\u5143)", font: { size: 11 } } },
            y2: { position: "right", min: 0, max: 100, ticks: { callback: (v) => v + "%", font: { size: 11 } }, grid: { display: false }, title: { display: true, text: "\u80DC\u7387", font: { size: 11 } } }
          }
        }
      });
    }
  }
  function updateExportButtons() {
    const exportBtn = document.getElementById("exportCsvBtn");
    const printBtn = document.getElementById("printBtn");
    const disabled = !hasAnyMachine();
    if (exportBtn) exportBtn.disabled = disabled;
    if (printBtn) printBtn.disabled = disabled;
  }

  // js/src/rendering/materials.js
  function renderMaterials2() {
    const which = state2.currentMatTab;
    const search = (document.getElementById("matSearch").value || "").toLowerCase();
    const filter = document.getElementById("matFilter").value;
    const filterFn = (it) => {
      if (filter === "self" && it.is_buy) return false;
      if (filter === "buy" && !it.is_buy) return false;
      if (search) {
        const text = (it.name + " " + (it.material || "") + " " + (it.replacement || "") + " " + (it.remark || "")).toLowerCase();
        if (!text.includes(search)) return false;
      }
      return true;
    };
    FormulaEngine2.recalcTable(which);
    const config = {
      tableId: "matTable",
      dataKey: which,
      columns: [
        { key: "seq", label: "\u5E8F\u53F7" },
        { key: "name", label: "\u90E8\u4EF6\u540D\u79F0" },
        { key: "material", label: "\u6750\u6599", type: "material" },
        { key: "replacement", label: "\u66FF\u4EE3\u6750\u6599", type: "material" },
        { key: "weight", label: "\u91CD\u91CF(T)", align: "right", type: "weight", summary: true, summaryLabel: "\u603B\u91CD\u91CF" },
        { key: "amount", label: "\u91D1\u989D(\u4E07)", align: "right", type: "money", formula: true, summary: true, summaryLabel: "\u91D1\u989D\u5408\u8BA1" },
        { key: "usage", label: "\u5229\u7528\u7387/\u6570\u91CF", align: "right", type: "usageRate" },
        { key: "is_buy", label: "\u7C7B\u522B", type: "bool" },
        { key: "remark", label: "\u5907\u6CE8" }
      ],
      summaryId: "matSummary",
      filterFn,
      onChange: () => {
      }
    };
    _tableConfigs2[config.tableId] = config;
    EditableTable.render(config);
    const summaryEl = document.getElementById("matSummary");
    if (summaryEl && !document.getElementById("matResetBtn")) {
      const btnWrap = document.createElement("span");
      btnWrap.style.cssText = "display:inline-flex;gap:6px;align-items:center;";
      const fixBtn = document.createElement("button");
      fixBtn.className = "btn-fix";
      fixBtn.textContent = "\u4FEE\u590D\u6C47\u603B";
      fixBtn.title = "\u4E00\u952E\u91CD\u65B0\u8BA1\u7B97\u6240\u6709\u5C42\u7EA7\u6C47\u603B\u503C";
      fixBtn.onclick = () => {
        fixAllConsistency();
      };
      const btn = document.createElement("button");
      btn.id = "matResetBtn";
      btn.className = "btn-reset";
      btn.textContent = "\u6062\u590D\u9ED8\u8BA4";
      btn.onclick = () => {
        if (confirm("\u786E\u5B9A\u6062\u590D\u6B64\u8868\u4E3A\u9ED8\u8BA4\u6570\u636E\uFF1F")) {
          resetDataTable(which);
          renderMaterials2();
          window.renderAll();
          showToast2("\u5DF2\u6062\u590D\u9ED8\u8BA4\u6570\u636E");
        }
      };
      btnWrap.appendChild(fixBtn);
      btnWrap.appendChild(btn);
      summaryEl.parentElement.insertBefore(btnWrap, summaryEl);
    }
  }

  // js/src/rendering/parts-tools.js
  function renderParts2() {
    autoSwitchPartsTab();
    const key = state2.currentPartsTab;
    const isValve = key === "valve_parts";
    const partsTabsContainer = document.querySelector("#partsTabs");
    const partsTabBtns = partsTabsContainer ? partsTabsContainer.querySelectorAll("button") : [];
    partsTabBtns.forEach((btn) => {
      const tabKey = btn.dataset.key;
      const isEnabled = tabKey === "water_parts" && state2.hasWater || tabKey === "gen_parts" && state2.hasGen || tabKey === "valve_parts" && state2.hasValve;
      btn.style.display = isEnabled ? "" : "none";
      btn.classList.toggle("on", tabKey === key);
    });
    const availTabs = getAvailablePartsTabs();
    if (!hasAnyMachine()) {
      document.getElementById("partsTable").innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px 0;color:var(--text-dim);font-size:13px;">\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u4E3B\u673A\u7C7B\u578B</td></tr>';
      document.getElementById("partsSummary").innerHTML = "";
      return;
    }
    FormulaEngine2.recalcTable(key);
    const cols = [
      { key: "seq", label: "\u5E8F\u53F7", width: "50px" },
      { key: "name", label: "\u9879\u76EE" },
      { key: "qty", label: "\u6570\u91CF", width: "70px", type: "qty", align: "right" },
      { key: "unit", label: "\u5355\u4F4D", width: "60px" },
      { key: "spec", label: "\u89C4\u683C" },
      { key: "self", label: "\u81EA\u5236", width: "70px", align: "right", type: "money", summary: true, summaryLabel: "\u81EA\u5236\u5408\u8BA1" },
      { key: "buy", label: "\u5916\u8D2D", width: "70px", align: "right", type: "money", summary: true, summaryLabel: "\u5916\u8D2D\u5408\u8BA1" }
    ];
    if (isValve) cols.push({ key: "total", label: "\u5408\u8BA1", width: "70px", align: "right", type: "money", formula: true, summary: true, summaryLabel: "\u603B\u5408\u8BA1" });
    const config = {
      tableId: "partsTable",
      dataKey: key,
      columns: cols,
      summaryId: "partsSummary",
      onChange: () => {
      }
    };
    _tableConfigs2[config.tableId] = config;
    EditableTable.render(config);
  }
  function renderTools2() {
    autoSwitchToolsTab();
    const key = state2.currentToolsTab;
    const isValve = key === "valve_tools";
    const toolsTabsContainer = document.querySelector("#toolsTabs");
    const toolsTabBtns = toolsTabsContainer ? toolsTabsContainer.querySelectorAll("button") : [];
    toolsTabBtns.forEach((btn) => {
      const tabKey = btn.dataset.key;
      const isEnabled = tabKey === "water_tools" && state2.hasWater || tabKey === "gen_tools" && state2.hasGen || tabKey === "valve_tools" && state2.hasValve;
      btn.style.display = isEnabled ? "" : "none";
      btn.classList.toggle("on", tabKey === key);
    });
    if (!hasAnyMachine()) {
      document.getElementById("toolsTable").innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px 0;color:var(--text-dim);font-size:13px;">\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u4E3B\u673A\u7C7B\u578B</td></tr>';
      document.getElementById("toolsSummary").innerHTML = "";
      return;
    }
    FormulaEngine2.recalcTable(key);
    const cols = [
      { key: "seq", label: "\u5E8F\u53F7", width: "50px" },
      { key: "name", label: "\u540D\u79F0" },
      { key: "qty", label: "\u6570\u91CF", width: "70px", type: "qty", align: "right" },
      { key: "unit", label: "\u5355\u4F4D", width: "60px" },
      { key: "weight", label: "\u91CD\u91CF", width: "80px", align: "right", type: "weight", summary: true, summaryLabel: "\u603B\u91CD\u91CF" },
      { key: "self", label: "\u81EA\u5236", width: "70px", align: "right", type: "money", summary: true, summaryLabel: "\u81EA\u5236\u5408\u8BA1" },
      { key: "buy", label: "\u5916\u8D2D", width: "70px", align: "right", type: "money", summary: true, summaryLabel: "\u5916\u8D2D\u5408\u8BA1" }
    ];
    if (isValve) cols.push({ key: "total", label: "\u5408\u8BA1", width: "70px", align: "right", type: "money", formula: true, summary: true, summaryLabel: "\u603B\u5408\u8BA1" });
    const config = {
      tableId: "toolsTable",
      dataKey: key,
      columns: cols,
      summaryId: "toolsSummary",
      onChange: () => {
      }
    };
    _tableConfigs2[config.tableId] = config;
    EditableTable.render(config);
  }

  // js/src/rendering/automation.js
  var AUTO_GROUP_ORDER = ["\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B", "\u9600\u95E8\u81EA\u52A8\u5316\u68C0\u6D4B", "\u5907\u4EF6\u81EA\u52A8\u5316\u68C0\u6D4B", "\u5DE5\u5177\u81EA\u52A8\u5316\u68C0\u6D4B", "\u8F85\u52A9\u8BBE\u5907\u81EA\u52A8\u5316\u68C0\u6D4B"];
  var AUTO_GROUP_SEQ = ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"];
  var AUTO_COLS = [
    { key: "seq", label: "\u5E8F\u53F7", width: "74px" },
    { key: "name", label: "\u540D\u79F0" },
    { key: "model", label: "\u578B\u53F7\u89C4\u683C" },
    { key: "qty", label: "\u6570\u91CF", width: "60px", align: "right", type: "int" },
    { key: "unit_price", label: "\u5355\u4EF7(\u5143)", width: "80px", align: "right", type: "number" },
    { key: "total", label: "\u5408\u4EF7(\u5143)", width: "80px", align: "right", type: "number", formula: true, summary: true, summaryLabel: "\u603B\u4EF7" },
    { key: "usage", label: "\u4F7F\u7528\u4F4D\u7F6E" },
    { key: "manufacturer", label: "\u5236\u9020\u5382" }
  ];
  function inferAutoGroup(row) {
    if (row.auto_group) return row.auto_group;
    const seqNum = parseInt(row.source_seq || row.seq, 10);
    return !isNaN(seqNum) && seqNum <= 32 ? "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B" : "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B";
  }
  function inferAutoSubgroup(row, group) {
    if (row.auto_subgroup) return row.auto_subgroup;
    const s = [row.name, row.usage, row.model].filter(Boolean).join(" ");
    const has = (...keys) => keys.some((k) => s.includes(k));
    if (group === "\u6C34\u8F6E\u673A\u81EA\u52A8\u5316\u68C0\u6D4B") {
      if (has("\u5BFC\u53F6", "\u526A\u65AD\u9500")) return "\u5BFC\u6C34\u673A\u6784";
      if (has("\u63A5\u529B\u5668", "\u7A7A\u6C14\u56F4\u5E26")) return "\u63A5\u529B\u5668\u4E0E\u7A7A\u6C14\u56F4\u5E26";
      if (has("\u8717\u58F3", "\u9876\u76D6", "\u5C3E\u6C34")) return "\u57CB\u5165\u96F6\u4EF6\u538B\u529B\u76D1\u6D4B";
      if (has("\u5BC6\u5C01\u6C34", "\u4E3B\u8F74\u5BC6\u5C01", "\u5BFC\u8F74\u627F\u51B7\u5374", "\u6C34\u5BFC\u51B7\u5374")) return "\u4E3B\u8F74\u5BC6\u5C01\u4E0E\u6C34\u5BFC\u51B7\u5374";
      if (has("\u6C34\u5BFC\u8F74\u627F", "\u6C34\u5BFC\u6CB9\u69FD", "\u6C34\u5BFC\u8F74\u74E6", "\u6E29\u5EA6", "\u6D4B\u6E29", "\u7AEF\u5B50\u7BB1", "\u6CB9\u6DF7\u6C34")) return "\u6C34\u5BFC\u8F74\u627F\u4E0E\u6D4B\u6E29";
    } else if (group === "\u53D1\u7535\u673A\u81EA\u52A8\u5316\u68C0\u6D4B") {
      if (has("\u4E0A\u5BFC", "\u4E0B\u5BFC", "\u63A8\u529B", "\u6CB9\u69FD", "\u6CB9\u6DF7\u6C34")) return "\u8F74\u627F\u6CB9\u69FD\u76D1\u6D4B";
      if (has("\u51B7\u5374\u6C34", "\u7A7A\u51B7\u5668", "\u603B\u51B7\u5374")) return "\u51B7\u5374\u7CFB\u7EDF\u76D1\u6D4B";
      if (has("\u8F74\u74E6\u6E29\u5EA6", "\u5B9A\u5B50\u6E29\u5EA6", "\u6E29\u5EA6\u62A5\u8B66", "\u6D4B\u6E29")) return "\u6D4B\u6E29\u7CFB\u7EDF";
      if (has("\u9F7F\u76D8", "\u6D4B\u901F")) return "\u8F6C\u901F\u76D1\u6D4B";
      if (has("\u706B\u707E", "\u706B\u8B66")) return "\u6D88\u9632\u62A5\u8B66";
      if (has("\u5236\u52A8")) return "\u5236\u52A8\u7CFB\u7EDF";
      if (has("\u7AEF\u5B50\u7BB1", "\u63A7\u5236\u67DC", "\u6D4B\u6E29\u5236\u52A8\u67DC")) return "\u7AEF\u5B50\u7BB1\u4E0E\u63A7\u5236\u67DC";
    }
    return "\u5176\u4ED6\u81EA\u52A8\u5316\u5143\u4EF6";
  }
  function ensureAutoTreeSeq() {
    const clean = [];
    (DATA2.automation || []).forEach((row) => {
      if (String(row.seq || "").trim() === "\u5E8F\u53F7" || String(row.name || "").replace(/\s+/g, "") === "\u540D\u79F0") return;
      if (row.source_seq === void 0 || row.source_seq === null || row.source_seq === "") row.source_seq = row.seq;
      row.auto_group = inferAutoGroup(row);
      row.auto_subgroup = inferAutoSubgroup(row, row.auto_group);
      clean.push(row);
    });
    if (clean.length !== (DATA2.automation || []).length) DATA2.automation = clean;
    AUTO_GROUP_ORDER.forEach((group, gi) => {
      const subNames = [];
      clean.filter((r) => r.auto_group === group).forEach((r) => {
        if (!subNames.includes(r.auto_subgroup)) subNames.push(r.auto_subgroup);
      });
      subNames.forEach((sub, si) => {
        clean.filter((r) => r.auto_group === group && r.auto_subgroup === sub).forEach((r, ri) => {
          r.seq = ri + 1;
        });
      });
    });
  }
  function renderAutoCell(row, col, realIdx, ci) {
    const val = row[col.key];
    const cls = ["editable-cell"];
    if (col.align === "right") cls.push("num");
    if (col.formula) cls.push("formula-cell");
    let display = EditableTable.cellDisplay(val, col);
    if (col.key === "seq") {
      display = `<span class="auto-seq-main">${escHtml2(String(val ?? ""))}</span>`;
    }
    if (col.key === "total" && val != null && val !== "") {
      display = `<span class="auto-total-val">${display}</span>`;
    }
    if (col.key === "unit_price" && val != null && val !== "") {
      display = `<span class="auto-price-val">${display}</span>`;
    }
    const titleAttr = typeof val === "string" && val.length > 16 ? ` title="${val.replace(/"/g, "&quot;")}"` : "";
    return `<td class="${cls.join(" ")}" data-col="${ci}" data-key="${col.key}" data-idx="${realIdx}" data-orig-idx="${realIdx}"${titleAttr}>${display}</td>`;
  }
  function renderAutoGroupedTable(rows, groupName, groupIdx) {
    const groupSeq = AUTO_GROUP_SEQ[groupIdx] || String(groupIdx + 1);
    if (!rows.length) {
      return `<details class="auto-tree-group">
      <summary>
        <span class="auto-tree-seq">${groupSeq}</span>
        <div class="auto-tree-title"><span class="auto-tree-name">${escHtml2(groupName)}</span></div>
        <span class="auto-tree-count">0 \u9879</span>
      </summary>
      <div class="auto-tree-empty">\u6682\u65E0\u5339\u914D\u9879\u76EE</div>
    </details>`;
    }
    const subNames = [];
    rows.forEach(({ row }) => {
      if (!subNames.includes(row.auto_subgroup)) subNames.push(row.auto_subgroup);
    });
    const colgroupHtml = `<colgroup>
    <col class="atm-op">
    ${AUTO_COLS.map((c) => {
      const cls = {
        seq: "atm-seq",
        name: "atm-name",
        model: "atm-model",
        qty: "atm-qty",
        unit_price: "atm-price",
        total: "atm-total",
        usage: "atm-usage",
        manufacturer: "atm-mfr"
      }[c.key] || "";
      return `<col class="${cls}">`;
    }).join("")}
  </colgroup>`;
    let body = "";
    subNames.forEach((sub, si) => {
      const subRows = rows.filter((x) => x.row.auto_subgroup === sub);
      const subTotal = subRows.reduce((s, x) => s + (parseFloat(x.row.total) || 0), 0);
      body += `<div class="auto-subgroup">
      <div class="auto-subgroup-header">
        <div class="auto-subgroup-title">${si + 1}. ${escHtml2(sub)}</div>
        <div class="auto-subgroup-meta">
          <span class="auto-subgroup-count">${subRows.length} \u9879</span>
          <span class="auto-subgroup-subtotal">\xA5 ${fmt2(subTotal, 2)}</span>
        </div>
      </div>
      <table class="auto-table-mini">
        ${colgroupHtml}
        <thead><tr>
          <th></th>
          ${AUTO_COLS.map((c) => `<th class="${c.align === "right" ? "num" : ""}" title="${escHtml2(c.label)}">${escHtml2(c.label)}</th>`).join("")}
        </tr></thead>
        <tbody>
          ${subRows.map(({ row, idx }) => `<tr class="row-editable">
            <td><button class="row-btn row-edit-btn" onclick="openRowEditModal('data',{dataKey:'automation',rowIdx:${idx},config:_tableConfigs.autoTable})" title="\u5F39\u7A97\u7F16\u8F91">\u270E</button></td>
            ${AUTO_COLS.map((col, ci) => renderAutoCell(row, col, idx, ci)).join("")}
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`;
    });
    const total = rows.reduce((sum, x) => sum + (parseFloat(x.row.total) || 0), 0);
    return `<details class="auto-tree-group" open>
    <summary>
      <span class="auto-tree-seq">${groupSeq}</span>
      <div class="auto-tree-title"><span class="auto-tree-name">${escHtml2(groupName)}</span></div>
      <span class="auto-tree-count">${rows.length} \u9879</span>
      <span class="auto-tree-total-badge">\u5408\u4EF7 ${fmt2(total, 2)} \u5143</span>
    </summary>
    ${body}
  </details>`;
  }
  function renderAuto() {
    const search = (document.getElementById("autoSearch").value || "").toLowerCase();
    FormulaEngine2.recalcTable("automation");
    FormulaEngine2.recalcTable("monitoring");
    ensureAutoTreeSeq();
    const autoConfig = {
      tableId: "autoTable",
      dataKey: "automation",
      columns: AUTO_COLS,
      summaryId: "autoSummary",
      onChange: () => {
      }
    };
    _tableConfigs2[autoConfig.tableId] = autoConfig;
    const all = (DATA2.automation || []).map((row, idx) => ({ row, idx }));
    const filtered = all.filter(({ row }) => {
      if (!search) return true;
      return [row.seq, row.name, row.model, row.usage, row.manufacturer, row.auto_group, row.auto_subgroup].filter(Boolean).join(" ").toLowerCase().includes(search);
    });
    const host = document.getElementById("autoTable");
    if (host) {
      const total = filtered.reduce((sum, x) => sum + (parseFloat(x.row.total) || 0), 0);
      host.outerHTML = `<div id="autoTable" class="auto-tree">
      <div class="auto-tree-toolbar">
        <div class="info">\u6309\u7EC4\u5185\u987A\u5E8F\u7F16\u53F7\uFF081\u30012\u30013\u2026\uFF09\uFF0C\u539F\u59CB\u6765\u6E90\u884C\u53F7\u4FDD\u7559\u5728\u6570\u636E\u4E2D\u3002</div>
        <div class="auto-tree-actions">
          <button class="btn" onclick="document.querySelectorAll('#autoTable details.auto-tree-group').forEach(d=>d.open=true)">\u5168\u90E8\u5C55\u5F00</button>
          <button class="btn" onclick="document.querySelectorAll('#autoTable details.auto-tree-group').forEach(d=>d.open=false)">\u5168\u90E8\u6536\u8D77</button>
        </div>
      </div>
      ${AUTO_GROUP_ORDER.map((group, gi) => renderAutoGroupedTable(filtered.filter((x) => x.row.auto_group === group), group, gi)).join("")}
    </div>`;
      const summaryEl = document.getElementById("autoSummary");
      if (summaryEl) summaryEl.innerHTML = `\u5171 ${DATA2.automation.length} \u9879 \xB7 \u5F53\u524D\u663E\u793A ${filtered.length} \u9879 \xB7 \u5408\u4EF7\uFF1A<strong style="color:var(--text);">${fmt2(total, 2)}</strong> \u5143 <span style="color:var(--text-dim);font-size:11px;">(\u2248 ${fmt2(total / YUAN_TO_WAN2, 4)} \u4E07)</span>`;
      setTimeout(() => {
        const newHost = document.getElementById("autoTable");
        if (newHost) applyResizableTables();
      }, 0);
    }
    const monConfig = {
      tableId: "monitorTable",
      dataKey: "monitoring",
      columns: [
        { key: "seq", label: "\u5E8F\u53F7", width: "50px" },
        { key: "function", label: "\u529F\u80FD" },
        { key: "name", label: "\u5143\u4EF6\u540D\u79F0" },
        { key: "model", label: "\u578B\u53F7" },
        { key: "qty", label: "\u6570\u91CF", width: "60px", align: "right", type: "qty" },
        { key: "unit_price", label: "\u5355\u4EF7(\u5143)", width: "80px", align: "right", type: "number" },
        { key: "total", label: "\u5408\u4EF7(\u5143)", width: "80px", align: "right", type: "number", formula: true, summary: true, summaryLabel: "\u603B\u4EF7" },
        { key: "remark", label: "\u5907\u6CE8" }
      ],
      summaryId: "monitorSummary",
      onChange: () => {
      }
    };
    _tableConfigs2[monConfig.tableId] = monConfig;
    EditableTable.render(monConfig);
  }

  // js/src/rendering/liaison.js
  function renderLiaison() {
    FormulaEngine2.recalcTable("liaison");
    const config = {
      tableId: "liaisonTable",
      dataKey: "liaison",
      columns: [
        { key: "seq", label: "\u5E8F\u53F7", width: "50px" },
        { key: "name", label: "\u9879\u76EE" },
        { key: "location", label: "\u5730\u70B9" },
        { key: "person_days", label: "\u4EBA\u5929\u6570", align: "right", type: "int" },
        { key: "unit_price", label: "\u5355\u4EF7(\u5143/\u4EBA\u65E5)", align: "right", type: "number" },
        { key: "total", label: "\u603B\u4EF7(\u5143)", align: "right", type: "number", formula: true, summary: true, summaryLabel: "\u603B\u4EF7" },
        { key: "remark", label: "\u5907\u6CE8" }
      ],
      summaryId: "liaisonSummary",
      onChange: () => {
      }
    };
    _tableConfigs2[config.tableId] = config;
    EditableTable.render(config);
  }

  // js/src/rendering/material-lib.js
  function _nextMatLibId() {
    const maxId = MAT_LIB2.reduce((max, m) => {
      const num = parseInt((m.id || "MAT-0000").replace("MAT-", ""), 10);
      return !isNaN(num) && num > max ? num : max;
    }, 0);
    return "MAT-" + String(maxId + 1).padStart(4, "0");
  }
  function renderMatLib2() {
    const search = (document.getElementById("matLibSearch")?.value || "").toLowerCase();
    const catFilter = document.getElementById("matLibCatFilter")?.value || "all";
    let items = MAT_LIB2;
    if (search) items = items.filter((m) => m.name.toLowerCase().includes(search) || (m.spec || "").toLowerCase().includes(search) || (m.remark || "").toLowerCase().includes(search));
    if (catFilter !== "all") items = items.filter((m) => m.category === catFilter);
    let html = `<thead><tr>
    <th style="width:40px;"></th>
    <th>\u6750\u6599ID</th><th>\u6750\u6599\u540D\u79F0</th><th>\u89C4\u683C</th><th>\u5206\u7C7B</th>
    <th class="num">\u6807\u51C6\u4EF7\u683C(\u4E07/T)</th><th class="num">\u5229\u7528\u7387</th><th>\u5907\u6CE8</th>
  </tr></thead><tbody>`;
    if (items.length === 0) {
      html += `<tr><td colspan="8" style="text-align:center;padding:20px;color:var(--text-dim);">\u6682\u65E0\u6750\u6599\u6570\u636E \xB7 \u70B9\u51FB"\u4E00\u952E\u5BFC\u5165\u6750\u6599"\u6216"\u65B0\u589E\u6750\u6599"\u5F00\u59CB</td></tr>`;
    }
    const shouldGroup = !search && catFilter === "all";
    if (shouldGroup) {
      const groups = {};
      items.forEach((m) => {
        const cat = m.category || "\u5176\u4ED6";
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(m);
      });
      const catOrder = ["\u677F\u6750\u7C7B", "\u578B\u6750\u7C7B", "\u94F8\u4EF6\u7C7B", "\u953B\u4EF6\u7C7B", "\u94DC\u6750", "\u7EDD\u7F18\u6750\u6599", "\u4E0D\u9508\u94A2\u6750", "\u7BA1\u6750", "\u6210\u54C1\u4EF6", "\u8F74\u627F/\u8F74\u5957", "\u5BC6\u5C01\u4EF6", "\u9600\u95E8\u7C7B", "\u5176\u4ED6"];
      const sortedCats = [...catOrder.filter((c) => groups[c]), ...Object.keys(groups).filter((c) => !catOrder.includes(c))];
      sortedCats.forEach((cat) => {
        const catItems = groups[cat];
        html += `<tr style="background:var(--accent-light);cursor:pointer;" onclick="toggleMatLibGroup('${cat.replace(/'/g, "\\'")}')" title="\u70B9\u51FB\u5C55\u5F00/\u6298\u53E0">
        <td colspan="8" style="padding:5px 10px;font-weight:600;font-size:12px;color:var(--accent-dark);letter-spacing:0.05em;">
          <span id="matLibGroupIcon_${cat.replace(/[^a-zA-Z0-9]/g, "_")}">\u25BC</span>
          &nbsp;${cat}
          <span style="font-size:11px;font-weight:400;color:var(--text-muted);margin-left:8px;">${catItems.length} \u9879</span>
        </td>
      </tr>`;
        catItems.forEach((m) => {
          const realIdx = MAT_LIB2.indexOf(m);
          html += `<tr class="matlib-group-row matlib-group-${cat.replace(/[^a-zA-Z0-9]/g, "_")}">
          <td style="text-align:center;white-space:nowrap;">
            <button class="row-btn row-edit-btn" onclick="openRowEditModal('matlib',{idx:${realIdx}})" title="\u5F39\u7A97\u7F16\u8F91">\u270E</button><button class="row-btn del" onclick="deleteMatLibItem(${realIdx})" title="\u5220\u9664">\xD7</button>
          </td>
          <td style="font-family:monospace;font-size:11px;">${m.id}</td>
          <td class="editable-cell" data-col="1" data-idx="${realIdx}" data-lib="true">${m.name}</td>
          <td class="editable-cell" data-col="2" data-idx="${realIdx}" data-lib="true">${m.spec || '<span style="color:var(--text-dim);">\u2014</span>'}</td>
          <td class="editable-cell" data-col="3" data-idx="${realIdx}" data-lib="true">${m.category}</td>
          <td class="editable-cell num" data-col="4" data-idx="${realIdx}" data-lib="true">${fmt2(m.price, 4)}</td>
          <td class="editable-cell num" data-col="5" data-idx="${realIdx}" data-lib="true">${fmt2(m.usage_rate ?? 0.8, 2)}</td>
          <td class="editable-cell" data-col="6" data-idx="${realIdx}" data-lib="true">${m.remark || '<span style="color:var(--text-dim);">\u2014</span>'}</td>
        </tr>`;
        });
      });
    } else {
      items.forEach((m, idx) => {
        const realIdx = MAT_LIB2.indexOf(m);
        html += `<tr>
        <td style="text-align:center;white-space:nowrap;">
          <button class="row-btn row-edit-btn" onclick="openRowEditModal('matlib',{idx:${realIdx}})" title="\u5F39\u7A97\u7F16\u8F91">\u270E</button><button class="row-btn del" onclick="deleteMatLibItem(${realIdx})" title="\u5220\u9664">\xD7</button>
        </td>
        <td style="font-family:monospace;font-size:11px;">${m.id}</td>
        <td class="editable-cell" data-col="1" data-idx="${realIdx}" data-lib="true">${m.name}</td>
        <td class="editable-cell" data-col="2" data-idx="${realIdx}" data-lib="true">${m.spec || '<span style="color:var(--text-dim);">\u2014</span>'}</td>
        <td class="editable-cell" data-col="3" data-idx="${realIdx}" data-lib="true">${m.category}</td>
        <td class="editable-cell num" data-col="4" data-idx="${realIdx}" data-lib="true">${fmt2(m.price, 4)}</td>
        <td class="editable-cell num" data-col="5" data-idx="${realIdx}" data-lib="true">${fmt2(m.usage_rate ?? 0.8, 2)}</td>
        <td class="editable-cell" data-col="6" data-idx="${realIdx}" data-lib="true">${m.remark || '<span style="color:var(--text-dim);">\u2014</span>'}</td>
      </tr>`;
      });
    }
    html += `</tbody>`;
    document.getElementById("matLibTable").innerHTML = html;
    document.getElementById("matLibSummary").innerHTML = `\u5171 <strong>${MAT_LIB2.length}</strong> \u6761\u6750\u6599 \xB7 \u7B5B\u9009\u663E\u793A <strong>${items.length}</strong> \u6761`;
  }
  var _matLibCollapsed = /* @__PURE__ */ new Set();
  function toggleMatLibGroup(cat) {
    const key = cat.replace(/[^a-zA-Z0-9]/g, "_");
    const rows = document.querySelectorAll(".matlib-group-" + key);
    const icon = document.getElementById("matLibGroupIcon_" + key);
    if (_matLibCollapsed.has(cat)) {
      _matLibCollapsed.delete(cat);
      rows.forEach((r) => r.style.display = "");
      if (icon) icon.textContent = "\u25BC";
    } else {
      _matLibCollapsed.add(cat);
      rows.forEach((r) => r.style.display = "none");
      if (icon) icon.textContent = "\u25B6";
    }
  }
  window.toggleMatLibGroup = toggleMatLibGroup;
  function handleMatLibEdit(cell) {
    const idx = parseInt(cell.dataset.idx, 10);
    const colIdx = parseInt(cell.dataset.col, 10);
    const cols = ["name", "spec", "category", "price", "usage_rate", "remark"];
    const colTypes = ["text", "text", "text", "number", "number", "text"];
    const field = cols[colIdx];
    const item = MAT_LIB2[idx];
    if (!item) return;
    if (cell.classList.contains("editing")) return;
    cell.classList.add("editing");
    const oldVal = item[field];
    cell.innerHTML = "";
    const input = document.createElement("input");
    input.type = colTypes[colIdx];
    if (input.type === "number") {
      input.step = "any";
    }
    input.value = oldVal !== null && oldVal !== void 0 ? oldVal : "";
    cell.appendChild(input);
    input.focus();
    input.select();
    const finish = (save) => {
      if (save) {
        const raw = input.value.trim();
        item[field] = colTypes[colIdx] === "number" ? raw === "" ? null : parseFloat(raw) : raw === "" ? "" : raw;
      }
      cell.classList.remove("editing");
      persistMatLib2();
      renderMatLib2();
    };
    input.addEventListener("blur", () => finish(true));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        finish(true);
      }
      if (e.key === "Escape") finish(false);
    });
  }
  function addMatLibRow() {
    const id = _nextMatLibId();
    MAT_LIB2.push({ id, name: "\u65B0\u6750\u6599", spec: "", category: "\u5176\u4ED6", price: 0, usage_rate: 0.8, remark: "" });
    persistMatLib2();
    renderMatLib2();
    showToast2("\u5DF2\u6DFB\u52A0\u65B0\u6750\u6599: " + id);
  }
  function deleteMatLibItem(idx) {
    const m = MAT_LIB2[idx];
    if (!confirm(`\u786E\u5B9A\u8981\u5220\u9664\u6750\u6599 "${m.name}" (${m.id}) \u5417\uFF1F`)) return;
    MAT_LIB2.splice(idx, 1);
    persistMatLib2();
    renderMatLib2();
    showToast2("\u5DF2\u5220\u9664: " + m.name);
  }
  function exportMatLib() {
    let csv = "\uFEFF\u6750\u6599ID,\u6750\u6599\u540D\u79F0,\u89C4\u683C,\u5206\u7C7B,\u6807\u51C6\u4EF7\u683C(\u4E07/T),\u5229\u7528\u7387,\u5907\u6CE8\n";
    MAT_LIB2.forEach((m) => {
      csv += [m.id, m.name, m.spec || "", m.category, m.price, m.usage_rate ?? 0.8, m.remark || ""].map(csvEscape).join(",") + "\n";
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `\u6750\u6599\u5E93_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast2("\u6750\u6599\u5E93\u5DF2\u5BFC\u51FA");
  }
  function importMaterials() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".xlsx,.xls,.csv,.pdf";
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      showToast2("\u6B63\u5728\u89E3\u6790\u6587\u4EF6: " + file.name + "...");
      try {
        let rows = [];
        const ext = file.name.split(".").pop().toLowerCase();
        if (ext === "csv") {
          const text = await file.text();
          rows = parseCSVRows(text);
        } else if (ext === "xlsx" || ext === "xls") {
          rows = await parseXLSX(file);
        } else if (ext === "pdf") {
          rows = await parsePDF(file);
          showToast2("PDF\u89E3\u6790\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u9884\u89C8\u6570\u636E");
        } else {
          showToast2("\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F: " + ext);
          return;
        }
        if (rows.length === 0) {
          showToast2("\u672A\u80FD\u4ECE\u6587\u4EF6\u4E2D\u89E3\u6790\u5230\u6570\u636E\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u683C\u5F0F");
          return;
        }
        showImportPreview(rows, file.name);
      } catch (err) {
        showToast2("\u6587\u4EF6\u89E3\u6790\u5931\u8D25: " + err.message);
        console.error(err);
      }
    };
    input.click();
  }
  function parseCSVRows(text) {
    const lines = text.split(/\r?\n/).filter((l) => l.trim());
    if (lines.length < 2) return [];
    const header = lines[0].replace(/^﻿/, "");
    const cols = header.split(/[,\t]/).map((h) => h.trim().replace(/"/g, ""));
    const nameIdx = cols.findIndex((c) => /材料名称|名称|name|材料|material/i.test(c));
    const priceIdx = cols.findIndex((c) => /价格|单价|price|万/i.test(c));
    const specIdx = cols.findIndex((c) => /规格|spec/i.test(c));
    const catIdx = cols.findIndex((c) => /分类|类别|category/i.test(c));
    const usageIdx = cols.findIndex((c) => /利用率|usage|usage_rate|利用系数/i.test(c));
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const vals = lines[i].split(/[,\t]/).map((v) => v.trim().replace(/"/g, ""));
      if (vals.length < 2) continue;
      rows.push({
        name: nameIdx >= 0 ? vals[nameIdx] || "" : vals[0] || "",
        spec: specIdx >= 0 ? vals[specIdx] || "" : "",
        category: catIdx >= 0 ? vals[catIdx] || "\u5176\u4ED6" : "\u5176\u4ED6",
        price: priceIdx >= 0 ? parseFloat(vals[priceIdx]) || 0 : parseFloat(vals[1]) || 0,
        usage_rate: usageIdx >= 0 ? parseFloat(vals[usageIdx]) || 0.8 : 0.8,
        remark: ""
      });
    }
    return rows;
  }
  async function parseXLSX(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        try {
          const text = new TextDecoder("utf-8").decode(data);
          if (text.includes(",") || text.includes("	")) {
            resolve(parseCSVRows(text));
            return;
          }
        } catch (e2) {
        }
        const strings = extractStringsFromBinary(data);
        resolve(stringsToRows(strings));
      };
      reader.readAsArrayBuffer(file);
    });
  }
  function extractStringsFromBinary(data) {
    const strs = [];
    let cur = "";
    for (let i = 0; i < data.length; i++) {
      const b = data[i];
      if (b >= 32 && b < 127) {
        cur += String.fromCharCode(b);
      } else {
        if (cur.length > 3) strs.push(cur);
        cur = "";
      }
    }
    if (cur.length > 3) strs.push(cur);
    return strs;
  }
  function stringsToRows(strings) {
    const materialPattern = /[\\钢铜铝铁铸锻绝缘管材]/;
    const rows = [];
    let currentName = "";
    for (const s of strings) {
      if (materialPattern.test(s) && s.length > 3) {
        currentName = s;
      } else if (/^\d+\.?\d*$/.test(s) && currentName) {
        rows.push({ name: currentName, spec: "", category: "\u5176\u4ED6", price: parseFloat(s), remark: "" });
        currentName = "";
      }
    }
    return rows;
  }
  async function parsePDF(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const text = new TextDecoder("utf-8").decode(data);
        const lines = text.split(/\r?\n/).filter((l) => l.trim());
        const rows = [];
        for (const line of lines) {
          const parts = line.split(/\s{2,}/);
          if (parts.length >= 2) {
            const name = parts[0].trim();
            const numericParts = parts.filter((p) => /^\d+\.?\d*$/.test(p.trim()));
            if (numericParts.length >= 1 && name.length > 2) {
              rows.push({
                name,
                spec: parts.length >= 3 ? parts[1].trim() : "",
                category: "\u5176\u4ED6",
                price: parseFloat(numericParts[0]) || 0,
                remark: ""
              });
            }
          }
        }
        resolve(rows);
      };
      reader.readAsArrayBuffer(file);
    });
  }
  var _importPreview = null;
  function showImportPreview(rows, fileName) {
    const conflicts = [];
    rows.forEach((r) => {
      const existing = MAT_LIB2.find((m) => m.name === r.name);
      if (existing) conflicts.push({ imported: r, existing });
    });
    _importPreview = { rows, conflicts, fileName };
    window._importPreview = _importPreview;
    document.getElementById("importPreviewCard").style.display = "block";
    document.getElementById("importPreviewSub").textContent = `\u6587\u4EF6: ${fileName} \xB7 \u89E3\u6790\u5230 ${rows.length} \u6761\u6570\u636E \xB7 ${conflicts.length} \u6761\u51B2\u7A81`;
    let html = `<thead><tr>
    <th style="width:30px;">#</th><th>\u6750\u6599\u540D\u79F0</th><th>\u89C4\u683C</th><th>\u5206\u7C7B</th>
    <th class="num">\u4EF7\u683C</th><th class="num">\u5229\u7528\u7387</th><th>\u72B6\u6001</th><th>\u64CD\u4F5C</th>
  </tr></thead><tbody>`;
    rows.forEach((r, i) => {
      const isConflict = conflicts.some((c) => c.imported === r);
      const status = isConflict ? '<span style="color:var(--amber);">\u51B2\u7A81</span>' : '<span style="color:var(--green);">\u65B0\u589E</span>';
      html += `<tr class="${isConflict ? "" : ""}" id="previewRow${i}">
      <td>${i + 1}</td>
      <td class="editable-cell" data-preview="${i}" data-field="name">${r.name}</td>
      <td class="editable-cell" data-preview="${i}" data-field="spec">${r.spec || "\u2014"}</td>
      <td class="editable-cell" data-preview="${i}" data-field="category">${r.category}</td>
      <td class="editable-cell num" data-preview="${i}" data-field="price">${fmt2(r.price, 4)}</td>
      <td class="editable-cell num" data-preview="${i}" data-field="usage_rate">${fmt2(r.usage_rate ?? 0.8, 2)}</td>
      <td>${status}${isConflict ? " (\u5DF2\u6709: " + conflicts.find((c) => c.imported === r).existing.id + ")" : ""}</td>
      <td><button class="btn-reset" onclick="removePreviewRow(${i})" style="font-size:11px;padding:2px 6px;">\u5220\u9664</button></td>
    </tr>`;
    });
    html += `</tbody>`;
    document.getElementById("importPreviewTable").innerHTML = html;
    document.getElementById("importConflictInfo").textContent = conflicts.length > 0 ? `\u68C0\u6D4B\u5230 ${conflicts.length} \u6761\u91CD\u590D\u6750\u6599\uFF0C\u5BFC\u5165\u65F6\u5C06\u8986\u76D6\u73B0\u6709\u6570\u636E` : "";
    if (conflicts.length > 0) {
      const conflictDiv = document.getElementById("importConflictInfo");
      conflictDiv.innerHTML = `\u68C0\u6D4B\u5230 ${conflicts.length} \u6761\u91CD\u590D\u6750\u6599 \xB7
      <button class="btn" onclick="resolveConflicts('skip')" style="font-size:11px;padding:2px 8px;">\u8DF3\u8FC7\u91CD\u590D</button>
      <button class="btn" onclick="resolveConflicts('overwrite')" style="font-size:11px;padding:2px 8px;">\u8986\u76D6\u73B0\u6709</button>
      <button class="btn" onclick="resolveConflicts('new')" style="font-size:11px;padding:2px 8px;">\u5168\u90E8\u65B0\u5EFA</button>`;
    }
  }
  function cancelImport() {
    _importPreview = null;
    window._importPreview = null;
    document.getElementById("importPreviewCard").style.display = "none";
  }
  function confirmImport() {
    if (!_importPreview || _importPreview.rows.length === 0) {
      showToast2("\u6CA1\u6709\u53EF\u5BFC\u5165\u7684\u6570\u636E");
      return;
    }
    let added = 0, updated = 0;
    _importPreview.rows.forEach((r) => {
      const existing = MAT_LIB2.find((m) => m.name === r.name);
      if (existing) {
        existing.price = r.price;
        if (r.spec) existing.spec = r.spec;
        if (r.category !== "\u5176\u4ED6") existing.category = r.category;
        if (r.usage_rate !== null && r.usage_rate !== void 0) existing.usage_rate = r.usage_rate;
        updated++;
      } else {
        const id = "MAT-" + String(_matLibNextId).padStart(4, "0");
        _matLibNextId++;
        MAT_LIB2.push({ id, name: r.name, spec: r.spec || "", category: r.category, price: r.price, usage_rate: r.usage_rate ?? 0.8, remark: r.remark || "" });
        added++;
      }
    });
    _importPreview.rows.forEach((r) => {
      const key = r.name.trim().replace(/\s+/g, "");
      MATERIAL_PRICE_DB2.set(key, { p: r.price, u: r.usage_rate });
    });
    PRICE_CACHE2.clear();
    MAT_IMPORT_LOG2.unshift({
      time: (/* @__PURE__ */ new Date()).toLocaleString(),
      fileName: _importPreview.fileName,
      success: added + updated,
      fail: 0,
      remark: `\u65B0\u589E ${added} \u6761\uFF0C\u66F4\u65B0 ${updated} \u6761`
    });
    if (MAT_IMPORT_LOG2.length > 100) MAT_IMPORT_LOG2.length = 100;
    persistMatLib2();
    cancelImport();
    renderMatLib2();
    renderImportLog();
    showToast2(`\u5BFC\u5165\u5B8C\u6210: \u65B0\u589E ${added} \u6761, \u66F4\u65B0 ${updated} \u6761`);
    ["water", "gen", "valve", "valve_door"].forEach((k) => FormulaEngine2.recalcTable(k));
    window.renderAll();
  }
  function renderImportLog() {
    const body = document.getElementById("importLogBody");
    if (!body) return;
    if (MAT_IMPORT_LOG2.length === 0) {
      body.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--text-dim);">\u6682\u65E0\u5BFC\u5165\u8BB0\u5F55</td></tr>';
      return;
    }
    body.innerHTML = MAT_IMPORT_LOG2.map(
      (l) => `<tr><td>${l.time}</td><td>${l.fileName}</td><td style="color:var(--green);">${l.success}</td><td style="color:var(--red);">${l.fail || 0}</td><td>${l.remark || ""}</td></tr>`
    ).join("");
    document.getElementById("importLogInfo").textContent = `\u5171 ${MAT_IMPORT_LOG2.length} \u6761\u5BFC\u5165\u8BB0\u5F55`;
  }
  function batchUpdatePrices() {
    if (!confirm("\u5C06\u7528\u6750\u6599\u5E93\u4E2D\u7684\u6700\u65B0\u6807\u51C6\u4EF7\u683C\u66F4\u65B0\u6240\u6709\u6750\u6599\u660E\u7EC6\u8868\u91D1\u989D\uFF1B\u5229\u7528\u7387\u4FDD\u6301\u6750\u6599\u660E\u7EC6\u884C\u5F53\u524D\u503C\uFF0C\u786E\u5B9A\u7EE7\u7EED\uFF1F")) return;
    let updated = 0;
    ["water", "gen", "valve", "valve_door"].forEach((dk) => {
      const items = DATA2[dk];
      if (!items) return;
      items.forEach((row) => {
        if (!row.material || !row.material.trim()) return;
        const match = MAT_LIB2.find((m) => m.name === row.material.trim().replace(/\s+/g, ""));
        if (match) {
          updated++;
        }
      });
      FormulaEngine2.recalcTable(dk);
    });
    persistData2();
    window.renderAll();
    showToast2(`\u6279\u91CF\u66F4\u65B0\u5B8C\u6210: \u5339\u914D\u5230 ${updated} \u6761\u6750\u6599`);
  }
  function lookupMatLib2(materialName) {
    if (!materialName || !materialName.trim()) return null;
    const key = materialName.trim().replace(/\s+/g, "");
    let match = MAT_LIB2.find((m) => m.name === key);
    if (match) return match;
    const parts = key.split("\\");
    for (let i = parts.length; i >= 1; i--) {
      const partial = parts.slice(0, i).join("\\");
      match = MAT_LIB2.find((m) => m.name === partial);
      if (match) return match;
    }
    match = MAT_LIB2.find((m) => m.name.includes(key) || key.includes(m.name));
    return match || null;
  }

  // js/src/rendering/scenarios.js
  function renderScenarios() {
    const host = document.getElementById("scenarioList");
    const hint = document.getElementById("scenarioHint");
    const compare = document.getElementById("scenarioCompareCard");
    if (state2.scenarios.length === 0) {
      host.innerHTML = "";
      hint.textContent = '\u6682\u65E0\u4FDD\u5B58\u7684\u65B9\u6848\u3002\u8C03\u6574\u5DE6\u4FA7\u53C2\u6570\u540E\u70B9\u51FB"\u4FDD\u5B58\u5F53\u524D\u65B9\u6848"\u3002';
      compare.style.display = "none";
      return;
    }
    hint.textContent = `\u5DF2\u4FDD\u5B58 ${state2.scenarios.length} \u4E2A\u65B9\u6848\uFF0C\u70B9\u51FB\u4EFB\u4E00\u65B9\u6848\u53EF\u52A0\u8F7D\u5230\u5DE6\u4FA7\u53C2\u6570\u9762\u677F`;
    host.innerHTML = state2.scenarios.map((s, idx) => `
    <div class="scenario-card" onclick="loadScenario(${idx})">
      <button class="x-btn" onclick="deleteScenario(${idx}, event)" title="\u5220\u9664">\xD7</button>
      <div class="scenario-card-name">${escHtml2(s.name)}</div>
      <div class="scenario-card-value">${fmt2(s.totalBid, 0)} \u4E07</div>
      <div class="scenario-card-stats">\u5355\u53F0 ${fmt2(s.perUnit, 0)} \xB7 \u6D88\u5316 ${fmt2(s.absorbPct * 100, 1)}%</div>
      <div class="scenario-card-stats">\u52A0\u4EF7 ${Math.round(s.inputs.selfMarkup * 100)}%/${Math.round(s.inputs.buyMarkup * 100)}% \xB7 ${s.inputs.distance}km</div>
    </div>
  `).join("");
    if (state2.scenarios.length >= 2) {
      compare.style.display = "block";
      const rows = [
        { label: "\u9879\u76EE\u540D\u79F0", fn: (s) => s.inputs.projectName },
        { label: "\u673A\u7EC4\u53F0\u6570", fn: (s) => s.inputs.unitCount + " \u53F0" },
        { label: "\u6C34\u673A\u91CD\u91CF", fn: (s) => fmt2(s.inputs.waterWeight, 1) + " T" },
        { label: "\u53D1\u673A\u91CD\u91CF", fn: (s) => fmt2(s.inputs.genWeight, 1) + " T" },
        { label: "\u9600\u95E8\u91CD\u91CF", fn: (s) => fmt2(s.inputs.valveWeight, 1) + " T" },
        { label: "\u81EA\u5236\u52A0\u4EF7", fn: (s) => Math.round(s.inputs.selfMarkup * 100) + "%" },
        { label: "\u5916\u8D2D\u52A0\u4EF7", fn: (s) => Math.round(s.inputs.buyMarkup * 100) + "%" },
        { label: "\u8FD0\u8F93\u8DDD\u79BB", fn: (s) => s.inputs.distance + " km" },
        { label: "\u62DF\u6295\u6807\u603B\u4EF7", fn: (s) => fmt2(s.totalBid, 2) + " \u4E07", highlight: true },
        { label: "\u5355\u53F0\u62A5\u4EF7", fn: (s) => fmt2(s.perUnit, 2) + " \u4E07", highlight: true },
        { label: "\u56FA\u5B9A\u6210\u672C", fn: (s) => fmt2(s.totalFixed, 2) + " \u4E07" },
        { label: "\u6D88\u5316\u5360\u6BD4", fn: (s) => fmt2(s.absorbPct * 100, 2) + "%", highlight: true }
      ];
      const html = `
      <thead><tr>
        <th>\u5BF9\u6BD4\u9879</th>
        ${state2.scenarios.map((s) => `<th>${escHtml2(s.name)}</th>`).join("")}
      </tr></thead>
      <tbody>
        ${rows.map((r) => `<tr ${r.highlight ? 'class="subtotal"' : ""}>
          <td><strong>${r.label}</strong></td>
          ${state2.scenarios.map((s) => `<td>${r.fn(s)}</td>`).join("")}
        </tr>`).join("")}
      </tbody>`;
      document.getElementById("scenarioCompareTable").innerHTML = html;
    } else {
      compare.style.display = "none";
    }
  }
  function saveScenario() {
    const r = compute();
    const name = prompt("\u65B9\u6848\u540D\u79F0\uFF1A", `\u65B9\u6848 ${state2.scenarios.length + 1}`);
    if (!name) return;
    takeProjectSnapshot2("\u4FDD\u5B58\u65B9\u6848");
    state2.scenarios.push({
      name,
      inputs: { ...r.inputs },
      totalBid: r.totalBid,
      totalFixed: r.totalFixed,
      absorbPct: r.absorbPct,
      perUnit: r.inputs.unitCount > 0 ? r.totalBid / r.inputs.unitCount : 0
    });
    if (state2.scenarios.length > 8) state2.scenarios.shift();
    renderScenarios();
  }
  function loadScenario(idx) {
    const s = state2.scenarios[idx];
    takeProjectSnapshot2("\u52A0\u8F7D\u65B9\u6848");
    Object.keys(s.inputs).forEach((k) => {
      const el = document.getElementById(k);
      if (el && k !== "hasWater" && k !== "hasGen" && k !== "hasValve") {
        el.value = k === "selfMarkup" || k === "buyMarkup" ? s.inputs[k] * 100 : s.inputs[k];
      }
    });
    state2.hasWater = s.inputs.hasWater;
    state2.hasGen = s.inputs.hasGen;
    state2.hasValve = s.inputs.hasValve;
    syncToggles2();
    updateSliderDisplays2();
    window.renderAll();
  }
  function deleteScenario(idx, e) {
    e.stopPropagation();
    takeProjectSnapshot2("\u5220\u9664\u65B9\u6848");
    state2.scenarios.splice(idx, 1);
    renderScenarios();
  }
  function resetDefaults() {
    if (!confirm("\u786E\u5B9A\u8981\u6062\u590D\u6240\u6709\u53C2\u6570\u5230\u9ED8\u8BA4\u503C\u5417\uFF1F")) return;
    takeProjectSnapshot2("\u91CD\u7F6E\u9ED8\u8BA4\u53C2\u6570");
    Object.keys(DEFAULTS).forEach((k) => {
      const el = document.getElementById(k);
      if (el) el.value = DEFAULTS[k];
    });
    state2.hasWater = state2.hasGen = state2.hasValve = 1;
    syncToggles2();
    updateSliderDisplays2();
    window.renderAll();
  }
  function jumpToMaterial(machineKey) {
    const matTabMap = { water: "water", gen: "gen", valve: "valve_door" };
    const matTab = matTabMap[machineKey] || "water";
    state2.currentMatTab = matTab;
    document.querySelectorAll("#tabsNav button").forEach((x) => x.classList.remove("active"));
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
    const matNavBtn = document.querySelector('#tabsNav button[data-page="materials"]');
    if (matNavBtn) matNavBtn.classList.add("active");
    const matPage = document.getElementById("page-materials");
    if (matPage) matPage.classList.add("active");
    document.querySelectorAll("#matTabs button").forEach((x) => x.classList.toggle("on", x.dataset.mat === matTab));
    window.renderMaterials();
    showToast2("\u5DF2\u8DF3\u8F6C\u5230" + (machineKey === "water" ? "\u6C34\u8F6E\u673A" : machineKey === "gen" ? "\u53D1\u7535\u673A" : "\u8FDB\u6C34\u9600(\u6574\u673A)") + "\u6750\u6599\u660E\u7EC6");
  }
  function syncToggles2() {
    document.querySelectorAll("#waterToggle button").forEach((b) => b.classList.toggle("on", parseInt(b.dataset.v, 10) === state2.hasWater));
    document.querySelectorAll("#genToggle button").forEach((b) => b.classList.toggle("on", parseInt(b.dataset.v, 10) === state2.hasGen));
    document.querySelectorAll("#valveToggle button").forEach((b) => b.classList.toggle("on", parseInt(b.dataset.v, 10) === state2.hasValve));
  }
  function updateSliderDisplays2() {
    const selfDisp = document.getElementById("selfMarkupDisp");
    const buyDisp = document.getElementById("buyMarkupDisp");
    const distDisp = document.getElementById("distanceDisp");
    const selfSlider = document.getElementById("selfMarkup");
    const buySlider = document.getElementById("buyMarkup");
    const distSlider = document.getElementById("distance");
    if (selfDisp && selfSlider && selfDisp !== document.activeElement) selfDisp.value = selfSlider.value;
    if (buyDisp && buySlider && buyDisp !== document.activeElement) buyDisp.value = buySlider.value;
    if (distDisp && distSlider && distDisp !== document.activeElement) distDisp.value = distSlider.value;
  }
  (function bindSliderDispInputs() {
    const pairs = [
      { dispId: "selfMarkupDisp", sliderId: "selfMarkup", min: 0, max: 200 },
      { dispId: "buyMarkupDisp", sliderId: "buyMarkup", min: 0, max: 50 },
      { dispId: "distanceDisp", sliderId: "distance", min: 100, max: 8e3 }
    ];
    pairs.forEach(({ dispId, sliderId, min, max }) => {
      const disp = document.getElementById(dispId);
      const slider = document.getElementById(sliderId);
      if (!disp || !slider) return;
      disp.addEventListener("input", () => {
        let v = parseFloat(disp.value);
        if (isNaN(v)) return;
        v = Math.max(min, Math.min(max, v));
        slider.value = v;
        window.renderAll();
      });
      disp.addEventListener("blur", () => {
        let v = parseFloat(disp.value);
        if (isNaN(v)) v = parseFloat(slider.value);
        v = Math.max(min, Math.min(max, v));
        disp.value = v;
        slider.value = v;
        window.renderAll();
      });
      disp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          disp.blur();
        }
        if (e.key === "Escape") {
          disp.value = slider.value;
          disp.blur();
        }
      });
    });
  })();

  // js/src/rendering/index.js
  function renderAll2() {
    const safeRender = function(name, fn) {
      try {
        fn();
      } catch (e) {
        console.error("renderAll: " + name + " \u5931\u8D25:", e);
        if (!window._renderErrorShown) {
          window._renderErrorShown = true;
          showToast2("\u6E32\u67D3 " + name + " \u65F6\u51FA\u9519\uFF0C\u90E8\u5206\u5185\u5BB9\u53EF\u80FD\u672A\u66F4\u65B0");
        }
      }
    };
    window._renderErrorShown = false;
    safeRender("syncSidebarFromMaterials", syncSidebarFromMaterials);
    var r;
    try {
      r = compute();
    } catch (e) {
      console.error("compute \u5931\u8D25:", e);
      showToast2("\u8BA1\u7B97\u65F6\u51FA\u9519");
      return;
    }
    safeRender("renderOverview", function() {
      renderOverview(r);
    });
    safeRender("renderMachines", function() {
      renderMachines(r);
    });
    safeRender("renderCharts", function() {
      renderCharts(r);
    });
    safeRender("renderTransport", function() {
      renderTransport(r);
    });
    safeRender("renderAgency", function() {
      renderAgency(r);
    });
    safeRender("renderBidAnalysis", function() {
      renderBidAnalysis(r);
    });
    safeRender("renderMaterials", renderMaterials2);
    safeRender("renderParts", renderParts2);
    safeRender("renderTools", renderTools2);
    safeRender("renderAuto", renderAuto);
    safeRender("renderLiaison", renderLiaison);
    safeRender("renderMatLib", renderMatLib2);
    safeRender("renderScenarios", renderScenarios);
    safeRender("renderImportLog", renderImportLog);
    safeRender("updateExportButtons", updateExportButtons);
  }

  // js/src/export.js
  function handlePrint() {
    if (!window.hasAnyMachine()) {
      window.showToast("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u4E3B\u673A\u7C7B\u578B\u540E\u518D\u6253\u5370");
      return;
    }
    window.print();
  }
  function exportCSV() {
    if (!window.hasAnyMachine()) {
      window.showToast("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u4E3B\u673A\u7C7B\u578B\u540E\u518D\u5BFC\u51FA");
      return;
    }
    const r = window.compute();
    let csv = "\uFEFF";
    csv += `\u6C34\u7535\u7AD9\u6295\u6807\u4EF7\u683C\u5206\u6790\u62A5\u544A
`;
    csv += `\u9879\u76EE\u540D\u79F0,${window.csvEscape(r.inputs.projectName)}
`;
    csv += `\u673A\u7EC4\u53F0\u6570,${r.inputs.unitCount}
`;
    csv += `\u6C34\u8F6E\u673A,${window.state.hasWater ? "\u6709" : "\u65E0"}
`;
    csv += `\u53D1\u7535\u673A,${window.state.hasGen ? "\u6709" : "\u65E0"}
`;
    csv += `\u9600\u95E8,${window.state.hasValve ? "\u6709" : "\u65E0"}

`;
    csv += `=== \u62A5\u4EF7\u660E\u7EC6 ===
`;
    csv += `\u9879\u76EE,\u5355\u53F0\u81EA\u5236,\u5355\u53F0\u5916\u8D2D,\u81EA\u5236\u52A0\u4EF7,\u5916\u8D2D\u52A0\u4EF7,\u5355\u53F0\u6210\u672C,\u6570\u91CF,\u5355\u4EF7,\u603B\u4EF7
`;
    r.items.forEach((it) => {
      csv += `${it.name},${it.self.toFixed(2)},${it.buy.toFixed(2)},${it.selfM.toFixed(2)},${it.buyM.toFixed(2)},${it.cost.toFixed(2)},${it.qty},${it.unit.toFixed(2)},${it.total.toFixed(2)}
`;
    });
    csv += `
\u62DF\u6295\u6807\u603B\u4EF7 (\u4E07\u5143),${r.totalBid.toFixed(2)}
`;
    csv += `\u56FA\u5B9A\u6210\u672C (\u4E07\u5143),${r.totalFixed.toFixed(2)}
`;
    csv += `\u6D88\u5316\u8D39\u7528 (\u4E07\u5143),${r.absorb.toFixed(2)}
`;
    csv += `\u6D88\u5316\u5360\u6BD4,${(r.absorbPct * 100).toFixed(2)}%
`;
    csv += `\u62DB\u6807\u4EE3\u7406\u8D39 (\u4E07\u5143),${r.agencyFee.fee.toFixed(2)}
`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${r.inputs.projectName}_\u62A5\u4EF7_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // js/src/ui/events.js
  function setupEvents() {
    document.querySelectorAll("input").forEach((el) => {
      el.addEventListener("input", () => {
        window.updateSliderDisplays();
        if (el.classList.contains("auto-computed")) {
          const curVal = parseFloat(el.value);
          const compVal = window._matComputed[el.id] !== void 0 ? parseFloat(window._matComputed[el.id].toFixed(4)) : NaN;
          if (!isNaN(curVal) && !isNaN(compVal) && Math.abs(curVal - compVal) > 1e-3) {
            window._sidebarOverrides.add(el.id);
          } else {
            window._sidebarOverrides.delete(el.id);
          }
          window.checkSidebarConsistency();
          const r = window.compute();
          window.renderOverview(r);
          window.renderMachines(r);
          window.renderCharts(r);
          window.renderTransport(r);
          window.renderAgency(r);
          window.renderScenarios();
        } else {
          window.renderAll();
        }
      });
      if (el.classList.contains("auto-computed")) {
        el.addEventListener("dblclick", () => {
          if (window._matComputed[el.id] !== void 0) {
            window._sidebarOverrides.delete(el.id);
            el.value = window._matComputed[el.id].toFixed ? parseFloat(window._matComputed[el.id].toFixed(4)).toString() : window._matComputed[el.id].toString();
            window.checkSidebarConsistency();
            window.renderAll();
            window.showToast("\u5DF2\u6062\u590D\u4E3A\u6750\u6599\u6C47\u603B\u503C");
          }
        });
      }
    });
    document.querySelectorAll("#tabsNav button").forEach((b) => {
      b.addEventListener("click", () => {
        document.querySelectorAll("#tabsNav button").forEach((x) => x.classList.remove("active"));
        document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
        b.classList.add("active");
        document.getElementById("page-" + b.dataset.page).classList.add("active");
        window.renderAll();
      });
    });
    document.querySelectorAll("#waterToggle button").forEach((b) => {
      b.addEventListener("click", () => {
        window.state.hasWater = parseInt(b.dataset.v, 10);
        handleMachineToggle();
      });
    });
    document.querySelectorAll("#genToggle button").forEach((b) => {
      b.addEventListener("click", () => {
        window.state.hasGen = parseInt(b.dataset.v, 10);
        handleMachineToggle();
      });
    });
    document.querySelectorAll("#valveToggle button").forEach((b) => {
      b.addEventListener("click", () => {
        window.state.hasValve = parseInt(b.dataset.v, 10);
        handleMachineToggle();
      });
    });
    document.querySelectorAll("#matTabs button").forEach((b) => {
      b.addEventListener("click", () => {
        document.querySelectorAll("#matTabs button").forEach((x) => x.classList.remove("on"));
        b.classList.add("on");
        window.state.currentMatTab = b.dataset.mat;
        window.renderMaterials();
      });
    });
    document.querySelectorAll("#partsTabs button").forEach((b) => {
      b.addEventListener("click", () => {
        document.querySelectorAll("#partsTabs button").forEach((x) => x.classList.remove("on"));
        b.classList.add("on");
        window.state.currentPartsTab = b.dataset.key;
        window.renderParts();
      });
    });
    document.querySelectorAll("#toolsTabs button").forEach((b) => {
      b.addEventListener("click", () => {
        document.querySelectorAll("#toolsTabs button").forEach((x) => x.classList.remove("on"));
        b.classList.add("on");
        window.state.currentToolsTab = b.dataset.key;
        window.renderTools();
      });
    });
    document.getElementById("matSearch").addEventListener("input", window.renderMaterials);
    document.getElementById("matFilter").addEventListener("change", window.renderMaterials);
    document.getElementById("autoSearch").addEventListener("input", window.renderAuto);
    const matLibSearchEl = document.getElementById("matLibSearch");
    if (matLibSearchEl) matLibSearchEl.addEventListener("input", window.renderMatLib);
    const matLibCatFilterEl = document.getElementById("matLibCatFilter");
    if (matLibCatFilterEl) matLibCatFilterEl.addEventListener("change", window.renderMatLib);
    document.addEventListener("dblclick", function(e) {
      if (e.target.closest("#rowEditOverlay") || e.target.closest("#matPickerPanel")) return;
      const row = e.target.closest("#autoTable tr.row-editable");
      if (!row) return;
      const cell = row.querySelector(".editable-cell");
      if (!cell) return;
      const rowIdx = parseInt(cell.dataset.origIdx || cell.dataset.idx, 10);
      if (isNaN(rowIdx)) return;
      e.preventDefault();
      window.openRowEditModal("data", { dataKey: "automation", rowIdx, config: window._tableConfigs.autoTable });
    });
    document.addEventListener("dblclick", function(e) {
      if (e.target.closest("#rowEditOverlay") || e.target.closest("#matPickerPanel")) return;
      const libRow = e.target.closest("tr");
      if (libRow && libRow.querySelector('[data-lib="true"]')) {
        const c = libRow.querySelector('[data-lib="true"]');
        if (c && c.dataset.idx !== void 0) {
          e.preventDefault();
          window.openRowEditModal("matlib", { idx: parseInt(c.dataset.idx, 10) });
          return;
        }
      }
      const cell = e.target.closest(".editable-cell");
      if (!cell) return;
      const tableEl = cell.closest("table");
      if (!tableEl) return;
      const config = window._tableConfigs[tableEl.id];
      if (!config) return;
      const rowIdx = parseInt(cell.dataset.origIdx || cell.dataset.idx, 10);
      e.preventDefault();
      window.openRowEditModal("data", { dataKey: config.dataKey, rowIdx, config });
    });
    document.addEventListener("click", function(e) {
      if (e.target.closest(".row-edit-btn")) return;
      const cell = e.target.closest("#autoTable .editable-cell");
      if (!cell || cell.classList.contains("formula-cell")) return;
      e.stopPropagation();
      window.EditableTable.handleClick(e, window._tableConfigs.autoTable);
    });
    document.addEventListener("click", function(e) {
      if (e.target.closest(".row-edit-btn")) return;
      const cell = e.target.closest(".editable-cell");
      if (!cell || cell.classList.contains("formula-cell")) return;
      if (cell.dataset.lib === "true") {
        window.handleMatLibEdit(cell);
        return;
      }
      if (cell.dataset.preview !== void 0) {
        handlePreviewEdit(cell);
        return;
      }
      const tableEl = cell.closest("table");
      if (!tableEl) return;
      const config = window._tableConfigs[tableEl.id];
      if (!config) return;
      window.EditableTable.handleClick(e, config);
    });
    const tabBtns = document.querySelectorAll("#tabsNav button");
    tabBtns.forEach((b) => {
      if (b.dataset.page === "bidanalysis") {
        b.addEventListener("click", () => {
          const r = window.compute();
          window.renderBidAnalysis(r);
        });
      }
    });
    document.getElementById("projectName").addEventListener("input", updatePageTitle);
    updatePageTitle();
  }
  function handleMachineToggle() {
    window.autoSwitchPartsTab();
    window.autoSwitchToolsTab();
    window.syncToggles();
    window.renderAll();
    window.showToast("\u5DF2\u81EA\u52A8\u66F4\u65B0\u5907\u4EF6\u548C\u5DE5\u5177\u6E05\u5355\u53CA\u6C47\u603B\u6570\u636E");
  }
  function handlePreviewEdit(cell) {
    const idx = parseInt(cell.dataset.preview, 10);
    const field = cell.dataset.field;
    if (!window._importPreview || idx >= window._importPreview.rows.length) return;
    if (cell.classList.contains("editing")) return;
    cell.classList.add("editing");
    const oldVal = window._importPreview.rows[idx][field];
    const isNum = field === "price";
    cell.innerHTML = "";
    const input = document.createElement("input");
    input.type = isNum ? "number" : "text";
    if (isNum) {
      input.step = "any";
    }
    input.value = oldVal !== null && oldVal !== void 0 ? oldVal : "";
    cell.appendChild(input);
    input.focus();
    input.select();
    const finish = (save) => {
      if (save) {
        const raw = input.value.trim();
        window._importPreview.rows[idx][field] = isNum ? raw === "" ? 0 : parseFloat(raw) : raw;
        window.showImportPreview(window._importPreview.rows, window._importPreview.fileName);
      } else {
        cell.classList.remove("editing");
        cell.innerHTML = window.EditableTable.cellDisplay(oldVal, { type: isNum ? "number" : "text" });
      }
    };
    input.addEventListener("blur", () => finish(true));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        finish(true);
      }
      if (e.key === "Escape") finish(false);
    });
  }
  function updatePageTitle() {
    try {
      const r = window.compute();
      const name = document.getElementById("projectName").value || "\u6C34\u7535\u7AD9";
      document.title = `${name} \xB7 ${window.fmt(r.totalBid, 0)}\u4E07 \xB7 \u6295\u6807\u5206\u6790\u7CFB\u7EDF`;
    } catch (e) {
    }
  }

  // js/src/ui/context-menu.js
  function setupContextMenu() {
    const menu = document.createElement("div");
    menu.id = "et-ctx-menu";
    menu.style.display = "none";
    menu.innerHTML = `
    <div class="ctx-label" id="ctx-row-label">\u884C\u64CD\u4F5C</div>
    <div class="ctx-item" id="ctx-edit">\u270E &nbsp;\u5F39\u7A97\u7F16\u8F91</div>
    <div class="ctx-sep"></div>
    <div class="ctx-label">\u63D2\u5165\u884C</div>
    <div class="ctx-item" id="ctx-insert-after">\uFF0B \u63D2\u5165\u540C\u7EA7\u884C\uFF08\u4E4B\u540E\uFF09</div>
    <div class="ctx-item" id="ctx-add-child">\u21B3 \u6DFB\u52A0\u5B50\u884C</div>
    <div class="ctx-item" id="ctx-add-child2" style="padding-left:24px;font-size:12px;">\u21B3\u21B3 \u6DFB\u52A0\u5B50\u5B50\u884C</div>
    <div class="ctx-sep"></div>
    <div class="ctx-label">\u5C55\u5F00 / \u6536\u8D77</div>
    <div class="ctx-item" id="ctx-expand">\u25BC \u5C55\u5F00\u6240\u6709\u5B50\u884C</div>
    <div class="ctx-item" id="ctx-collapse">\u25B6 \u6536\u8D77\u6240\u6709\u5B50\u884C</div>
    <div class="ctx-sep"></div>
    <div class="ctx-item danger" id="ctx-delete">\u{1F5D1} \u5220\u9664\u884C</div>
  `;
    document.body.appendChild(menu);
    let _ctxDataKey = null, _ctxIdx = null, _ctxSeq = null;
    function closeMenu() {
      menu.style.display = "none";
    }
    document.addEventListener("contextmenu", (e) => {
      const tr = e.target.closest("tr[data-orig-idx]");
      if (!tr) return;
      const table = tr.closest("table");
      if (!table) return;
      let dataKey = null;
      for (const k of Object.keys(window._tableConfigs)) {
        if (window._tableConfigs[k].tableId === table.id) {
          dataKey = window._tableConfigs[k].dataKey;
          break;
        }
      }
      if (!dataKey) return;
      e.preventDefault();
      _ctxIdx = parseInt(tr.dataset.origIdx, 10);
      _ctxDataKey = dataKey;
      _ctxSeq = tr.dataset.seq || "";
      const row = (window.DATA[dataKey] || [])[_ctxIdx];
      const seqLabel = row ? row.seq || row.name || `\u7B2C${_ctxIdx + 1}\u884C` : "";
      document.getElementById("ctx-row-label").textContent = `\u884C: ${String(seqLabel).slice(0, 20)}`;
      const items = window.DATA[dataKey] || [];
      let directKids;
      if (_ctxSeq === "\u4E00") {
        directKids = items.filter((r) => /^\d+$/.test(String(r.seq || ""))).length;
      } else {
        const pfx = _ctxSeq + ".";
        const depth = _ctxSeq.split(".").length;
        directKids = items.filter((r) => {
          const rs = String(r.seq || "");
          return rs.startsWith(pfx) && rs.split(".").length === depth + 1;
        }).length;
      }
      const hasAnyChildren = directKids >= 1;
      document.getElementById("ctx-expand").style.display = hasAnyChildren ? "" : "none";
      document.getElementById("ctx-collapse").style.display = hasAnyChildren ? "" : "none";
      menu.style.display = "block";
      const vw = window.innerWidth, vh = window.innerHeight;
      let x = e.clientX + 4, y = e.clientY + 4;
      menu.style.left = (x + 180 > vw ? vw - 185 : x) + "px";
      menu.style.top = (y + 320 > vh ? vh - 325 : y) + "px";
    });
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target)) closeMenu();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
    function act(fn) {
      closeMenu();
      if (_ctxDataKey !== null && _ctxIdx !== null) fn(_ctxDataKey, _ctxIdx, _ctxSeq);
    }
    document.getElementById("ctx-edit").onclick = () => act((dk, idx) => window.EditableTable.openRowModal(dk, idx));
    document.getElementById("ctx-insert-after").onclick = () => act((dk, idx) => window.EditableTable.insertAfter(dk, idx));
    document.getElementById("ctx-add-child").onclick = () => act((dk, idx) => window.EditableTable.addChildRow(dk, idx));
    document.getElementById("ctx-add-child2").onclick = () => act((dk, idx) => {
      const items = window.DATA[dk] || [];
      const parentItem = items[idx];
      if (!parentItem) return;
      const childSeq = window.generateChildSeq(items, parentItem);
      const parentSeq = String(parentItem.seq);
      const existingChild = items.find((r) => String(r.seq) === childSeq);
      if (existingChild) {
        const childIdx = items.indexOf(existingChild);
        window.EditableTable.addChildRow(dk, childIdx);
      } else {
        window.EditableTable.addChildRow(dk, idx);
        setTimeout(() => {
          const newItems = window.DATA[dk] || [];
          const newChild = newItems.find((r) => String(r.seq) === childSeq);
          if (newChild) window.EditableTable.addChildRow(dk, newItems.indexOf(newChild));
        }, 50);
      }
    });
    function toggleAllChildren(dk, seq, collapse) {
      const items = window.DATA[dk] || [];
      const countKids = (s) => {
        if (s === "\u4E00") {
          return items.filter((r) => /^\d+$/.test(String(r.seq || ""))).length;
        }
        const pfx = s + ".";
        const d = s.split(".").length;
        return items.filter((r) => {
          const rs = String(r.seq || "");
          return rs.startsWith(pfx) && rs.split(".").length === d + 1;
        }).length;
      };
      items.forEach((r) => {
        const s = String(r.seq || "");
        if (s.startsWith(seq + ".") && countKids(s) >= 1) {
          const key = `et_collapsed_${dk}_${s}`;
          if (collapse) sessionStorage.setItem(key, "1");
          else sessionStorage.removeItem(key);
        }
      });
      if (countKids(seq) >= 1) {
        const key = `et_collapsed_${dk}_${seq}`;
        if (collapse) sessionStorage.setItem(key, "1");
        else sessionStorage.removeItem(key);
      }
      const cfg = window._tableConfigs[Object.keys(window._tableConfigs).find((k) => window._tableConfigs[k].dataKey === dk)];
      if (cfg) window.EditableTable.render(cfg);
    }
    document.getElementById("ctx-expand").onclick = () => act((dk, idx, seq) => toggleAllChildren(dk, seq, false));
    document.getElementById("ctx-collapse").onclick = () => act((dk, idx, seq) => toggleAllChildren(dk, seq, true));
    document.getElementById("ctx-delete").onclick = () => act((dk, idx) => window.EditableTable.deleteRow(dk, idx));
  }

  // js/src/ui/index.js
  function setupUI() {
    (function() {
      const btn = document.getElementById("themeToggle");
      const html = document.documentElement;
      const saved = localStorage.getItem("hydro_theme");
      if (saved) {
        html.setAttribute("data-theme", saved);
        btn.textContent = saved === "dark" ? "\u2600\uFE0F" : "\u{1F319}";
      }
      btn.addEventListener("click", () => {
        const isDark = html.getAttribute("data-theme") === "dark";
        const next = isDark ? "light" : "dark";
        html.setAttribute("data-theme", next);
        btn.textContent = next === "dark" ? "\u2600\uFE0F" : "\u{1F319}";
        localStorage.setItem("hydro_theme", next);
        setTimeout(() => {
          window.renderAll();
        }, 50);
        window.showToast(next === "dark" ? "\u{1F319} \u5DF2\u5207\u6362\u6DF1\u8272\u6A21\u5F0F" : "\u2600\uFE0F \u5DF2\u5207\u6362\u4EAE\u8272\u6A21\u5F0F");
      });
    })();
    (function restoreSidebar() {
      try {
        const saved = localStorage.getItem("hydro_sidebar_collapsed");
        if (saved === "1") {
          const sidebar = document.getElementById("sidebar");
          const main = document.querySelector(".main");
          const btn = document.getElementById("sidebarToggle");
          sidebar.classList.add("collapsed");
          main.classList.add("sidebar-collapsed");
          btn.textContent = "\u25B6";
          btn.title = "\u5C55\u5F00\u4FA7\u8FB9\u680F";
        }
      } catch (e) {
      }
    })();
  }
  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const main = document.querySelector(".main");
    const btn = document.getElementById("sidebarToggle");
    const isCollapsed = sidebar.classList.toggle("collapsed");
    main.classList.toggle("sidebar-collapsed", isCollapsed);
    btn.textContent = isCollapsed ? "\u25B6" : "\u25C0";
    btn.title = isCollapsed ? "\u5C55\u5F00\u4FA7\u8FB9\u680F" : "\u9690\u85CF\u4FA7\u8FB9\u680F";
    try {
      localStorage.setItem("hydro_sidebar_collapsed", isCollapsed ? "1" : "0");
    } catch (e) {
    }
    window.dispatchEvent(new Event("resize"));
  }

  // js/src/ui/keyboard.js
  var _activeTreeRow = null;
  function setupKeyboard() {
    document.addEventListener("click", (e) => {
      const tr = e.target.closest("tr[data-seq]");
      if (!tr) return;
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "BUTTON" || tag === "SELECT" || tag === "TEXTAREA") return;
      const dk = tr.dataset.datakey;
      const seq = tr.dataset.seq;
      if (dk && seq) _activeTreeRow = { dataKey: dk, seq };
    });
    document.addEventListener("keydown", function(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA") return;
      if (e.ctrlKey || e.metaKey) {
        if (e.key === "s") {
          e.preventDefault();
          window.saveHTML();
          window.showToast("\u{1F4BE} \u5DF2\u4FDD\u5B58");
        }
        if (e.key === "z") {
          e.preventDefault();
          window.undoProjectSnapshot();
        }
        if (e.key === "y") {
          e.preventDefault();
          window.redoProjectSnapshot();
        }
      }
      const tabs = document.querySelectorAll("#tabsNav button");
      if (e.altKey && !isNaN(parseInt(e.key))) {
        const idx = parseInt(e.key) - 1;
        if (idx >= 0 && idx < tabs.length) tabs[idx].click();
      }
      if (e.altKey && e.key === "ArrowDown") {
        if (_activeTreeRow) {
          e.preventDefault();
          const seq = _activeTreeRow.seq;
          const key = `et_collapsed_${_activeTreeRow.dataKey}_${seq}`;
          const isCollapsed = sessionStorage.getItem(key) === "1";
          window.EditableTable.toggleCollapse(_activeTreeRow.dataKey, seq);
          window.showToast(isCollapsed ? `\u5C55\u5F00 ${seq}` : `\u6536\u8D77 ${seq}`);
        }
      }
    });
  }

  // js/src/ui/column-resize.js
  var TABLE_RESIZE_STORAGE_KEY = "hydro_table_resize_v1";
  function loadTableResizePrefs() {
    try {
      return JSON.parse(localStorage.getItem(TABLE_RESIZE_STORAGE_KEY) || "{}") || {};
    } catch (e) {
      return {};
    }
  }
  function saveTableResizePrefs(prefs) {
    try {
      localStorage.setItem(TABLE_RESIZE_STORAGE_KEY, JSON.stringify(prefs || {}));
    } catch (e) {
    }
  }
  function getTableResizeKey(el) {
    if (!el) return "";
    const table = el.matches("table") ? el : el.querySelector("table");
    if (table && table.id) return table.id;
    if (el.id) return el.id;
    const card = el.closest(".card");
    const title = card ? (card.querySelector(".card-title")?.innerText || "").trim().replace(/\s+/g, "_") : "";
    const idx = Array.from(document.querySelectorAll(".table-wrap, #autoTable.auto-tree")).indexOf(el);
    return title ? `${title}_${idx}` : `table_${idx}`;
  }
  function resetResizableTableSize(key) {
    const prefs = loadTableResizePrefs();
    delete prefs[key];
    saveTableResizePrefs(prefs);
    applyResizableTables2();
    window.showToast("\u5DF2\u6062\u590D\u8BE5\u8868\u683C\u9ED8\u8BA4\u5C3A\u5BF8");
  }
  function resetAllResizableTableSizes() {
    saveTableResizePrefs({});
    document.querySelectorAll(".table-wrap, #autoTable.auto-tree").forEach((el) => {
      el.style.width = "";
      el.style.height = "";
    });
    applyResizableTables2();
    window.showToast("\u5DF2\u6062\u590D\u5168\u90E8\u8868\u683C\u9ED8\u8BA4\u5C3A\u5BF8");
  }
  function applyResizableTables2() {
    const prefs = loadTableResizePrefs();
    document.querySelectorAll(".table-wrap, #autoTable.auto-tree").forEach((el) => {
      const key = getTableResizeKey(el);
      if (!key) return;
      el.dataset.resizeKey = key;
      el.classList.add("user-resizable-table");
      const pref = prefs[key];
      if (pref) {
        if (pref.width) el.style.width = pref.width + "px";
        if (pref.height) el.style.height = pref.height + "px";
      } else if (!el.style.height && el.classList.contains("table-wrap")) {
        const inlineMax = parseFloat(el.style.maxHeight || "");
        if (!isNaN(inlineMax) && inlineMax > 0) el.style.height = inlineMax + "px";
      }
      const card = el.closest(".card");
      if (card && !el.previousElementSibling?.classList?.contains("table-resize-hint")) {
        const hint = document.createElement("div");
        hint.className = "table-resize-hint";
        hint.innerHTML = `\u62D6\u62FD\u8868\u683C\u53F3\u4E0B\u89D2\u53EF\u8C03\u6574\u663E\u793A\u5927\u5C0F <button type="button" onclick="resetResizableTableSize('${key.replace(/'/g, "\\'")}')">\u6062\u590D\u9ED8\u8BA4</button>`;
        el.parentNode.insertBefore(hint, el);
      }
      if (el._tableResizeObserver) return;
      let saveTimer = null;
      el._tableResizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const target = entry.target;
          const rect = target.getBoundingClientRect();
          if (!rect.width || !rect.height) continue;
          clearTimeout(saveTimer);
          saveTimer = setTimeout(() => {
            const p = loadTableResizePrefs();
            p[target.dataset.resizeKey || getTableResizeKey(target)] = {
              width: Math.round(rect.width),
              height: Math.round(rect.height)
            };
            saveTableResizePrefs(p);
          }, 220);
        }
      });
      el._tableResizeObserver.observe(el);
    });
  }
  var COL_RESIZE_KEY = "hydro_col_resize_v1";
  function loadColResizePrefs() {
    try {
      return JSON.parse(localStorage.getItem(COL_RESIZE_KEY) || "{}") || {};
    } catch (e) {
      return {};
    }
  }
  function saveColResizePrefs(p) {
    try {
      localStorage.setItem(COL_RESIZE_KEY, JSON.stringify(p || {}));
    } catch (e) {
    }
  }
  function applyColResize(table) {
    if (!table) return;
    const tableKey = table.id || "";
    const prefs = loadColResizePrefs()[tableKey] || {};
    const ths = table.querySelectorAll("thead th");
    const cols = table.querySelectorAll("col");
    ths.forEach((th, i) => {
      const saved = prefs[i];
      if (saved && cols[i]) {
        cols[i].style.width = saved + "px";
      }
      if (th.querySelector(".col-resize-handle")) return;
      const handle = document.createElement("span");
      handle.className = "col-resize-handle";
      handle.style.cssText = "position:absolute;right:0;top:0;bottom:0;width:5px;cursor:col-resize;user-select:none;z-index:3;";
      th.style.position = "relative";
      th.appendChild(handle);
      let startX = 0, startW = 0;
      handle.addEventListener("mousedown", function(e) {
        e.preventDefault();
        startX = e.clientX;
        startW = th.offsetWidth;
        const onMove = (mv) => {
          const delta = mv.clientX - startX;
          const newW = Math.max(40, startW + delta);
          if (cols[i]) cols[i].style.width = newW + "px";
        };
        const onUp = (mu) => {
          document.removeEventListener("mousemove", onMove);
          document.removeEventListener("mouseup", onUp);
          const p = loadColResizePrefs();
          if (!p[tableKey]) p[tableKey] = {};
          p[tableKey][i] = cols[i] ? parseInt(cols[i].style.width) : th.offsetWidth;
          saveColResizePrefs(p);
        };
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
      });
    });
  }
  (function() {
    const s = document.createElement("style");
    s.textContent = `.col-resize-handle:hover, .col-resize-handle:active { background: var(--blue); opacity: 0.5; border-radius: 2px; }`;
    document.head.appendChild(s);
  })();
  setTimeout(() => {
    ["matTable", "partsTable", "toolsTable", "autoTable", "monitorTable", "liaisonTable"].forEach((id) => {
      const t = document.getElementById(id);
      if (t) applyColResize(t);
    });
  }, 500);

  // js/src/main.js
  Object.assign(window, data_exports);
  window.openRowEditModal = openRowEditModal;
  window.closeRowEditModal = closeRowEditModal;
  window.EditableTable = EditableTable;
  window.ImportWizard = ImportWizard;
  window.TABLE_SCHEMAS = TABLE_SCHEMAS;
  window.FIELD_ALIASES = FIELD_ALIASES;
  window.DATA_BACKUP = DATA_BACKUP;
  window.resetDataTable = resetDataTable;
  window.STORAGE_KEY = STORAGE_KEY;
  window.PROJECT_EXPORT_VERSION = PROJECT_EXPORT_VERSION;
  window.PROJECT_DATA_KEYS = PROJECT_DATA_KEYS2;
  window.captureProjectState = captureProjectState;
  window.normalizeImportedProject = normalizeImportedProject;
  window.restoreProjectState = restoreProjectState;
  window.exportProjectJSON = exportProjectJSON;
  window.importProjectJSON = importProjectJSON;
  window.sanitizeFileName = sanitizeFileName;
  window.exportProjectFile = exportProjectFile;
  window.persistData = persistData2;
  window.saveHTML = saveHTML;
  window.captureSidebarState = captureSidebarState2;
  window.restoreSidebarState = restoreSidebarState;
  window.importFullData = importFullData;
  window.loadPersistedData = loadPersistedData;
  window.SNAPSHOT_MAX = SNAPSHOT_MAX;
  window.takeProjectSnapshot = takeProjectSnapshot2;
  window.undoProjectSnapshot = undoProjectSnapshot;
  window.redoProjectSnapshot = redoProjectSnapshot;
  window.escapeRegExp = escapeRegExp;
  window.evaluateFormulaSafe = evaluateFormulaSafe2;
  window._rowContext = _rowContext;
  window.autoFixMissingSeqs = autoFixMissingSeqs;
  window.autoFixUsageRates = autoFixUsageRates;
  window.autoFixSequences = autoFixSequences2;
  window.autoFixNegativeValues = autoFixNegativeValues;
  window.autoFixDuplicateSeqs = autoFixDuplicateSeqs;
  window.autoFixEmptyRows = autoFixEmptyRows;
  window.autoFixBuyMismatch = autoFixBuyMismatch;
  window.generateDataHealthReport = generateDataHealthReport2;
  window.TABLE_LABELS = TABLE_LABELS;
  window._navigateErrorByIdx = _navigateErrorByIdx;
  window._navigateToError = _navigateToError;
  window._highlightErrorRow = _highlightErrorRow;
  window.showDataHealthReport = showDataHealthReport2;
  window.showToast = showToast2;
  window._tableConfigs = _tableConfigs2;
  window.FormulaEngine = FormulaEngine2;
  window.MAT_LIB = MAT_LIB2;
  window.MAT_IMPORT_LOG = MAT_IMPORT_LOG2;
  window.generateNextSeq = generateNextSeq2;
  window.generateChildSeq = generateChildSeq2;
  window.getInputs = getInputs;
  window.isSubtotalRow = isSubtotalRow2;
  window.isDirectChild = isDirectChild2;
  window.aggregateMatTable = aggregateMatTable;
  window.aggregatePartsTools = aggregatePartsTools;
  window.aggregateSimple = aggregateSimple;
  window.aggregateMatTableValve = aggregateMatTableValve;
  window.getEnabledPartsKeys = getEnabledPartsKeys;
  window.getEnabledToolsKeys = getEnabledToolsKeys;
  window.aggregatePartsToolsWeight = aggregatePartsToolsWeight;
  window.hasAnyMachine = hasAnyMachine;
  window.getAvailablePartsTabs = getAvailablePartsTabs;
  window.getAvailableToolsTabs = getAvailableToolsTabs;
  window.autoSwitchPartsTab = autoSwitchPartsTab;
  window.autoSwitchToolsTab = autoSwitchToolsTab;
  window.validateTableConsistency = validateTableConsistency2;
  window.validateAllTables = validateAllTables;
  window.fixAllConsistency = fixAllConsistency;
  window.syncSidebarFromMaterials = syncSidebarFromMaterials;
  window.setSidebarVal = setSidebarVal;
  window.checkSidebarConsistency = checkSidebarConsistency;
  window.compute = compute;
  window.calcAgencyFee = calcAgencyFee;
  window.animateNum = animateNum;
  window.DEFAULTS = DEFAULTS;
  window.state = state2;
  window.fmt = fmt2;
  window.renderAll = renderAll2;
  window.renderOverview = renderOverview;
  window.renderMachines = renderMachines;
  window.renderCharts = renderCharts;
  window.renderMaterials = renderMaterials2;
  window.renderParts = renderParts2;
  window.renderTools = renderTools2;
  window.renderAuto = renderAuto;
  window.renderTransport = renderTransport;
  window.renderLiaison = renderLiaison;
  window.renderAgency = renderAgency;
  window.renderMatLib = renderMatLib2;
  window.renderImportLog = renderImportLog;
  window.toggleMatLibGroup = toggleMatLibGroup;
  window.handleMatLibEdit = handleMatLibEdit;
  window.addMatLibRow = addMatLibRow;
  window.deleteMatLibItem = deleteMatLibItem;
  window.exportMatLib = exportMatLib;
  window.importMaterials = importMaterials;
  window.cancelImport = cancelImport;
  window.confirmImport = confirmImport;
  window.batchUpdatePrices = batchUpdatePrices;
  window.lookupMatLib = lookupMatLib2;
  window._importPreview = _importPreview;
  window.renderScenarios = renderScenarios;
  window.saveScenario = saveScenario;
  window.loadScenario = loadScenario;
  window.deleteScenario = deleteScenario;
  window.resetDefaults = resetDefaults;
  window.jumpToMaterial = jumpToMaterial;
  window.syncToggles = syncToggles2;
  window.updateSliderDisplays = updateSliderDisplays2;
  window.renderBidAnalysis = renderBidAnalysis;
  window.updateExportButtons = updateExportButtons;
  window.handlePrint = handlePrint;
  window.exportCSV = exportCSV;
  window.handleMachineToggle = handleMachineToggle;
  window.updatePageTitle = updatePageTitle;
  window.toggleSidebar = toggleSidebar;
  window.applyResizableTables = applyResizableTables2;
  window.applyColResize = applyColResize;
  window.resetAllResizableTableSizes = resetAllResizableTableSizes;
  window.resetResizableTableSize = resetResizableTableSize;
  window._matComputed = _matComputed;
  window._sidebarOverrides = _sidebarOverrides2;
  setupUI();
  setupContextMenu();
  setupKeyboard();
  setupEvents();
  (function() {
    const originalRenderAll = renderAll2;
    window.renderAll = function() {
      const result = originalRenderAll.apply(this, arguments);
      setTimeout(applyResizableTables2, 0);
      return result;
    };
  })();
  (function() {
    const origRender = window.EditableTable.render.bind(window.EditableTable);
    window.EditableTable.render = function(config) {
      origRender(config);
      setTimeout(() => {
        const table = document.getElementById(config.tableId);
        if (table) applyColResize(table);
      }, 0);
    };
  })();
  if (window.loadPersistedData()) {
  }
  if (window.DATA._sidebar || window.DATA._state || window.DATA._matLib || window.DATA._importLog) {
    window.restoreProjectState({ data: window.DATA, _sidebar: window.DATA._sidebar, _state: window.DATA._state, _matLib: window.DATA._matLib, _importLog: window.DATA._importLog }, { silent: true });
    delete window.DATA._sidebar;
    delete window.DATA._state;
    delete window.DATA._matLib;
    delete window.DATA._importLog;
    delete window.DATA._projectVersion;
    delete window.DATA._exportedAt;
    window.persistData();
  }
  window.updateSliderDisplays();
  window.renderAll();
  window.applyResizableTables();
  console.log("Hydro Bid System \u6A21\u5757\u5316\u5165\u53E3\u5DF2\u52A0\u8F7D");
})();
