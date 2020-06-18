
goog.provide('Blockly.Blocks.math');  // Deprecated
goog.provide('Blockly.Constants.Math');

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

var path = window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/'));
path = path.substr(0, path.lastIndexOf("/"));

var col = '#B2272D';
Blockly.Blocks['comment'] = {
    init: function(){
        this.jsonInit({
                          "type": "math_number_property",
                          "message0": "%1 Comments: %2",
                          "args0": [
                              {
                                  "type": "field_plus",
                                  "name": "Plus"
                              },
                              {
                                  "type": "FieldTextInput",
                                  "name": "commentContent"
                              }
                          ],
                          "inputsInline": true,
                          "tooltip": "%{BKY_MATH_IS_TOOLTIP}",
                      });

        //
        //
        //
        // this.appendDummyInput()
        //     .appendField(new field_plus(), 'PLUS')
        //     .appendField('Comment: ')
        //     .appendField(new Blockly.FieldTextInput('insert comment content here'), 'commentContent')
        //     .appendField()
        //     .appendField(new Blockly.FieldImage(path + "/images/icons8-plus-64.png", 20, 20, "*", this.dosomething), "imageField");
        // this.setPreviousStatement(true, ['subject', 'predicate_object']);
        // this.setNextStatement(true, ['subject', 'predicate_object']);
        // this.setColour(col);

    }
}

dosomething = function(e){
    alert("clicked");
}

Blockly.Blocks['validator_example'] = {
    init: function() {
        // Remove all 'a' characters from the text input's value.
        var validator = function(newValue) {
            return newValue.replace(/\a/g, '');
        };

        var field = new Blockly.FieldTextInput('default');
        field.setValidator(validator);

        this.appendDummyInput().appendField(field);
    }
};

