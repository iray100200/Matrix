import { MXWinComponentBox } from './win-component-box';
import { MXWinLayoutBox }from './win-layout-box';
import { MXWinLeftNavigator, MXWinLeftNavigatorDirective } from './win-left-navigator';
import { MXWinPrimarySide, MXWinSecondarySide, MXWinSplitPane } from './win-split-pane';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [
        MXWinComponentBox,
        MXWinLayoutBox,
        MXWinLeftNavigator,
        MXWinLeftNavigatorDirective,
        MXWinPrimarySide,
        MXWinSecondarySide,
        MXWinSplitPane
    ],
    exports: [
        MXWinComponentBox,
        MXWinLayoutBox,
        MXWinLeftNavigator,
        MXWinLeftNavigatorDirective,
        MXWinPrimarySide,
        MXWinSecondarySide,
        MXWinSplitPane
    ]
})
export class MXCommonModule {}