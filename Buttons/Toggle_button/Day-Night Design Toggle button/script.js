(function() {
  $(document).ready(function() {
    var count, rotateY, setValueFunc, value, zero;
    zero = 0;
    rotateY = 180;
    value = 0;
    count = 0;
    setValueFunc = function() {
      if (count % 2 === 0) {
        return $(".value_front").text(value);
      } else {
        return $(".value_back").text(value);
      }
    };
    $(".increment").on("mouseenter", function() {
      $(".increment").css({
        "opacity": "1"
      });
      return $(".decrement").css({
        "opacity": ".2"
      });
    });
    $(".container").on("mouseout", function() {
      $(".increment").css({
        "opacity": ".2"
      });
      return $(".decrement").css({
        "opacity": ".2"
      });
    });
    $(".decrement").on("mouseenter", function() {
      $(".decrement").css({
        "opacity": "1"
      });
      return $(".increment").css({
        "opacity": ".2"
      });
    });
    $(".increment").on("mousedown", function() {
      count++;
      $(".container").css({
        "transform": `rotateY(${zero = zero + rotateY}deg)`
      });
      value++;
      return setValueFunc();
    });
    return $(".decrement").on("mousedown", function() {
      count++;
      $(".container").css({
        "transform": `rotateY(${zero = zero - rotateY}deg)`
      });
      value--;
      return setValueFunc();
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixRQUFBLENBQUEsQ0FBQTtBQUVsQixRQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsWUFBQSxFQUFBLEtBQUEsRUFBQTtJQUFFLElBQUEsR0FBTztJQUNQLE9BQUEsR0FBVTtJQUNWLEtBQUEsR0FBUTtJQUNSLEtBQUEsR0FBUTtJQUVSLFlBQUEsR0FBZSxRQUFBLENBQUEsQ0FBQTtNQUNiLElBQUcsS0FBQSxHQUFRLENBQVIsS0FBYSxDQUFoQjtlQUNFLENBQUEsQ0FBRSxjQUFGLENBQWlCLENBQUMsSUFBbEIsQ0FBdUIsS0FBdkIsRUFERjtPQUFBLE1BQUE7ZUFHRSxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLElBQWpCLENBQXNCLEtBQXRCLEVBSEY7O0lBRGE7SUFNZixDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsRUFBaEIsQ0FBbUIsWUFBbkIsRUFBaUMsUUFBQSxDQUFBLENBQUE7TUFDL0IsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLEdBQWhCLENBQW9CO1FBQUEsU0FBQSxFQUFXO01BQVgsQ0FBcEI7YUFDQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsR0FBaEIsQ0FBb0I7UUFBQSxTQUFBLEVBQVc7TUFBWCxDQUFwQjtJQUYrQixDQUFqQztJQUlBLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxFQUFoQixDQUFtQixVQUFuQixFQUErQixRQUFBLENBQUEsQ0FBQTtNQUM3QixDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsR0FBaEIsQ0FBb0I7UUFBQSxTQUFBLEVBQVc7TUFBWCxDQUFwQjthQUNBLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxHQUFoQixDQUFvQjtRQUFBLFNBQUEsRUFBVztNQUFYLENBQXBCO0lBRjZCLENBQS9CO0lBSUEsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLEVBQWhCLENBQW1CLFlBQW5CLEVBQWlDLFFBQUEsQ0FBQSxDQUFBO01BQy9CLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxHQUFoQixDQUFvQjtRQUFBLFNBQUEsRUFBVztNQUFYLENBQXBCO2FBQ0EsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLEdBQWhCLENBQW9CO1FBQUEsU0FBQSxFQUFXO01BQVgsQ0FBcEI7SUFGK0IsQ0FBakM7SUFJQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsRUFBaEIsQ0FBbUIsV0FBbkIsRUFBZ0MsUUFBQSxDQUFBLENBQUE7TUFDOUIsS0FBQTtNQUNBLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxHQUFoQixDQUFvQjtRQUFBLFdBQUEsRUFBYSxDQUFBLFFBQUEsQ0FBQSxDQUFXLElBQUEsR0FBTyxJQUFBLEdBQU8sT0FBekIsQ0FBQSxJQUFBO01BQWIsQ0FBcEI7TUFDQSxLQUFBO2FBQ0EsWUFBQSxDQUFBO0lBSjhCLENBQWhDO1dBS0EsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLEVBQWhCLENBQW1CLFdBQW5CLEVBQWdDLFFBQUEsQ0FBQSxDQUFBO01BQzlCLEtBQUE7TUFDQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsR0FBaEIsQ0FBb0I7UUFBQSxXQUFBLEVBQWEsQ0FBQSxRQUFBLENBQUEsQ0FBVyxJQUFBLEdBQU8sSUFBQSxHQUFPLE9BQXpCLENBQUEsSUFBQTtNQUFiLENBQXBCO01BQ0EsS0FBQTthQUNBLFlBQUEsQ0FBQTtJQUo4QixDQUFoQztFQTlCZ0IsQ0FBbEI7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5IC0+XG5cbiAgemVybyA9IDBcbiAgcm90YXRlWSA9IDE4MFxuICB2YWx1ZSA9IDBcbiAgY291bnQgPSAwXG5cbiAgc2V0VmFsdWVGdW5jID0gKCkgLT5cbiAgICBpZiBjb3VudCAlIDIgPT0gMFxuICAgICAgJChcIi52YWx1ZV9mcm9udFwiKS50ZXh0KHZhbHVlKVxuICAgIGVsc2VcbiAgICAgICQoXCIudmFsdWVfYmFja1wiKS50ZXh0KHZhbHVlKVxuXG4gICQoXCIuaW5jcmVtZW50XCIpLm9uIFwibW91c2VlbnRlclwiLCAtPlxuICAgICQoXCIuaW5jcmVtZW50XCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIpXG4gICAgJChcIi5kZWNyZW1lbnRcIikuY3NzKFwib3BhY2l0eVwiOiBcIi4yXCIpXG5cbiAgJChcIi5jb250YWluZXJcIikub24gXCJtb3VzZW91dFwiLCAtPlxuICAgICQoXCIuaW5jcmVtZW50XCIpLmNzcyhcIm9wYWNpdHlcIjogXCIuMlwiKVxuICAgICQoXCIuZGVjcmVtZW50XCIpLmNzcyhcIm9wYWNpdHlcIjogXCIuMlwiKVxuXG4gICQoXCIuZGVjcmVtZW50XCIpLm9uIFwibW91c2VlbnRlclwiLCAtPlxuICAgICQoXCIuZGVjcmVtZW50XCIpLmNzcyhcIm9wYWNpdHlcIjogXCIxXCIpXG4gICAgJChcIi5pbmNyZW1lbnRcIikuY3NzKFwib3BhY2l0eVwiOiBcIi4yXCIpXG5cbiAgJChcIi5pbmNyZW1lbnRcIikub24gXCJtb3VzZWRvd25cIiwgLT5cbiAgICBjb3VudCsrXG4gICAgJChcIi5jb250YWluZXJcIikuY3NzKFwidHJhbnNmb3JtXCI6IFwicm90YXRlWSgje3plcm8gPSB6ZXJvICsgcm90YXRlWX1kZWcpXCIpXG4gICAgdmFsdWUrK1xuICAgIHNldFZhbHVlRnVuYygpXG4gICQoXCIuZGVjcmVtZW50XCIpLm9uIFwibW91c2Vkb3duXCIsIC0+XG4gICAgY291bnQrK1xuICAgICQoXCIuY29udGFpbmVyXCIpLmNzcyhcInRyYW5zZm9ybVwiOiBcInJvdGF0ZVkoI3t6ZXJvID0gemVybyAtIHJvdGF0ZVl9ZGVnKVwiKVxuICAgIHZhbHVlLS1cbiAgICBzZXRWYWx1ZUZ1bmMoKVxuIl19
//# sourceURL=coffeescript