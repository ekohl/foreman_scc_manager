(function(){var e,t;e=function(t){var n;if(t.parentNode.dataset.parent&&(n=$("#"+t.parentNode.dataset.parent+" input")[0],!n.checked&&!n.disabled))return n.checked=!0,e(n)},t=function(e){return $("span.scc_product_checkbox input",e.parentNode.parentNode).each(function(e,n){if(n.checked&&!n.disabled)return n.checked=!1,t(n)})},$(function(){return $("span.scc_product_checkbox input").on("change",function(n){var c;return c=n.target,c.checked?e(c):t(c)}),$("a.edit_deferrer").on("click",function(e){return e.preventDefault(),$("a.edit_deferree",$(e.target).parents("tr")[0])[0].click()})})}).call(this);