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
    lookupMaterialPrice: () => lookupMaterialPrice2
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
  function lookupMaterialPrice2(spec) {
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

  // js/engine.js
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
      desc: "\u5408\u4EF7 = \u89E3\u6790\u540E\u7684\u6570\u91CF \xD7 \u5355\u4EF7\uFF1B\u5982\u6570\u91CF\u4E3A\u201C2\xD74\u201D\uFF0C\u7CFB\u7EDF\u4F1A\u8F6C\u6362\u4E3A 8",
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
  var CUSTOM_FORMULAS2 = DATA2._customFormulas && typeof DATA2._customFormulas === "object" ? DATA2._customFormulas : {};
  DATA2._customFormulas = CUSTOM_FORMULAS2;
  function getFormulaExpr2(formulaId) {
    const def = DEFAULT_FORMULAS2[formulaId];
    if (!def) return "";
    const custom = CUSTOM_FORMULAS2 && CUSTOM_FORMULAS2[formulaId];
    return custom && typeof custom.expr === "string" && custom.expr.trim() ? custom.expr.trim() : def.expr;
  }
  function setCustomFormula2(formulaId, expr) {
    if (!formulaId || !DEFAULT_FORMULAS2[formulaId]) return;
    if (!DATA2._customFormulas || typeof DATA2._customFormulas !== "object") DATA2._customFormulas = {};
    CUSTOM_FORMULAS2 = DATA2._customFormulas;
    const def = DEFAULT_FORMULAS2[formulaId];
    const normalized = String(expr || "").trim();
    if (!normalized || normalized === def.expr) {
      delete CUSTOM_FORMULAS2[formulaId];
    } else {
      CUSTOM_FORMULAS2[formulaId] = { expr: normalized, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
    }
  }
  function resetCustomFormula(formulaId) {
    if (CUSTOM_FORMULAS2 && CUSTOM_FORMULAS2[formulaId]) delete CUSTOM_FORMULAS2[formulaId];
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
        if (isSubtotalRow(it, items)) {
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
          if (!isDirectChild(String(parentRow.seq), childSeq)) return;
          sumWeight += parseFloat(child.weight) || 0;
          sumAmount += parseFloat(child.amount) || 0;
        });
        if (hasMaterial) return;
        items[si].weight = parseFloat(sumWeight.toFixed(4));
        items[si].amount = parseFloat(sumAmount.toFixed(4));
      });
    }
  };

  // js/editor.js
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

  // js/import-wizard.js
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
  var PROJECT_DATA_KEYS = ["water", "gen", "valve", "valve_door", "water_parts", "gen_parts", "valve_parts", "water_tools", "gen_tools", "valve_tools", "automation", "monitoring", "liaison"];
  function stableClone(obj) {
    try {
      if (typeof structuredClone === "function") return structuredClone(obj);
    } catch (e) {
    }
    return JSON.parse(JSON.stringify(obj));
  }
  function getProjectDataTables() {
    const out = {};
    PROJECT_DATA_KEYS.forEach((k) => {
      if (DATA2[k]) out[k] = stableClone(DATA2[k]);
    });
    return out;
  }
  function captureProjectState() {
    return { app: "hydro-bid-price-analysis-system", version: PROJECT_EXPORT_VERSION, exportedAt: (/* @__PURE__ */ new Date()).toISOString(), data: getProjectDataTables(), _sidebar: captureSidebarState(), _customFormulas: stableClone(CUSTOM_FORMULAS || {}), _state: { hasWater: state.hasWater, hasGen: state.hasGen, hasValve: state.hasValve, scenarios: stableClone(state.scenarios || []), currentMatTab: state.currentMatTab, currentPartsTab: state.currentPartsTab, currentToolsTab: state.currentToolsTab }, _matLib: typeof MAT_LIB !== "undefined" ? stableClone(MAT_LIB) : [], _importLog: typeof MAT_IMPORT_LOG !== "undefined" ? stableClone(MAT_IMPORT_LOG) : [] };
  }
  function normalizeImportedProject(input) {
    const raw = input && typeof input === "object" ? input : {};
    const data = raw.data && typeof raw.data === "object" ? raw.data : raw;
    const out = { app: raw.app || "hydro-bid-price-analysis-system", version: raw.version || "legacy", data: {}, _sidebar: raw._sidebar || data._sidebar || null, _state: raw._state || data._state || {}, _matLib: raw._matLib || data._matLib || [], _importLog: raw._importLog || data._importLog || [] };
    PROJECT_DATA_KEYS.forEach((k) => {
      if (Array.isArray(data[k])) out.data[k] = data[k];
    });
    if (!Array.isArray(out._state.scenarios) && Array.isArray(data.scenarios)) out._state.scenarios = data.scenarios;
    return out;
  }
  function restoreProjectState(projectPackage, opts = {}) {
    const pkg = normalizeImportedProject(projectPackage);
    const _isRestoringSnapshot2 = true;
    try {
      PROJECT_DATA_KEYS.forEach((k) => {
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
      PROJECT_DATA_KEYS.forEach((k) => {
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
  function captureSidebarState() {
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
        const rowCount = PROJECT_DATA_KEYS.reduce((sum, k) => sum + (Array.isArray(DATA2[k]) ? DATA2[k].length : 0), 0);
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

  // js/src/main.js
  Object.assign(window, data_exports);
  window.FormulaEngine = FormulaEngine2;
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
  window.PROJECT_DATA_KEYS = PROJECT_DATA_KEYS;
  window.captureProjectState = captureProjectState;
  window.normalizeImportedProject = normalizeImportedProject;
  window.restoreProjectState = restoreProjectState;
  window.exportProjectJSON = exportProjectJSON;
  window.importProjectJSON = importProjectJSON;
  window.sanitizeFileName = sanitizeFileName;
  window.exportProjectFile = exportProjectFile;
  window.persistData = persistData2;
  window.saveHTML = saveHTML;
  window.captureSidebarState = captureSidebarState;
  window.restoreSidebarState = restoreSidebarState;
  window.importFullData = importFullData;
  window.loadPersistedData = loadPersistedData;
  window.SNAPSHOT_MAX = SNAPSHOT_MAX;
  window.takeProjectSnapshot = takeProjectSnapshot2;
  window.undoProjectSnapshot = undoProjectSnapshot;
  window.redoProjectSnapshot = redoProjectSnapshot;
  console.log("Hydro Bid System \u6A21\u5757\u5316\u5165\u53E3\u5DF2\u52A0\u8F7D");
})();
