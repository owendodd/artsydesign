var trunc = $('.sample');

$(trunc).each(function(index, element) {
  $clamp(element, {clamp: 2, useNativeClamp: false});
});