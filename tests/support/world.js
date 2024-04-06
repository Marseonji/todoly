/**
 * World class
 */
const {
  setWorldConstructor,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const replaceTag = require("./../../main/core/utils/replacer");


/**
 * Custom World
 */
function CustomWorld({ attach }) {
  this.attach = attach;
  this.query = {};
  this.body = {};
  this.entity = {};
  this.workspaces = {};
  this.project = {};
  this.response={};
  this.story={};
  this.label={};
  this.task={};
  this.epics = {};
  this.blocker={};
  this.upload={};
  this.projectsEntities=[];

  this.replaceTag = function (string) {
    return replaceTag(string, this);
  };
}
setDefaultTimeout(60 * 1000);
setWorldConstructor(CustomWorld);
