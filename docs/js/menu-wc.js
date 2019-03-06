'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">winter moon gantt document</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/GanttModule.html" data-type="entity-link">GanttModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GanttModule-2fe0ab2bb92118774a3b347c2db1c134"' : 'data-target="#xs-components-links-module-GanttModule-2fe0ab2bb92118774a3b347c2db1c134"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GanttModule-2fe0ab2bb92118774a3b347c2db1c134"' :
                                            'id="xs-components-links-module-GanttModule-2fe0ab2bb92118774a3b347c2db1c134"' }>
                                            <li class="link">
                                                <a href="components/CalendarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalendarRowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarRowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DaysHighlightComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DaysHighlightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DependencyLinesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DependencyLinesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpanderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpanderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GanttComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GanttComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MilestoneComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MilestoneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskListHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskListHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskListItemColumnComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskListItemColumnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskListItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GanttService.html" data-type="entity-link">GanttService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/GanttOptions.html" data-type="entity-link">GanttOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GanttOptionsCalendar.html" data-type="entity-link">GanttOptionsCalendar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GanttOptionsCalendarTimeInterval.html" data-type="entity-link">GanttOptionsCalendarTimeInterval</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GanttOptionsChart.html" data-type="entity-link">GanttOptionsChart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GanttOptionsHeader.html" data-type="entity-link">GanttOptionsHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GanttOptionsLocale.html" data-type="entity-link">GanttOptionsLocale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GanttOptionsScroll.html" data-type="entity-link">GanttOptionsScroll</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GanttOptionsTaskList.html" data-type="entity-link">GanttOptionsTaskList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GanttOptionsTaskMapping.html" data-type="entity-link">GanttOptionsTaskMapping</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GanttOptionsTimes.html" data-type="entity-link">GanttOptionsTimes</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});