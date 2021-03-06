/*
jQWidgets v5.1.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxKnob extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['allowValueChangeOnClick','allowValueChangeOnDrag','allowValueChangeOnMouseWheel','changing','dragEndAngle','dragStartAngle','disabled','dial','endAngle','height','labels','marks','min','max','progressBar','pointer','pointerGrabAction','rotation','startAngle','spinner','style','step','snapToStep','value','width'];
        let options = {};
        for(let item in this.props) {
              if(item === 'settings') {
                  for(let itemTwo in this.props[item]) {
                      options[itemTwo] = this.props[item][itemTwo];
                      }
                } else {
                      if(properties.indexOf(item) !== -1) {
                        options[item] = this.props[item];
                      }
                }
          }
          return options;
      };
    createComponent(options) {
        if(!this.style) {
              for (let style in this.props.style) {
                  JQXLite(this.componentSelector).css(style, this.props.style[style]);
              }
        }
        if(this.props.className !== undefined) {
            let classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
              JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxKnob(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxKnob('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxKnob(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    allowValueChangeOnClick(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('allowValueChangeOnClick', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('allowValueChangeOnClick');
        }
    };
    allowValueChangeOnDrag(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('allowValueChangeOnDrag', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('allowValueChangeOnDrag');
        }
    };
    allowValueChangeOnMouseWheel(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('allowValueChangeOnMouseWheel', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('allowValueChangeOnMouseWheel');
        }
    };
    changing(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('changing', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('changing');
        }
    };
    dragEndAngle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('dragEndAngle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('dragEndAngle');
        }
    };
    dragStartAngle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('dragStartAngle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('dragStartAngle');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('disabled');
        }
    };
    dial(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('dial', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('dial');
        }
    };
    endAngle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('endAngle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('endAngle');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('height');
        }
    };
    labels(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('labels', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('labels');
        }
    };
    marks(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('marks', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('marks');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('min');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('max');
        }
    };
    progressBar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('progressBar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('progressBar');
        }
    };
    pointer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('pointer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('pointer');
        }
    };
    pointerGrabAction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('pointerGrabAction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('pointerGrabAction');
        }
    };
    rotation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('rotation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('rotation');
        }
    };
    startAngle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('startAngle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('startAngle');
        }
    };
    spinner(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('spinner', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('spinner');
        }
    };
    style(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('style', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('style');
        }
    };
    step(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('step', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('step');
        }
    };
    snapToStep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('snapToStep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('snapToStep');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxKnob('destroy');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxKnob('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxKnob('val');
        }
    };

    render() {
        let id = 'jqxKnob' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

