/*
 * json-to-table by fintopo
 * http://www.fintopo.jp/json-to-table/
 * 
 * Ver.1.0.0(2013/08/27)
 */

var json2table = function(json){
  var $table = $('<table/>');
  var $thead = $('<thead/>');
  var $thead_tr = $('<tr/>');
  $thead_tr.append($('<th/>'));
  $thead.append($thead_tr);
  $table.append($thead);
  var cols = [];
  $.each(json, function(index, values){
    var $tr = $('<tr/>');
    $tr.append($('<th/>').html(index));
    if (typeof values == 'object'){
      for(var i = 0; i < cols.length; i++) {
        $tr.append($('<td/>'));            
      }
      //
      $.each(values, function(index, value){
        var p = cols.indexOf(index);
        if (p < 0) {
          cols.push(index);
          $thead_tr.append($('<th/>').html(index));
          $tr.append($('<td/>').html(value));
        } else {
          $tr.find('td:eq('+p+')').html(value);
        }
      });
    } else {
      $tr.append($('<td/>').html(values));
    }
    $table.append($tr);
  });
  //
  return $table;
};
