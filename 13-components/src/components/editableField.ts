
class EditableFieldController {
  editMode = false;
  onUpdate;
  fieldValueCopy;
  fieldValue;
  fieldType;

  constructor() {

  }

  handleModeChange () {
    if (this.editMode) {
      this.onUpdate({value: this.fieldValue});
      this.fieldValueCopy = this.fieldValue;
    }
    this.editMode = !this.editMode;
  };

  reset () {
    this.fieldValue = this.fieldValueCopy;
  };

  $onInit () {
    // Make a copy of the initial value to be able to reset it later
    this.fieldValueCopy = this.fieldValue;

    // Set a default fieldType
    if (!this.fieldType) {
      this.fieldType = 'text';
    }
  };
}

export var  editableField = {
  templateUrl: 'src/components/editableField.html',
  controller: EditableFieldController,
  bindings: {
    fieldValue: '<',
    fieldType: '@?',
    onUpdate: '&'
  }
}