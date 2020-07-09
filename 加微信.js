id("list").findOne().children().forEach(child => {
var target = child.findOne(id("den"));
target.click();
});