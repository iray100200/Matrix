import { MXWinComponentBox } from './win-component-box';
import { MXWinLayoutBox }from './win-layout-box';
import { MXWinLeftNavigator, MXWinLeftNavigatorDirective } from './win-left-navigator';
import { MXWinPrimarySide, MXWinSecondarySide, MXWinSplitPane } from './win-split-pane';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { ScrollbarModule } from 'ngx-scrollbar';
import { MXWinScroller } from './win-scroller';
import { MXWinBaseLayout } from './win-base-layout';
import { MXWinPropertyPane } from './win-property-pane';
import { SampleComponentInterpreter } from './win-interpreter';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        ClarityModule,
        ScrollbarModule
    ],
    declarations: [
        MXWinComponentBox,
        MXWinLayoutBox,
        MXWinLeftNavigator,
        MXWinLeftNavigatorDirective,
        MXWinPrimarySide,
        MXWinSecondarySide,
        MXWinSplitPane,
        MXWinScroller,
        MXWinBaseLayout,
        MXWinPropertyPane,
        
    ],
    exports: [
        MXWinComponentBox,
        MXWinLayoutBox,
        MXWinLeftNavigator,
        MXWinLeftNavigatorDirective,
        MXWinPrimarySide,
        MXWinSecondarySide,
        MXWinSplitPane,
        MXWinSplitPane,
        MXWinScroller,
        MXWinBaseLayout,
        MXWinPropertyPane
    ]
})
export class MXCommonModule {}