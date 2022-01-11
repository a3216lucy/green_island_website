var place_data = [
  {
    tag: "green_island_city",
    place: "南寮村",
    low: 17,
    high: 21,
    weather: "Rainy"
  },
  {
    tag: "green_island_city",
    place: "公館村",
    low: 18,
    high: 20,
    weather: "Rainy"
  },
  {
    tag: "green_island_city",
    place: "中寮村",
    low: 15,
    high: 22,
    weather: "Rainy"
  }
];

var vm = new Vue({
  el: "#app",
  data: {
    filter: "",
    place_data: place_data
  },
  computed: {
    now_area: function () {
      var vobj = this;
      var result = place_data.filter(function (obj) {
        return obj.place == vobj.filter;
      });
      if (result.length == 0) {
        return null;
      }
      return result[0];
    }
  }
});

$("path").mouseenter(function (e) {
  var placename = $(this).attr("id");
  vm.filter = placename;
});