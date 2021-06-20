import app from 'flarum/common/app';
import MathRenSettingsPage from './components/MathRenSettingsPage';

// initialize settings modal
app.initializers.add('the-turk-mathren', (app) => {
  // Add the admin pane
  app.extensionData.for('the-turk-mathren').registerPage(MathRenSettingsPage);
});
