function validatePhone(a){return/\+((38|\+8)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(a)}function validateName(a){return""!==a}jQuery(function(a){a("input[name='phone']").mask("+38(999) 999-9999")});
$(document).ready(function(){$(document).on("click",".btn-popup , .overlay",function(a){a.preventDefault();$("#modal2").css("display","none");$("#modal2").parent().css("display","none");$("#modal1").css("display","none");$("#modal1").parent().css("display","none");$("#modal_map_kiev").css("display","none");$("#modal_map_kiev").parent().css("display","none");$("#modal_map_kiev2").css("display","none");$("#modal_map_kiev2").parent().css("display","none")});$(document).on("click",".map-kiev",function(a){a.preventDefault();
$("#modal_map_kiev").css("display","block");$("#modal_map_kiev").parent().css("display","block")});$(document).on("click",".map-kiev2",function(a){a.preventDefault();$("#modal_map_kiev2").css("display","block");$("#modal_map_kiev2").parent().css("display","block")});$(document).on("click",".modal1-open",function(a){$("#modal_id_product").val($(this).attr("data-product-id"))})});