import { extend } from 'flarum/extend';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';
import MathRenSettingsPage from './components/MathRenSettingsPage';

export default function addSettingsPane() {
  // create the route
  app.routes['the-turk-mathren'] = {
    path: '/the-turk/mathren',
    component: MathRenSettingsPage.component()
  };

  // bind the route we created to the three dots settings button
  app.extensionSettings['the-turk-mathren'] = () => m.route(app.route('the-turk-mathren'));

  extend(AdminNav.prototype, 'items', items => {
    // add the MathRen tab to the admin navigation menu
    items.add('the-turk-mathren', AdminLinkButton.component({
      href: app.route('the-turk-mathren'),
      icon: 'fas fa-square-root-alt',
      children: app.translator.trans('the-turk-mathren.admin.settings.title'),
      description: app.translator.trans('the-turk-mathren.admin.settings.description')
    }));
  });
}
