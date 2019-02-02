//jshint esversion:6

exports.getDate = function(){
  const currentDate = new Date();
  const options = {
    day: "numeric",
    weekday: "long",
    month: "long"
  };

  return currentDate.toLocaleDateString("en-US", options);
};
