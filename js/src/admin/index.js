import app from 'flarum/app';
import addSettingsPane from "./addSettingsPane";

// initialize settings modal
app.initializers.add('the-turk-mathren', app => {
  // add the admin pane
  addSettingsPane();
});
