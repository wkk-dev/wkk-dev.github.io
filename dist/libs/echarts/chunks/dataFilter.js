function e(e){return{seriesType:e,reset:function(e,n){var t=n.findComponents({mainType:"legend"});if(t&&t.length){var r=e.getData();r.filterSelf((function(e){for(var n=r.getName(e),i=0;i<t.length;i++)if(!t[i].isSelected(n))return!1;return!0}))}}}}export{e as d};
