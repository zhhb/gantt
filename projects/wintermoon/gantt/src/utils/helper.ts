import { merge as mergeDeep } from 'lodash';
import * as dateFormat from 'date-fns/format';
import * as en from 'date-fns/locale/en';

/**
 *
 * @param document
 *
 * @returns {number}
 */
import { GanttOptions } from '../interface/gantt-options';

export function calcScrollBarHeight(document: Document): number {
  const outer                 = document.createElement('div');
  outer.style.visibility      = 'hidden';
  outer.style.height          = '100px';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);
  const noScroll       = outer.offsetHeight;
  outer.style.overflow = 'scroll';
  const inner          = document.createElement('div');
  inner.style.height   = '100%';
  outer.appendChild(inner);
  const withScroll = inner.offsetHeight;
  outer.parentNode.removeChild(outer);
  return (noScroll - withScroll);
}

/**
 *
 * @returns {GanttOptions}
 */
export function fetchDefaultGanttOptions(): GanttOptions {
  return {
    title                : {
      label: 'WinterMoon Gantt',
      html : false,
    },
    taskMapping          : {
      id       : 'id',
      start    : 'start',
      label    : 'label',
      duration : 'duration',
      progress : 'progress',
      type     : 'type',
      style    : 'style',
      collapsed: 'collapsed'
    },
    width                : 0,
    height               : 0,
    clientWidth          : 0,
    rowsHeight           : 0,
    allVisibleTasksHeight: 0,
    scroll               : {
      scrolling          : false,
      dragXMoveMultiplier: 3,
      dragYMoveMultiplier: 2,
      top                : 0,
      taskList           : {
        left  : 0,
        right : 0,
        top   : 0,
        bottom: 0
      },
      chart              : {
        left       : 0,
        right      : 0,
        percent    : 0,
        timePercent: 0,
        top        : 0,
        bottom     : 0,
        time       : 0,
        timeCenter : 0,
        dateTime   : {
          left : '',
          right: ''
        }
      }
    },
    scope                : {
      before: 1,
      after : 1
    },
    times                : {
      timeScale          : 60 * 1000,
      timeZoom           : 17,
      timePerPixel       : 0,
      firstDate          : null,
      firstTime          : null, // firstDate getTime()
      lastDate           : null,
      lastTime           : null, // last date getTime()
      firstTaskDate      : null,
      firstTaskTime      : 0,
      lastTaskDate       : null,
      lastTaskTime       : 0,
      totalViewDurationMs: 0,
      totalViewDurationPx: 0,
      stepDuration       : 'day', // hour, month
      steps              : []
    },
    row                  : {
      height: 24
    },
    maxRows              : 20,
    maxHeight            : 0,
    chart                : {
      grid    : {
        horizontal: {
          gap: 6
        }
      },
      progress: {
        width  : 20,
        height : 6,
        pattern: true,
        bar    : false
      },
      text    : {
        offset  : 0,
        xPadding: 10,
        display : true
      },
      expander: {
        type                   : 'chart',
        display                : false,
        displayIfTaskListHidden: true,
        offset                 : 4,
        size                   : 18
      }
    },
    taskList             : {
      display             : true,
      resizeAfterThreshold: true,
      widthThreshold      : 75,
      columns             : [
        {
          id   : 0,
          label: 'ID',
          value: 'id',
          width: 40
        }
      ],
      resizerWidth        : 0,
      percent             : 100,
      width               : 0,
      finalWidth          : 0,
      widthFromPercentage : 0,
      minWidth            : 18,
      expander            : {
        type       : 'task-list',
        size       : 16,
        columnWidth: 24,
        padding    : 16,
        margin     : 10,
        straight   : false
      }
    },
    calendar             : {
      hours      : [],
      days       : [],
      months     : [],
      workingDays: [ 1, 2, 3, 4, 5 ],
      gap        : 6,
      height     : 0,
      hour       : {
        height   : 20,
        display  : true,
        widths   : [],
        maxWidths: {},
        format   : {
          long(date) {
            return dateFormat(date, 'HH:mm', { locale: en });
          },
          medium(date) {
            return dateFormat(date, 'HH:mm', { locale: en });
          },
          short(date) {
            return dateFormat(date, 'HH', { locale: en });
          }
        }
      },
      day        : {
        height   : 20,
        display  : true,
        widths   : [],
        maxWidths: {},
        format   : {
          long(date) {
            return dateFormat(date, 'DD dddd', { locale: en });
          },
          medium(date) {
            return dateFormat(date, 'DD ddd', { locale: en });
          },
          short(date) {
            return dateFormat(date, 'DD', { locale: en });
          }
        }
      },
      month      : {
        height   : 20,
        display  : true,
        widths   : [],
        maxWidths: {},
        format   : {
          short(date) {
            return dateFormat(date, 'MM', { locale: en });
          },
          medium(date) {
            return dateFormat(date, 'MMM \'YY', { locale: en });
          },
          long(date) {
            return dateFormat(date, 'MMMM YYYY', { locale: en });
          }
        }
      }
    },
    locale               : {
      code               : en,
      Now                : 'Now',
      'X-Scale'          : 'Zoom-X',
      'Y-Scale'          : 'Zoom-Y',
      'Task list width'  : 'Task list',
      'Before/After'     : 'Expand',
      'Display task list': 'Show task list'
    }
  };
}

/**
 *
 * @param {GanttOptions} userOptions
 *
 * @returns {GanttOptions}
 */
export function mergeGanttOptions(userOptions: GanttOptions): GanttOptions {
  return mergeDeep(fetchDefaultGanttOptions(), userOptions);
}
