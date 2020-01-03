import app from 'flarum/app';
import MathRenSettingsModal from "./modals/MathRenSettingsModal";

// initialize settings modal
app.initializers.add('the-turk-mathren', () => {
    app.extensionSettings['the-turk-mathren'] = () => app.modal.show(new MathRenSettingsModal());
});