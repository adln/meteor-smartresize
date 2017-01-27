// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by smartresize.js.
import { name as packageName } from "meteor/adln:smartresize";

// Write your tests here!
// Here is an example.
Tinytest.add('smartresize - example', function (test) {
  test.equal(packageName, "smartresize");
});
