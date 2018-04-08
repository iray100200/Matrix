import { MXWinComponentBox } from './win-component-box';
import { MXWinLayoutBox }from './win-layout-box';
import { MXWinLeftNavigator, MXWinLeftNavigatorDirective } from './win-left-navigator';
import { MXWinPrimarySide, MXWinSecondarySide, MXWinSplitPane } from './win-split-pane';
import { CommonLayout, Guidance } from './win-layouts';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        ClarityModule
    ],
    declarations: [
        MXWinComponentBox,
        MXWinLayoutBox,
        MXWinLeftNavigator,
        MXWinLeftNavigatorDirective,
        MXWinPrimarySide,
        MXWinSecondarySide,
        MXWinSplitPane,
        CommonLayout,
        Guidance
    ],
    exports: [
        MXWinComponentBox,
        MXWinLayoutBox,
        MXWinLeftNavigator,
        MXWinLeftNavigatorDirective,
        MXWinPrimarySide,
        MXWinSecondarySide,
        MXWinSplitPane,
        CommonLayout,
        Guidance
    ]
})
export class MXCommonModule {}